import React from "react";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransaçãoChart from "./TransaçãoChart";
import ProdutosPopulares from "./ProdutosPopulares";
import PedidosRecentes from "./PedidosRecentes";

export default function dashboard() {
  return (
    <div className="flex flex-col gap-4 lg:w-full">
      <DashboardStatsGrid />
      <div className="flex flex-row gap-4 w-full">
        <TransaçãoChart />
      </div>
      <div className="block lg:flex flex-col lg:flex-row gap-4">
        <PedidosRecentes />
        <ProdutosPopulares />
      </div>
    </div>
  );
}
