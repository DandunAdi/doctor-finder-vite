import _ from "lodash";
import { Doctor } from "../interfaces/Doctor";
import { Hospital } from "../interfaces/Hospital";

export const getAllHospitalFromDoctorList = (doctorList: Doctor[]) => {
  let allHospital: Hospital[] = [];
  doctorList.map((doc) => {
    allHospital = allHospital.concat(doc.hospital);
  });

  const removedDuplicateHospital = _.uniqBy(allHospital, "id");

  return removedDuplicateHospital;
};
