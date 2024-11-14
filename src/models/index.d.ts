import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserRole {
  ADMIN = "ADMIN",
  DRIVER = "DRIVER",
  SPONSOR = "SPONSOR"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly role: UserRole | keyof typeof UserRole;
  readonly sponsor?: Sponsor | null;
  readonly points?: number | null;
  readonly pointHistory?: (PointHistory | null)[] | null;
  readonly driverProfile?: DriverProfile | null;
  readonly purchases?: (Purchase | null)[] | null;
  readonly adminProfile?: AdminProfile | null;
  readonly adminReports?: (Report | null)[] | null;
  readonly sponsoredDrivers?: (DriverProfile | null)[] | null;
  readonly productCatalog?: (Product | null)[] | null;
  readonly pointConversionRate?: number | null;
  readonly sponsorReports?: (Report | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorUsersId?: string | null;
  readonly userDriverProfileId?: string | null;
  readonly userAdminProfileId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly role: UserRole | keyof typeof UserRole;
  readonly sponsor: AsyncItem<Sponsor | undefined>;
  readonly points?: number | null;
  readonly pointHistory: AsyncCollection<PointHistory>;
  readonly driverProfile: AsyncItem<DriverProfile | undefined>;
  readonly purchases: AsyncCollection<Purchase>;
  readonly adminProfile: AsyncItem<AdminProfile | undefined>;
  readonly adminReports: AsyncCollection<Report>;
  readonly sponsoredDrivers: AsyncCollection<DriverProfile>;
  readonly productCatalog: AsyncCollection<Product>;
  readonly pointConversionRate?: number | null;
  readonly sponsorReports: AsyncCollection<Report>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorUsersId?: string | null;
  readonly userDriverProfileId?: string | null;
  readonly userAdminProfileId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerSponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly productCatalog?: (Product | null)[] | null;
  readonly pointConversionRate: number;
  readonly users?: (User | null)[] | null;
  readonly reports?: (Report | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySponsor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sponsor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly productCatalog: AsyncCollection<Product>;
  readonly pointConversionRate: number;
  readonly users: AsyncCollection<User>;
  readonly reports: AsyncCollection<Report>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sponsor = LazyLoading extends LazyLoadingDisabled ? EagerSponsor : LazySponsor

export declare const Sponsor: (new (init: ModelInit<Sponsor>) => Sponsor) & {
  copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor>) => MutableModel<Sponsor> | void): Sponsor;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly pointsValue: number;
  readonly purchases?: (Purchase | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProductCatalogId?: string | null;
  readonly sponsorProductCatalogId?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly pointsValue: number;
  readonly purchases: AsyncCollection<Purchase>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProductCatalogId?: string | null;
  readonly sponsorProductCatalogId?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerPurchase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Purchase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly product?: Product | null;
  readonly productID: string;
  readonly status: string;
  readonly purchaseDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPurchasesId?: string | null;
  readonly productPurchasesId?: string | null;
}

type LazyPurchase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Purchase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly product: AsyncItem<Product | undefined>;
  readonly productID: string;
  readonly status: string;
  readonly purchaseDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPurchasesId?: string | null;
  readonly productPurchasesId?: string | null;
}

export declare type Purchase = LazyLoading extends LazyLoadingDisabled ? EagerPurchase : LazyPurchase

export declare const Purchase: (new (init: ModelInit<Purchase>) => Purchase) & {
  copyOf(source: Purchase, mutator: (draft: MutableModel<Purchase>) => MutableModel<Purchase> | void): Purchase;
}

type EagerPointHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PointHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly date: string;
  readonly pointsChange: number;
  readonly reason: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPointHistoryId?: string | null;
}

type LazyPointHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PointHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly date: string;
  readonly pointsChange: number;
  readonly reason: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPointHistoryId?: string | null;
}

export declare type PointHistory = LazyLoading extends LazyLoadingDisabled ? EagerPointHistory : LazyPointHistory

export declare const PointHistory: (new (init: ModelInit<PointHistory>) => PointHistory) & {
  copyOf(source: PointHistory, mutator: (draft: MutableModel<PointHistory>) => MutableModel<PointHistory> | void): PointHistory;
}

type EagerAdminProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdminProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly contactEmail: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminProfileUserId?: string | null;
}

type LazyAdminProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdminProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly contactEmail: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly adminProfileUserId?: string | null;
}

export declare type AdminProfile = LazyLoading extends LazyLoadingDisabled ? EagerAdminProfile : LazyAdminProfile

export declare const AdminProfile: (new (init: ModelInit<AdminProfile>) => AdminProfile) & {
  copyOf(source: AdminProfile, mutator: (draft: MutableModel<AdminProfile>) => MutableModel<AdminProfile> | void): AdminProfile;
}

type EagerDriverProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly contactEmail: string;
  readonly applicationStatus: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSponsoredDriversId?: string | null;
  readonly driverProfileUserId?: string | null;
}

type LazyDriverProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly contactEmail: string;
  readonly applicationStatus: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSponsoredDriversId?: string | null;
  readonly driverProfileUserId?: string | null;
}

export declare type DriverProfile = LazyLoading extends LazyLoadingDisabled ? EagerDriverProfile : LazyDriverProfile

export declare const DriverProfile: (new (init: ModelInit<DriverProfile>) => DriverProfile) & {
  copyOf(source: DriverProfile, mutator: (draft: MutableModel<DriverProfile>) => MutableModel<DriverProfile> | void): DriverProfile;
}

type EagerReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly generatedBy?: User | null;
  readonly sponsor?: Sponsor | null;
  readonly dateRangeStart?: string | null;
  readonly dateRangeEnd?: string | null;
  readonly reportData: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAdminReportsId?: string | null;
  readonly userSponsorReportsId?: string | null;
  readonly sponsorReportsId?: string | null;
}

type LazyReport = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Report, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly generatedBy: AsyncItem<User | undefined>;
  readonly sponsor: AsyncItem<Sponsor | undefined>;
  readonly dateRangeStart?: string | null;
  readonly dateRangeEnd?: string | null;
  readonly reportData: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userAdminReportsId?: string | null;
  readonly userSponsorReportsId?: string | null;
  readonly sponsorReportsId?: string | null;
}

export declare type Report = LazyLoading extends LazyLoadingDisabled ? EagerReport : LazyReport

export declare const Report: (new (init: ModelInit<Report>) => Report) & {
  copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}

type EagerAuditLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuditLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: string;
  readonly action: string;
  readonly timestamp: string;
  readonly details?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAuditLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AuditLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: string;
  readonly action: string;
  readonly timestamp: string;
  readonly details?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AuditLog = LazyLoading extends LazyLoadingDisabled ? EagerAuditLog : LazyAuditLog

export declare const AuditLog: (new (init: ModelInit<AuditLog>) => AuditLog) & {
  copyOf(source: AuditLog, mutator: (draft: MutableModel<AuditLog>) => MutableModel<AuditLog> | void): AuditLog;
<<<<<<< Updated upstream
}

type EagerCartItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trackId: number;
  readonly name: string;
  readonly artist?: string | null;
  readonly price?: number | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCartItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CartItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly trackId: number;
  readonly name: string;
  readonly artist?: string | null;
  readonly price?: number | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CartItem = LazyLoading extends LazyLoadingDisabled ? EagerCartItem : LazyCartItem

export declare const CartItem: (new (init: ModelInit<CartItem>) => CartItem) & {
  copyOf(source: CartItem, mutator: (draft: MutableModel<CartItem>) => MutableModel<CartItem> | void): CartItem;
=======
>>>>>>> Stashed changes
}