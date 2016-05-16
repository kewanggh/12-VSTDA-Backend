using System;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace WebApiContrib.MessageHandlers
{
    public class MethodOverrideHandler : DelegatingHandler
    {
        public readonly string[] methods = { "DELETE", "HEAD", "PUT" };
        public const string header = "X-HTTP-Method-Override";

        protected override Task<HttpResponseMessage> SendAsync(
            HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request.Method == HttpMethod.Post && request.Headers.Contains(header))
            {
                var method = request.Headers.GetValues(header).FirstOrDefault();

                if (methods.Contains(method, StringComparer.InvariantCultureIgnoreCase))
                {
                    request.Method = new HttpMethod(method);
                }
            }

            return base.SendAsync(request, cancellationToken);
        }
    }
}