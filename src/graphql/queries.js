/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSponsor = /* GraphQL */ `
  query GetSponsor($id: ID!) {
    getSponsor(id: $id) {
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
export const listSponsors = /* GraphQL */ `
  query ListSponsors(
    $filter: ModelSponsorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSponsors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pointConversionRate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPurchase = /* GraphQL */ `
  query GetPurchase($id: ID!) {
    getPurchase(id: $id) {
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
export const listPurchases = /* GraphQL */ `
  query ListPurchases(
    $filter: ModelPurchaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        productID
        status
        purchaseDate
        createdAt
        updatedAt
        userPurchasesId
        productPurchasesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPointHistory = /* GraphQL */ `
  query GetPointHistory($id: ID!) {
    getPointHistory(id: $id) {
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
export const listPointHistories = /* GraphQL */ `
  query ListPointHistories(
    $filter: ModelPointHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPointHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        pointsChange
        reason
        createdAt
        updatedAt
        userPointHistoryId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAdminProfile = /* GraphQL */ `
  query GetAdminProfile($id: ID!) {
    getAdminProfile(id: $id) {
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
export const listAdminProfiles = /* GraphQL */ `
  query ListAdminProfiles(
    $filter: ModelAdminProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAdminProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contactEmail
        createdAt
        updatedAt
        adminProfileUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDriverProfile = /* GraphQL */ `
  query GetDriverProfile($id: ID!) {
    getDriverProfile(id: $id) {
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
export const listDriverProfiles = /* GraphQL */ `
  query ListDriverProfiles(
    $filter: ModelDriverProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDriverProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        contactEmail
        applicationStatus
        createdAt
        updatedAt
        userSponsoredDriversId
        driverProfileUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
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
      nextToken
      __typename
    }
  }
`;
export const getAuditLog = /* GraphQL */ `
  query GetAuditLog($id: ID!) {
    getAuditLog(id: $id) {
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
export const listAuditLogs = /* GraphQL */ `
  query ListAuditLogs(
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuditLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        action
        timestamp
        details
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCartItem = /* GraphQL */ `
  query GetCartItem($id: ID!) {
    getCartItem(id: $id) {
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
export const listCartItems = /* GraphQL */ `
  query ListCartItems(
    $filter: ModelCartItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
