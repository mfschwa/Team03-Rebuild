// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserRole = {
  "ADMIN": "ADMIN",
  "DRIVER": "DRIVER",
  "SPONSOR": "SPONSOR"
};

const { User, Sponsor, Product, Purchase, PointHistory, AdminProfile, DriverProfile, Report, AuditLog, CartItem } = initSchema(schema);

export {
  User,
  Sponsor,
  Product,
  Purchase,
  PointHistory,
  AdminProfile,
  DriverProfile,
  Report,
  AuditLog,
  CartItem,
  UserRole
};