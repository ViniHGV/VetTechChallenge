using server.Application.Dtos.CustomerDto;
using server.Core.UseCases.Customer.GetUniqueCustomerUseCase;
using server.Infrastructure.Repositories.GenericRepository;

namespace server.Core.UseCases.Customer.DeleteCustomerUseCase
{
    public class DeleteCustomerUseCase : IDeleteCustomerUseCase
    {
        private readonly IGenericRepository<Models.Customer> _customerRepository;
        private readonly IGetUniqueCustomerUseCase _getUniqueCustomerUseCase;

        public DeleteCustomerUseCase(
            IGenericRepository<Models.Customer> customerRepository,
            IGetUniqueCustomerUseCase getUniqueCustomerUseCase
        )
        {
            this._customerRepository = customerRepository;
            this._getUniqueCustomerUseCase = getUniqueCustomerUseCase;
        }

        public async Task<DeleteCustomerResponseDTO> execute(int customerId)
        {
            var customerById = await _getUniqueCustomerUseCase.execute(customerId);
            try
            {
                await this._customerRepository.RemoveAsync(customerById);
                return new DeleteCustomerResponseDTO("Cliente deletado com sucesso!");
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
