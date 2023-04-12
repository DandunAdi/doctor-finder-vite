import { Doctor, DoctorSpecialization } from "../interfaces/Doctor";
import _ from "lodash";

export const getAllSpecializationFromDoctorList = (doctorList: Doctor[]) => {
  const allSpecialization: DoctorSpecialization[] = [];
  doctorList.map((doc) => {
    allSpecialization.push(doc.specialization);
  });

  const removedDuplicateSpecialization = _.uniqBy(allSpecialization, "id");

  return removedDuplicateSpecialization;
};
