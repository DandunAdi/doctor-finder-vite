import { Hospital } from "./Hospital";
import { Photo } from "./Photo";
import { Price } from "./Price";

export interface Doctor {
  doctor_id: string;
  name: string;
  slug: string;
  is_popular: boolean;
  about: string;
  overview: string;
  photo: Photo;
  sip: string;
  experience: string;
  price: Price;
  specialization: DoctorSpecialization;
  hospital: Hospital[];
  about_preview: string;
}

export interface DoctorSpecialization {
  id: string;
  name: string;
}
