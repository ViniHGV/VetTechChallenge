import { Button } from "@/components/ui/button.tsx";
import { TableListCustomers } from "./TableListCustomers.ts";
import logoVetTech from "/public/LogoVet.png";
import { LuUserPlus } from "react-icons/lu";
import { useNavigate } from "react-router";

export const ListCustomers = () => {
  const navigate = useNavigate();

  const navigateToCreateCustomer = () => navigate("/customer/create");
  return (
    <div className="flex flex-col items-center pt-20 gap-16 max-w-5xl m-auto">
      <img src={logoVetTech} className="max-w-[450px]" alt="" />
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Página de Listagem de Clientes</h2>
        <p className="text-center leading-relaxed">
          A página de Listagem de Clientes exibe uma tabela organizada de todos
          os clientes cadastrados no sistema. Cada linha da tabela apresenta
          informações essenciais, como o nome do cliente, e-mail, telefone,
          endereço de sua conta.
        </p>
      </div>
      <div className="w-full flex flex-col items-end gap-4">
        <Button
          onClick={navigateToCreateCustomer}
          className="w-fit py-6 font-bold bg-emerald-800 hover:bg-emerald-800/90"
        >
          <LuUserPlus className="text-lg mr-2" /> Criar cliente
        </Button>
        <TableListCustomers />
      </div>
    </div>
  );
};
