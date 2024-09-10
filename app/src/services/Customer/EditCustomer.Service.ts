import { CreateCustomerRequestDTO } from "@/interfaces/Dtos/Customer/CreateCustomerRequestDTO";
import { CustomerResponseDTO } from "@/interfaces/Dtos/Customer/CustomerResponseDTO";
import { api } from "@/lib/Api/AxiosInstance";

export const EditCustomerService = async (
  customerId: number,
  requestDTO: CreateCustomerRequestDTO
): Promise<CustomerResponseDTO> => {
  return await api.put(`cliente/${customerId}`, requestDTO);
};
