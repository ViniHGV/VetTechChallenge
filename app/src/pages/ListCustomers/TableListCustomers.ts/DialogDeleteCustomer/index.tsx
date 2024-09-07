import { GenericDialog } from "@/components/GenericDialog";
import { Button } from "@/components/ui/button";
import { DeleteCustomerService } from "@/services/Customer/DeleteCustomer.Service";
import {
  AlertDialogCancel,
  AlertDialogAction,
} from "@radix-ui/react-alert-dialog";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";

interface IDialogDeleteCustomer {
  customerId: number;
  customerName: string;
}

export const DialogDeleteCustomer = ({
  customerId,
  customerName,
}: IDialogDeleteCustomer) => {
  const { refetch } = useQuery({ queryKey: ["customers"] });

  const deleteCustomer = async () => {
    await DeleteCustomerService(customerId)
      .then(() => {
        toast.success("Cliente deletado com sucesso!");
        refetch();
      })
      .catch((err) => toast.error(err));
  };
  return (
    <GenericDialog
      buttonOpenDiolog={
        <Button variant="destructive">
          <MdDeleteOutline className="text-lg mr-1" />
          Excluir
        </Button>
      }
      title={`Certeza que deseja excluir o cliente ${customerName}?`}
      description="Excluir um cliente é uma ação irreversivel confirme para continuar"
      ButtonsFooter={
        <>
          <AlertDialogCancel>
            <Button variant="outline">Cancelar</Button>
          </AlertDialogCancel>
          <AlertDialogAction className="bg-red">
            <Button onClick={deleteCustomer} variant="destructive">
              <MdDeleteOutline className="text-lg mr-1" />
              Confirmar exclusão
            </Button>
          </AlertDialogAction>
        </>
      }
    />
  );
};
