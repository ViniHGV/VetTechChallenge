import { CustomerResponseDTO } from "@/interfaces/Dtos/CustomerResponseDTO";
import { api } from "@/lib/Api/AxiosInstance";

export const GetUniqueCustomerByIdService = async (
  customerId: string
): Promise<CustomerResponseDTO> => {
  return (await api.get(`/cliente/${customerId}`)).data;
};
