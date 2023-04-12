import { FC } from "react";
import { Doctor } from "../interfaces/Doctor";

const DoctorListView: FC<{ doctorList: Doctor[] }> = ({ doctorList }) => {
  return (
    <div className="grid md:grid-cols-2">
      {doctorList.map((doctor) => (
        <div
          key={doctor.doctor_id}
          className="shadow-lg flex items-start rounded-3xl overflow-hidden border border-gray-100 m-4 p-2 gap-2 md:p-4"
        >
          <img
            src={doctor.photo.formats.thumbnail}
            alt={"photo " + doctor.name}
            className="rounded-3xl"
          />
          <div className="h-full flex flex-col">
            <h3 className="font-semibold mb-2 text-lg md:text-xl">
              {doctor.name}
            </h3>
            <p className="text-gray-400 text-xs mb-2 md:text-sm">
              {doctor.hospital[0].name} - {doctor.specialization.name}
            </p>
            <div
              className="text-xs md:text-sm"
              dangerouslySetInnerHTML={{
                __html: doctor.about.replace(/&nbsp;/g, " "),
              }}
            />
            <div className="flex justify-end flex-1 items-end mt-4">
              <h4 className="text-white text-sm bg-primary font-semibold px-4 py-2 rounded-full my-2 md:text-base">
                {doctor.price.formatted}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorListView;
