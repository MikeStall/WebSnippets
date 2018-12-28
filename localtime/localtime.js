// Helper to convert UTC times from server into local time on client. 
// <div> or <span> tag has a "mytime" class, and a "UTC" attribute that's in ISO format. 
// Server emits elements like like: 
//   <div class="mytime" utc ="@date.ToString("o")"></div>
//   <span class="mytime" utc ="2018-12-28T02:36:13.6774675Z"></span>
// And then this helper will read the utc attribute and updaet the <span> contents to local time. 

$(function () {
    var key = $(".mytime").each(function (i, obj) {
        var element = $(this); // <div> or <span> element. 
        var utc = element.attr("utc"); // "2018-12-28T02:36:13.6774675Z"
        var d = new Date(utc);
        var l = d.toLocaleString(); // Runs client side, so will be client's local time
        element.text(l);
    });
});