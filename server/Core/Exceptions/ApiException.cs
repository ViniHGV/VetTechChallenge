namespace server.Core.Exceptions
{
    public abstract class ApiException : Exception
    {
        public abstract int StatusCode { get; }

        protected ApiException(string message)
            : base(message) { }
    }
}
