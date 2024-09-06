using server.Application.Dtos.CustomerDto;
using server.Core.UseCases.Customer.GetUniqueCustomerUseCase;
using server.Infrastructure.Repositories.GenericRepository;

namespace server.Core.UseCases.Customer.EditCustomerUseCase
{
    public class EditCustomerUseCase : IEditCustomerUseCase
    {
        private readonly IGenericRepository<Models.Customer> _customerRepository;
        private readonly IGetUniqueCustomerUseCase _getUniqueCustomerUseCase;

        public EditCustomerUseCase(
            IGenericRepository<Models.Customer> customerRepository,
            IGetUniqueCustomerUseCase getUniqueCustomerUseCase
        )
        {
            this._customerRepository = customerRepository;
            this._getUniqueCustomerUseCase = getUniqueCustomerUseCase;
        }

        public async Task<EditCustomerResponseDTO> execute(
            EditCustomerRequestDTO editCustomerRequestDTO,
            int customerId
        )
        {
            var customerById = await this._getUniqueCustomerUseCase.execute(customerId);

            customerById.Nome = editCustomerRequestDTO.Nome;
            customerById.Email = editCustomerRequestDTO.Email.ToLower();
            customerById.Endereço = editCustomerRequestDTO.Endereço;
            customerById.Telefone = editCustomerRequestDTO.Telefone;

            await this._customerRepository.Update(customerById);

            return new EditCustomerResponseDTO("Usuário editado com sucesso!", customerById);
        }
    }
}
