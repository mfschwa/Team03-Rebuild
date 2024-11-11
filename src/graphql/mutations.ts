/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createDriver = /* GraphQL */ `mutation CreateDriver(
  $input: CreateDriverInput!
  $condition: ModelDriverConditionInput
) {
  createDriver(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDriverMutationVariables,
  APITypes.CreateDriverMutation
>;
export const updateDriver = /* GraphQL */ `mutation UpdateDriver(
  $input: UpdateDriverInput!
  $condition: ModelDriverConditionInput
) {
  updateDriver(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDriverMutationVariables,
  APITypes.UpdateDriverMutation
>;
export const deleteDriver = /* GraphQL */ `mutation DeleteDriver(
  $input: DeleteDriverInput!
  $condition: ModelDriverConditionInput
) {
  deleteDriver(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDriverMutationVariables,
  APITypes.DeleteDriverMutation
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
` as GeneratedMutation<
  APITypes.DeleteSponsorMutationVariables,
  APITypes.DeleteSponsorMutation
>;
export const createSponsorUser = /* GraphQL */ `mutation CreateSponsorUser(
  $input: CreateSponsorUserInput!
  $condition: ModelSponsorUserConditionInput
) {
  createSponsorUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSponsorUserMutationVariables,
  APITypes.CreateSponsorUserMutation
>;
export const updateSponsorUser = /* GraphQL */ `mutation UpdateSponsorUser(
  $input: UpdateSponsorUserInput!
  $condition: ModelSponsorUserConditionInput
) {
  updateSponsorUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSponsorUserMutationVariables,
  APITypes.UpdateSponsorUserMutation
>;
export const deleteSponsorUser = /* GraphQL */ `mutation DeleteSponsorUser(
  $input: DeleteSponsorUserInput!
  $condition: ModelSponsorUserConditionInput
) {
  deleteSponsorUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSponsorUserMutationVariables,
  APITypes.DeleteSponsorUserMutation
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
` as GeneratedMutation<
  APITypes.DeletePointHistoryMutationVariables,
  APITypes.DeletePointHistoryMutation
>;
export const createAdministrator = /* GraphQL */ `mutation CreateAdministrator(
  $input: CreateAdministratorInput!
  $condition: ModelAdministratorConditionInput
) {
  createAdministrator(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAdministratorMutationVariables,
  APITypes.CreateAdministratorMutation
>;
export const updateAdministrator = /* GraphQL */ `mutation UpdateAdministrator(
  $input: UpdateAdministratorInput!
  $condition: ModelAdministratorConditionInput
) {
  updateAdministrator(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAdministratorMutationVariables,
  APITypes.UpdateAdministratorMutation
>;
export const deleteAdministrator = /* GraphQL */ `mutation DeleteAdministrator(
  $input: DeleteAdministratorInput!
  $condition: ModelAdministratorConditionInput
) {
  deleteAdministrator(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAdministratorMutationVariables,
  APITypes.DeleteAdministratorMutation
>;
export const createAdminProfile = /* GraphQL */ `mutation CreateAdminProfile(
  $input: CreateAdminProfileInput!
  $condition: ModelAdminProfileConditionInput
) {
  createAdminProfile(input: $input, condition: $condition) {
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
