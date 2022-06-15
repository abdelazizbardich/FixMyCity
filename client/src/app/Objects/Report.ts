import { Photo } from "./Photo";
import { Problem } from "./Problem";
export interface Report{
  id?: number | null;
  lat?: number | null;
  lan?: number | null;
  status?: boolean | null;
  note?: string | null;
  problem?: Problem | null;
  createdAt?: Date | null;
}
