using System;
using System.Web.Mvc;

namespace Helpers
{
    // Use in View like: @Html.LocalDate(Model.CreatedDate)
    public static class MyHtmlExtensions
    {
        // Requires JQuery and localtime.js scripts. 
        // <script src="~/Scripts/jquery-1.10.2.min.js"></script>
        // <script src = "~/Scripts/Custom/localtime.js" ></ script >
        public static MvcHtmlString LocalDate(this HtmlHelper helper, DateTime date)
        {
            // Must use MvcHtmlString to avoid encoding.
            return new MvcHtmlString(String.Format("<span class=\"mytime\" utc =\"{0}\"></span>", date.ToString("o")));
        }

        public static MvcHtmlString LocalDate(this HtmlHelper helper, DateTime? date)
        {
            return LocalDate(helper, date.Value);
        }
    }

}