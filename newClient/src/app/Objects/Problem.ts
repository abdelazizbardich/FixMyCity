import { Specialisation } from "./Specialisation";
import { Report } from "./Report";
export interface Problem {
  id: number;
  name: string;
  icon: string;
  specialisation: Specialisation;
  reports: Report[];
}
