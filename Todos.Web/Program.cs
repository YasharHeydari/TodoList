using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using NLog.Web;

namespace Todos
{
    public class Program
    {
        public static void Main(string[] args)
        {
            try
            {
                var logger = NLogBuilder.ConfigureNLog("nlog.config").GetCurrentClassLogger();
                logger.Info("Application Started");
                CreateWebHostBuilder(args).Build().Run();
            }
            finally
            {
                NLog.LogManager.Shutdown();
            }
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureLogging(
                    logging => 
                    {
                        logging.ClearProviders();
                        logging.SetMinimumLevel(LogLevel.Debug);
                    }).UseNLog()
                .UseStartup<Startup>();
                
    }
}
