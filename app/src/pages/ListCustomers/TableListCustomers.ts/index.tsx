import { GenericDialog } from "@/components/GenericDialog";
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
import { IFormRegisterCustomer } from "@/interfaces/IFormRegisterCustomer";
import {
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router";

const users: IFormRegisterCustomer[] = [
  {
    nome: "Ana Silva",
    email: "ana.silva@email.com",
    telefone: "(11) 99999-1234",
    endereco: "Rua das Flores, 123, São Paulo, SP",
  },
  {
    nome: "Carlos Pereira",
    email: "carlos.pereira@email.com",
    telefone: "(21) 98888-5678",
    endereco: "Avenida Brasil, 456, Rio de Janeiro, RJ",
  },
  {
    nome: "Maria Souza",
    email: "maria.souza@email.com",
    telefone: "(31) 97777-9101",
    endereco: "Rua das Palmeiras, 789, Belo Horizonte, MG",
  },
  {
    nome: "João Oliveira",
    email: "joao.oliveira@email.com",
    telefone: "(41) 96666-1213",
    endereco: "Rua das Acácias, 101, Curitiba, PR",
  },
  {
    nome: "Fernanda Costa",
    email: "fernanda.costa@email.com",
    telefone: "(51) 95555-1415",
    endereco: "Avenida Farrapos, 202, Porto Alegre, RS",
  },
];

export function TableListCustomers() {
  const navigate = useNavigate();

  const navigateToEditCustomer = (idUser: number) => {
    navigate(`customer/edit/${idUser}`);
  };

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
        {users.map((user, index) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium py-4">{user.nome}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.telefone}</TableCell>
            <TableCell>{user.endereco}</TableCell>
            <TableCell className="text-right">
              <div className="space-x-2">
                <Button
                  onClick={() => navigateToEditCustomer(index)}
                  className="bg-yellow-500 hover:bg-yellow-600"
                >
                  <MdOutlineEdit className="text-lg mr-1" />
                  Editar
                </Button>
                <GenericDialog
                  buttonOpenDiolog={
                    <Button variant="destructive">
                      <MdDeleteOutline className="text-lg mr-1" />
                      Excluir
                    </Button>
                  }
                  title="Certeza que deseja excluir o cliente?"
                  description="Excluir um cliente é uma ação irreversivel confirme para continuar"
                  ButtonsFooter={
                    <>
                      <AlertDialogCancel>
                        <Button variant="outline">Cancelar</Button>
                      </AlertDialogCancel>
                      <AlertDialogAction className="bg-red">
                        <Button variant="destructive">
                          <MdDeleteOutline className="text-lg mr-1" />
                          Confirmar exclusão
                        </Button>
                      </AlertDialogAction>
                    </>
                  }
                />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
