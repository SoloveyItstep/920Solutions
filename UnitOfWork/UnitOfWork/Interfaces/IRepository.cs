using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Interfaces
{
    public interface IRepository<T> where T: class
    {
        T Get(Int32 id);
        IQueryable<T> GetAll();
        IQueryable<T> Find(Expression<Func<T, Boolean>> predicate);
        void Add(T entity);
        void AddRange(IEnumerable<T> entities);
        void Remove(T entity);
    }
}