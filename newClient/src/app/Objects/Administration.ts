import { Role } from './Role';
import { User } from "./User";
import { Specialisation } from "./Specialisation";
export interface Administration extends User{

  login: String,
  phones: [String,String,String],
  lat: number,
  lan: number,
  specialisation: Specialisation
}
