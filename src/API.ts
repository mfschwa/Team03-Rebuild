/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBlogInput = {
  id?: string | null,
  name: string,
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelBlogConditionInput | null > | null,
  or?: Array< ModelBlogConditionInput | null > | null,
  not?: ModelBlogConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type Blog = {
  __typename: "Blog",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  blog?: Blog | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  blogPostsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  content: string,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
};

export type UpdateBlogInput = {
  id: string,
  name?: string | null,
};

export type DeleteBlogInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  blogPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  blogPostsId?: ModelIDInput | null,
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

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  blogPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postCommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  role: UserRole,
  points?: number | null,
  pointConversionRate?: number | null,
  sponsorUsersId?: string | null,
  userDriverProfileId?: string | null,
  userAdminProfileId?: string | null,
};

export enum UserRole {
  ADMIN = "ADMIN",
  DRIVER = "DRIVER",
  SPONSOR = "SPONSOR",
}


export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  points?: ModelIntInput | null,
  pointConversionRate?: ModelFloatInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  sponsorUsersId?: ModelIDInput | null,
  userDriverProfileId?: ModelIDInput | null,
  userAdminProfileId?: ModelIDInput | null,
};

export type ModelUserRoleInput = {
  eq?: UserRole | null,
  ne?: UserRole | null,
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

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email: string,
  role: UserRole,
  sponsor?: Sponsor | null,
  points?: number | null,
  pointHistory?: ModelPointHistoryConnection | null,
  driverProfile?: DriverProfile | null,
  purchases?: ModelPurchaseConnection | null,
  adminProfile?: AdminProfile | null,
  adminReports?: ModelReportConnection | null,
  sponsoredDrivers?: ModelDriverProfileConnection | null,
  productCatalog?: ModelProductConnection | null,
  pointConversionRate?: number | null,
  sponsorReports?: ModelReportConnection | null,
  createdAt: string,
  updatedAt: string,
  sponsorUsersId?: string | null,
  userDriverProfileId?: string | null,
  userAdminProfileId?: string | null,
};

export type Sponsor = {
  __typename: "Sponsor",
  id: string,
  name: string,
  productCatalog?: ModelProductConnection | null,
  pointConversionRate: number,
  users?: ModelUserConnection | null,
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
  purchases?: ModelPurchaseConnection | null,
  createdAt: string,
  updatedAt: string,
  userProductCatalogId?: string | null,
  sponsorProductCatalogId?: string | null,
};

export type ModelPurchaseConnection = {
  __typename: "ModelPurchaseConnection",
  items:  Array<Purchase | null >,
  nextToken?: string | null,
};

export type Purchase = {
  __typename: "Purchase",
  id: string,
  user?: User | null,
  product?: Product | null,
  productID: string,
  status: string,
  purchaseDate: string,
  createdAt: string,
  updatedAt: string,
  userPurchasesId?: string | null,
  productPurchasesId?: string | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
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
  generatedBy?: User | null,
  sponsor?: Sponsor | null,
  dateRangeStart?: string | null,
  dateRangeEnd?: string | null,
  reportData: string,
  createdAt: string,
  updatedAt: string,
  userAdminReportsId?: string | null,
  userSponsorReportsId?: string | null,
  sponsorReportsId?: string | null,
};

export type ModelPointHistoryConnection = {
  __typename: "ModelPointHistoryConnection",
  items:  Array<PointHistory | null >,
  nextToken?: string | null,
};

export type PointHistory = {
  __typename: "PointHistory",
  id: string,
  user?: User | null,
  date: string,
  pointsChange: number,
  reason: string,
  createdAt: string,
  updatedAt: string,
  userPointHistoryId?: string | null,
};

export type DriverProfile = {
  __typename: "DriverProfile",
  id: string,
  user?: User | null,
  contactEmail: string,
  applicationStatus: string,
  createdAt: string,
  updatedAt: string,
  userSponsoredDriversId?: string | null,
  driverProfileUserId?: string | null,
};

export type AdminProfile = {
  __typename: "AdminProfile",
  id: string,
  user?: User | null,
  contactEmail: string,
  createdAt: string,
  updatedAt: string,
  adminProfileUserId?: string | null,
};

export type ModelDriverProfileConnection = {
  __typename: "ModelDriverProfileConnection",
  items:  Array<DriverProfile | null >,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  role?: UserRole | null,
  points?: number | null,
  pointConversionRate?: number | null,
  sponsorUsersId?: string | null,
  userDriverProfileId?: string | null,
  userAdminProfileId?: string | null,
};

