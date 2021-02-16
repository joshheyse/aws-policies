
export enum cognito_idp {
 All = 'cognito-idp:*',
 Admin = 'cognito-idp:Admin*',
 Confirm = 'cognito-idp:Confirm*',
 Create = 'cognito-idp:Create*',
 Delete = 'cognito-idp:Delete*',
 Describe = 'cognito-idp:Describe*',
 Get = 'cognito-idp:Get*',
 List = 'cognito-idp:List*',
 Set = 'cognito-idp:Set*',
 Update = 'cognito-idp:Update*',
 Verify = 'cognito-idp:Verify*',
 AddCustomAttributes = 'cognito-idp:AddCustomAttributes',
 AdminAddUserToGroup = 'cognito-idp:AdminAddUserToGroup',
 AdminConfirmSignUp = 'cognito-idp:AdminConfirmSignUp',
 AdminCreateUser = 'cognito-idp:AdminCreateUser',
 AdminDeleteUser = 'cognito-idp:AdminDeleteUser',
 AdminDeleteUserAttributes = 'cognito-idp:AdminDeleteUserAttributes',
 AdminDisableProviderForUser = 'cognito-idp:AdminDisableProviderForUser',
 AdminDisableUser = 'cognito-idp:AdminDisableUser',
 AdminEnableUser = 'cognito-idp:AdminEnableUser',
 AdminForgetDevice = 'cognito-idp:AdminForgetDevice',
 AdminGetDevice = 'cognito-idp:AdminGetDevice',
 AdminGetUser = 'cognito-idp:AdminGetUser',
 AdminInitiateAuth = 'cognito-idp:AdminInitiateAuth',
 AdminLinkProviderForUser = 'cognito-idp:AdminLinkProviderForUser',
 AdminListDevices = 'cognito-idp:AdminListDevices',
 AdminListGroupsForUser = 'cognito-idp:AdminListGroupsForUser',
 AdminListUserAuthEvents = 'cognito-idp:AdminListUserAuthEvents',
 AdminRemoveUserFromGroup = 'cognito-idp:AdminRemoveUserFromGroup',
 AdminResetUserPassword = 'cognito-idp:AdminResetUserPassword',
 AdminRespondToAuthChallenge = 'cognito-idp:AdminRespondToAuthChallenge',
 AdminSetUserMFAPreference = 'cognito-idp:AdminSetUserMFAPreference',
 AdminSetUserPassword = 'cognito-idp:AdminSetUserPassword',
 AdminSetUserSettings = 'cognito-idp:AdminSetUserSettings',
 AdminUpdateAuthEventFeedback = 'cognito-idp:AdminUpdateAuthEventFeedback',
 AdminUpdateDeviceStatus = 'cognito-idp:AdminUpdateDeviceStatus',
 AdminUpdateUserAttributes = 'cognito-idp:AdminUpdateUserAttributes',
 AdminUserGlobalSignOut = 'cognito-idp:AdminUserGlobalSignOut',
 AssociateSoftwareToken = 'cognito-idp:AssociateSoftwareToken',
 ChangePassword = 'cognito-idp:ChangePassword',
 ConfirmDevice = 'cognito-idp:ConfirmDevice',
 ConfirmForgotPassword = 'cognito-idp:ConfirmForgotPassword',
 ConfirmSignUp = 'cognito-idp:ConfirmSignUp',
 CreateGroup = 'cognito-idp:CreateGroup',
 CreateIdentityProvider = 'cognito-idp:CreateIdentityProvider',
 CreateResourceServer = 'cognito-idp:CreateResourceServer',
 CreateUserImportJob = 'cognito-idp:CreateUserImportJob',
 CreateUserPool = 'cognito-idp:CreateUserPool',
 CreateUserPoolClient = 'cognito-idp:CreateUserPoolClient',
 CreateUserPoolDomain = 'cognito-idp:CreateUserPoolDomain',
 DeleteGroup = 'cognito-idp:DeleteGroup',
 DeleteIdentityProvider = 'cognito-idp:DeleteIdentityProvider',
 DeleteResourceServer = 'cognito-idp:DeleteResourceServer',
 DeleteUser = 'cognito-idp:DeleteUser',
 DeleteUserAttributes = 'cognito-idp:DeleteUserAttributes',
 DeleteUserPool = 'cognito-idp:DeleteUserPool',
 DeleteUserPoolClient = 'cognito-idp:DeleteUserPoolClient',
 DeleteUserPoolDomain = 'cognito-idp:DeleteUserPoolDomain',
 DescribeIdentityProvider = 'cognito-idp:DescribeIdentityProvider',
 DescribeResourceServer = 'cognito-idp:DescribeResourceServer',
 DescribeRiskConfiguration = 'cognito-idp:DescribeRiskConfiguration',
 DescribeUserImportJob = 'cognito-idp:DescribeUserImportJob',
 DescribeUserPool = 'cognito-idp:DescribeUserPool',
 DescribeUserPoolClient = 'cognito-idp:DescribeUserPoolClient',
 DescribeUserPoolDomain = 'cognito-idp:DescribeUserPoolDomain',
 ForgetDevice = 'cognito-idp:ForgetDevice',
 ForgotPassword = 'cognito-idp:ForgotPassword',
 GetCSVHeader = 'cognito-idp:GetCSVHeader',
 GetDevice = 'cognito-idp:GetDevice',
 GetGroup = 'cognito-idp:GetGroup',
 GetIdentityProviderByIdentifier = 'cognito-idp:GetIdentityProviderByIdentifier',
 GetSigningCertificate = 'cognito-idp:GetSigningCertificate',
 GetUICustomization = 'cognito-idp:GetUICustomization',
 GetUser = 'cognito-idp:GetUser',
 GetUserAttributeVerificationCode = 'cognito-idp:GetUserAttributeVerificationCode',
 GetUserPoolMfaConfig = 'cognito-idp:GetUserPoolMfaConfig',
 GlobalSignOut = 'cognito-idp:GlobalSignOut',
 InitiateAuth = 'cognito-idp:InitiateAuth',
 ListDevices = 'cognito-idp:ListDevices',
 ListGroups = 'cognito-idp:ListGroups',
 ListIdentityProviders = 'cognito-idp:ListIdentityProviders',
 ListResourceServers = 'cognito-idp:ListResourceServers',
 ListTagsForResource = 'cognito-idp:ListTagsForResource',
 ListUserImportJobs = 'cognito-idp:ListUserImportJobs',
 ListUserPoolClients = 'cognito-idp:ListUserPoolClients',
 ListUserPools = 'cognito-idp:ListUserPools',
 ListUsers = 'cognito-idp:ListUsers',
 ListUsersInGroup = 'cognito-idp:ListUsersInGroup',
 ResendConfirmationCode = 'cognito-idp:ResendConfirmationCode',
 RespondToAuthChallenge = 'cognito-idp:RespondToAuthChallenge',
 SetRiskConfiguration = 'cognito-idp:SetRiskConfiguration',
 SetUICustomization = 'cognito-idp:SetUICustomization',
 SetUserMFAPreference = 'cognito-idp:SetUserMFAPreference',
 SetUserPoolMfaConfig = 'cognito-idp:SetUserPoolMfaConfig',
 SetUserSettings = 'cognito-idp:SetUserSettings',
 SignUp = 'cognito-idp:SignUp',
 StartUserImportJob = 'cognito-idp:StartUserImportJob',
 StopUserImportJob = 'cognito-idp:StopUserImportJob',
 TagResource = 'cognito-idp:TagResource',
 UntagResource = 'cognito-idp:UntagResource',
 UpdateAuthEventFeedback = 'cognito-idp:UpdateAuthEventFeedback',
 UpdateDeviceStatus = 'cognito-idp:UpdateDeviceStatus',
 UpdateGroup = 'cognito-idp:UpdateGroup',
 UpdateIdentityProvider = 'cognito-idp:UpdateIdentityProvider',
 UpdateResourceServer = 'cognito-idp:UpdateResourceServer',
 UpdateUserAttributes = 'cognito-idp:UpdateUserAttributes',
 UpdateUserPool = 'cognito-idp:UpdateUserPool',
 UpdateUserPoolClient = 'cognito-idp:UpdateUserPoolClient',
 UpdateUserPoolDomain = 'cognito-idp:UpdateUserPoolDomain',
 VerifySoftwareToken = 'cognito-idp:VerifySoftwareToken',
 VerifyUserAttribute = 'cognito-idp:VerifyUserAttribute',

}