import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { MultiValue } from "react-select";
import { Doctor, DoctorSpecialization } from "../../interfaces/Doctor";
import { getAllHospitalFromDoctorList } from "../../helpers/getAllHospitalFromDoctorList";
import { getAllSpecializationFromDoctorList } from "../../helpers/getAllSpecializationFromDoctorList";
import { Hospital } from "../../interfaces/Hospital";

const useFilterController = (doctorData: Doctor[]) => {
  /* ---------------------------------- DATA ---------------------------------- */
  const listHospital = useMemo(
    () => getAllHospitalFromDoctorList(doctorData),
    []
  );
  const listSpecialization = useMemo(
    () => getAllSpecializationFromDoctorList(doctorData),
    []
  );

  /* --------------------------------- STATES --------------------------------- */
  const [doctorList, setDoctorList] = useState<Doctor[]>(doctorData);
  const [nameFilter, setNameFilter] = useState<string>("");
  const [hospitalFilter, setHospitalFilter] = useState<Hospital[]>([]);
  const [specializationFilter, setSpecializationFilter] = useState<
    DoctorSpecialization[]
  >([]);

  /* ---------------------------- HANDLER FUNCTION ---------------------------- */
  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(e.target.value.toLocaleLowerCase());
  };

  const handleChangeHospital = (e: MultiValue<Hospital>) => {
    setHospitalFilter(e as Hospital[]);
  };

  const handleChangeSpecialization = (e: MultiValue<DoctorSpecialization>) => {
    setSpecializationFilter(e as DoctorSpecialization[]);
  };

  /* -------------------------------- LIFECYCLE ------------------------------- */
  useEffect(() => {
    // NAME FILTER
    const filteredDoctorByName = doctorData.filter((doc) =>
      doc.name.toLowerCase().includes(nameFilter)
    );

    // HOSPITAL FILTER
    const hospitalFilterIdList = hospitalFilter.map((hos) => hos.id);
    const filteredByHospital = filteredDoctorByName.filter((doc) => {
      if (hospitalFilter.length === 0) return true;

      const doctorHospitalIdList = doc.hospital.map((hos) => hos.id);
      const isDoctorHospitalIsInFilter = hospitalFilterIdList.some((x) =>
        doctorHospitalIdList.includes(x)
      );
      return isDoctorHospitalIsInFilter;
    });

    // SPECIALIZATION FILTER
    const specializationFilterIdList = specializationFilter.map((sp) => sp.id);
    const filteredBySpecialization = filteredByHospital.filter((doc) => {
      if (specializationFilter.length === 0) return true;

      const isDoctorSpecializationIsInFilter =
        specializationFilterIdList.includes(doc.specialization.id);
      return isDoctorSpecializationIsInFilter;
    });

    setDoctorList(filteredBySpecialization);
  }, [nameFilter, hospitalFilter, specializationFilter]);

  /* ------------------------------ RETURN VALUE ------------------------------ */
  return {
    doctorList,
    listHospital,
    listSpecialization,
    hospitalFilter,
    specializationFilter,
    handleChangeKeyword,
    handleChangeHospital,
    handleChangeSpecialization,
  };
};

export default useFilterController;
