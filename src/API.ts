/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDriverInput = {
  id?: string | null,
  name: string,
  points: number,
  sponsorDriversId?: string | null,
  driverProfileId?: string | null,
};

export type ModelDriverConditionInput = {
  name?: ModelStringInput | null,
  points?: ModelIntInput | null,
  and?: Array< ModelDriverConditionInput | null > | null,
  or?: Array< ModelDriverConditionInput | null > | null,
  not?: ModelDriverConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  sponsorDriversId?: ModelIDInput | null,
  driverProfileId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Driver = {
  __typename: "Driver",
  id: string,
  name: string,
  sponsor?: Sponsor | null,
  points: number,
  pointHistory?: ModelPointHistoryConnection | null,
  profile?: DriverProfile | null,
  purchases?: ModelPurchaseConnection | null,
  createdAt: string,
  updatedAt: string,
  sponsorDriversId?: string | null,
  driverProfileId?: string | null,
};

export type Sponsor = {
  __typename: "Sponsor",
  id: string,
  name: string,
  productCatalog?: ModelProductConnection | null,
  drivers?: ModelDriverConnection | null,
  pointConversionRate: number,
  sponsorUsers?: ModelSponsorUserConnection | null,
  reports?: ModelReportConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description: string,
  price: number,
  pointsValue: number,
  sponsor?: Sponsor | null,
  createdAt: string,
  updatedAt: string,
  sponsorProductCatalogId?: string | null,
};

export type ModelDriverConnection = {
  __typename: "ModelDriverConnection",
  items:  Array<Driver | null >,
  nextToken?: string | null,
};

export type ModelSponsorUserConnection = {
  __typename: "ModelSponsorUserConnection",
  items:  Array<SponsorUser | null >,
  nextToken?: string | null,
};

export type SponsorUser = {
  __typename: "SponsorUser",
  id: string,
  username: string,
  sponsor?: Sponsor | null,
  role: string,
  createdAt: string,
  updatedAt: string,
  sponsorSponsorUsersId?: string | null,
};

export type ModelReportConnection = {
  __typename: "ModelReportConnection",
  items:  Array<Report | null >,
  nextToken?: string | null,
};

export type Report = {
  __typename: "Report",
  id: string,
  type: string,
  generatedBy?: Administrator | null,
  sponsor?: Sponsor | null,
  dateRangeStart?: string | null,
  dateRangeEnd?: string | null,
  reportData: string,
  createdAt: string,
  updatedAt: string,
  sponsorReportsId?: string | null,
  administratorReportsId?: string | null,
};

export type Administrator = {
  __typename: "Administrator",
  id: string,
  username: string,
  profile?: AdminProfile | null,
  reports?: ModelReportConnection | null,
  createdAt: string,
  updatedAt: string,
  administratorProfileId?: string | null,
};

export type AdminProfile = {
  __typename: "AdminProfile",
  id: string,
  administrator?: Administrator | null,
  contactEmail: string,
  createdAt: string,
  updatedAt: string,
  adminProfileAdministratorId?: string | null,
};

export type ModelPointHistoryConnection = {
  __typename: "ModelPointHistoryConnection",
  items:  Array<PointHistory | null >,
  nextToken?: string | null,
};

export type PointHistory = {
  __typename: "PointHistory",
  id: string,
  driver?: Driver | null,
  date: string,
  pointsChange: number,
  reason: string,
  createdAt: string,
  updatedAt: string,
  driverPointHistoryId?: string | null,
};

export type DriverProfile = {
  __typename: "DriverProfile",
  id: string,
  driver?: Driver | null,
  contactEmail: string,
  applicationStatus: string,
  createdAt: string,
  updatedAt: string,
  driverProfileDriverId?: string | null,
};

export type ModelPurchaseConnection = {
  __typename: "ModelPurchaseConnection",
  items:  Array<Purchase | null >,
  nextToken?: string | null,
};

export type Purchase = {
  __typename: "Purchase",
  id: string,
  driver?: Driver | null,
  status: string,
  purchaseDate: string,
  createdAt: string,
  updatedAt: string,
  driverPurchasesId?: string | null,
};

export type UpdateDriverInput = {
  id: string,
  name?: string | null,
  points?: number | null,
  sponsorDriversId?: string | null,
  driverProfileId?: string | null,
};

export type DeleteDriverInput = {
  id: string,
};

export type CreateSponsorInput = {
  id?: string | null,
  name: string,
  pointConversionRate: number,
};

export type ModelSponsorConditionInput = {
  name?: ModelStringInput | null,
  pointConversionRate?: ModelFloatInput | null,
  and?: Array< ModelSponsorConditionInput | null > | null,
  or?: Array< ModelSponsorConditionInput | null > | null,
  not?: ModelSponsorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateSponsorInput = {
  id: string,
  name?: string | null,
  pointConversionRate?: number | null,
};

export type DeleteSponsorInput = {
  id: string,
};

export type CreateSponsorUserInput = {
  id?: string | null,
  username: string,
  role: string,
  sponsorSponsorUsersId?: string | null,
};

export type ModelSponsorUserConditionInput = {
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelSponsorUserConditionInput | null > | null,
  or?: Array< ModelSponsorUserConditionInput | null > | null,
  not?: ModelSponsorUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  sponsorSponsorUsersId?: ModelIDInput | null,
};

export type UpdateSponsorUserInput = {
  id: string,
  username?: string | null,
  role?: string | null,
  sponsorSponsorUsersId?: string | null,
};

export type DeleteSponsorUserInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  pointsValue: number,
  sponsorProductCatalogId?: string | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  pointsValue?: ModelIntInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  sponsorProductCatalogId?: ModelIDInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  pointsValue?: number | null,
  sponsorProductCatalogId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreatePurchaseInput = {
  id?: string | null,
  status: string,
  purchaseDate: string,
  driverPurchasesId?: string | null,
};

export type ModelPurchaseConditionInput = {
  status?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelPurchaseConditionInput | null > | null,
  or?: Array< ModelPurchaseConditionInput | null > | null,
  not?: ModelPurchaseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  driverPurchasesId?: ModelIDInput | null,
};

export type UpdatePurchaseInput = {
  id: string,
  status?: string | null,
  purchaseDate?: string | null,
  driverPurchasesId?: string | null,
};

export type DeletePurchaseInput = {
  id: string,
};

export type CreatePointHistoryInput = {
  id?: string | null,
  date: string,
  pointsChange: number,
  reason: string,
  driverPointHistoryId?: string | null,
};

export type ModelPointHistoryConditionInput = {
  date?: ModelStringInput | null,
  pointsChange?: ModelIntInput | null,
  reason?: ModelStringInput | null,
  and?: Array< ModelPointHistoryConditionInput | null > | null,
  or?: Array< ModelPointHistoryConditionInput | null > | null,
  not?: ModelPointHistoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  driverPointHistoryId?: ModelIDInput | null,
};

export type UpdatePointHistoryInput = {
  id: string,
  date?: string | null,
  pointsChange?: number | null,
  reason?: string | null,
  driverPointHistoryId?: string | null,
};

export type DeletePointHistoryInput = {
  id: string,
};

export type CreateAdministratorInput = {
  id?: string | null,
  username: string,
  administratorProfileId?: string | null,
};

export type ModelAdministratorConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelAdministratorConditionInput | null > | null,
  or?: Array< ModelAdministratorConditionInput | null > | null,
  not?: ModelAdministratorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  administratorProfileId?: ModelIDInput | null,
};

export type UpdateAdministratorInput = {
  id: string,
  username?: string | null,
  administratorProfileId?: string | null,
};

export type DeleteAdministratorInput = {
  id: string,
};

export type CreateAdminProfileInput = {
  id?: string | null,
  contactEmail: string,
  adminProfileAdministratorId?: string | null,
};

export type ModelAdminProfileConditionInput = {
  contactEmail?: ModelStringInput | null,
  and?: Array< ModelAdminProfileConditionInput | null > | null,
  or?: Array< ModelAdminProfileConditionInput | null > | null,
  not?: ModelAdminProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  adminProfileAdministratorId?: ModelIDInput | null,
};

export type UpdateAdminProfileInput = {
  id: string,
  contactEmail?: string | null,
  adminProfileAdministratorId?: string | null,
};

export type DeleteAdminProfileInput = {
  id: string,
};

export type CreateDriverProfileInput = {
  id?: string | null,
  contactEmail: string,
  applicationStatus: string,
  driverProfileDriverId?: string | null,
};

export type ModelDriverProfileConditionInput = {
  contactEmail?: ModelStringInput | null,
  applicationStatus?: ModelStringInput | null,
  and?: Array< ModelDriverProfileConditionInput | null > | null,
  or?: Array< ModelDriverProfileConditionInput | null > | null,
  not?: ModelDriverProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  driverProfileDriverId?: ModelIDInput | null,
};

export type UpdateDriverProfileInput = {
  id: string,
  contactEmail?: string | null,
  applicationStatus?: string | null,
  driverProfileDriverId?: string | null,
};

export type DeleteDriverProfileInput = {
  id: string,
};

export type CreateReportInput = {
  id?: string | null,
  type: string,
  dateRangeStart?: string | null,
  dateRangeEnd?: string | null,
  reportData: string,
  sponsorReportsId?: string | null,
  administratorReportsId?: string | null,
};

export type ModelReportConditionInput = {
  type?: ModelStringInput | null,
  dateRangeStart?: ModelStringInput | null,
  dateRangeEnd?: ModelStringInput | null,
  reportData?: ModelStringInput | null,
  and?: Array< ModelReportConditionInput | null > | null,
  or?: Array< ModelReportConditionInput | null > | null,
  not?: ModelReportConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  sponsorReportsId?: ModelIDInput | null,
  administratorReportsId?: ModelIDInput | null,
};

export type UpdateReportInput = {
  id: string,
  type?: string | null,
  dateRangeStart?: string | null,
  dateRangeEnd?: string | null,
  reportData?: string | null,
  sponsorReportsId?: string | null,
  administratorReportsId?: string | null,
};

export type DeleteReportInput = {
  id: string,
};

export type CreateAuditLogInput = {
  id?: string | null,
  user: string,
  action: string,
  timestamp: string,
  details?: string | null,
};

export type ModelAuditLogConditionInput = {
  user?: ModelStringInput | null,
  action?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  details?: ModelStringInput | null,
  and?: Array< ModelAuditLogConditionInput | null > | null,
  or?: Array< ModelAuditLogConditionInput | null > | null,
  not?: ModelAuditLogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type AuditLog = {
  __typename: "AuditLog",
  id: string,
  user: string,
  action: string,
  timestamp: string,
  details?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAuditLogInput = {
  id: string,
  user?: string | null,
  action?: string | null,
  timestamp?: string | null,
  details?: string | null,
};

export type DeleteAuditLogInput = {
  id: string,
};

export type ModelDriverFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  points?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDriverFilterInput | null > | null,
  or?: Array< ModelDriverFilterInput | null > | null,
  not?: ModelDriverFilterInput | null,
  sponsorDriversId?: ModelIDInput | null,
  driverProfileId?: ModelIDInput | null,
};

export type ModelSponsorFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  pointConversionRate?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSponsorFilterInput | null > | null,
  or?: Array< ModelSponsorFilterInput | null > | null,
  not?: ModelSponsorFilterInput | null,
};

export type ModelSponsorConnection = {
  __typename: "ModelSponsorConnection",
  items:  Array<Sponsor | null >,
  nextToken?: string | null,
};

export type ModelSponsorUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  role?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSponsorUserFilterInput | null > | null,
  or?: Array< ModelSponsorUserFilterInput | null > | null,
  not?: ModelSponsorUserFilterInput | null,
  sponsorSponsorUsersId?: ModelIDInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  pointsValue?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  sponsorProductCatalogId?: ModelIDInput | null,
};

