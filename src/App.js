import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
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
import faker from "faker";
import Charts from "./components/Charts";
import { PieChart } from "./PieChart";
import BarChart from "./BarChart";
import Screened from "./components/Screened";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function App() {
  return (
    <Router>
      <div>
        <nav className="">
          <ul className="flex flex-row justify-around bg-slate-950 active:border-b-2 active:border-b-white top-0 p-4 w-full">
            <li className=" text-white  ">
              <Link to="/">Home</Link>
            </li>
            <li className=" text-white">
              <Link to="/screenPatients">Screen Patients</Link>
            </li>
            <li className=" text-white">
              <Link to="/allPatients">All Patients</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <BarChart />
                <PieChart />
              </>
            }
          />
          <Route path="/addPatient" element={<Charts />} />
          <Route path="/allPatients" element={<Charts />} />
          <Route path="/screenPatients" element={<Screened />} />
        </Routes>
      </div>
    </Router>
  );
}
