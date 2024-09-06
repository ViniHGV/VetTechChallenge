namespace server.Core.UseCases.Customer.GetUniqueCustomerUseCase
{
    public interface IGetUniqueCustomerUseCase
    {
        Task<Models.Customer> execute(int customerId);
    }
}
