import { IFormRegisterCustomer } from "@/interfaces/IFormRegisterCustomer";
import { ZodType, z } from "zod";

export const FormRegisterCustomerSchema: ZodType<IFormRegisterCustomer> =
  z.object({
    nome: z.string().min(1, { message: "O campo nome é obrigatório!" }),
    email: z.string().min(1, { message: "O campo e-mail é obrigatório!" }),
    telefone: z.string().min(1, { message: "O campo telefone é obrigatório!" }),
    endereco: z.string().min(1, { message: "O campo endereço é obrigatório!" }),
  });
