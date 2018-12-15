using System;
using System.Linq;
using Models;

namespace Interfaces
{
    public interface IPersonRepository: IRepository<Person>
    {
        IQueryable<Person> Persons(Int32 page, Int32 size);
        Int32 Count();
    }
}
