import { Problem } from "./Problem";
export interface Specialisation {
    id: number;
    name: string;
    icon: string;
    problems: Problem[];
    createdAt: Date;

}
