namespace server.Core.Models
{
    public class Customer
    {
        public Customer() { }

        public Customer(string Nome, string Email, string Telefone, string Endereço)
        {
            this.Nome = Nome;
            this.Email = Email;
            this.Telefone = Telefone;
            this.Endereco = Endereco;
        }

        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string? Telefone { get; set; }
        public string? Endereco { get; set; }
        public DateTime CriadoEm { get; set; } = DateTime.Now;
    }
}
