import { Photo } from "./Photo";
import { Problem } from "./Problem";
export interface Report{
  id?: number | null;
  lat?: number | null;
  long?: number | null;
  status?: boolean | null;
  note?: string | null;
  problem?: Problem | null;
  photos?: Photo[] | null;
  createdAt?: Date | null;
}
