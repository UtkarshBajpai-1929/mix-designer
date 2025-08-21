import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Piechart = () => {
  const output = useSelector((state) => state.calculation);

  const COLORS = ["#8884d8", "#82ca9d", "#c8c7c5ff", "#ff8042"];

  const allowedKeys = ["water_content", "cement_req", "fine_a", "coarse_a"];

  const chartData = allowedKeys
    .filter((key) => output[key] !== undefined) 
    .map((key) => ({
      name: key,
      value: Number(output[key]),
    }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {chartData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Piechart;
