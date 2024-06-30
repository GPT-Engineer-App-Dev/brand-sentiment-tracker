import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Brand A",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

const barData = {
  labels: ["Brand A", "Brand B", "Brand C"],
  datasets: [
    {
      label: "Sentiment Score",
      data: [75, 60, 85],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(153, 102, 255, 0.2)"],
      borderColor: ["rgb(75, 192, 192)", "rgb(255, 159, 64)", "rgb(153, 102, 255)"],
      borderWidth: 1,
    },
  ],
};

const pieData = {
  labels: ["Positive", "Neutral", "Negative"],
  datasets: [
    {
      label: "Sentiment Distribution",
      data: [300, 50, 100],
      backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 205, 86)", "rgb(255, 99, 132)"],
      hoverOffset: 4,
    },
  ],
};

const Dashboard = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">Dashboard</h1>
        <p className="text-center">Graphs representing the main brand dimensions.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Brand A Sentiment Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <Line data={lineData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Scores</CardTitle>
          </CardHeader>
          <CardContent>
            <Bar data={barData} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Pie data={pieData} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Dashboard;