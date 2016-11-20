namespace GTiHub
{
    #region

    using System.IO;

    using GTiHub.API;
    using GTiHub.Models.EntityModel;

    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.DependencyInjection.Extensions;
    using Microsoft.Extensions.FileProviders;
    using Microsoft.Extensions.Logging;

    using Serilog;

    #endregion

    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder =
                new ConfigurationBuilder().SetBasePath(env.ContentRootPath)
                    .AddJsonFile("appsettings.json", true, true)
                    .AddJsonFile($"appsettings.{env.EnvironmentName}.json", true)
                    .AddEnvironmentVariables();
            this.Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(this.Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            // Add serilog to the logging pipeline
            loggerFactory.AddSerilog();

            app.UseSession();
            app.UseStaticFiles();

            app.UseStaticFiles(
                new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(env.ContentRootPath, "node_modules")),
                        RequestPath = "/node_modules"
                    });

            app.UseMvc(
                routes =>
                    {
                        routes.MapRoute("default", "{controller=Home}/{action=Index}/{id?}");
                        routes.MapSpaFallbackRoute("spa-fallback", new { controller = "home", action = "index" });
                    });
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMemoryCache();
            services.AddSession();
            services.AddMvc();

            // Add the TransformHelpers service
            services.TryAddTransient<ITransformHelpers, TransformHelpers>();

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            var connection = @"Server=DJ-PC;Database=ihubdb;Trusted_Connection=True;";
            services.AddDbContext<GTiHubContext>(options => options.UseSqlServer(connection));
        }
    }
}