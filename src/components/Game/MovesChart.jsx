// MovesChart.js
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MovesChart = ({ moves }) => {
  const data = {
    labels: ["Your Moves"],
    datasets: [
      {
        label: "Total Moves",
        data: [moves],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Average Moves",
        data: [100],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Moves Comparison",
      },
    },
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MovesChart;
