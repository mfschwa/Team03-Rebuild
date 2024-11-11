/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBlog = /* GraphQL */ `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBlogMutationVariables,
  APITypes.CreateBlogMutation
>;
export const updateBlog = /* GraphQL */ `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBlogMutationVariables,
  APITypes.UpdateBlogMutation
>;
export const deleteBlog = /* GraphQL */ `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBlogMutationVariables,
  APITypes.DeleteBlogMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSponsor = /* GraphQL */ `mutation CreateSponsor(
  $input: CreateSponsorInput!
  $condition: ModelSponsorConditionInput
) {
  createSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSponsorMutationVariables,
  APITypes.CreateSponsorMutation
>;
export const updateSponsor = /* GraphQL */ `mutation UpdateSponsor(
  $input: UpdateSponsorInput!
  $condition: ModelSponsorConditionInput
) {
  updateSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSponsorMutationVariables,
  APITypes.UpdateSponsorMutation
>;
export const deleteSponsor = /* GraphQL */ `mutation DeleteSponsor(
  $input: DeleteSponsorInput!
  $condition: ModelSponsorConditionInput
) {
  deleteSponsor(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSponsorMutationVariables,
  APITypes.DeleteSponsorMutation
>;
export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createPurchase = /* GraphQL */ `mutation CreatePurchase(
  $input: CreatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  createPurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePurchaseMutationVariables,
  APITypes.CreatePurchaseMutation
>;
export const updatePurchase = /* GraphQL */ `mutation UpdatePurchase(
  $input: UpdatePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  updatePurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePurchaseMutationVariables,
  APITypes.UpdatePurchaseMutation
>;
export const deletePurchase = /* GraphQL */ `mutation DeletePurchase(
  $input: DeletePurchaseInput!
  $condition: ModelPurchaseConditionInput
) {
  deletePurchase(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePurchaseMutationVariables,
  APITypes.DeletePurchaseMutation
>;
export const createPointHistory = /* GraphQL */ `mutation CreatePointHistory(
  $input: CreatePointHistoryInput!
  $condition: ModelPointHistoryConditionInput
) {
  createPointHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePointHistoryMutationVariables,
  APITypes.CreatePointHistoryMutation
>;
export const updatePointHistory = /* GraphQL */ `mutation UpdatePointHistory(
  $input: UpdatePointHistoryInput!
  $condition: ModelPointHistoryConditionInput
) {
  updatePointHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePointHistoryMutationVariables,
  APITypes.UpdatePointHistoryMutation
>;
export const deletePointHistory = /* GraphQL */ `mutation DeletePointHistory(
  $input: DeletePointHistoryInput!
  $condition: ModelPointHistoryConditionInput
) {
  deletePointHistory(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePointHistoryMutationVariables,
  APITypes.DeletePointHistoryMutation
>;
export const createAdminProfile = /* GraphQL */ `mutation CreateAdminProfile(
  $input: CreateAdminProfileInput!
  $condition: ModelAdminProfileConditionInput
) {
  createAdminProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdminProfileMutationVariables,
  APITypes.CreateAdminProfileMutation
>;
export const updateAdminProfile = /* GraphQL */ `mutation UpdateAdminProfile(
  $input: UpdateAdminProfileInput!
  $condition: ModelAdminProfileConditionInput
) {
  updateAdminProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdminProfileMutationVariables,
  APITypes.UpdateAdminProfileMutation
>;
export const deleteAdminProfile = /* GraphQL */ `mutation DeleteAdminProfile(
  $input: DeleteAdminProfileInput!
  $condition: ModelAdminProfileConditionInput
) {
  deleteAdminProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdminProfileMutationVariables,
  APITypes.DeleteAdminProfileMutation
>;
export const createDriverProfile = /* GraphQL */ `mutation CreateDriverProfile(
  $input: CreateDriverProfileInput!
  $condition: ModelDriverProfileConditionInput
) {
  createDriverProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDriverProfileMutationVariables,
  APITypes.CreateDriverProfileMutation
>;
export const updateDriverProfile = /* GraphQL */ `mutation UpdateDriverProfile(
  $input: UpdateDriverProfileInput!
  $condition: ModelDriverProfileConditionInput
) {
  updateDriverProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDriverProfileMutationVariables,
  APITypes.UpdateDriverProfileMutation
>;
export const deleteDriverProfile = /* GraphQL */ `mutation DeleteDriverProfile(
  $input: DeleteDriverProfileInput!
  $condition: ModelDriverProfileConditionInput
) {
  deleteDriverProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDriverProfileMutationVariables,
  APITypes.DeleteDriverProfileMutation
>;
export const createReport = /* GraphQL */ `mutation CreateReport(
  $input: CreateReportInput!
  $condition: ModelReportConditionInput
) {
  createReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReportMutationVariables,
  APITypes.CreateReportMutation
>;
export const updateReport = /* GraphQL */ `mutation UpdateReport(
  $input: UpdateReportInput!
  $condition: ModelReportConditionInput
) {
  updateReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReportMutationVariables,
  APITypes.UpdateReportMutation
>;
export const deleteReport = /* GraphQL */ `mutation DeleteReport(
  $input: DeleteReportInput!
  $condition: ModelReportConditionInput
) {
  deleteReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReportMutationVariables,
  APITypes.DeleteReportMutation
>;
export const createAuditLog = /* GraphQL */ `mutation CreateAuditLog(
  $input: CreateAuditLogInput!
  $condition: ModelAuditLogConditionInput
) {
  createAuditLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAuditLogMutationVariables,
  APITypes.CreateAuditLogMutation
>;
export const updateAuditLog = /* GraphQL */ `mutation UpdateAuditLog(
  $input: UpdateAuditLogInput!
  $condition: ModelAuditLogConditionInput
) {
  updateAuditLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAuditLogMutationVariables,
  APITypes.UpdateAuditLogMutation
>;
export const deleteAuditLog = /* GraphQL */ `mutation DeleteAuditLog(
  $input: DeleteAuditLogInput!
  $condition: ModelAuditLogConditionInput
) {
  deleteAuditLog(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAuditLogMutationVariables,
  APITypes.DeleteAuditLogMutation
>;
