using server.Application.Dtos.CustomerDto;
using server.Core.Errors.CustomerErrors;
using server.Infrastructure.Repositories.GenericRepository;

namespace server.Core.UseCases.Customer.CreateCustomerUseCase
{
    public class CreateCustomerUseCase : ICreateCustomerUseCase
    {
        private readonly IGenericRepository<Models.Customer> _customerRepository;

        public CreateCustomerUseCase(IGenericRepository<Models.Customer> customerRepository)
        {
            this._customerRepository = customerRepository;
        }

        public async Task<CreateCustomerResponseDTO> execute(
            CreateCustomerRequestDTO createCustomerRequestDTO
        )
        {
            try
            {
                var findCustomerByName = await this._customerRepository.GetAsync(customer =>
                    customer.Email.ToLower().Equals(createCustomerRequestDTO.Email.ToLower())
                );

                if (findCustomerByName != null)
                    throw new CustomerAlreadyExistsException(
                        $"Já existe um cliente cadastrado com o e-mail {createCustomerRequestDTO.Email}"
                    );

                var customer = new Models.Customer(
                    createCustomerRequestDTO.Nome,
                    createCustomerRequestDTO.Email,
                    createCustomerRequestDTO.Telefone,
                    createCustomerRequestDTO.Endereço
                );

                await _customerRepository.CreateAsync(customer);

                return new CreateCustomerResponseDTO("Cliente cadastrado com sucesso!", customer);
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);
            }
        }
    }
}
