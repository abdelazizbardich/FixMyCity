import { Problem } from "./Problem";
export interface Specialisation {
    id?: number | null;
    name?: string | null;
    icon?: string | null;
    problems?: Problem[] | null;
    createdAt?: Date | null;

}
