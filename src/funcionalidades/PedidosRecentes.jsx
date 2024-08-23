import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const DadosVendas = [
  {
    id: "1",
    product_id: "4324",
    customer_id: "23143",
    customer_name: "Carlos Alberto",
    order_date: "2024-08-17",
    order_total: "R$ 435,50",
    order_status: "POSTADO",
  },
  {
    id: "7",
    product_id: "7453",
    customer_id: "96453",
    customer_name: "Silvio Santos",
    order_date: "2024-08-14",
    order_total: "R$ 96,35",
    order_status: "PEDIDO FEITO",
  },
  {
    id: "2",
    product_id: "5434",
    customer_id: "65345",
    customer_name: "Ayrton Senna",
    order_date: "2024-08-17",
    order_total: "R$ 836,44",
    order_status: "EM TRÂNSITO",
  },
  {
    id: "3",
    product_id: "9854",
    customer_id: "87832",
    customer_name: "Iruma da Silva",
    order_date: "2024-08-16",
    order_total: "R$ 334,50",
    order_status: "ENTREGUE",
  },
  {
    id: "4",
    product_id: "8763",
    customer_id: "09832",
    customer_name: "Obi-wan Kenobi",
    order_date: "2024-08-14",
    order_total: "R$ 876,00",
    order_status: "EM PREPARAÇÃO",
  },
  {
    id: "5",
    product_id: "5627",
    customer_id: "97632",
    customer_name: "Leonardo Sales",
    order_date: "2024-08-14",
    order_total: "R$ 96,35",
    order_status: "ENTREGUE",
  },
];

const formataData = (data) => {
  var campos = data.split("-");

  return new Date(campos[0], (campos[1] - 1), campos[2]);
};

const PedidosRecentes = () => {
  return (
    <div className="w-full lg:w-3/5 bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Pedidos Recentes</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID do Produto</th>
              <th>Nome do(a) Cliente</th>
              <th>Data do Pedido</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {DadosVendas.map((pedido) => (
              <tr key={pedido.id}>
                <td>
                  <Link to={`/pedidos/${pedido.id}`}>#{pedido.id}</Link>
                </td>
                <td>
                  <Link to={`/produtos/${pedido.product_id}`}>
                    #{pedido.product_id}
                  </Link>
                </td>
                <td>
                  <Link to={`/clientes/${pedido.customer_id}`}>
                    {pedido.customer_name}
                  </Link>
                </td>
                <td>{format(formataData(pedido.order_date), "dd/MM/yyyy")}</td>
                <td>{pedido.order_total}</td>
                <td>{pedido.order_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PedidosRecentes;
