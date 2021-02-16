import fetch from 'node-fetch'
import ejs from 'ejs';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';

export type Service = {
  StringPrefix: string;
  Actions: any[];
  ARNFormat: string;
  ARNRegex: string;
  conditionKeys: any[]
};

const ENUM_TEMPLATE = `
export enum <%= name %> {
<% actions.forEach(function(a) { %> <%= a.name %> = '<%= prefix %>:<%= a.value %>',
<% }) %>
}`;

const INDEX_TEMPLATE = `
<% services.forEach(function(s) { %> export * from './<%= s.name %>';
<% }) %>
`

async function dirExists(dir: string): Promise<boolean> {
  try {
    await fs.promises.stat(dir);
    return true;
  }
  catch {
    return false;
  }
}

function getFirstWord(str: string): string {
  let i: number;
  for(i = 1; i < str.length; i++) {
    if(str[i] == str[i].toUpperCase()) {
      break;
    }
  }
  return str.substr(0, i);
}

async function main() {

  const enum_template = ejs.compile(ENUM_TEMPLATE);
  const index_template = ejs.compile(INDEX_TEMPLATE);

  const outDir = path.join('../aws-policies/src');

  if(!dirExists(outDir)) {
    await fs.promises.mkdir(outDir);
  }
  else {
    await fs.promises.rmdir(outDir, {recursive: true});
    await fs.promises.mkdir(outDir);
  }

  const response = await fetch('https://awspolicygen.s3.amazonaws.com/js/policies.js');
  if(!response.ok) {
    console.error(response.status, response.statusText);
    process.exit(1);
  }

  const text = await response.text()
  const json = JSON.parse(text.substr(text.indexOf('=') + 1));
  const serviceMap = json.serviceMap as {[key: string]: Service};

  const groups =_.groupBy(serviceMap, 'StringPrefix');
  const services = _.sortBy(_.map(_.values(groups), (s) => {
    const uniqActions: string[] = _.uniq(_.flatten(_.map(s, 'Actions')))
    const groups = _.groupBy(uniqActions, a => getFirstWord(a));

    const wildcardActions = _.compact(_.map(groups, (v, k) => {
      if(v.length > 1) {
        return {name: k, value: `${k}*`};
      }
      return null;
    }));

    const actions = [
      {name: 'All', value: '*'},
      ...wildcardActions,
      ...(_.map(uniqActions, a => ({name: a, value: a})))
    ];

    return {
      name: s[0].StringPrefix.replace(/-/g, '_'),
      prefix: s[0].StringPrefix,
      actions
    };
  }), _.identity);

  Promise.all(_.map(services, async (v) => {
    console.log(v);
    const code = enum_template(v);
    await fs.promises.writeFile(path.join(outDir, `${v.name}.ts`), code);
  }));


  const code = index_template({services});
  await fs.promises.writeFile(path.join(outDir, 'index.ts'), code);

}

main();
