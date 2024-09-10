import { CustomerResponseDTO } from "@/interfaces/Dtos/Customer/CustomerResponseDTO";
import { api } from "@/lib/Api/AxiosInstance";

export const GetAllCustmersService = async (): Promise<
  CustomerResponseDTO[]
> => {
  return (await api.get("/cliente")).data;
};
