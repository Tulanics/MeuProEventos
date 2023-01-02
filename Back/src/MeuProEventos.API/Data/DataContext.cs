using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeuProEventos.API.Models;
using Microsoft.EntityFrameworkCore;

namespace MeuProEventos.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<Evento> Eventos { get; set; }


    }
}