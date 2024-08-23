import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Produto A", value: 555 },
  { name: "Produto B", value: 378 },
  { name: "Produto C", value: 289 },
];

let Label = function (data) {
  return data.name + " - " + data.value + " vendas";
};




const ProdutosPopulares = () => {
  return (
    <div className="w-full lg:w-2/5 my-4 lg:my-0 h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Produtos Populares</strong>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={350}>
          <PieChart width={300} height={100}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label={Label}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProdutosPopulares;
