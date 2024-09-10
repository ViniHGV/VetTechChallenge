import { CreateCustomerRequestDTO } from "@/interfaces/Dtos/Customer/CreateCustomerRequestDTO";
import { CustomerResponseDTO } from "@/interfaces/Dtos/Customer/CustomerResponseDTO";
import { api } from "@/lib/Api/AxiosInstance";

export const CreateCustomerService = async (
  requestDTO: CreateCustomerRequestDTO
): Promise<CustomerResponseDTO> => {
  return await api.post("/cliente", requestDTO);
};
