using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using VSTDA.API.Models;

namespace VSTDA.API.Data
{
       //1. Creat class that inherits from DbContext
    public class VSTDADataContext : DbContext
    {
        //2. Setup Constructor
        public VSTDADataContext() : base("ToDo")
        {
              
             
        }
        //3. Describe our tables
        public IDbSet<ToDo> ToDoes { get; set; }
    }
}