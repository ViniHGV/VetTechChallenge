using server.Core.Errors.CustomerErrors;
using server.Infrastructure.Repositories.GenericRepository;

namespace server.Core.UseCases.Customer.GetUniqueCustomerUseCase
{
    public class GetUniqueCustomerUseCase : IGetUniqueCustomerUseCase
    {
        private readonly IGenericRepository<Models.Customer> _customerRepository;

        public GetUniqueCustomerUseCase(IGenericRepository<Models.Customer> customerRepository)
        {
            this._customerRepository = customerRepository;
        }

        public async Task<Models.Customer> execute(int customerId)
        {
            try
            {
                var customerById = await _customerRepository.GetAsync(customer =>
                    customer.Id == customerId
                );

                if (customerById == null)
                    throw new CustomerNotFoundException("Cliente não encontrado!");

                return customerById;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
