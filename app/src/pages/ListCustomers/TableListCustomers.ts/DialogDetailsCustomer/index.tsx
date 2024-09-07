import { GenericDialog } from "@/components/GenericDialog";
import { Button } from "@/components/ui/button";
import { CustomerResponseDTO } from "@/interfaces/Dtos/Customer/CustomerResponseDTO";
import { FormatDateBRL } from "@/utils/FormatDateBRL";
import { PhoneMask } from "@/utils/Masks/PhoneMask";
import { AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { CgDetailsMore } from "react-icons/cg";

interface IDialogDetailsCustomer {
  customer: CustomerResponseDTO;
}

export const DialogDetailsCustomer = ({ customer }: IDialogDetailsCustomer) => {
  return (
    <GenericDialog
      buttonOpenDiolog={
        <Button className="bg-cyan-600 hover:bg-cyan-600/90">
          <CgDetailsMore className="text-lg mr-1" />
          Detalhes
        </Button>
      }
      title="Detalhes do cliente"
      description="Este modal exibe informações detalhadas sobre um cliente específico."
      ButtonsFooter={
        <>
          <AlertDialogCancel>
            <Button variant="outline">Fechar Detalhes</Button>
          </AlertDialogCancel>
        </>
      }
    >
      <div className="text-sm">
        <p className="py-1">
          <strong>Nome:</strong> {customer.nome}.
        </p>
        <p className="py-1">
          <strong>E-mail:</strong> {customer.email}.
        </p>
        <p className="py-1">
          <strong>Telefone:</strong> {PhoneMask(customer.telefone)}.
        </p>
        <p className="py-1">
          <strong>Endereço:</strong> {customer.endereco}.
        </p>
        <p className="py-1">
          <strong>Data de criação: </strong>
          {FormatDateBRL(customer.criadoEm).replace(",", " às")}.
        </p>
      </div>
    </GenericDialog>
  );
};
