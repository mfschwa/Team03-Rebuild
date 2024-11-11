/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBlog = /* GraphQL */ `subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onCreateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlogSubscriptionVariables,
  APITypes.OnCreateBlogSubscription
>;
export const onUpdateBlog = /* GraphQL */ `subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
  onUpdateBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlogSubscriptionVariables,
  APITypes.OnUpdateBlogSubscription
>;
export const onDeleteBlog = /* GraphQL */ `subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
  onDeleteBlog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlogSubscriptionVariables,
  APITypes.OnDeleteBlogSubscription
>;
export const onCreatePost = /* GraphQL */ `subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
  onCreatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePostSubscriptionVariables,
  APITypes.OnCreatePostSubscription
>;
export const onUpdatePost = /* GraphQL */ `subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
  onUpdatePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePostSubscriptionVariables,
  APITypes.OnUpdatePostSubscription
>;
export const onDeletePost = /* GraphQL */ `subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
  onDeletePost(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePostSubscriptionVariables,
  APITypes.OnDeletePostSubscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSponsor = /* GraphQL */ `subscription OnCreateSponsor($filter: ModelSubscriptionSponsorFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSponsorSubscriptionVariables,
  APITypes.OnDeleteSponsorSubscription
>;
export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreatePurchase = /* GraphQL */ `subscription OnCreatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePurchaseSubscriptionVariables,
  APITypes.OnCreatePurchaseSubscription
>;
export const onUpdatePurchase = /* GraphQL */ `subscription OnUpdatePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePurchaseSubscriptionVariables,
  APITypes.OnUpdatePurchaseSubscription
>;
export const onDeletePurchase = /* GraphQL */ `subscription OnDeletePurchase($filter: ModelSubscriptionPurchaseFilterInput) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePurchaseSubscriptionVariables,
  APITypes.OnDeletePurchaseSubscription
>;
export const onCreatePointHistory = /* GraphQL */ `subscription OnCreatePointHistory(
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
` as GeneratedSubscription<
  APITypes.OnCreatePointHistorySubscriptionVariables,
  APITypes.OnCreatePointHistorySubscription
>;
export const onUpdatePointHistory = /* GraphQL */ `subscription OnUpdatePointHistory(
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
` as GeneratedSubscription<
  APITypes.OnUpdatePointHistorySubscriptionVariables,
  APITypes.OnUpdatePointHistorySubscription
>;
export const onDeletePointHistory = /* GraphQL */ `subscription OnDeletePointHistory(
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
` as GeneratedSubscription<
  APITypes.OnDeletePointHistorySubscriptionVariables,
  APITypes.OnDeletePointHistorySubscription
>;
export const onCreateAdminProfile = /* GraphQL */ `subscription OnCreateAdminProfile(
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
` as GeneratedSubscription<
  APITypes.OnCreateAdminProfileSubscriptionVariables,
  APITypes.OnCreateAdminProfileSubscription
>;
export const onUpdateAdminProfile = /* GraphQL */ `subscription OnUpdateAdminProfile(
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
` as GeneratedSubscription<
  APITypes.OnUpdateAdminProfileSubscriptionVariables,
  APITypes.OnUpdateAdminProfileSubscription
>;
export const onDeleteAdminProfile = /* GraphQL */ `subscription OnDeleteAdminProfile(
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
` as GeneratedSubscription<
  APITypes.OnDeleteAdminProfileSubscriptionVariables,
  APITypes.OnDeleteAdminProfileSubscription
>;
export const onCreateDriverProfile = /* GraphQL */ `subscription OnCreateDriverProfile(
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
` as GeneratedSubscription<
  APITypes.OnCreateDriverProfileSubscriptionVariables,
  APITypes.OnCreateDriverProfileSubscription
>;
export const onUpdateDriverProfile = /* GraphQL */ `subscription OnUpdateDriverProfile(
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
` as GeneratedSubscription<
  APITypes.OnUpdateDriverProfileSubscriptionVariables,
  APITypes.OnUpdateDriverProfileSubscription
>;
export const onDeleteDriverProfile = /* GraphQL */ `subscription OnDeleteDriverProfile(
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
