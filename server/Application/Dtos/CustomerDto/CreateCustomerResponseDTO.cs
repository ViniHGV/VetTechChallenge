using server.Core.Models;

namespace server.Application.Dtos.CustomerDto
{
    public record CreateCustomerResponseDTO(string message, Customer customer) { }
}