export type ModelPurchaseFilterInput = {
  id?: ModelIDInput | null,
  status?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPurchaseFilterInput | null > | null,
  or?: Array< ModelPurchaseFilterInput | null > | null,
  not?: ModelPurchaseFilterInput | null,
  driverPurchasesId?: ModelIDInput | null,
};

export type ModelPointHistoryFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  pointsChange?: ModelIntInput | null,
  reason?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPointHistoryFilterInput | null > | null,
  or?: Array< ModelPointHistoryFilterInput | null > | null,
  not?: ModelPointHistoryFilterInput | null,
  driverPointHistoryId?: ModelIDInput | null,
};

export type ModelAdministratorFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAdministratorFilterInput | null > | null,
  or?: Array< ModelAdministratorFilterInput | null > | null,
  not?: ModelAdministratorFilterInput | null,
  administratorProfileId?: ModelIDInput | null,
};

export type ModelAdministratorConnection = {
  __typename: "ModelAdministratorConnection",
  items:  Array<Administrator | null >,
  nextToken?: string | null,
};

export type ModelAdminProfileFilterInput = {
  id?: ModelIDInput | null,
  contactEmail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAdminProfileFilterInput | null > | null,
  or?: Array< ModelAdminProfileFilterInput | null > | null,
  not?: ModelAdminProfileFilterInput | null,
  adminProfileAdministratorId?: ModelIDInput | null,
};

