import { User } from "./User";
import { Specialisation } from "./Specialisation";
export interface administration extends User{
  phones: string[];
  lat: number;
  long: number;
  Specialisation: Specialisation;
}
