using server.Application.Dtos.CustomerDto;

namespace server.Core.UseCases.Customer.EditCustomerUseCase
{
    public interface IEditCustomerUseCase
    {
        Task<EditCustomerResponseDTO> execute(
            EditCustomerRequestDTO editCustomerRequestDTO,
            int customerId
        );
    }
}
