using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MovieStoreSPA.Models
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext():base("MovieDbContext")
        {

        }

        public DbSet<Movie> Movies{get;set;}
    }
}