export type DeleteUserInput = {
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

export type UpdateSponsorInput = {
  id: string,
  name?: string | null,
  pointConversionRate?: number | null,
};

export type DeleteSponsorInput = {
  id: string,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  price: number,
  pointsValue: number,
  userProductCatalogId?: string | null,
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
  userProductCatalogId?: ModelIDInput | null,
  sponsorProductCatalogId?: ModelIDInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  pointsValue?: number | null,
  userProductCatalogId?: string | null,
  sponsorProductCatalogId?: string | null,
};

export type DeleteProductInput = {
  id: string,
};

export type CreatePurchaseInput = {
  id?: string | null,
  productID: string,
  status: string,
  purchaseDate: string,
  userPurchasesId?: string | null,
  productPurchasesId?: string | null,
};

export type ModelPurchaseConditionInput = {
  productID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  and?: Array< ModelPurchaseConditionInput | null > | null,
  or?: Array< ModelPurchaseConditionInput | null > | null,
  not?: ModelPurchaseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userPurchasesId?: ModelIDInput | null,
  productPurchasesId?: ModelIDInput | null,
};

export type UpdatePurchaseInput = {
  id: string,
  productID?: string | null,
  status?: string | null,
  purchaseDate?: string | null,
  userPurchasesId?: string | null,
  productPurchasesId?: string | null,
};

export type DeletePurchaseInput = {
  id: string,
};

export type CreatePointHistoryInput = {
  id?: string | null,
  date: string,
  pointsChange: number,
  reason: string,
  userPointHistoryId?: string | null,
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
  userPointHistoryId?: ModelIDInput | null,
};

export type UpdatePointHistoryInput = {
  id: string,
  date?: string | null,
  pointsChange?: number | null,
  reason?: string | null,
  userPointHistoryId?: string | null,
};

export type DeletePointHistoryInput = {
  id: string,
};

export type CreateAdminProfileInput = {
  id?: string | null,
  contactEmail: string,
  adminProfileUserId?: string | null,
};

export type ModelAdminProfileConditionInput = {
  contactEmail?: ModelStringInput | null,
  and?: Array< ModelAdminProfileConditionInput | null > | null,
  or?: Array< ModelAdminProfileConditionInput | null > | null,
  not?: ModelAdminProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  adminProfileUserId?: ModelIDInput | null,
};

export type UpdateAdminProfileInput = {
  id: string,
  contactEmail?: string | null,
  adminProfileUserId?: string | null,
};

export type DeleteAdminProfileInput = {
  id: string,
};

export type CreateDriverProfileInput = {
  id?: string | null,
  contactEmail: string,
  applicationStatus: string,
  userSponsoredDriversId?: string | null,
  driverProfileUserId?: string | null,
};

export type ModelDriverProfileConditionInput = {
  contactEmail?: ModelStringInput | null,
  applicationStatus?: ModelStringInput | null,
  and?: Array< ModelDriverProfileConditionInput | null > | null,
  or?: Array< ModelDriverProfileConditionInput | null > | null,
  not?: ModelDriverProfileConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userSponsoredDriversId?: ModelIDInput | null,
  driverProfileUserId?: ModelIDInput | null,
};

export type UpdateDriverProfileInput = {
  id: string,
  contactEmail?: string | null,
  applicationStatus?: string | null,
  userSponsoredDriversId?: string | null,
  driverProfileUserId?: string | null,
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
  userAdminReportsId?: string | null,
  userSponsorReportsId?: string | null,
  sponsorReportsId?: string | null,
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
  userAdminReportsId?: ModelIDInput | null,
  userSponsorReportsId?: ModelIDInput | null,
  sponsorReportsId?: ModelIDInput | null,
};

export type UpdateReportInput = {
  id: string,
  type?: string | null,
  dateRangeStart?: string | null,
  dateRangeEnd?: string | null,
  reportData?: string | null,
  userAdminReportsId?: string | null,
  userSponsorReportsId?: string | null,
  sponsorReportsId?: string | null,
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

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBlogFilterInput | null > | null,
  or?: Array< ModelBlogFilterInput | null > | null,
  not?: ModelBlogFilterInput | null,
};

export type ModelBlogConnection = {
  __typename: "ModelBlogConnection",
  items:  Array<Blog | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  blogPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelUserRoleInput | null,
  points?: ModelIntInput | null,
  pointConversionRate?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  sponsorUsersId?: ModelIDInput | null,
  userDriverProfileId?: ModelIDInput | null,
  userAdminProfileId?: ModelIDInput | null,
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
  userProductCatalogId?: ModelIDInput | null,
  sponsorProductCatalogId?: ModelIDInput | null,
};

export type ModelPurchaseFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  purchaseDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPurchaseFilterInput | null > | null,
  or?: Array< ModelPurchaseFilterInput | null > | null,
  not?: ModelPurchaseFilterInput | null,
  userPurchasesId?: ModelIDInput | null,
  productPurchasesId?: ModelIDInput | null,
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
  userPointHistoryId?: ModelIDInput | null,
};

