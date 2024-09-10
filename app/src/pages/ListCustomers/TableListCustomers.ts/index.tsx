import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GetAllCustmersService } from "@/services/Customer/GetAllCustmers.Service";
import { useQuery } from "@tanstack/react-query";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import { ImSpinner8 } from "react-icons/im";
import { DialogDetailsCustomer } from "./DialogDetailsCustomer";
import { DialogDeleteCustomer } from "./DialogDeleteCustomer";
import { PhoneMask } from "@/utils/Masks/PhoneMask";

export function TableListCustomers() {
  const navigate = useNavigate();

  const { data: customers, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: () => GetAllCustmersService(),
  });

  const navigateToEditCustomer = (idUser: number) => {
    navigate(`customer/edit/${idUser}`);
  };

  if (isLoading)
    return (
      <div className="flex w-full justify-center">
        <ImSpinner8 className="animate-spin text-4xl" />
      </div>
    );

  return (
    <Table>
      <TableCaption>Listagem de clientes cadastrados no sistema.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead>Telefone</TableHead>
          <TableHead>Endereço</TableHead>
          <TableHead className="text-center py-4">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {(customers?.length as number) > 0 ? (
          customers?.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium py-4">
                {customer.nome}
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>
                {(customer.telefone && PhoneMask(customer.telefone)) ||
                  "Não informado"}
              </TableCell>
              <TableCell>
                {(customer.endereco && customer.endereco) || "Não informado"}
              </TableCell>
              <TableCell className="text-right">
                <div className="space-x-2">
                  <DialogDetailsCustomer customer={customer} />
                  <Button
                    onClick={() => navigateToEditCustomer(customer.id)}
                    className="bg-yellow-500 hover:bg-yellow-600"
                  >
                    <MdOutlineEdit className="text-lg mr-1" />
                    Editar
                  </Button>
                  <DialogDeleteCustomer
                    customerName={customer.nome}
                    customerId={customer.id}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="py-4 font-semibold">
              Sem clientes cadastrados até o momento!
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
