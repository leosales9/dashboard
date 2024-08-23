import React from "react";
import { FcAreaChart } from "react-icons/fc";
import { LinksLateral, LinksOpcoes } from "../biblioteca/consts/nav";
import { Link } from "react-router-dom";

const ClassLinks =
  "flex items-center gap-2 px-1 py-3 font-light hover:bg-neutral-700 gap-1";

export default function Lateral() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcAreaChart fontSize={26} />
        <span className="text-lg">
          <Link to="/">Dashboard</Link>
        </span>
      </div>
      <div className="flex-1">
        {LinksLateral.map((link) => {
          return <LinksLaterais key={link.key} link={link} />;
        })}
      </div>
      <div className="">
        {LinksOpcoes.map((link) => {
          return <LinksOptions key={link.key} link={link} />;
        })}
      </div>
    </div>
  );
}

function LinksLaterais({ link }) {
  return (
    <Link to={link.path} className={ClassLinks}>
      <span className="text-lg">{link.icon}</span>
      {link.label}
    </Link>
  );
}
function LinksOptions({ link }) {
  return (
    <Link to={link.path} className={ClassLinks}>
      <span className="text-lg">{link.icon}</span>
      {link.label}
    </Link>
  );
}
