interface User{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
    rememberToken: string;
    isActive: boolean;
    role: Role;
    createdAt: Date;
}
