import {Role} from "./Role";
export interface User{
    userId: number;
    firstName: String;
    lastName: String;
    email: String;
    login: String;
    password: String;
    rememberToken: String;
    isActive: boolean;
    role: Role | undefined;
    createdAt: Date | undefined;
}
