import { Role } from './Role';
import { User } from "./User";
import { Specialisation } from "./Specialisation";
export interface Administration extends User{

  login?: String | null;
  phones?: [String,String,String] | null;
  lat?: number | null;
  lan?: number | null;
  specialisation?: Specialisation | null;
}
