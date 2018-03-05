import { Role } from "../models";

export const userRolesList = [
    new Role({roleName: "ADMIN_USER", description: "Admin"}),
    new Role({roleName: "CONSULTANT", description: "Consultant"}),
    new Role({roleName: "CUSTOMER", description: "Customer"}),
]; 