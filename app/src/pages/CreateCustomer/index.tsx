import logoVetTech from "/public/LogoVet.png";
import { GenericFormCustomer } from "@/components/GenericFormCustomer";

export const CreateCustomers = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <div className="flex flex-col w-[450px] space-y-6  items-center p-10 rounded-xl shadow-2xl">
        <img src={logoVetTech} alt="Logo VetTech" />
        <GenericFormCustomer />
      </div>
    </div>
  );
};
