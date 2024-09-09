namespace server.Core.Exceptions.CustomerErrors
{
    public class CustomerAlreadyExistsException : ApiException
    {
        public override int StatusCode => 409;

        public CustomerAlreadyExistsException(string message)
            : base(message) { }
    }
}
