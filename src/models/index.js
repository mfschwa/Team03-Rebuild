// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserRole = {
  "ADMIN": "ADMIN",
  "DRIVER": "DRIVER",
  "SPONSOR": "SPONSOR"
};

<<<<<<< Updated upstream
const { User, Sponsor, Product, Purchase, PointHistory, AdminProfile, DriverProfile, Report, AuditLog, CartItem } = initSchema(schema);
=======
const { User, Sponsor, Product, Purchase, PointHistory, AdminProfile, DriverProfile, Report, AuditLog } = initSchema(schema);
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  CartItem,
=======
>>>>>>> Stashed changes
  UserRole
};