/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      role
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
      driverProfile {
        id
        contactEmail
        applicationStatus
        createdAt
        updatedAt
        userSponsoredDriversId
        driverProfileUserId
        __typename
      }
      purchases {
        nextToken
        __typename
      }
      adminProfile {
        id
        contactEmail
        createdAt
        updatedAt
        adminProfileUserId
        __typename
      }
      adminReports {
        nextToken
        __typename
      }
      sponsoredDrivers {
        nextToken
        __typename
      }
      productCatalog {
        nextToken
        __typename
      }
      pointConversionRate
      sponsorReports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      sponsorUsersId
      userDriverProfileId
      userAdminProfileId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      role
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
      driverProfile {
        id
        contactEmail
        applicationStatus
        createdAt
        updatedAt
        userSponsoredDriversId
        driverProfileUserId
        __typename
      }
      purchases {
        nextToken
        __typename
      }
      adminProfile {
        id
        contactEmail
        createdAt
        updatedAt
        adminProfileUserId
        __typename
      }
      adminReports {
        nextToken
        __typename
      }
      sponsoredDrivers {
        nextToken
        __typename
      }
      productCatalog {
        nextToken
        __typename
      }
      pointConversionRate
      sponsorReports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      sponsorUsersId
      userDriverProfileId
      userAdminProfileId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      role
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
      driverProfile {
        id
        contactEmail
        applicationStatus
        createdAt
        updatedAt
        userSponsoredDriversId
        driverProfileUserId
        __typename
      }
      purchases {
        nextToken
        __typename
      }
      adminProfile {
        id
        contactEmail
        createdAt
        updatedAt
        adminProfileUserId
        __typename
      }
      adminReports {
        nextToken
        __typename
      }
      sponsoredDrivers {
        nextToken
        __typename
      }
      productCatalog {
        nextToken
        __typename
      }
      pointConversionRate
      sponsorReports {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      sponsorUsersId
      userDriverProfileId
      userAdminProfileId
      __typename
    }
  }