export type ModelAdminProfileConnection = {
  __typename: "ModelAdminProfileConnection",
  items:  Array<AdminProfile | null >,
  nextToken?: string | null,
};

export type ModelDriverProfileFilterInput = {
  id?: ModelIDInput | null,
  contactEmail?: ModelStringInput | null,
  applicationStatus?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDriverProfileFilterInput | null > | null,
  or?: Array< ModelDriverProfileFilterInput | null > | null,
  not?: ModelDriverProfileFilterInput | null,
  driverProfileDriverId?: ModelIDInput | null,
};

export type ModelDriverProfileConnection = {
  __typename: "ModelDriverProfileConnection",
  items:  Array<DriverProfile | null >,
  nextToken?: string | null,
};

export type ModelReportFilterInput = {
  id?: ModelIDInput | null,
  type?: ModelStringInput | null,
  dateRangeStart?: ModelStringInput | null,
  dateRangeEnd?: ModelStringInput | null,
  reportData?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
  sponsorReportsId?: ModelIDInput | null,
  administratorReportsId?: ModelIDInput | null,
};

export type ModelAuditLogFilterInput = {
  id?: ModelIDInput | null,
  user?: ModelStringInput | null,
  action?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAuditLogFilterInput | null > | null,
  or?: Array< ModelAuditLogFilterInput | null > | null,
  not?: ModelAuditLogFilterInput | null,
};

