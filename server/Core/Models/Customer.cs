namespace server.Core.Models
{
    public class Customer
    {
        public Customer() { }

        public Customer(string Nome, string Email, string Telefone, string Endereco)
        {
            this.Nome = Nome;
            this.Email = Email;
            this.Telefone = Telefone;
            this.Endereco = Endereco;
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string? Telefone { get; set; } = string.Empty;
        public string? Endereco { get; set; } = string.Empty;
        public DateTime CriadoEm { get; set; } = DateTime.Now;
    }
}
