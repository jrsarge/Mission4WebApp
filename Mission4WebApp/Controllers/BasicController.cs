using Microsoft.AspNetCore.Mvc;
using Mission4WebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4WebApp.Controllers
{
    public class BasicController : Controller
    {
        public IActionResult Index ()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator ()
        {
            return View();
        }


        [HttpPost]
        public IActionResult GradeCalculator (GradeCalculatorModel model)
        {
            return View();
        }
    }
}
