using Microsoft.EntityFrameworkCore;
using Interfaces;
using Context;

namespace Implimentation
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly PersonDbContext _context;
        public UnitOfWork(PersonDbContext context)
        {
            this._context = context;
            this.Persons = new PersonRepository(_context);
        }

        public IPersonRepository Persons { get; private set; }

        public int Commit() => _context.SaveChanges();

        public void Dispose() => _context.Dispose();
    }
}
