import { Photo } from "./Photo";
import { Problem } from "./Problem";
export interface Report{
  id: number;
  lat: number;
  long: number;
  status: boolean;
  note: string;
  problem: Problem;
  photos: Photo[];
  createdAt: Date;
}
