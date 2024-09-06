using System.ComponentModel.DataAnnotations;

namespace server.Application.Dtos.CustomerDto
{
    public record EditCustomerRequestDTO(
        [Display(Name = "Nome do Usuário")] string? Nome,
        [EmailAddress(ErrorMessage = "O e-amail informado é inválido")] string? Email,
        [DataType(DataType.PhoneNumber)] string? Telefone,
        string? Endereço
    ) { }
}
