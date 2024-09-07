using System.ComponentModel.DataAnnotations;

namespace server.Application.Dtos.CustomerDto
{
    public record CreateCustomerRequestDTO(
        [Display(Name = "Nome do Usuário")]
        [Required(ErrorMessage = "O nome do usuário é obrigatório", AllowEmptyStrings = false)]
            string Nome,
        [Required(ErrorMessage = "O e-amail do usuário é obrigatório", AllowEmptyStrings = false)]
        [EmailAddress(ErrorMessage = "O e-amail informado é inválido")]
            string Email,
        [DataType(DataType.PhoneNumber)] [Display(Name = "999994444")] string? Telefone,
        string? Endereco
    ) { }
}
