namespace server.Core.Errors.CustomerErrors
{
    public class CustomerNotFoundException : Exception
    {
        public CustomerNotFoundException(string message)
            : base(message) { }
    }
}
