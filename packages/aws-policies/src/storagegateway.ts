
export enum storagegateway {
 ActivateGateway = 'storagegateway:ActivateGateway',
 AddCache = 'storagegateway:AddCache',
 AddTagsToResource = 'storagegateway:AddTagsToResource',
 AddUploadBuffer = 'storagegateway:AddUploadBuffer',
 AddWorkingStorage = 'storagegateway:AddWorkingStorage',
 AssignTapePool = 'storagegateway:AssignTapePool',
 AttachVolume = 'storagegateway:AttachVolume',
 BypassGovernanceRetention = 'storagegateway:BypassGovernanceRetention',
 CancelArchival = 'storagegateway:CancelArchival',
 CancelRetrieval = 'storagegateway:CancelRetrieval',
 CreateCachediSCSIVolume = 'storagegateway:CreateCachediSCSIVolume',
 CreateNFSFileShare = 'storagegateway:CreateNFSFileShare',
 CreateSMBFileShare = 'storagegateway:CreateSMBFileShare',
 CreateSnapshot = 'storagegateway:CreateSnapshot',
 CreateSnapshotFromVolumeRecoveryPoint = 'storagegateway:CreateSnapshotFromVolumeRecoveryPoint',
 CreateStorediSCSIVolume = 'storagegateway:CreateStorediSCSIVolume',
 CreateTapePool = 'storagegateway:CreateTapePool',
 CreateTapeWithBarcode = 'storagegateway:CreateTapeWithBarcode',
 CreateTapes = 'storagegateway:CreateTapes',
 DeleteAutomaticTapeCreationPolicy = 'storagegateway:DeleteAutomaticTapeCreationPolicy',
 DeleteBandwidthRateLimit = 'storagegateway:DeleteBandwidthRateLimit',
 DeleteChapCredentials = 'storagegateway:DeleteChapCredentials',
 DeleteFileShare = 'storagegateway:DeleteFileShare',
 DeleteGateway = 'storagegateway:DeleteGateway',
 DeleteSnapshotSchedule = 'storagegateway:DeleteSnapshotSchedule',
 DeleteTape = 'storagegateway:DeleteTape',
 DeleteTapeArchive = 'storagegateway:DeleteTapeArchive',
 DeleteTapePool = 'storagegateway:DeleteTapePool',
 DeleteVolume = 'storagegateway:DeleteVolume',
 DescribeAvailabilityMonitorTest = 'storagegateway:DescribeAvailabilityMonitorTest',
 DescribeBandwidthRateLimit = 'storagegateway:DescribeBandwidthRateLimit',
 DescribeBandwidthRateLimitSchedule = 'storagegateway:DescribeBandwidthRateLimitSchedule',
 DescribeCache = 'storagegateway:DescribeCache',
 DescribeCachediSCSIVolumes = 'storagegateway:DescribeCachediSCSIVolumes',
 DescribeChapCredentials = 'storagegateway:DescribeChapCredentials',
 DescribeGatewayInformation = 'storagegateway:DescribeGatewayInformation',
 DescribeMaintenanceStartTime = 'storagegateway:DescribeMaintenanceStartTime',
 DescribeNFSFileShares = 'storagegateway:DescribeNFSFileShares',
 DescribeSMBFileShares = 'storagegateway:DescribeSMBFileShares',
 DescribeSMBSettings = 'storagegateway:DescribeSMBSettings',
 DescribeSnapshotSchedule = 'storagegateway:DescribeSnapshotSchedule',
 DescribeStorediSCSIVolumes = 'storagegateway:DescribeStorediSCSIVolumes',
 DescribeTapeArchives = 'storagegateway:DescribeTapeArchives',
 DescribeTapeRecoveryPoints = 'storagegateway:DescribeTapeRecoveryPoints',
 DescribeTapes = 'storagegateway:DescribeTapes',
 DescribeUploadBuffer = 'storagegateway:DescribeUploadBuffer',
 DescribeVTLDevices = 'storagegateway:DescribeVTLDevices',
 DescribeWorkingStorage = 'storagegateway:DescribeWorkingStorage',
 DetachVolume = 'storagegateway:DetachVolume',
 DisableGateway = 'storagegateway:DisableGateway',
 JoinDomain = 'storagegateway:JoinDomain',
 ListAutomaticTapeCreationPolicies = 'storagegateway:ListAutomaticTapeCreationPolicies',
 ListFileShares = 'storagegateway:ListFileShares',
 ListGateways = 'storagegateway:ListGateways',
 ListLocalDisks = 'storagegateway:ListLocalDisks',
 ListTagsForResource = 'storagegateway:ListTagsForResource',
 ListTapePools = 'storagegateway:ListTapePools',
 ListTapes = 'storagegateway:ListTapes',
 ListVolumeInitiators = 'storagegateway:ListVolumeInitiators',
 ListVolumeRecoveryPoints = 'storagegateway:ListVolumeRecoveryPoints',
 ListVolumes = 'storagegateway:ListVolumes',
 NotifyWhenUploaded = 'storagegateway:NotifyWhenUploaded',
 RefreshCache = 'storagegateway:RefreshCache',
 RemoveTagsFromResource = 'storagegateway:RemoveTagsFromResource',
 ResetCache = 'storagegateway:ResetCache',
 RetrieveTapeArchive = 'storagegateway:RetrieveTapeArchive',
 RetrieveTapeRecoveryPoint = 'storagegateway:RetrieveTapeRecoveryPoint',
 SetLocalConsolePassword = 'storagegateway:SetLocalConsolePassword',
 SetSMBGuestPassword = 'storagegateway:SetSMBGuestPassword',
 ShutdownGateway = 'storagegateway:ShutdownGateway',
 StartAvailabilityMonitorTest = 'storagegateway:StartAvailabilityMonitorTest',
 StartGateway = 'storagegateway:StartGateway',
 UpdateAutomaticTapeCreationPolicy = 'storagegateway:UpdateAutomaticTapeCreationPolicy',
 UpdateBandwidthRateLimit = 'storagegateway:UpdateBandwidthRateLimit',
 UpdateBandwidthRateLimitSchedule = 'storagegateway:UpdateBandwidthRateLimitSchedule',
 UpdateChapCredentials = 'storagegateway:UpdateChapCredentials',
 UpdateGatewayInformation = 'storagegateway:UpdateGatewayInformation',
 UpdateGatewaySoftwareNow = 'storagegateway:UpdateGatewaySoftwareNow',
 UpdateMaintenanceStartTime = 'storagegateway:UpdateMaintenanceStartTime',
 UpdateNFSFileShare = 'storagegateway:UpdateNFSFileShare',
 UpdateSMBFileShare = 'storagegateway:UpdateSMBFileShare',
 UpdateSMBFileShareVisibility = 'storagegateway:UpdateSMBFileShareVisibility',
 UpdateSMBSecurityStrategy = 'storagegateway:UpdateSMBSecurityStrategy',
 UpdateSnapshotSchedule = 'storagegateway:UpdateSnapshotSchedule',
 UpdateVTLDeviceType = 'storagegateway:UpdateVTLDeviceType',

}