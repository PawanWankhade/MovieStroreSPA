namespace MovieStroreSPA.Migrations
{
    using MovieStoreSPA.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<MovieStoreSPA.Models.MovieDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(MovieStoreSPA.Models.MovieDbContext context)
        {
           // context.Movies.AddOrUpdate(m => m.Title,
            //new Movie
            //{
            //    Title = "Star Wars",
            //    ReleaseDate = DateTime.Now,
            //    Runtime = 121
            //},
            //new Movie
            //{
            //    Title = "Inception",
            //    ReleaseDate = DateTime.Now,
            //    Runtime = 148
            //},
            //new Movie
            //{
            //    Title = "Toy Story",
            //    ReleaseDate = DateTime.Now,
            //    Runtime = 81
            //}
            //);
        }
    }
    
}
