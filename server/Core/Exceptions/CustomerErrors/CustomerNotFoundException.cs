namespace server.Core.Exceptions.CustomerErrors
{
    public class CustomerNotFoundException : ApiException
    {
        public override int StatusCode => 404;

        public CustomerNotFoundException(string message)
            : base(message) { }
    }
}
