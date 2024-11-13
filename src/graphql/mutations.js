/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
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
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
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
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
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
`;
export const createSponsor = /* GraphQL */ `
  mutation CreateSponsor(
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
`;
export const updateSponsor = /* GraphQL */ `
  mutation UpdateSponsor(
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
`;
export const deleteSponsor = /* GraphQL */ `
  mutation DeleteSponsor(
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
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
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
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
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
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
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
`;
export const createPurchase = /* GraphQL */ `
  mutation CreatePurchase(
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
`;
export const updatePurchase = /* GraphQL */ `
  mutation UpdatePurchase(
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
`;
export const deletePurchase = /* GraphQL */ `
  mutation DeletePurchase(
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
`;
export const createPointHistory = /* GraphQL */ `
  mutation CreatePointHistory(
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
`;
export const updatePointHistory = /* GraphQL */ `
  mutation UpdatePointHistory(
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
`;
export const deletePointHistory = /* GraphQL */ `
  mutation DeletePointHistory(
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
`;
export const createAdminProfile = /* GraphQL */ `
  mutation CreateAdminProfile(
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
`;
export const updateAdminProfile = /* GraphQL */ `
  mutation UpdateAdminProfile(
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
`;
export const deleteAdminProfile = /* GraphQL */ `
  mutation DeleteAdminProfile(
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
`;
export const createDriverProfile = /* GraphQL */ `
  mutation CreateDriverProfile(
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
`;
export const updateDriverProfile = /* GraphQL */ `
  mutation UpdateDriverProfile(
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
`;
export const deleteDriverProfile = /* GraphQL */ `
  mutation DeleteDriverProfile(
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
`;
export const createReport = /* GraphQL */ `
  mutation CreateReport(
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
`;
export const updateReport = /* GraphQL */ `
  mutation UpdateReport(
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
`;
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport(
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
`;
export const createAuditLog = /* GraphQL */ `
  mutation CreateAuditLog(
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
`;
export const updateAuditLog = /* GraphQL */ `
  mutation UpdateAuditLog(
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
`;
export const deleteAuditLog = /* GraphQL */ `
  mutation DeleteAuditLog(
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
`;
export const createCartItem = /* GraphQL */ `
  mutation CreateCartItem(
    $input: CreateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    createCartItem(input: $input, condition: $condition) {
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
export const updateCartItem = /* GraphQL */ `
  mutation UpdateCartItem(
    $input: UpdateCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    updateCartItem(input: $input, condition: $condition) {
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
export const deleteCartItem = /* GraphQL */ `
  mutation DeleteCartItem(
    $input: DeleteCartItemInput!
    $condition: ModelCartItemConditionInput
  ) {
    deleteCartItem(input: $input, condition: $condition) {
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
