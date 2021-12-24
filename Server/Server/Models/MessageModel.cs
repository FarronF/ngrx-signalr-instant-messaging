using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Models
{
    public class MessageModel
    {
        public Guid Id { get; set; }
        public Guid To { get; set; }
        public Guid From { get; set; }
        public DateTime SentTime { get; set; }
        public DateTime DeliveredTime { get; set; }
        public DateTime ReadTime { get; set; }
        public string Message { get; set; }

    }
}
