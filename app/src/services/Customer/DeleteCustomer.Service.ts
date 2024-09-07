import { api } from "@/lib/Api/AxiosInstance";

export const DeleteCustomerService = async (
  cuistomerId: number
): Promise<string> => {
  return (await api.delete(`/cliente/${cuistomerId}`)).data;
};
