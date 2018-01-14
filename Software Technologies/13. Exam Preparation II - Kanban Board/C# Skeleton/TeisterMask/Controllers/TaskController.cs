using System;
using System.Linq;
using System.Web.Mvc;
using TeisterMask.Models;

namespace TeisterMask.Controllers
{
        [ValidateInput(false)]
	public class TaskController : Controller
	{
	    [HttpGet]
            [Route("")]
	    public ActionResult Index()
	    {
            using (var db = new TeisterMaskDbContext())
            {
                var tasks = db.Tasks.ToList();
                return View(tasks);
            }
        }

        [HttpGet]
        [Route("create")]
        public ActionResult Create()
		{
            return View();
		}

		[HttpPost]
		[Route("create")]
        [ValidateAntiForgeryToken]
		public ActionResult Create(Task task)
		{
            if (ModelState.IsValid)
            {
                using (var db = new TeisterMaskDbContext())
                {
                    db.Tasks.Add(task);
                    db.SaveChanges();

                    return Redirect("/");
                }
            }
            return View();
        }

		[HttpGet]
		[Route("edit/{id}")]
        public ActionResult Edit(int id)
		{
            using (var db = new TeisterMaskDbContext())
            {
                var task = db.Tasks.Find(id);
                if (task != null)
                {
                    return View(task);
                }
            }
            return Redirect("/");
        }

		[HttpPost]
		[Route("edit/{id}")]
        [ValidateAntiForgeryToken]
		public ActionResult EditConfirm(int id, Task taskModel)
		{
            if (!ModelState.IsValid)
            {
                return View(taskModel);
            }

            using (var db = new TeisterMaskDbContext())
            {
                var taskFromDb = db.Tasks.Find(taskModel.Id);
                if (taskFromDb != null)
                {
                    taskFromDb.Title = taskModel.Title;
                    taskFromDb.Status = taskModel.Status;
                    db.SaveChanges();
                }
            }
            return Redirect("/");
        }
	}
}