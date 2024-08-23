import {
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineUserRemove,
  HiOutlineShoppingBag,
  HiOutlineCog,
  HiOutlineSupport,
} from "react-icons/hi";


export const LinksLateral = [
  {
    key: "clientes",
    label: "Clientes",
    path: "/",
    icon: <HiOutlineUser />,
  },
  {
    key: "vendas",
    label: "Vendas",
    path: "/",
    icon: <HiOutlineShoppingBag />,
  },
  {
    key: "relatorios",
    label: "Relatorios",
    path: "/",
    icon: <HiOutlineClipboardList />,
  },
];

export const LinksOpcoes = [
  {
    key: "logout",
    label: "Logout",
    path: "/",
    icon: <HiOutlineUserRemove />,
  },
  {
    key: "ajuda",
    label: "Ajuda",
    path: "/",
    icon: <HiOutlineSupport />,
  },
  {
    key: "config",
    label: "Configurações",
    path: "/",
    icon: <HiOutlineCog />,
  },
];
