namespace server.Core.UseCases.Customer.ListAllCustomersUseCase
{
    public interface IListAllCustomersUseCase
    {
        Task<List<Models.Customer>> execute();
    }
}
