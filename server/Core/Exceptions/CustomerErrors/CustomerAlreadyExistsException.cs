namespace server.Core.Exceptions.CustomerErrors
{
    public class CustomerAlreadyExistsException : Exception
    {
        public CustomerAlreadyExistsException() { }

        public CustomerAlreadyExistsException(string message)
            : base(message) { }
    }
}
