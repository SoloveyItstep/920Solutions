using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http.Cors;
using Interfaces;
using Microsoft.AspNetCore.Mvc;
using Models;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Persons.Controllers
{
    [Route("api/Persons")]
    public class PersonsController : Controller
    {
        IUnitOfWork unitOfWork;

        public PersonsController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }


        [HttpGet("[action]")]
        public JsonResult GetPersons()
        {
            IList<Person> persons = unitOfWork.Persons.GetAll().ToList();
            return Json(persons);
        }

        [HttpGet("[action]/{id}")]
        public Person GetPerson(int id) => unitOfWork.Persons.Get(id);

        [HttpPost("[action]")]
        public void Create([FromBody]Person person)
        {
            if (person is null)
                throw new NullReferenceException("Data is empty");
            unitOfWork.Persons.Add(person);
            unitOfWork.Commit();
        }

        [HttpPost("[action]")]
        public void Edit([FromBody]Person person)
        {
            if (person is null)
                throw new NullReferenceException("Data is empty");
            else if (person.Id == 0)
                throw new ArgumentException("Id of person is empty or has zero value");
            unitOfWork.Persons.Add(person);
            unitOfWork.Commit();
        }

        [HttpDelete("[action]{id}")]
        public void Delete(int id)
        {
            Person person = unitOfWork.Persons.Get(id);
            if (person is null)
                throw new NullReferenceException($"No such user with ID = {id}");
            unitOfWork.Persons.Remove(person);
            unitOfWork.Commit();
        }
    }
}
