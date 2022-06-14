import {Role} from "./Role";
export interface User{
    userId?: number | null;
    firstName?: String | null;
    lastName?: String | null;
    email?: String | null;
    login?: String | null;
    password?: String | null;
    password_conf?: String | null;
    rememberToken?: String | null;
    isActive?: boolean | null;
    role?: Role | null;
    createdAt?: Date | null;
}
