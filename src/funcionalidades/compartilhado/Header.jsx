import React, { Fragment } from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { FcAreaChart } from "react-icons/fc";

export default function Header() {
  const Navigate = useNavigate();

  return (
    <div className="bg-white h-16 p-4 flex justify-between items-center border-b border-gray-200">
      <Popover className="relative float-left block lg:hidden">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open && "bg-gray-100",
                "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
              )}
            >
              <FcAreaChart fontSize={42} />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 z-10 mt-2.5 w-80">
                <div className="bg-white rounded-dm shadow-md ring-1 ring-black ring-opacity-5 p-4 py">
                  <strong className="text-gray-700 font-medium">
                    Dashboard
                  </strong>
                  <div className="block mt-2 p-2 text-md">
                    <a className="block mb-2 px-4" href="/clientes">
                      Clientes
                    </a>
                    <a className="block mb-2 px-4" href="/vendas">
                      Vendas
                    </a>
                    <a className="block mb-2 px-4" href="/relatorios">
                      Relatórios
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 hidden lg:flex -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Digite algo aqui..."
          className="text-sm focus:outline-none hidden lg:flex active:outline-none h-10 lg:w-[46rem] left-3 border border-gray-300 rounded-dm pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 mr-2">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineChatAlt fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-dm shadow-md ring-1 ring-black ring-opacity-5 p-4 py">
                    <strong className="text-gray-700 font-medium">
                      Mensagens
                    </strong>
                    <div className="mt-2 p-2 text-sm">Painel de Mensagens.</div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-gray-100",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className="bg-white rounded-dm shadow-md ring-1 ring-black ring-opacity-5 p-4 py">
                    <strong className=" text-gray-700 font-medium">
                      Notificações
                    </strong>
                    <div className="mt-2 p-2 text-sm">
                      Painel de Notificações.
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className="sr-only">Menu do Usuário</span>
              <div
                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/80x80?face")',
                }}
              >
                <span className="sr-only">Joji</span>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-100",
                      "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => Navigate("/perfil")}
                  >
                    Seu Perfil
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-100",
                      "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => Navigate("/Configurações")}
                  >
                    Configurações
                  </div>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active && "bg-gray-100",
                      "text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2"
                    )}
                    onClick={() => Navigate("/logout")}
                  >
                    Logout
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
