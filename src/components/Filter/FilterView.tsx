"use client";
import { FC } from "react";
import DoctorListView from "../DoctorListView";
import { Doctor } from "../../interfaces/Doctor";
import Select from "react-select";
import useFilterController from "./useFilterController";

const FilterView: FC<{ doctorData: Doctor[] }> = ({ doctorData }) => {
  const controller = useFilterController(doctorData);

  return (
    <section>
      <div className="border border-gray-100 shadow-md rounded-xl mb-8 px-4 py-5">
        <h1 className="text-2xl mb-4 md:text-3xl">Doctor Finder</h1>
        <div className="md:grid md:grid-cols-3 md:gap-3 md:items-start ">
          <input
            className="p-3 rounded-xl mb-5 max-w-sm md:mb-0 text-sm w-full border-gray-300 border outline-primary"
            type="text"
            placeholder="Nama Dokter"
            onChange={controller.handleChangeKeyword}
          />
          <Select
            isMulti
            name="hospital"
            options={controller.listHospital}
            className="basic-multi-select"
            classNamePrefix="select"
            getOptionLabel={(hospital) => hospital.name}
            getOptionValue={(hospital) => hospital.id}
            placeholder="Rumah Sakit"
            value={controller.hospitalFilter}
            onChange={controller.handleChangeHospital}
            noOptionsMessage={() => "Tidak Ada Data"}
          />

          <Select
            isMulti
            name="specialization"
            options={controller.listSpecialization}
            className="basic-multi-select"
            classNamePrefix="select"
            getOptionLabel={(specialization) => specialization.name}
            getOptionValue={(specialization) => specialization.id}
            placeholder="Spesialisasi"
            value={controller.specializationFilter}
            onChange={controller.handleChangeSpecialization}
            noOptionsMessage={() => "Tidak Ada Data"}
          />
        </div>
      </div>
      <DoctorListView doctorList={controller.doctorList} />
    </section>
  );
};
export default FilterView;