export type ModelAdminProfileFilterInput = {
  id?: ModelIDInput | null,
  contactEmail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAdminProfileFilterInput | null > | null,
  or?: Array< ModelAdminProfileFilterInput | null > | null,
  not?: ModelAdminProfileFilterInput | null,
  adminProfileUserId?: ModelIDInput | null,
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
  userSponsoredDriversId?: ModelIDInput | null,
  driverProfileUserId?: ModelIDInput | null,
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
  userAdminReportsId?: ModelIDInput | null,
  userSponsorReportsId?: ModelIDInput | null,
  sponsorReportsId?: ModelIDInput | null,
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

export type ModelSubscriptionBlogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  or?: Array< ModelSubscriptionBlogFilterInput | null > | null,
  blogPostsId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
  postCommentsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  points?: ModelSubscriptionIntInput | null,
  pointConversionRate?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  userPointHistoryId?: ModelSubscriptionIDInput | null,
  userPurchasesId?: ModelSubscriptionIDInput | null,
  userAdminReportsId?: ModelSubscriptionIDInput | null,
  userSponsoredDriversId?: ModelSubscriptionIDInput | null,
  userProductCatalogId?: ModelSubscriptionIDInput | null,
  userSponsorReportsId?: ModelSubscriptionIDInput | null,
  userDriverProfileId?: ModelSubscriptionIDInput | null,
  userAdminProfileId?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionSponsorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  pointConversionRate?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSponsorFilterInput | null > | null,
  or?: Array< ModelSubscriptionSponsorFilterInput | null > | null,
  sponsorProductCatalogId?: ModelSubscriptionIDInput | null,
  sponsorUsersId?: ModelSubscriptionIDInput | null,
  sponsorReportsId?: ModelSubscriptionIDInput | null,
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
  productPurchasesId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionPurchaseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productID?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionAdminProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAdminProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdminProfileFilterInput | null > | null,
  adminProfileUserId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionDriverProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  contactEmail?: ModelSubscriptionStringInput | null,
  applicationStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDriverProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionDriverProfileFilterInput | null > | null,
  driverProfileUserId?: ModelSubscriptionIDInput | null,
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

export type CreateBlogMutationVariables = {
  input: CreateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type CreateBlogMutation = {
  createBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBlogMutationVariables = {
  input: UpdateBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type UpdateBlogMutation = {
  updateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBlogMutationVariables = {
  input: DeleteBlogInput,
  condition?: ModelBlogConditionInput | null,
};

export type DeleteBlogMutation = {
  deleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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

export type GetBlogQueryVariables = {
  id: string,
};

export type GetBlogQuery = {
  getBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBlogsQueryVariables = {
  filter?: ModelBlogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlogsQuery = {
  listBlogs?:  {
    __typename: "ModelBlogConnection",
    items:  Array< {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
      userProductCatalogId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
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
      productID: string,
      status: string,
      purchaseDate: string,
      createdAt: string,
      updatedAt: string,
      userPurchasesId?: string | null,
      productPurchasesId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
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
      userPointHistoryId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
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
      adminProfileUserId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
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
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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
      userAdminReportsId?: string | null,
      userSponsorReportsId?: string | null,
      sponsorReportsId?: string | null,
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

export type OnCreateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnCreateBlogSubscription = {
  onCreateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnUpdateBlogSubscription = {
  onUpdateBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBlogSubscriptionVariables = {
  filter?: ModelSubscriptionBlogFilterInput | null,
};

export type OnDeleteBlogSubscription = {
  onDeleteBlog?:  {
    __typename: "Blog",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    blog?:  {
      __typename: "Blog",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    blogPostsId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      createdAt: string,
      updatedAt: string,
      blogPostsId?: string | null,
    } | null,
    content: string,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    role: UserRole,
    sponsor?:  {
      __typename: "Sponsor",
      id: string,
      name: string,
      pointConversionRate: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    points?: number | null,
    pointHistory?:  {
      __typename: "ModelPointHistoryConnection",
      nextToken?: string | null,
    } | null,
    driverProfile?:  {
      __typename: "DriverProfile",
      id: string,
      contactEmail: string,
      applicationStatus: string,
      createdAt: string,
      updatedAt: string,
      userSponsoredDriversId?: string | null,
      driverProfileUserId?: string | null,
    } | null,
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    adminProfile?:  {
      __typename: "AdminProfile",
      id: string,
      contactEmail: string,
      createdAt: string,
      updatedAt: string,
      adminProfileUserId?: string | null,
    } | null,
    adminReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    sponsoredDrivers?:  {
      __typename: "ModelDriverProfileConnection",
      nextToken?: string | null,
    } | null,
    productCatalog?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
    } | null,
    pointConversionRate?: number | null,
    sponsorReports?:  {
      __typename: "ModelReportConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    sponsorUsersId?: string | null,
    userDriverProfileId?: string | null,
    userAdminProfileId?: string | null,
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    pointConversionRate: number,
    users?:  {
      __typename: "ModelUserConnection",
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
    purchases?:  {
      __typename: "ModelPurchaseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    userProductCatalogId?: string | null,
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
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
  } | null,
};

export type OnUpdatePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnUpdatePurchaseSubscription = {
  onUpdatePurchase?:  {
    __typename: "Purchase",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
  } | null,
};

export type OnDeletePurchaseSubscriptionVariables = {
  filter?: ModelSubscriptionPurchaseFilterInput | null,
};

export type OnDeletePurchaseSubscription = {
  onDeletePurchase?:  {
    __typename: "Purchase",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    product?:  {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      price: number,
      pointsValue: number,
      createdAt: string,
      updatedAt: string,
      userProductCatalogId?: string | null,
      sponsorProductCatalogId?: string | null,
    } | null,
    productID: string,
    status: string,
    purchaseDate: string,
    createdAt: string,
    updatedAt: string,
    userPurchasesId?: string | null,
    productPurchasesId?: string | null,
  } | null,
};

export type OnCreatePointHistorySubscriptionVariables = {
  filter?: ModelSubscriptionPointHistoryFilterInput | null,
};

export type OnCreatePointHistorySubscription = {
  onCreatePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
  } | null,
};

export type OnUpdatePointHistorySubscriptionVariables = {
  filter?: ModelSubscriptionPointHistoryFilterInput | null,
};

export type OnUpdatePointHistorySubscription = {
  onUpdatePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
  } | null,
};

export type OnDeletePointHistorySubscriptionVariables = {
  filter?: ModelSubscriptionPointHistoryFilterInput | null,
};

export type OnDeletePointHistorySubscription = {
  onDeletePointHistory?:  {
    __typename: "PointHistory",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    date: string,
    pointsChange: number,
    reason: string,
    createdAt: string,
    updatedAt: string,
    userPointHistoryId?: string | null,
  } | null,
};

export type OnCreateAdminProfileSubscriptionVariables = {
  filter?: ModelSubscriptionAdminProfileFilterInput | null,
};

export type OnCreateAdminProfileSubscription = {
  onCreateAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
  } | null,
};

export type OnUpdateAdminProfileSubscriptionVariables = {
  filter?: ModelSubscriptionAdminProfileFilterInput | null,
};

export type OnUpdateAdminProfileSubscription = {
  onUpdateAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
  } | null,
};

export type OnDeleteAdminProfileSubscriptionVariables = {
  filter?: ModelSubscriptionAdminProfileFilterInput | null,
};

export type OnDeleteAdminProfileSubscription = {
  onDeleteAdminProfile?:  {
    __typename: "AdminProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    createdAt: string,
    updatedAt: string,
    adminProfileUserId?: string | null,
  } | null,
};

export type OnCreateDriverProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDriverProfileFilterInput | null,
};

export type OnCreateDriverProfileSubscription = {
  onCreateDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
  } | null,
};

export type OnUpdateDriverProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDriverProfileFilterInput | null,
};

export type OnUpdateDriverProfileSubscription = {
  onUpdateDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
  } | null,
};

export type OnDeleteDriverProfileSubscriptionVariables = {
  filter?: ModelSubscriptionDriverProfileFilterInput | null,
};

export type OnDeleteDriverProfileSubscription = {
  onDeleteDriverProfile?:  {
    __typename: "DriverProfile",
    id: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
    } | null,
    contactEmail: string,
    applicationStatus: string,
    createdAt: string,
    updatedAt: string,
    userSponsoredDriversId?: string | null,
    driverProfileUserId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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
      __typename: "User",
      id: string,
      username: string,
      email: string,
      role: UserRole,
      points?: number | null,
      pointConversionRate?: number | null,
      createdAt: string,
      updatedAt: string,
      sponsorUsersId?: string | null,
      userDriverProfileId?: string | null,
      userAdminProfileId?: string | null,
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
    userAdminReportsId?: string | null,
    userSponsorReportsId?: string | null,
    sponsorReportsId?: string | null,
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
