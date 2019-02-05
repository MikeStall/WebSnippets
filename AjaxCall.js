
<script type="text/javascript">
    function onCreate() {
        var url = "/Home/AjaxMethod";

        var ajax = $.ajax;
        ajax({
            url: url,
            contentType: "application/json",
            type: 'POST',
            data: JSON.stringify({
                Param1: value1
            }),
            processData: false
        });
    }
</script>

    <button id="btnSave" onclick="OnCreate()" class="btn btn-default">Create!</button>
    
    // Call into MVC
    // MVC will model bind from application/json 
    
    class Model { string Param1 {get;set; } }
    
      [HttpPost]
        public async Task<ActionResult> AjaxMethod(Model model)
        {
        }
