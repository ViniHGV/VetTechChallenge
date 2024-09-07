import { useParams } from "react-router";
import logoVetTech from "/public/LogoVet.png";
import { GenericFormCustomer } from "@/components/GenericFormCustomer";
import { useQuery } from "@tanstack/react-query";
import { GetUniqueCustomerByIdService } from "@/services/Customer/GetUniqueCustomerById.Service";

export const EditCustomers = () => {
  const { customerId } = useParams();

  const { data: customer } = useQuery({
    queryKey: ["customer"],
    queryFn: () => {
      if (customerId) return GetUniqueCustomerByIdService(customerId);
    },
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <div className="flex flex-col w-[450px] space-y-6  items-center p-10 rounded-xl shadow-2xl">
        <img src={logoVetTech} alt="Logo VetTech" />
        <GenericFormCustomer
          customerData={
            customer && {
              id: customer?.id,
              email: customer?.email,
              endereco: customer?.endereco,
              nome: customer?.nome,
              telefone: customer?.telefone,
            }
          }
        />
      </div>
    </div>
  );
};
