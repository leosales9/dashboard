import React from "react";
import {
  IoBagHandle,
  IoFlaskSharp,
  IoMagnet,
  IoClipboardSharp,
} from "react-icons/io5";

function DashboardStatsGrid() {
  return (
    <div className="block my-4 lg:flex gap-4 w-full lg:h-auto lg:w-auto">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoFlaskSharp className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Produtos Cadastrados
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">32</strong>
            <span className="text-sm text-green-500 pl-2">+3</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
          <IoMagnet className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Leads Gerados
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">546</strong>
            <span className="text-sm text-green-500 pl-2">+29</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
          <IoClipboardSharp className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Orçamentos Pendentes
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">12</strong>
            <span className="text-sm text-green-500 pl-2">+4</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Faturamento</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              R$ 122.959,90
            </strong>
            <span className="text-sm text-green-500 pl-2">+ R$ 45.678,50</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white my-2 lg:my-0 rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}
