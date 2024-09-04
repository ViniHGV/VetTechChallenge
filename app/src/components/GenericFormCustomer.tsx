import { IFormRegisterCustomer } from "@/interfaces/IFormRegisterCustomer";
import { FormRegisterCustomerSchema } from "@/schemas/FormRegisterCustomerSchema";
import { PhoneMask } from "@/utils/Masks/PhoneMask";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuUserCog2, LuUserPlus } from "react-icons/lu";
import { useNavigate } from "react-router";
import { FormField } from "./FormField";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface IGenericFormCustomer {
  customerData?: IFormRegisterCustomer;
}

export const GenericFormCustomer = ({ customerData }: IGenericFormCustomer) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormRegisterCustomer>({
    resolver: zodResolver(FormRegisterCustomerSchema),
  });

  const navigate = useNavigate();

  const navigateToHome = () => navigate("/");

  const onSubmit = (values: IFormRegisterCustomer) => {
    console.log(values);
  };

  const handleChangePhone = (phoneValue: string) => {
    setValue("telefone", PhoneMask(phoneValue));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="flex flex-col w-full space-y-2">
        <FormField
          type="text"
          placeholder="name example"
          name="nome"
          register={register}
          error={errors.nome}
          textLabel="Nome"
        />
        <FormField
          type="email"
          placeholder="email@example.com"
          name="email"
          register={register}
          error={errors.email}
          textLabel="E-mail"
        />
        <div className="w-full">
          <Label className="font-semibold text-sm" htmlFor="phoneInput">
            Telefone
          </Label>
          <Input
            placeholder="(99) 99999-9999"
            {...register("telefone")}
            maxLength={15}
            id="phoneInput"
            onChange={(ev) => handleChangePhone(ev.target.value)}
          />
          {errors.telefone && (
            <p className="text-xs text-red-600 font-semibold">
              {errors.telefone?.message}
            </p>
          )}
        </div>
        <FormField
          type="text"
          placeholder="Rua example nº99"
          name="endereco"
          register={register}
          error={errors.endereco}
          textLabel="Endereço"
        />
      </div>
      <div className="w-full space-y-2">
        <Button
          type="submit"
          className={`w-full py-6 font-bold ${
            !customerData
              ? "bg-emerald-800 hover:bg-emerald-800/90"
              : "bg-blue-600 hover:bg-blue-600/90"
          }`}
        >
          {!customerData ? (
            <>
              <LuUserPlus className="text-lg mr-2" /> Criar cliente
            </>
          ) : (
            <>
              <LuUserCog2 className="text-lg mr-2" /> Editar cliente
            </>
          )}
        </Button>
        <Button
          type="button"
          onClick={navigateToHome}
          variant="destructive"
          className="w-full py-6 font-bold"
        >
          <IoMdCloseCircleOutline className="text-lg mr-2" /> Cancelar
        </Button>
      </div>
    </form>
  );
};
