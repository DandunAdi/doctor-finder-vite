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
        <div className="md:grid md:grid-cols-3 md:gap-3 md:items-start">
          <input
            className="py-[6px] px-[9px] rounded-md mb-5 md:mb-0  w-full border-[#CCCCCC] border placeholder-[#808080]"
            type="text"
            placeholder="Nama Dokter"
            onChange={controller.handleChangeKeyword}
          />
          <Select
            isMulti
            name="hospital"
            options={controller.listHospital}
            getOptionLabel={(hospital) => hospital.name}
            getOptionValue={(hospital) => hospital.id}
            placeholder="Rumah Sakit"
            value={controller.hospitalFilter}
            onChange={controller.handleChangeHospital}
            noOptionsMessage={() => "Tidak Ada Data"}
            className="mb-5"
          />

          <Select
            isMulti
            name="specialization"
            options={controller.listSpecialization}
            getOptionLabel={(specialization) => specialization.name}
            getOptionValue={(specialization) => specialization.id}
            placeholder="Spesialisasi"
            value={controller.specializationFilter}
            onChange={controller.handleChangeSpecialization}
            noOptionsMessage={() => "Tidak Ada Data"}
            className="mb-5"
          />
        </div>
      </div>
      <DoctorListView doctorList={controller.doctorList} />
    </section>
  );
};
export default FilterView;
