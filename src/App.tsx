import { useEffect } from "react";
import FilterView from "./components/Filter/FilterView";
import { Doctor } from "./interfaces/Doctor";
import { ResponseDTO } from "./interfaces/ResponseDTO";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data } = useSWR<ResponseDTO<Doctor>>(
    "https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc",
    fetcher
  );

  return (
    <div className="max-w-6xl mx-auto py-5 px-4">
      {data?.status && <FilterView doctorData={data.data} />}
    </div>
  );
}

export default App;
