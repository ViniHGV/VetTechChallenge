using server.Application.Dtos.CustomerDto;

namespace server.Core.UseCases.Customer.DeleteCustomerUseCase
{
    public interface IDeleteCustomerUseCase
    {
        Task<DeleteCustomerResponseDTO> execute(int customerId);
    }
}
