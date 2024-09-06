using server.Core.Models;

namespace server.Application.Dtos.CustomerDto
{
    public record EditCustomerResponseDTO(string message, Customer Customer) { }
}
