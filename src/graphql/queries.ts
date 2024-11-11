/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDriver = /* GraphQL */ `query GetDriver($id: ID!) {
  getDriver(id: $id) {
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
` as GeneratedQuery<APITypes.GetDriverQueryVariables, APITypes.GetDriverQuery>;
export const listDrivers = /* GraphQL */ `query ListDrivers(
  $filter: ModelDriverFilterInput
  $limit: Int
  $nextToken: String
) {
  listDrivers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      points
      createdAt
      updatedAt
      sponsorDriversId
      driverProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDriversQueryVariables,
  APITypes.ListDriversQuery
>;
export const getSponsor = /* GraphQL */ `query GetSponsor($id: ID!) {
  getSponsor(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSponsorQueryVariables,
  APITypes.GetSponsorQuery
>;
export const listSponsors = /* GraphQL */ `query ListSponsors(
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
` as GeneratedQuery<
  APITypes.ListSponsorsQueryVariables,
  APITypes.ListSponsorsQuery
>;
export const getSponsorUser = /* GraphQL */ `query GetSponsorUser($id: ID!) {
  getSponsorUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSponsorUserQueryVariables,
  APITypes.GetSponsorUserQuery
>;
export const listSponsorUsers = /* GraphQL */ `query ListSponsorUsers(
  $filter: ModelSponsorUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listSponsorUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      role
      createdAt
      updatedAt
      sponsorSponsorUsersId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSponsorUsersQueryVariables,
  APITypes.ListSponsorUsersQuery
>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
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
      sponsorProductCatalogId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const getPurchase = /* GraphQL */ `query GetPurchase($id: ID!) {
  getPurchase(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPurchaseQueryVariables,
  APITypes.GetPurchaseQuery
>;
export const listPurchases = /* GraphQL */ `query ListPurchases(
  $filter: ModelPurchaseFilterInput
  $limit: Int
  $nextToken: String
) {
  listPurchases(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      status
      purchaseDate
      createdAt
      updatedAt
      driverPurchasesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPurchasesQueryVariables,
  APITypes.ListPurchasesQuery
>;
export const getPointHistory = /* GraphQL */ `query GetPointHistory($id: ID!) {
  getPointHistory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPointHistoryQueryVariables,
  APITypes.GetPointHistoryQuery
>;
export const listPointHistories = /* GraphQL */ `query ListPointHistories(
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
      driverPointHistoryId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPointHistoriesQueryVariables,
  APITypes.ListPointHistoriesQuery
>;
export const getAdministrator = /* GraphQL */ `query GetAdministrator($id: ID!) {
  getAdministrator(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAdministratorQueryVariables,
  APITypes.GetAdministratorQuery
>;
export const listAdministrators = /* GraphQL */ `query ListAdministrators(
  $filter: ModelAdministratorFilterInput
  $limit: Int
  $nextToken: String
) {
  listAdministrators(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      createdAt
      updatedAt
      administratorProfileId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdministratorsQueryVariables,
  APITypes.ListAdministratorsQuery
>;
export const getAdminProfile = /* GraphQL */ `query GetAdminProfile($id: ID!) {
  getAdminProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAdminProfileQueryVariables,
  APITypes.GetAdminProfileQuery
>;
export const listAdminProfiles = /* GraphQL */ `query ListAdminProfiles(
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
      adminProfileAdministratorId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAdminProfilesQueryVariables,
  APITypes.ListAdminProfilesQuery
>;
export const getDriverProfile = /* GraphQL */ `query GetDriverProfile($id: ID!) {
  getDriverProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDriverProfileQueryVariables,
  APITypes.GetDriverProfileQuery
>;
export const listDriverProfiles = /* GraphQL */ `query ListDriverProfiles(
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
      driverProfileDriverId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDriverProfilesQueryVariables,
  APITypes.ListDriverProfilesQuery
>;
export const getReport = /* GraphQL */ `query GetReport($id: ID!) {
  getReport(id: $id) {
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
` as GeneratedQuery<APITypes.GetReportQueryVariables, APITypes.GetReportQuery>;
export const listReports = /* GraphQL */ `query ListReports(
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
      sponsorReportsId
      administratorReportsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReportsQueryVariables,
  APITypes.ListReportsQuery
>;
export const getAuditLog = /* GraphQL */ `query GetAuditLog($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetAuditLogQueryVariables,
  APITypes.GetAuditLogQuery
>;
export const listAuditLogs = /* GraphQL */ `query ListAuditLogs(
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
` as GeneratedQuery<
  APITypes.ListAuditLogsQueryVariables,
  APITypes.ListAuditLogsQuery
>;
