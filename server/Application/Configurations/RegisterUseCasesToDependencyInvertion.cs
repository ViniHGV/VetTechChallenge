using server.Core.UseCases.Customer.CreateCustomerUseCase;
using server.Core.UseCases.Customer.DeleteCustomerUseCase;
using server.Core.UseCases.Customer.EditCustomerUseCase;
using server.Core.UseCases.Customer.GetUniqueCustomerUseCase;
using server.Core.UseCases.Customer.ListAllCustomersUseCase;

namespace server.Application.Configurations
{
    public static class RegisterUseCasesToDependencyInvertion
    {
        public static void AddUseCaseServices(this IServiceCollection services)
        {
            services.AddScoped<IGetUniqueCustomerUseCase, GetUniqueCustomerUseCase>();
            services.AddScoped<ICreateCustomerUseCase, CreateCustomerUseCase>();
            services.AddScoped<IListAllCustomersUseCase, ListAllCustomersUseCase>();
            services.AddScoped<IEditCustomerUseCase, EditCustomerUseCase>();
            services.AddScoped<IDeleteCustomerUseCase, DeleteCustomerUseCase>();
        }
    }
}
