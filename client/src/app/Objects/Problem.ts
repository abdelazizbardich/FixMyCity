import { Specialisation } from "./Specialisation";
import { Report } from "./Report";
export interface Problem {
  id?: number | null;
  name?: string | null;
  icon?: string | null;
  specialisation?: Specialisation | null;
  reports?: Report[] | null;
  createdAt?: Date | null;
}
