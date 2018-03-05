import { Role } from "./role.model";

export class User {
    email?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    password?: string;
    roles?: Array<Role>;
    username?: string;
}