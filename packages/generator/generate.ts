import fetch from 'node-fetch'
import ejs from 'ejs';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';

type Service = {
  StringPrefix: string;
  Actions: any[];
  ARNFormat: string;
  ARNRegex: string;
  conditionKeys: any[]
};

const ENUM_TEMPLATE = `
export enum <%= name %> {
<% actions.forEach(function(a) { %> <%= a %> = '<%= prefix %>:<%= a %>',
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

async function main() {

  const enum_template = ejs.compile(ENUM_TEMPLATE);
  const index_template = ejs.compile(INDEX_TEMPLATE);

  const outDir = path.join(__dirname, '../aws_policies/src');

  if(!dirExists(outDir)) {
    await fs.promises.mkdir(outDir);
  }
  else {
    await fs.promises.rmdir(outDir);
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
    return {
      name: s[0].StringPrefix.replace(/-/g, '_'),
      prefix: s[0].StringPrefix,
      actions: _.uniq(_.flatten(_.map(s, 'Actions')))
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
