using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VSTDA.API.Models
{
    public class ToDo
    {
        //Primary Key
        public int ToDoId { get; set; }
        //Foreign Key - Optional

        //User Data
        public string Item { get; set; }
        //public DateTime CreatedDate { get; set; }
        public int Priority { get; set; }
    }
}