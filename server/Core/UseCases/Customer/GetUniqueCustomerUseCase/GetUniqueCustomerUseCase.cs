using server.Core.Exceptions.CustomerErrors;
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
            var customerById = await _customerRepository.GetAsync(customer =>
                customer.Id == customerId
            );

            if (customerById == null)
                throw new CustomerNotFoundException("Cliente não encontrado!");

            return customerById;
        }
    }
}
