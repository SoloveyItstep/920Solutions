using System.Linq;
using Microsoft.EntityFrameworkCore;
using Models;
using Interfaces;
using Context;

namespace Implimentation
{
    public class PersonRepository : Repository<Person>, IPersonRepository
    {
        public PersonRepository(DbContext context) 
            :base(context)
        { }

        public int Count()
        {
            return ((PersonDbContext)context).Persons.Count();
        }

        public IQueryable<Person> Persons(int page, int size)
        {
            return ((PersonDbContext)context).Persons.Skip(page * size).Take(size);
        }
    }
}
