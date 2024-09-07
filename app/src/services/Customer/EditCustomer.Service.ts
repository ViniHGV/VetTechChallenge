import { CreateCustomerRequestDTO } from "@/interfaces/Dtos/CreateCustomerRequestDTO";
import { CustomerResponseDTO } from "@/interfaces/Dtos/CustomerResponseDTO";
import { api } from "@/lib/Api/AxiosInstance";

export const EditCustomerService = async (
  customerId: number,
  requestDTO: CreateCustomerRequestDTO
): Promise<CustomerResponseDTO> => {
  return await api.put(`cliente/${customerId}`, requestDTO);
};
