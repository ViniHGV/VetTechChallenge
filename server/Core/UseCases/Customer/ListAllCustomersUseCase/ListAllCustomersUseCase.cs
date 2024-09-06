using server.Infrastructure.Repositories.GenericRepository;

namespace server.Core.UseCases.Customer.ListAllCustomersUseCase
{
    public class ListAllCustomersUseCase : IListAllCustomersUseCase
    {
        public readonly IGenericRepository<Models.Customer> _customerRepository;

        public ListAllCustomersUseCase(IGenericRepository<Models.Customer> customerRepository)
        {
            this._customerRepository = customerRepository;
        }

        public async Task<List<Models.Customer>> execute()
        {
            try
            {
                return await this._customerRepository.GetAllAsync();
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
