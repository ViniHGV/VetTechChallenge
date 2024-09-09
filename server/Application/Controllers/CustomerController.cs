using Microsoft.AspNetCore.Mvc;
using server.Application.Configurations;
using server.Application.Dtos;
using server.Application.Dtos.CustomerDto;
using server.Core.Exceptions;
using server.Core.Models;
using server.Core.UseCases.Customer.CreateCustomerUseCase;
using server.Core.UseCases.Customer.DeleteCustomerUseCase;
using server.Core.UseCases.Customer.EditCustomerUseCase;
using server.Core.UseCases.Customer.GetUniqueCustomerUseCase;
using server.Core.UseCases.Customer.ListAllCustomersUseCase;

namespace server.Application.Controllers
{
    [ApiController]
    [Route("api/cliente")]
    public class CustomerController : ControllerBase
    {
        private readonly IListAllCustomersUseCase _listAllCustomersUseCase;
        private readonly ICreateCustomerUseCase _createCustomerUseCase;
        private readonly IGetUniqueCustomerUseCase _getUniqueCustomerUseCase;
        private readonly IEditCustomerUseCase _editCustomerUseCase;
        private readonly IDeleteCustomerUseCase _deleteCustomerUseCase;
        private readonly ILogger _logger;

        public CustomerController(
            IListAllCustomersUseCase listAllCustomersUseCase,
            ICreateCustomerUseCase createCustomerUseCase,
            IGetUniqueCustomerUseCase getUniqueCustomerUseCase,
            IEditCustomerUseCase editCustomerUseCase,
            IDeleteCustomerUseCase deleteCustomerUseCase,
            ILogger<Customer> logger
        )
        {
            this._listAllCustomersUseCase = listAllCustomersUseCase;
            this._createCustomerUseCase = createCustomerUseCase;
            this._getUniqueCustomerUseCase = getUniqueCustomerUseCase;
            this._editCustomerUseCase = editCustomerUseCase;
            this._deleteCustomerUseCase = deleteCustomerUseCase;
            this._logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<Customer>>> getAllCustomers()
        {
            try
            {
                var customersList = await this._listAllCustomersUseCase.execute();
                _logger.LogInformation(
                    MyLogEvents.ListCustomers,
                    "GET() Get all customer success",
                    DateTime.UtcNow.ToLongTimeString()
                );
                return Ok(customersList);
            }
            catch (ApiException e)
            {
                return StatusCode(e.StatusCode, new ExceptionResponseDTO(e.Message, e.StatusCode));
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> getAllCustomers([FromRoute] int id)
        {
            try
            {
                var customer = await this._getUniqueCustomerUseCase.execute(id);
                _logger.LogInformation(
                    MyLogEvents.GetCustomer,
                    $"Get({id}) Customer found with success"
                );
                return Ok(customer);
            }
            catch (ApiException e)
            {
                _logger.LogWarning(
                    MyLogEvents.GetCustomerNotFound,
                    "Get({Id}) Customer NOT FOUND",
                    id
                );
                return StatusCode(e.StatusCode, new ExceptionResponseDTO(e.Message, e.StatusCode));
            }
        }

        [HttpPost]
        public async Task<ActionResult<CreateCustomerResponseDTO>> createCustomer(
            [FromBody] CreateCustomerRequestDTO createCustomerRequestDTO
        )
        {
            try
            {
                var customerCreated = await this._createCustomerUseCase.execute(
                    createCustomerRequestDTO
                );

                string uri = $"http://localhost:5104/api/cliente/{customerCreated.customer.Id}";

                _logger.LogInformation(
                    MyLogEvents.GenerateCustomer,
                    "POST Customer created with success",
                    uri
                );
                return Created(uri, customerCreated);
            }
            catch (ApiException e)
            {
                _logger.LogWarning(
                    MyLogEvents.GenerateCustomerError,
                    "POST Creation customer error"
                );
                return StatusCode(e.StatusCode, new ExceptionResponseDTO(e.Message, e.StatusCode));
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<EditCustomerResponseDTO>> editCustomer(
            [FromBody] EditCustomerRequestDTO editCustomerRequestDTO,
            [FromRoute] int id
        )
        {
            try
            {
                var customerEdited = await this._editCustomerUseCase.execute(
                    editCustomerRequestDTO,
                    id
                );
                _logger.LogInformation(
                    MyLogEvents.UpdateCustomer,
                    $"PUT({id}) Customer Eddited with success"
                );

                return Ok(customerEdited);
            }
            catch (ApiException e)
            {
                _logger.LogWarning(
                    MyLogEvents.UpdateCustomerNotFound,
                    $"PUT({id}) NOT FOUND customer"
                );
                return StatusCode(e.StatusCode, new ExceptionResponseDTO(e.Message, e.StatusCode));
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DeleteCustomerResponseDTO>> deleteCustomer(
            [FromRoute] int id
        )
        {
            try
            {
                var customerDeleted = await this._deleteCustomerUseCase.execute(id);
                _logger.LogInformation(
                    MyLogEvents.DeleteCustomer,
                    $"DELETE({id}) Customer deleted with success"
                );

                return Ok(customerDeleted);
            }
            catch (ApiException e)
            {
                _logger.LogWarning(
                    MyLogEvents.GetCustomerNotFound,
                    $"DELETE({id}) Customer deleted Error NOT FOUND"
                );
                return StatusCode(e.StatusCode, new ExceptionResponseDTO(e.Message, e.StatusCode));
            }
        }
    }
}
