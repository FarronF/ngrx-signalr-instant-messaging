using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.DataStorage
{
    public static class DataManager
    {
        public static List<MessageModel> GetData()
        {
            var r = new Random();
            return new List<MessageModel>()
        {
           new MessageModel { Message = "Message1" },
           new MessageModel { Message = "Message2" },
           new MessageModel { Message = "Message3" },
           new MessageModel { Message = "Message4" },
        };
        }
    }
}
