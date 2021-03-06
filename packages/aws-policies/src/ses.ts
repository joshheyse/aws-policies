
export enum ses {
 All = 'ses:*',
 Create = 'ses:Create*',
 Delete = 'ses:Delete*',
 Get = 'ses:Get*',
 List = 'ses:List*',
 Put = 'ses:Put*',
 Send = 'ses:Send*',
 Update = 'ses:Update*',
 Describe = 'ses:Describe*',
 Set = 'ses:Set*',
 Verify = 'ses:Verify*',
 CreateConfigurationSet = 'ses:CreateConfigurationSet',
 CreateConfigurationSetEventDestination = 'ses:CreateConfigurationSetEventDestination',
 CreateDedicatedIpPool = 'ses:CreateDedicatedIpPool',
 CreateDeliverabilityTestReport = 'ses:CreateDeliverabilityTestReport',
 CreateEmailIdentity = 'ses:CreateEmailIdentity',
 DeleteConfigurationSet = 'ses:DeleteConfigurationSet',
 DeleteConfigurationSetEventDestination = 'ses:DeleteConfigurationSetEventDestination',
 DeleteDedicatedIpPool = 'ses:DeleteDedicatedIpPool',
 DeleteEmailIdentity = 'ses:DeleteEmailIdentity',
 GetAccount = 'ses:GetAccount',
 GetBlacklistReports = 'ses:GetBlacklistReports',
 GetConfigurationSet = 'ses:GetConfigurationSet',
 GetConfigurationSetEventDestinations = 'ses:GetConfigurationSetEventDestinations',
 GetDedicatedIp = 'ses:GetDedicatedIp',
 GetDedicatedIps = 'ses:GetDedicatedIps',
 GetDeliverabilityDashboardOptions = 'ses:GetDeliverabilityDashboardOptions',
 GetDeliverabilityTestReport = 'ses:GetDeliverabilityTestReport',
 GetDomainStatisticsReport = 'ses:GetDomainStatisticsReport',
 GetEmailIdentity = 'ses:GetEmailIdentity',
 ListConfigurationSets = 'ses:ListConfigurationSets',
 ListDedicatedIpPools = 'ses:ListDedicatedIpPools',
 ListDeliverabilityTestReports = 'ses:ListDeliverabilityTestReports',
 ListEmailIdentities = 'ses:ListEmailIdentities',
 ListTagsForResource = 'ses:ListTagsForResource',
 PutAccountDedicatedIpWarmupAttributes = 'ses:PutAccountDedicatedIpWarmupAttributes',
 PutAccountSendingAttributes = 'ses:PutAccountSendingAttributes',
 PutConfigurationSetDeliveryOptions = 'ses:PutConfigurationSetDeliveryOptions',
 PutConfigurationSetReputationOptions = 'ses:PutConfigurationSetReputationOptions',
 PutConfigurationSetSendingOptions = 'ses:PutConfigurationSetSendingOptions',
 PutConfigurationSetTrackingOptions = 'ses:PutConfigurationSetTrackingOptions',
 PutDedicatedIpInPool = 'ses:PutDedicatedIpInPool',
 PutDedicatedIpWarmupAttributes = 'ses:PutDedicatedIpWarmupAttributes',
 PutDeliverabilityDashboardOption = 'ses:PutDeliverabilityDashboardOption',
 PutEmailIdentityDkimAttributes = 'ses:PutEmailIdentityDkimAttributes',
 PutEmailIdentityFeedbackAttributes = 'ses:PutEmailIdentityFeedbackAttributes',
 PutEmailIdentityMailFromAttributes = 'ses:PutEmailIdentityMailFromAttributes',
 SendEmail = 'ses:SendEmail',
 TagResource = 'ses:TagResource',
 UntagResource = 'ses:UntagResource',
 UpdateConfigurationSetEventDestination = 'ses:UpdateConfigurationSetEventDestination',
 CloneReceiptRuleSet = 'ses:CloneReceiptRuleSet',
 CreateConfigurationSetTrackingOptions = 'ses:CreateConfigurationSetTrackingOptions',
 CreateCustomVerificationEmailTemplate = 'ses:CreateCustomVerificationEmailTemplate',
 CreateReceiptFilter = 'ses:CreateReceiptFilter',
 CreateReceiptRule = 'ses:CreateReceiptRule',
 CreateReceiptRuleSet = 'ses:CreateReceiptRuleSet',
 CreateTemplate = 'ses:CreateTemplate',
 DeleteConfigurationSetTrackingOptions = 'ses:DeleteConfigurationSetTrackingOptions',
 DeleteCustomVerificationEmailTemplate = 'ses:DeleteCustomVerificationEmailTemplate',
 DeleteIdentity = 'ses:DeleteIdentity',
 DeleteIdentityPolicy = 'ses:DeleteIdentityPolicy',
 DeleteReceiptFilter = 'ses:DeleteReceiptFilter',
 DeleteReceiptRule = 'ses:DeleteReceiptRule',
 DeleteReceiptRuleSet = 'ses:DeleteReceiptRuleSet',
 DeleteTemplate = 'ses:DeleteTemplate',
 DeleteVerifiedEmailAddress = 'ses:DeleteVerifiedEmailAddress',
 DescribeActiveReceiptRuleSet = 'ses:DescribeActiveReceiptRuleSet',
 DescribeConfigurationSet = 'ses:DescribeConfigurationSet',
 DescribeReceiptRule = 'ses:DescribeReceiptRule',
 DescribeReceiptRuleSet = 'ses:DescribeReceiptRuleSet',
 GetAccountSendingEnabled = 'ses:GetAccountSendingEnabled',
 GetCustomVerificationEmailTemplate = 'ses:GetCustomVerificationEmailTemplate',
 GetIdentityDkimAttributes = 'ses:GetIdentityDkimAttributes',
 GetIdentityMailFromDomainAttributes = 'ses:GetIdentityMailFromDomainAttributes',
 GetIdentityNotificationAttributes = 'ses:GetIdentityNotificationAttributes',
 GetIdentityPolicies = 'ses:GetIdentityPolicies',
 GetIdentityVerificationAttributes = 'ses:GetIdentityVerificationAttributes',
 GetSendQuota = 'ses:GetSendQuota',
 GetSendStatistics = 'ses:GetSendStatistics',
 GetTemplate = 'ses:GetTemplate',
 ListCustomVerificationEmailTemplates = 'ses:ListCustomVerificationEmailTemplates',
 ListIdentities = 'ses:ListIdentities',
 ListIdentityPolicies = 'ses:ListIdentityPolicies',
 ListReceiptFilters = 'ses:ListReceiptFilters',
 ListReceiptRuleSets = 'ses:ListReceiptRuleSets',
 ListTemplates = 'ses:ListTemplates',
 ListVerifiedEmailAddresses = 'ses:ListVerifiedEmailAddresses',
 PutIdentityPolicy = 'ses:PutIdentityPolicy',
 ReorderReceiptRuleSet = 'ses:ReorderReceiptRuleSet',
 SendBounce = 'ses:SendBounce',
 SendBulkTemplatedEmail = 'ses:SendBulkTemplatedEmail',
 SendCustomVerificationEmail = 'ses:SendCustomVerificationEmail',
 SendRawEmail = 'ses:SendRawEmail',
 SendTemplatedEmail = 'ses:SendTemplatedEmail',
 SetActiveReceiptRuleSet = 'ses:SetActiveReceiptRuleSet',
 SetIdentityDkimEnabled = 'ses:SetIdentityDkimEnabled',
 SetIdentityFeedbackForwardingEnabled = 'ses:SetIdentityFeedbackForwardingEnabled',
 SetIdentityHeadersInNotificationsEnabled = 'ses:SetIdentityHeadersInNotificationsEnabled',
 SetIdentityMailFromDomain = 'ses:SetIdentityMailFromDomain',
 SetIdentityNotificationTopic = 'ses:SetIdentityNotificationTopic',
 SetReceiptRulePosition = 'ses:SetReceiptRulePosition',
 TestRenderTemplate = 'ses:TestRenderTemplate',
 UpdateAccountSendingEnabled = 'ses:UpdateAccountSendingEnabled',
 UpdateConfigurationSetReputationMetricsEnabled = 'ses:UpdateConfigurationSetReputationMetricsEnabled',
 UpdateConfigurationSetSendingEnabled = 'ses:UpdateConfigurationSetSendingEnabled',
 UpdateConfigurationSetTrackingOptions = 'ses:UpdateConfigurationSetTrackingOptions',
 UpdateCustomVerificationEmailTemplate = 'ses:UpdateCustomVerificationEmailTemplate',
 UpdateReceiptRule = 'ses:UpdateReceiptRule',
 UpdateTemplate = 'ses:UpdateTemplate',
 VerifyDomainDkim = 'ses:VerifyDomainDkim',
 VerifyDomainIdentity = 'ses:VerifyDomainIdentity',
 VerifyEmailAddress = 'ses:VerifyEmailAddress',
 VerifyEmailIdentity = 'ses:VerifyEmailIdentity',

}