namespace server.Application.Configurations
{
    public class MyLogEvents
    {
        public const int GenerateCustomer = 1000;
        public const int ListCustomers = 1001;
        public const int GetCustomer = 1002;
        public const int InsertCustomer = 1003;
        public const int UpdateCustomer = 1004;
        public const int DeleteCustomer = 1005;

        public const int TestCustomer = 3000;

        public const int GetCustomerNotFound = 4000;
        public const int UpdateCustomerNotFound = 4001;
        public const int GenerateCustomerError = 4002;
    }
}
