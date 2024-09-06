using server.Application.Dtos.CustomerDto;

namespace server.Core.UseCases.Customer.CreateCustomerUseCase
{
    public interface ICreateCustomerUseCase
    {
        Task<CreateCustomerResponseDTO> execute(CreateCustomerRequestDTO createCustomerRequestDTO);
    }
}
