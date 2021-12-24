using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Server.TimerFeatures;
namespace Server.Controllers
{
    [Route("api/instantMessaging")]
    [ApiController]
    public class InstantMessagingController : ControllerBase
    {
        private IHubContext<InstantMessagingHub> _hub;
        public InstantMessagingController(IHubContext<InstantMessagingHub> hub)
        {
            _hub = hub;
        }
        public IActionResult Get()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("sendmessage", "hello"));
            return Ok(new { Message = "Request Completed" });
        }
    }
}
