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
      <div className="w-screen h-screen flex items-center justify-center">
        <ImSpinner8 className="animate-spin text-2xl" />
      </div>
    );

  return (
    <Table>
      <TableCaption>Listagem de usuários cadastrados no sistema.</TableCaption>
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
              <TableCell>{customer.telefone}</TableCell>
              <TableCell>{customer.endereco}</TableCell>
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
          <TableRow>Sem clientes cadastrados</TableRow>
        )}
      </TableBody>
    </Table>
  );
}
