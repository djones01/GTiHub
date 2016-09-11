using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GTiHub.Models.EntityModel
{
    public class GTiHubContext : DbContext
    {
        public GTiHubContext(DbContextOptions<GTiHubContext> options) : base(options)
        {
        }


    }
}
