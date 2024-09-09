namespace server.Core.Exceptions.CustomerErrors
{
    public class CustomerNotFoundException : Exception
    {
        public CustomerNotFoundException(string message)
            : base(message) { }
    }
}
