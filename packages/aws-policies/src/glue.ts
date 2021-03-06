
export enum glue {
 All = 'glue:*',
 Batch = 'glue:Batch*',
 Create = 'glue:Create*',
 Delete = 'glue:Delete*',
 Get = 'glue:Get*',
 List = 'glue:List*',
 Put = 'glue:Put*',
 Start = 'glue:Start*',
 Stop = 'glue:Stop*',
 Update = 'glue:Update*',
 BatchCreatePartition = 'glue:BatchCreatePartition',
 BatchDeleteConnection = 'glue:BatchDeleteConnection',
 BatchDeletePartition = 'glue:BatchDeletePartition',
 BatchDeleteTable = 'glue:BatchDeleteTable',
 BatchDeleteTableVersion = 'glue:BatchDeleteTableVersion',
 BatchGetCrawlers = 'glue:BatchGetCrawlers',
 BatchGetDevEndpoints = 'glue:BatchGetDevEndpoints',
 BatchGetJobs = 'glue:BatchGetJobs',
 BatchGetPartition = 'glue:BatchGetPartition',
 BatchGetTriggers = 'glue:BatchGetTriggers',
 BatchGetWorkflows = 'glue:BatchGetWorkflows',
 BatchStopJobRun = 'glue:BatchStopJobRun',
 CancelMLTaskRun = 'glue:CancelMLTaskRun',
 CheckSchemaVersionValidity = 'glue:CheckSchemaVersionValidity',
 CreateClassifier = 'glue:CreateClassifier',
 CreateConnection = 'glue:CreateConnection',
 CreateCrawler = 'glue:CreateCrawler',
 CreateDatabase = 'glue:CreateDatabase',
 CreateDevEndpoint = 'glue:CreateDevEndpoint',
 CreateJob = 'glue:CreateJob',
 CreateMLTransform = 'glue:CreateMLTransform',
 CreatePartition = 'glue:CreatePartition',
 CreateRegistry = 'glue:CreateRegistry',
 CreateSchema = 'glue:CreateSchema',
 CreateScript = 'glue:CreateScript',
 CreateSecurityConfiguration = 'glue:CreateSecurityConfiguration',
 CreateTable = 'glue:CreateTable',
 CreateTrigger = 'glue:CreateTrigger',
 CreateUserDefinedFunction = 'glue:CreateUserDefinedFunction',
 CreateWorkflow = 'glue:CreateWorkflow',
 DeleteClassifier = 'glue:DeleteClassifier',
 DeleteConnection = 'glue:DeleteConnection',
 DeleteCrawler = 'glue:DeleteCrawler',
 DeleteDatabase = 'glue:DeleteDatabase',
 DeleteDevEndpoint = 'glue:DeleteDevEndpoint',
 DeleteJob = 'glue:DeleteJob',
 DeleteMLTransform = 'glue:DeleteMLTransform',
 DeletePartition = 'glue:DeletePartition',
 DeleteRegistry = 'glue:DeleteRegistry',
 DeleteResourcePolicy = 'glue:DeleteResourcePolicy',
 DeleteSchema = 'glue:DeleteSchema',
 DeleteSchemaVersions = 'glue:DeleteSchemaVersions',
 DeleteSecurityConfiguration = 'glue:DeleteSecurityConfiguration',
 DeleteTable = 'glue:DeleteTable',
 DeleteTableVersion = 'glue:DeleteTableVersion',
 DeleteTrigger = 'glue:DeleteTrigger',
 DeleteUserDefinedFunction = 'glue:DeleteUserDefinedFunction',
 DeleteWorkflow = 'glue:DeleteWorkflow',
 GetCatalogImportStatus = 'glue:GetCatalogImportStatus',
 GetClassifier = 'glue:GetClassifier',
 GetClassifiers = 'glue:GetClassifiers',
 GetConnection = 'glue:GetConnection',
 GetConnections = 'glue:GetConnections',
 GetCrawler = 'glue:GetCrawler',
 GetCrawlerMetrics = 'glue:GetCrawlerMetrics',
 GetCrawlers = 'glue:GetCrawlers',
 GetDataCatalogEncryptionSettings = 'glue:GetDataCatalogEncryptionSettings',
 GetDatabase = 'glue:GetDatabase',
 GetDatabases = 'glue:GetDatabases',
 GetDataflowGraph = 'glue:GetDataflowGraph',
 GetDevEndpoint = 'glue:GetDevEndpoint',
 GetDevEndpoints = 'glue:GetDevEndpoints',
 GetJob = 'glue:GetJob',
 GetJobBookmark = 'glue:GetJobBookmark',
 GetJobRun = 'glue:GetJobRun',
 GetJobRuns = 'glue:GetJobRuns',
 GetJobs = 'glue:GetJobs',
 GetMLTaskRun = 'glue:GetMLTaskRun',
 GetMLTaskRuns = 'glue:GetMLTaskRuns',
 GetMLTransform = 'glue:GetMLTransform',
 GetMLTransforms = 'glue:GetMLTransforms',
 GetMapping = 'glue:GetMapping',
 GetPartition = 'glue:GetPartition',
 GetPartitions = 'glue:GetPartitions',
 GetPlan = 'glue:GetPlan',
 GetRegistry = 'glue:GetRegistry',
 GetResourcePolicies = 'glue:GetResourcePolicies',
 GetResourcePolicy = 'glue:GetResourcePolicy',
 GetSchema = 'glue:GetSchema',
 GetSchemaByDefinition = 'glue:GetSchemaByDefinition',
 GetSchemaVersion = 'glue:GetSchemaVersion',
 GetSchemaVersionsDiff = 'glue:GetSchemaVersionsDiff',
 GetSecurityConfiguration = 'glue:GetSecurityConfiguration',
 GetSecurityConfigurations = 'glue:GetSecurityConfigurations',
 GetTable = 'glue:GetTable',
 GetTableVersion = 'glue:GetTableVersion',
 GetTableVersions = 'glue:GetTableVersions',
 GetTables = 'glue:GetTables',
 GetTags = 'glue:GetTags',
 GetTrigger = 'glue:GetTrigger',
 GetTriggers = 'glue:GetTriggers',
 GetUserDefinedFunction = 'glue:GetUserDefinedFunction',
 GetUserDefinedFunctions = 'glue:GetUserDefinedFunctions',
 GetWorkflow = 'glue:GetWorkflow',
 GetWorkflowRun = 'glue:GetWorkflowRun',
 GetWorkflowRunProperties = 'glue:GetWorkflowRunProperties',
 GetWorkflowRuns = 'glue:GetWorkflowRuns',
 ImportCatalogToGlue = 'glue:ImportCatalogToGlue',
 ListCrawlers = 'glue:ListCrawlers',
 ListDevEndpoints = 'glue:ListDevEndpoints',
 ListJobs = 'glue:ListJobs',
 ListMLTransforms = 'glue:ListMLTransforms',
 ListRegistries = 'glue:ListRegistries',
 ListSchemaVersions = 'glue:ListSchemaVersions',
 ListSchemas = 'glue:ListSchemas',
 ListTriggers = 'glue:ListTriggers',
 ListWorkflows = 'glue:ListWorkflows',
 PutDataCatalogEncryptionSettings = 'glue:PutDataCatalogEncryptionSettings',
 PutResourcePolicy = 'glue:PutResourcePolicy',
 PutSchemaVersionMetadata = 'glue:PutSchemaVersionMetadata',
 PutWorkflowRunProperties = 'glue:PutWorkflowRunProperties',
 QuerySchemaVersionMetadata = 'glue:QuerySchemaVersionMetadata',
 RegisterSchemaVersion = 'glue:RegisterSchemaVersion',
 RemoveSchemaVersionMetadata = 'glue:RemoveSchemaVersionMetadata',
 ResetJobBookmark = 'glue:ResetJobBookmark',
 SearchTables = 'glue:SearchTables',
 StartCrawler = 'glue:StartCrawler',
 StartCrawlerSchedule = 'glue:StartCrawlerSchedule',
 StartExportLabelsTaskRun = 'glue:StartExportLabelsTaskRun',
 StartImportLabelsTaskRun = 'glue:StartImportLabelsTaskRun',
 StartJobRun = 'glue:StartJobRun',
 StartMLEvaluationTaskRun = 'glue:StartMLEvaluationTaskRun',
 StartMLLabelingSetGenerationTaskRun = 'glue:StartMLLabelingSetGenerationTaskRun',
 StartTrigger = 'glue:StartTrigger',
 StartWorkflowRun = 'glue:StartWorkflowRun',
 StopCrawler = 'glue:StopCrawler',
 StopCrawlerSchedule = 'glue:StopCrawlerSchedule',
 StopTrigger = 'glue:StopTrigger',
 TagResource = 'glue:TagResource',
 UntagResource = 'glue:UntagResource',
 UpdateClassifier = 'glue:UpdateClassifier',
 UpdateConnection = 'glue:UpdateConnection',
 UpdateCrawler = 'glue:UpdateCrawler',
 UpdateCrawlerSchedule = 'glue:UpdateCrawlerSchedule',
 UpdateDatabase = 'glue:UpdateDatabase',
 UpdateDevEndpoint = 'glue:UpdateDevEndpoint',
 UpdateJob = 'glue:UpdateJob',
 UpdateMLTransform = 'glue:UpdateMLTransform',
 UpdatePartition = 'glue:UpdatePartition',
 UpdateRegistry = 'glue:UpdateRegistry',
 UpdateSchema = 'glue:UpdateSchema',
 UpdateTable = 'glue:UpdateTable',
 UpdateTrigger = 'glue:UpdateTrigger',
 UpdateUserDefinedFunction = 'glue:UpdateUserDefinedFunction',
 UpdateWorkflow = 'glue:UpdateWorkflow',
 UseMLTransforms = 'glue:UseMLTransforms',

}