`;
export const onCreateSponsor = /* GraphQL */ `
  subscription OnCreateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onCreateSponsor(filter: $filter) {
      id
      name
      productCatalog {
        nextToken
        __typename
      }
      pointConversionRate
      users {
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
`;
export const onUpdateSponsor = /* GraphQL */ `
  subscription OnUpdateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onUpdateSponsor(filter: $filter) {
      id
      name
      productCatalog {
        nextToken
        __typename
      }
      pointConversionRate
      users {
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
`;
export const onDeleteSponsor = /* GraphQL */ `
  subscription OnDeleteSponsor($filter: ModelSubscriptionSponsorFilterInput) {
    onDeleteSponsor(filter: $filter) {
      id
      name
      productCatalog {
        nextToken
        __typename
      }
      pointConversionRate
      users {
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
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      description
      price
      pointsValue
      purchases {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userProductCatalogId
      sponsorProductCatalogId
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      description
      price
      pointsValue
      purchases {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userProductCatalogId
      sponsorProductCatalogId
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      description
      price
      pointsValue
      purchases {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      userProductCatalogId
      sponsorProductCatalogId
      __typename
    }
  }
`;
export const onCreatePurchase = /* GraphQL */ `
  subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onCreatePurchase(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      product {
        id
        name
        description
        price
        pointsValue
        createdAt
        updatedAt
        userProductCatalogId
        sponsorProductCatalogId
        __typename
      }
      productID
      status
      purchaseDate
      createdAt
      updatedAt
      userPurchasesId
      productPurchasesId
      __typename
    }
  }
`;
export const onUpdatePurchase = /* GraphQL */ `
  subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onUpdatePurchase(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      product {
        id
        name
        description
        price
        pointsValue
        createdAt
        updatedAt
        userProductCatalogId
        sponsorProductCatalogId
        __typename
      }
      productID
      status
      purchaseDate
      createdAt
      updatedAt
      userPurchasesId
      productPurchasesId
      __typename
    }
  }
`;
export const onDeletePurchase = /* GraphQL */ `
  subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
    onDeletePurchase(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      product {
        id
        name
        description
        price
        pointsValue
        createdAt
        updatedAt
        userProductCatalogId
        sponsorProductCatalogId
        __typename
      }
      productID
      status
      purchaseDate
      createdAt
      updatedAt
      userPurchasesId
      productPurchasesId
      __typename
    }
  }
`;
export const onCreatePointHistory = /* GraphQL */ `
  subscription OnCreatePointHistory(
    $filter: ModelSubscriptionPointHistoryFilterInput
  ) {
    onCreatePointHistory(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      date
      pointsChange
      reason
      createdAt
      updatedAt
      userPointHistoryId
      __typename
    }
  }
`;
export const onUpdatePointHistory = /* GraphQL */ `
  subscription OnUpdatePointHistory(
    $filter: ModelSubscriptionPointHistoryFilterInput
  ) {
    onUpdatePointHistory(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      date
      pointsChange
      reason
      createdAt
      updatedAt
      userPointHistoryId
      __typename
    }
  }
`;
export const onDeletePointHistory = /* GraphQL */ `
  subscription OnDeletePointHistory(
    $filter: ModelSubscriptionPointHistoryFilterInput
  ) {
    onDeletePointHistory(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      date
      pointsChange
      reason
      createdAt
      updatedAt
      userPointHistoryId
      __typename
    }
  }
`;
export const onCreateAdminProfile = /* GraphQL */ `
  subscription OnCreateAdminProfile(
    $filter: ModelSubscriptionAdminProfileFilterInput
  ) {
    onCreateAdminProfile(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      contactEmail
      createdAt
      updatedAt
      adminProfileUserId
      __typename
    }
  }
`;
export const onUpdateAdminProfile = /* GraphQL */ `
  subscription OnUpdateAdminProfile(
    $filter: ModelSubscriptionAdminProfileFilterInput
  ) {
    onUpdateAdminProfile(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      contactEmail
      createdAt
      updatedAt
      adminProfileUserId
      __typename
    }
  }
`;
export const onDeleteAdminProfile = /* GraphQL */ `
  subscription OnDeleteAdminProfile(
    $filter: ModelSubscriptionAdminProfileFilterInput
  ) {
    onDeleteAdminProfile(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      contactEmail
      createdAt
      updatedAt
      adminProfileUserId
      __typename
    }
  }
`;
export const onCreateDriverProfile = /* GraphQL */ `
  subscription OnCreateDriverProfile(
    $filter: ModelSubscriptionDriverProfileFilterInput
  ) {
    onCreateDriverProfile(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      contactEmail
      applicationStatus
      createdAt
      updatedAt
      userSponsoredDriversId
      driverProfileUserId
      __typename
    }
  }
`;
export const onUpdateDriverProfile = /* GraphQL */ `
  subscription OnUpdateDriverProfile(
    $filter: ModelSubscriptionDriverProfileFilterInput
  ) {
    onUpdateDriverProfile(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      contactEmail
      applicationStatus
      createdAt
      updatedAt
      userSponsoredDriversId
      driverProfileUserId
      __typename
    }
  }
`;
export const onDeleteDriverProfile = /* GraphQL */ `
  subscription OnDeleteDriverProfile(
    $filter: ModelSubscriptionDriverProfileFilterInput
  ) {
    onDeleteDriverProfile(filter: $filter) {
      id
      user {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
        __typename
      }
      contactEmail
      applicationStatus
      createdAt
      updatedAt
      userSponsoredDriversId
      driverProfileUserId
      __typename
    }
  }
`;
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($filter: ModelSubscriptionReportFilterInput) {
    onCreateReport(filter: $filter) {
      id
      type
      generatedBy {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
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
      userAdminReportsId
      userSponsorReportsId
      sponsorReportsId
      __typename
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($filter: ModelSubscriptionReportFilterInput) {
    onUpdateReport(filter: $filter) {
      id
      type
      generatedBy {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
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
      userAdminReportsId
      userSponsorReportsId
      sponsorReportsId
      __typename
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport($filter: ModelSubscriptionReportFilterInput) {
    onDeleteReport(filter: $filter) {
      id
      type
      generatedBy {
        id
        username
        email
        role
        points
        pointConversionRate
        createdAt
        updatedAt
        sponsorUsersId
        userDriverProfileId
        userAdminProfileId
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
      userAdminReportsId
      userSponsorReportsId
      sponsorReportsId
      __typename
    }
  }
`;
export const onCreateAuditLog = /* GraphQL */ `
  subscription OnCreateAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
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
`;
export const onUpdateAuditLog = /* GraphQL */ `
  subscription OnUpdateAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
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
`;
export const onDeleteAuditLog = /* GraphQL */ `
  subscription OnDeleteAuditLog($filter: ModelSubscriptionAuditLogFilterInput) {
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
`;
export const onCreateCartItem = /* GraphQL */ `
  subscription OnCreateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
    onCreateCartItem(filter: $filter) {
      id
      trackId
      name
      artist
      price
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCartItem = /* GraphQL */ `
  subscription OnUpdateCartItem($filter: ModelSubscriptionCartItemFilterInput) {
    onUpdateCartItem(filter: $filter) {
      id
      trackId
      name
      artist
      price
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCartItem = /* GraphQL */ `
  subscription OnDeleteCartItem($filter: ModelSubscriptionCartItemFilterInput) {
    onDeleteCartItem(filter: $filter) {
      id
      trackId
      name
      artist
      price
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
