using Microsoft.AspNetCore.Mvc;
using server.Application.Dtos;
using server.Application.Dtos.CustomerDto;
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

        public CustomerController(
            IListAllCustomersUseCase listAllCustomersUseCase,
            ICreateCustomerUseCase createCustomerUseCase,
            IGetUniqueCustomerUseCase getUniqueCustomerUseCase,
            IEditCustomerUseCase editCustomerUseCase,
            IDeleteCustomerUseCase deleteCustomerUseCase
        )
        {
            this._listAllCustomersUseCase = listAllCustomersUseCase;
            this._createCustomerUseCase = createCustomerUseCase;
            this._getUniqueCustomerUseCase = getUniqueCustomerUseCase;
            this._editCustomerUseCase = editCustomerUseCase;
            this._deleteCustomerUseCase = deleteCustomerUseCase;
        }

        [HttpGet]
        public async Task<IActionResult> getAllCustomers()
        {
            try
            {
                return Ok(await this._listAllCustomersUseCase.execute());
            }
            catch (Exception e)
            {
                return NotFound(new ExceptionResponseDTO(e.Message));
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getAllCustomers([FromRoute] int id)
        {
            try
            {
                return Ok(await this._getUniqueCustomerUseCase.execute(id));
            }
            catch (Exception e)
            {
                return NotFound(new ExceptionResponseDTO(e.Message));
            }
        }

        [HttpPost]
        public async Task<IActionResult> createCustomer(
            [FromBody] CreateCustomerRequestDTO createCustomerRequestDTO
        )
        {
            try
            {
                var customerCreated = await this._createCustomerUseCase.execute(
                    createCustomerRequestDTO
                );
                return Ok(customerCreated);
            }
            catch (Exception e)
            {
                return NotFound(new ExceptionResponseDTO(e.Message));
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> createCustomer(
            [FromBody] EditCustomerRequestDTO editCustomerRequestDTO,
            [FromRoute] int id
        )
        {
            try
            {
                var customerCreated = await this._editCustomerUseCase.execute(
                    editCustomerRequestDTO,
                    id
                );

                return Ok(customerCreated);
            }
            catch (Exception e)
            {
                return NotFound(new ExceptionResponseDTO(e.Message));
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> deleteCustomer([FromRoute] int id)
        {
            try
            {
                var customerDelete = await this._deleteCustomerUseCase.execute(id);

                return Ok(customerDelete);
            }
            catch (Exception e)
            {
                return NotFound(new ExceptionResponseDTO(e.Message));
            }
        }
    }
}
