import { Line } from "react-chartjs-2";

import { useQuery } from "@tanstack/react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://localhost:8080/api/v1/patient/screened");

  return res.json();
};

const Screened = () => {
  const { data, status } = useQuery({
    queryKey: ["peop"],
    queryFn: fetchPeople,
    //staleTime: 5000,
  });
  console.log(data);

  return (
    <div>
      <h2 className="text-center uppercase bg-black text-white">
        Screened Patients
      </h2>

      {status === "loading" && <div>Loading data ...</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Screened;
