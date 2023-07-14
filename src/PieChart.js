import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";

ChartJS.register(ArcElement, Tooltip, Legend);

const fetchPeople = async () => {
  const res = await fetch("http://localhost:8080/api/v1/patient/screened");

  return res.json();
};

export function PieChart() {
  const { data, status } = useQuery({
    queryKey: ["screened"],
    queryFn: fetchPeople,
    //staleTime: 5000,
  });

  console.log(data);
  let mydata = {};
  let arr = [];
  let names = [];
  data?.map((d) => {
    names.push(d.name);
    arr.push(d.weight);
  });

  mydata = {
    labels: names,
    datasets: [
      {
        label: "weight",
        data: arr,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={mydata} />;
}
