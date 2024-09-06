namespace server.Core.Errors.CustomerErrors
{
    public class CustomerAlreadyExistsException : Exception
    {
        public CustomerAlreadyExistsException() { }

        public CustomerAlreadyExistsException(string message)
            : base(message) { }
    }
}
