import SearchInput from "../components/SearchInput";
import profile1 from "../assets/profiles/1.png";
import profile2 from "../assets/profiles/2.png";
import profile3 from "../assets/profiles/3.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: [
      {
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    ],
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Productivity",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Home() {
  return (
    <div className="mt-8 px-10">
      <div className="mt-8 flex gap-8 text-white">
        <div className="flex flex-col items-start bg-track-blue p-8 rounded-2xl">
          <p className="font-bold text-4xl">Burnout</p>
          <div className="flex gap-x-5 justify-between my-4 font-semibold">
            <p className="opacity-60 text-xl">Nombre d'employés</p>
            <p className="text-xl">20</p>
          </div>
          <div className="flex ">
            <img src={profile1} alt="profile 1" />
            <img src={profile2} alt="profile 2" />
            <img src={profile3} alt="profile 3" />
          </div>
        </div>
        <div className="flex flex-col items-start bg-track-green p-8 rounded-2xl">
          <p className="font-bold text-4xl">Depression</p>
          <div className="flex gap-x-5 justify-between my-4 font-semibold">
            <p className="opacity-60 text-xl">Nombre d'employés</p>
            <p className="text-xl">16</p>
          </div>
          <div className="flex">
            <img src={profile1} alt="profile 1" />
            <img src={profile2} alt="profile 2" />
            <img src={profile3} alt="profile 3" />
          </div>
        </div>
        <div className="flex flex-col items-start bg-track-orange p-8 rounded-2xl">
          <p className="font-bold text-4xl">Anxiety</p>
          <div className="flex gap-x-5 justify-between my-4 font-semibold">
            <p className="opacity-60 text-xl">Nombre d'employés</p>
            <p className="text-xl">14</p>
          </div>
          <div className="flex">
            <img src={profile1} alt="profile 1" />
            <img src={profile2} alt="profile 2" />
            <img src={profile3} alt="profile 3" />
          </div>
        </div>
      </div>
      <div className="py-10 px-10 w-9/12 flex flex-col">
        <div className="text-4xl font-bold mb-4">Productivity (%)</div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default Home;
