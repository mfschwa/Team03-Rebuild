/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDriver = /* GraphQL */ `subscription OnCreateDriver($filter: ModelSubscriptionDriverFilterInput) {
  onCreateDriver(filter: $filter) {
    id
    name
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    points
    pointHistory {
      nextToken
      __typename
    }
    profile {
      id
      contactEmail
      applicationStatus
      createdAt
      updatedAt
      driverProfileDriverId
      __typename
    }
    purchases {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    sponsorDriversId
    driverProfileId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDriverSubscriptionVariables,
  APITypes.OnCreateDriverSubscription
>;
export const onUpdateDriver = /* GraphQL */ `subscription OnUpdateDriver($filter: ModelSubscriptionDriverFilterInput) {
  onUpdateDriver(filter: $filter) {
    id
    name
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    points
    pointHistory {
      nextToken
      __typename
    }
    profile {
      id
      contactEmail
      applicationStatus
      createdAt
      updatedAt
      driverProfileDriverId
      __typename
    }
    purchases {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    sponsorDriversId
    driverProfileId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDriverSubscriptionVariables,
  APITypes.OnUpdateDriverSubscription
>;
export const onDeleteDriver = /* GraphQL */ `subscription OnDeleteDriver($filter: ModelSubscriptionDriverFilterInput) {
  onDeleteDriver(filter: $filter) {
    id
    name
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    points
    pointHistory {
      nextToken
      __typename
    }
    profile {
      id
      contactEmail
      applicationStatus
      createdAt
      updatedAt
      driverProfileDriverId
      __typename
    }
    purchases {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    sponsorDriversId
    driverProfileId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDriverSubscriptionVariables,
  APITypes.OnDeleteDriverSubscription
>;
export const onCreateSponsor = /* GraphQL */ `subscription OnCreateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
  onCreateSponsor(filter: $filter) {
    id
    name
    productCatalog {
      nextToken
      __typename
    }
    drivers {
      nextToken
      __typename
    }
    pointConversionRate
    sponsorUsers {
      nextToken
      __typename
    }
    reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSponsorSubscriptionVariables,
  APITypes.OnCreateSponsorSubscription
>;
export const onUpdateSponsor = /* GraphQL */ `subscription OnUpdateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
  onUpdateSponsor(filter: $filter) {
    id
    name
    productCatalog {
      nextToken
      __typename
    }
    drivers {
      nextToken
      __typename
    }
    pointConversionRate
    sponsorUsers {
      nextToken
      __typename
    }
    reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSponsorSubscriptionVariables,
  APITypes.OnUpdateSponsorSubscription
>;
export const onDeleteSponsor = /* GraphQL */ `subscription OnDeleteSponsor($filter: ModelSubscriptionSponsorFilterInput) {
  onDeleteSponsor(filter: $filter) {
    id
    name
    productCatalog {
      nextToken
      __typename
    }
    drivers {
      nextToken
      __typename
    }
    pointConversionRate
    sponsorUsers {
      nextToken
      __typename
    }
    reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSponsorSubscriptionVariables,
  APITypes.OnDeleteSponsorSubscription
>;
export const onCreateSponsorUser = /* GraphQL */ `subscription OnCreateSponsorUser(
  $filter: ModelSubscriptionSponsorUserFilterInput
) {
  onCreateSponsorUser(filter: $filter) {
    id
    username
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    role
    createdAt
    updatedAt
    sponsorSponsorUsersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSponsorUserSubscriptionVariables,
  APITypes.OnCreateSponsorUserSubscription
>;
export const onUpdateSponsorUser = /* GraphQL */ `subscription OnUpdateSponsorUser(
  $filter: ModelSubscriptionSponsorUserFilterInput
) {
  onUpdateSponsorUser(filter: $filter) {
    id
    username
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    role
    createdAt
    updatedAt
    sponsorSponsorUsersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSponsorUserSubscriptionVariables,
  APITypes.OnUpdateSponsorUserSubscription
>;
export const onDeleteSponsorUser = /* GraphQL */ `subscription OnDeleteSponsorUser(
  $filter: ModelSubscriptionSponsorUserFilterInput
) {
  onDeleteSponsorUser(filter: $filter) {
    id
    username
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    role
    createdAt
    updatedAt
    sponsorSponsorUsersId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSponsorUserSubscriptionVariables,
  APITypes.OnDeleteSponsorUserSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
    id
    name
    description
    price
    pointsValue
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    sponsorProductCatalogId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
    id
    name
    description
    price
    pointsValue
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    sponsorProductCatalogId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
    id
    name
    description
    price
    pointsValue
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    sponsorProductCatalogId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreatePurchase = /* GraphQL */ `subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onCreatePurchase(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    status
    purchaseDate
    createdAt
    updatedAt
    driverPurchasesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePurchaseSubscriptionVariables,
  APITypes.OnCreatePurchaseSubscription
>;
export const onUpdatePurchase = /* GraphQL */ `subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onUpdatePurchase(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    status
    purchaseDate
    createdAt
    updatedAt
    driverPurchasesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePurchaseSubscriptionVariables,
  APITypes.OnUpdatePurchaseSubscription
>;
export const onDeletePurchase = /* GraphQL */ `subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
  onDeletePurchase(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    status
    purchaseDate
    createdAt
    updatedAt
    driverPurchasesId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePurchaseSubscriptionVariables,
  APITypes.OnDeletePurchaseSubscription
>;
export const onCreatePointHistory = /* GraphQL */ `subscription OnCreatePointHistory(
  $filter: ModelSubscriptionPointHistoryFilterInput
) {
  onCreatePointHistory(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    date
    pointsChange
    reason
    createdAt
    updatedAt
    driverPointHistoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePointHistorySubscriptionVariables,
  APITypes.OnCreatePointHistorySubscription
>;
export const onUpdatePointHistory = /* GraphQL */ `subscription OnUpdatePointHistory(
  $filter: ModelSubscriptionPointHistoryFilterInput
) {
  onUpdatePointHistory(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    date
    pointsChange
    reason
    createdAt
    updatedAt
    driverPointHistoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePointHistorySubscriptionVariables,
  APITypes.OnUpdatePointHistorySubscription
>;
export const onDeletePointHistory = /* GraphQL */ `subscription OnDeletePointHistory(
  $filter: ModelSubscriptionPointHistoryFilterInput
) {
  onDeletePointHistory(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    date
    pointsChange
    reason
    createdAt
    updatedAt
    driverPointHistoryId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePointHistorySubscriptionVariables,
  APITypes.OnDeletePointHistorySubscription
>;
export const onCreateAdministrator = /* GraphQL */ `subscription OnCreateAdministrator(
  $filter: ModelSubscriptionAdministratorFilterInput
) {
  onCreateAdministrator(filter: $filter) {
    id
    username
    profile {
      id
      contactEmail
      createdAt
      updatedAt
      adminProfileAdministratorId
      __typename
    }
    reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    administratorProfileId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAdministratorSubscriptionVariables,
  APITypes.OnCreateAdministratorSubscription
>;
export const onUpdateAdministrator = /* GraphQL */ `subscription OnUpdateAdministrator(
  $filter: ModelSubscriptionAdministratorFilterInput
) {
  onUpdateAdministrator(filter: $filter) {
    id
    username
    profile {
      id
      contactEmail
      createdAt
      updatedAt
      adminProfileAdministratorId
      __typename
    }
    reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    administratorProfileId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAdministratorSubscriptionVariables,
  APITypes.OnUpdateAdministratorSubscription
>;
export const onDeleteAdministrator = /* GraphQL */ `subscription OnDeleteAdministrator(
  $filter: ModelSubscriptionAdministratorFilterInput
) {
  onDeleteAdministrator(filter: $filter) {
    id
    username
    profile {
      id
      contactEmail
      createdAt
      updatedAt
      adminProfileAdministratorId
      __typename
    }
    reports {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    administratorProfileId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAdministratorSubscriptionVariables,
  APITypes.OnDeleteAdministratorSubscription
>;
export const onCreateAdminProfile = /* GraphQL */ `subscription OnCreateAdminProfile(
  $filter: ModelSubscriptionAdminProfileFilterInput
) {
  onCreateAdminProfile(filter: $filter) {
    id
    administrator {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    contactEmail
    createdAt
    updatedAt
    adminProfileAdministratorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAdminProfileSubscriptionVariables,
  APITypes.OnCreateAdminProfileSubscription
>;
export const onUpdateAdminProfile = /* GraphQL */ `subscription OnUpdateAdminProfile(
  $filter: ModelSubscriptionAdminProfileFilterInput
) {
  onUpdateAdminProfile(filter: $filter) {
    id
    administrator {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    contactEmail
    createdAt
    updatedAt
    adminProfileAdministratorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAdminProfileSubscriptionVariables,
  APITypes.OnUpdateAdminProfileSubscription
>;
export const onDeleteAdminProfile = /* GraphQL */ `subscription OnDeleteAdminProfile(
  $filter: ModelSubscriptionAdminProfileFilterInput
) {
  onDeleteAdminProfile(filter: $filter) {
    id
    administrator {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    contactEmail
    createdAt
    updatedAt
    adminProfileAdministratorId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAdminProfileSubscriptionVariables,
  APITypes.OnDeleteAdminProfileSubscription
>;
export const onCreateDriverProfile = /* GraphQL */ `subscription OnCreateDriverProfile(
  $filter: ModelSubscriptionDriverProfileFilterInput
) {
  onCreateDriverProfile(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    contactEmail
    applicationStatus
    createdAt
    updatedAt
    driverProfileDriverId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDriverProfileSubscriptionVariables,
  APITypes.OnCreateDriverProfileSubscription
>;
export const onUpdateDriverProfile = /* GraphQL */ `subscription OnUpdateDriverProfile(
  $filter: ModelSubscriptionDriverProfileFilterInput
) {
  onUpdateDriverProfile(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    contactEmail
    applicationStatus
    createdAt
    updatedAt
    driverProfileDriverId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDriverProfileSubscriptionVariables,
  APITypes.OnUpdateDriverProfileSubscription
>;
export const onDeleteDriverProfile = /* GraphQL */ `subscription OnDeleteDriverProfile(
  $filter: ModelSubscriptionDriverProfileFilterInput
) {
  onDeleteDriverProfile(filter: $filter) {
    id
    driver {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    contactEmail
    applicationStatus
    createdAt
    updatedAt
    driverProfileDriverId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDriverProfileSubscriptionVariables,
  APITypes.OnDeleteDriverProfileSubscription
>;
export const onCreateReport = /* GraphQL */ `subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
  onCreateReport(filter: $filter) {
    id
    type
    generatedBy {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    dateRangeStart
    dateRangeEnd
    reportData
    createdAt
    updatedAt
    sponsorReportsId
    administratorReportsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReportSubscriptionVariables,
  APITypes.OnCreateReportSubscription
>;
export const onUpdateReport = /* GraphQL */ `subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
  onUpdateReport(filter: $filter) {
    id
    type
    generatedBy {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    dateRangeStart
    dateRangeEnd
    reportData
    createdAt
    updatedAt
    sponsorReportsId
    administratorReportsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReportSubscriptionVariables,
  APITypes.OnUpdateReportSubscription
>;
export const onDeleteReport = /* GraphQL */ `subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
  onDeleteReport(filter: $filter) {
    id
    type
    generatedBy {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    sponsor {
      id
      name
      pointConversionRate
      createdAt
      updatedAt
      __typename
    }
    dateRangeStart
    dateRangeEnd
    reportData
    createdAt
    updatedAt
    sponsorReportsId
    administratorReportsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReportSubscriptionVariables,
  APITypes.OnDeleteReportSubscription
>;
export const onCreateAuditLog = /* GraphQL */ `subscription OnCreateAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
  onCreateAuditLog(filter: $filter) {
    id
    user
    action
    timestamp
    details
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateAuditLogSubscriptionVariables,
  APITypes.OnCreateAuditLogSubscription
>;
export const onUpdateAuditLog = /* GraphQL */ `subscription OnUpdateAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
  onUpdateAuditLog(filter: $filter) {
    id
    user
    action
    timestamp
    details
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateAuditLogSubscriptionVariables,
  APITypes.OnUpdateAuditLogSubscription
>;
export const onDeleteAuditLog = /* GraphQL */ `subscription OnDeleteAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
  onDeleteAuditLog(filter: $filter) {
    id
    user
    action
    timestamp
    details
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAuditLogSubscriptionVariables,
  APITypes.OnDeleteAuditLogSubscription
>;
