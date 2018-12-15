using System;

namespace Interfaces
{
    public interface IUnitOfWork: IDisposable
    {
        IPersonRepository Persons { get; }
        Int32 Commit();
    }
}