export type ModelAuditLogConnection = {
  __typename: "ModelAuditLogConnection",
  items:  Array<AuditLog | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDriverFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverFilterInput | null > | null,
  driverPointHistoryId?: ModelSubscriptionIDInput | null,
  driverPurchasesId?: ModelSubscriptionIDInput | null,
  driverProfileId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSponsorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  pointConversionRate?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSponsorFilterInput | null > | null,
  or?: Array< ModelSubscriptionSponsorFilterInput | null > | null,
  sponsorProductCatalogId?: ModelSubscriptionIDInput | null,
  sponsorDriversId?: ModelSubscriptionIDInput | null,
  sponsorSponsorUsersId?: ModelSubscriptionIDInput | null,
  sponsorReportsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionSponsorUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSponsorUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionSponsorUserFilterInput | null > | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  pointsValue?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
};

export type ModelSubscriptionPurchaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  purchaseDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
  or?: Array< ModelSubscriptionPurchaseFilterInput | null > | null,
};

export type ModelSubscriptionPointHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  date?: ModelSubscriptionStringInput | null,
  pointsChange?: ModelSubscriptionIntInput | null,
  reason?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPointHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionPointHistoryFilterInput | null > | null,
};

export type ModelSubscriptionAdministratorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdministratorFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdministratorFilterInput | null > | null,
  administratorReportsId?: ModelSubscriptionIDInput | null,
  administratorProfileId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionAdminProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminProfileFilterInput | null > | null,
  adminProfileAdministratorId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionDriverProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  applicationStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverProfileFilterInput | null > | null,
  driverProfileDriverId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  dateRangeStart?: ModelSubscriptionStringInput | null,
  dateRangeEnd?: ModelSubscriptionStringInput | null,
  reportData?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionReportFilterInput | null > | null,
};

export type ModelSubscriptionAuditLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  user?: ModelSubscriptionStringInput | null,
  action?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAuditLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionAuditLogFilterInput | null > | null,
};

export type CreateDriverMutationVariables = {
  input: CreateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type CreateDriverMutation = {
  createDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type UpdateDriverMutationVariables = {
  input: UpdateDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type UpdateDriverMutation = {
  updateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type DeleteDriverMutationVariables = {
  input: DeleteDriverInput,
  condition?: ModelDriverConditionInput | null,
};

export type DeleteDriverMutation = {
  deleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type CreateSponsorMutationVariables = {
  input: CreateSponsorInput,
  condition?: ModelSponsorConditionInput | null,
};

export type CreateSponsorMutation = {
  createSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSponsorMutationVariables = {
  input: UpdateSponsorInput,
  condition?: ModelSponsorConditionInput | null,
};

export type UpdateSponsorMutation = {
  updateSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSponsorMutationVariables = {
  input: DeleteSponsorInput,
  condition?: ModelSponsorConditionInput | null,
};

export type DeleteSponsorMutation = {
  deleteSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSponsorUserMutationVariables = {
  input: CreateSponsorUserInput,
  condition?: ModelSponsorUserConditionInput | null,
};

export type CreateSponsorUserMutation = {
  createSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type UpdateSponsorUserMutationVariables = {
  input: UpdateSponsorUserInput,
  condition?: ModelSponsorUserConditionInput | null,
};

export type UpdateSponsorUserMutation = {
  updateSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type DeleteSponsorUserMutationVariables = {
  input: DeleteSponsorUserInput,
  condition?: ModelSponsorUserConditionInput | null,
};

export type DeleteSponsorUserMutation = {
  deleteSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type CreatePurchaseMutationVariables = {
  input: CreatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type CreatePurchaseMutation = {
  createPurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type UpdatePurchaseMutationVariables = {
  input: UpdatePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type UpdatePurchaseMutation = {
  updatePurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type DeletePurchaseMutationVariables = {
  input: DeletePurchaseInput,
  condition?: ModelPurchaseConditionInput | null,
};

export type DeletePurchaseMutation = {
  deletePurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type CreatePointHistoryMutationVariables = {
  input: CreatePointHistoryInput,
  condition?: ModelPointHistoryConditionInput | null,
};

export type CreatePointHistoryMutation = {
  createPointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type UpdatePointHistoryMutationVariables = {
  input: UpdatePointHistoryInput,
  condition?: ModelPointHistoryConditionInput | null,
};

export type UpdatePointHistoryMutation = {
  updatePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type DeletePointHistoryMutationVariables = {
  input: DeletePointHistoryInput,
  condition?: ModelPointHistoryConditionInput | null,
};

export type DeletePointHistoryMutation = {
  deletePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type CreateAdministratorMutationVariables = {
  input: CreateAdministratorInput,
  condition?: ModelAdministratorConditionInput | null,
};

export type CreateAdministratorMutation = {
  createAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type UpdateAdministratorMutationVariables = {
  input: UpdateAdministratorInput,
  condition?: ModelAdministratorConditionInput | null,
};

export type UpdateAdministratorMutation = {
  updateAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type DeleteAdministratorMutationVariables = {
  input: DeleteAdministratorInput,
  condition?: ModelAdministratorConditionInput | null,
};

export type DeleteAdministratorMutation = {
  deleteAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type CreateAdminProfileMutationVariables = {
  input: CreateAdminProfileInput,
  condition?: ModelAdminProfileConditionInput | null,
};

export type CreateAdminProfileMutation = {
  createAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type UpdateAdminProfileMutationVariables = {
  input: UpdateAdminProfileInput,
  condition?: ModelAdminProfileConditionInput | null,
};

export type UpdateAdminProfileMutation = {
  updateAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type DeleteAdminProfileMutationVariables = {
  input: DeleteAdminProfileInput,
  condition?: ModelAdminProfileConditionInput | null,
};

export type DeleteAdminProfileMutation = {
  deleteAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type CreateDriverProfileMutationVariables = {
  input: CreateDriverProfileInput,
  condition?: ModelDriverProfileConditionInput | null,
};

export type CreateDriverProfileMutation = {
  createDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type UpdateDriverProfileMutationVariables = {
  input: UpdateDriverProfileInput,
  condition?: ModelDriverProfileConditionInput | null,
};

export type UpdateDriverProfileMutation = {
  updateDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type DeleteDriverProfileMutationVariables = {
  input: DeleteDriverProfileInput,
  condition?: ModelDriverProfileConditionInput | null,
};

export type DeleteDriverProfileMutation = {
  deleteDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type CreateReportMutation = {
  createReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
  condition?: ModelReportConditionInput | null,
};

export type UpdateReportMutation = {
  updateReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
  condition?: ModelReportConditionInput | null,
};

export type DeleteReportMutation = {
  deleteReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type CreateAuditLogMutationVariables = {
  input: CreateAuditLogInput,
  condition?: ModelAuditLogConditionInput | null,
};

export type CreateAuditLogMutation = {
  createAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuditLogMutationVariables = {
  input: UpdateAuditLogInput,
  condition?: ModelAuditLogConditionInput | null,
};

export type UpdateAuditLogMutation = {
  updateAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuditLogMutationVariables = {
  input: DeleteAuditLogInput,
  condition?: ModelAuditLogConditionInput | null,
};

export type DeleteAuditLogMutation = {
  deleteAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDriverQueryVariables = {
  id: string,
};

export type GetDriverQuery = {
  getDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type ListDriversQueryVariables = {
  filter?: ModelDriverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriversQuery = {
  listDrivers?:  {
    __typename: "ModelDriverConnection",
    items:  Array< {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSponsorQueryVariables = {
  id: string,
};

export type GetSponsorQuery = {
  getSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSponsorsQueryVariables = {
  filter?: ModelSponsorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSponsorsQuery = {
  listSponsors?:  {
    __typename: "ModelSponsorConnection",
    items:  Array< {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSponsorUserQueryVariables = {
  id: string,
};

export type GetSponsorUserQuery = {
  getSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type ListSponsorUsersQueryVariables = {
  filter?: ModelSponsorUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSponsorUsersQuery = {
  listSponsorUsers?:  {
    __typename: "ModelSponsorUserConnection",
    items:  Array< {
      __typename: "SponsorUser",
      id: string,
      username: string,
      role: string,
      createdAt: string,
      updatedAt: string,
      sponsorSponsorUsersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      sponsorProductCatalogId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPurchaseQueryVariables = {
  id: string,
};

export type GetPurchaseQuery = {
  getPurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type ListPurchasesQueryVariables = {
  filter?: ModelPurchaseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPurchasesQuery = {
  listPurchases?:  {
    __typename: "ModelPurchaseConnection",
    items:  Array< {
      __typename: "Purchase",
      id: string,
      status: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
      driverPurchasesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPointHistoryQueryVariables = {
  id: string,
};

export type GetPointHistoryQuery = {
  getPointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type ListPointHistoriesQueryVariables = {
  filter?: ModelPointHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPointHistoriesQuery = {
  listPointHistories?:  {
    __typename: "ModelPointHistoryConnection",
    items:  Array< {
      __typename: "PointHistory",
      id: string,
      date: string,
      pointsChange: number,
      reason: string,
      createdAt: string,
      updatedAt: string,
      driverPointHistoryId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdministratorQueryVariables = {
  id: string,
};

export type GetAdministratorQuery = {
  getAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type ListAdministratorsQueryVariables = {
  filter?: ModelAdministratorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdministratorsQuery = {
  listAdministrators?:  {
    __typename: "ModelAdministratorConnection",
    items:  Array< {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAdminProfileQueryVariables = {
  id: string,
};

export type GetAdminProfileQuery = {
  getAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type ListAdminProfilesQueryVariables = {
  filter?: ModelAdminProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdminProfilesQuery = {
  listAdminProfiles?:  {
    __typename: "ModelAdminProfileConnection",
    items:  Array< {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDriverProfileQueryVariables = {
  id: string,
};

export type GetDriverProfileQuery = {
  getDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type ListDriverProfilesQueryVariables = {
  filter?: ModelDriverProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDriverProfilesQuery = {
  listDriverProfiles?:  {
    __typename: "ModelDriverProfileConnection",
    items:  Array< {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports?:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      type: string,
      dateRangeStart?: string | null,
      dateRangeEnd?: string | null,
      reportData: string,
      createdAt: string,
      updatedAt: string,
      sponsorReportsId?: string | null,
      administratorReportsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAuditLogQueryVariables = {
  id: string,
};

export type GetAuditLogQuery = {
  getAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuditLogsQueryVariables = {
  filter?: ModelAuditLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuditLogsQuery = {
  listAuditLogs?:  {
    __typename: "ModelAuditLogConnection",
    items:  Array< {
      __typename: "AuditLog",
      id: string,
      user: string,
      action: string,
      timestamp: string,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnCreateDriverSubscription = {
  onCreateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type OnUpdateDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnUpdateDriverSubscription = {
  onUpdateDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type OnDeleteDriverSubscriptionVariables = {
  filter?: ModelSubscriptionDriverFilterInput | null,
};

export type OnDeleteDriverSubscription = {
  onDeleteDriver?:  {
    __typename: "Driver",
    id: string,
    name: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points: number,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    profile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      driverProfileDriverId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorDriversId?: string | null,
    driverProfileId?: string | null,
  } | null,
};

export type OnCreateSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorFilterInput | null,
};

export type OnCreateSponsorSubscription = {
  onCreateSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorFilterInput | null,
};

export type OnUpdateSponsorSubscription = {
  onUpdateSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSponsorSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorFilterInput | null,
};

export type OnDeleteSponsorSubscription = {
  onDeleteSponsor?:  {
    __typename: "Sponsor",
    id: string,
    name: string,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    drivers?:  {
      __typename: "ModelDriverConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate: number,
    sponsorUsers?:  {
      __typename: "ModelSponsorUserConnection",
      nextToken?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSponsorUserSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorUserFilterInput | null,
};

export type OnCreateSponsorUserSubscription = {
  onCreateSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type OnUpdateSponsorUserSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorUserFilterInput | null,
};

export type OnUpdateSponsorUserSubscription = {
  onUpdateSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type OnDeleteSponsorUserSubscriptionVariables = {
  filter?: ModelSubscriptionSponsorUserFilterInput | null,
};

export type OnDeleteSponsorUserSubscription = {
  onDeleteSponsorUser?:  {
    __typename: "SponsorUser",
    id: string,
    username: string,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    role: string,
    createdAt: string,
    updatedAt: string,
    sponsorSponsorUsersId?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    price: number,
    pointsValue: number,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorProductCatalogId?: string | null,
  } | null,
};

export type OnCreatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnCreatePurchaseSubscription = {
  onCreatePurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type OnUpdatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnUpdatePurchaseSubscription = {
  onUpdatePurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type OnDeletePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnDeletePurchaseSubscription = {
  onDeletePurchase?:  {
    __typename: "Purchase",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    driverPurchasesId?: string | null,
  } | null,
};

export type OnCreatePointHistorySubscriptionVariables = {
  filter?: ModelSubscriptionPointHistoryFilterInput | null,
};

export type OnCreatePointHistorySubscription = {
  onCreatePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type OnUpdatePointHistorySubscriptionVariables = {
  filter?: ModelSubscriptionPointHistoryFilterInput | null,
};

export type OnUpdatePointHistorySubscription = {
  onUpdatePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type OnDeletePointHistorySubscriptionVariables = {
  filter?: ModelSubscriptionPointHistoryFilterInput | null,
};

export type OnDeletePointHistorySubscription = {
  onDeletePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    driverPointHistoryId?: string | null,
  } | null,
};

export type OnCreateAdministratorSubscriptionVariables = {
  filter?: ModelSubscriptionAdministratorFilterInput | null,
};

export type OnCreateAdministratorSubscription = {
  onCreateAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type OnUpdateAdministratorSubscriptionVariables = {
  filter?: ModelSubscriptionAdministratorFilterInput | null,
};

export type OnUpdateAdministratorSubscription = {
  onUpdateAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type OnDeleteAdministratorSubscriptionVariables = {
  filter?: ModelSubscriptionAdministratorFilterInput | null,
};

export type OnDeleteAdministratorSubscription = {
  onDeleteAdministrator?:  {
    __typename: "Administrator",
    id: string,
    username: string,
    profile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileAdministratorId?: string | null,
    } | null,
    reports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    administratorProfileId?: string | null,
  } | null,
};

export type OnCreateAdminProfileSubscriptionVariables = {
  filter?: ModelSubscriptionAdminProfileFilterInput | null,
};

export type OnCreateAdminProfileSubscription = {
  onCreateAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type OnUpdateAdminProfileSubscriptionVariables = {
  filter?: ModelSubscriptionAdminProfileFilterInput | null,
};

export type OnUpdateAdminProfileSubscription = {
  onUpdateAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type OnDeleteAdminProfileSubscriptionVariables = {
  filter?: ModelSubscriptionAdminProfileFilterInput | null,
};

export type OnDeleteAdminProfileSubscription = {
  onDeleteAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    administrator?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileAdministratorId?: string | null,
  } | null,
};

export type OnCreateDriverProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDriverProfileFilterInput | null,
};

export type OnCreateDriverProfileSubscription = {
  onCreateDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type OnUpdateDriverProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDriverProfileFilterInput | null,
};

export type OnUpdateDriverProfileSubscription = {
  onUpdateDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type OnDeleteDriverProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDriverProfileFilterInput | null,
};

export type OnDeleteDriverProfileSubscription = {
  onDeleteDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    driver?:  {
      __typename: "Driver",
      id: string,
      name: string,
      points: number,
      createdAt: string,
      updatedAt: string,
      sponsorDriversId?: string | null,
      driverProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    driverProfileDriverId?: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnCreateReportSubscription = {
  onCreateReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnUpdateReportSubscription = {
  onUpdateReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type OnDeleteReportSubscriptionVariables = {
  filter?: ModelSubscriptionReportFilterInput | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport?:  {
    __typename: "Report",
    id: string,
    type: string,
    generatedBy?:  {
      __typename: "Administrator",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
      administratorProfileId?: string | null,
    } | null,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    dateRangeStart?: string | null,
    dateRangeEnd?: string | null,
    reportData: string,
    createdAt: string,
    updatedAt: string,
    sponsorReportsId?: string | null,
    administratorReportsId?: string | null,
  } | null,
};

export type OnCreateAuditLogSubscriptionVariables = {
  filter?: ModelSubscriptionAuditLogFilterInput | null,
};

export type OnCreateAuditLogSubscription = {
  onCreateAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuditLogSubscriptionVariables = {
  filter?: ModelSubscriptionAuditLogFilterInput | null,
};

export type OnUpdateAuditLogSubscription = {
  onUpdateAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuditLogSubscriptionVariables = {
  filter?: ModelSubscriptionAuditLogFilterInput | null,
};

export type OnDeleteAuditLogSubscription = {
  onDeleteAuditLog?:  {
    __typename: "AuditLog",
    id: string,
    user: string,
    action: string,
    timestamp: string,
    details?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
