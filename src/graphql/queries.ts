/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBlog = /* GraphQL */ `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBlogQueryVariables, APITypes.GetBlogQuery>;
export const listBlogs = /* GraphQL */ `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBlogsQueryVariables, APITypes.ListBlogsQuery>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    blog {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    comments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    blogPostsId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    post {
      id
      title
      createdAt
      updatedAt
      blogPostsId
      __typename
    }
    content
    createdAt
    updatedAt
    postCommentsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      updatedAt
      postCommentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
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
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSponsor = /* GraphQL */ `query GetSponsor($id: ID!) {
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
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
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
      userProductCatalogId
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
` as GeneratedQuery<
  APITypes.ListPurchasesQueryVariables,
  APITypes.ListPurchasesQuery
>;
export const getPointHistory = /* GraphQL */ `query GetPointHistory($id: ID!) {
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
      userPointHistoryId
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
export const getAdminProfile = /* GraphQL */ `query GetAdminProfile($id: ID!) {
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
      adminProfileUserId
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
      userSponsoredDriversId
      driverProfileUserId
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
      userAdminReportsId
      userSponsorReportsId
      sponsorReportsId
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
