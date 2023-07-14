import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";

const fetchPeople = async () => {
  const res = await fetch("http://localhost:8080/api/v1/patient/screened");

  return res.json();
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const { data, status } = useQuery({
    queryKey: ["screened"],
    queryFn: fetchPeople,
    //staleTime: 5000,
  });

  console.log(data);

  let mydata = {};
  let height = [];
  let names = [];
  data?.map((d) => {
    names.push(d.name);
    height.push(d.height);
  });

  let options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Height Bar Chart",
      },
    },
  };

  const labels = names;

  mydata = {
    labels,
    datasets: [
      {
        label: "Height",
        data: height,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div>
      <div className="bg-black border-x-red-400 h-[20%] ">
        <Bar
          className=" "
          options={options}
          style={{ height: "30px" }}
          data={mydata}
        />
        ;
      </div>
    </div>
  );
}
