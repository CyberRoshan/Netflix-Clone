$("h2").parent().siblings().find("p").hide()
        $(".accordianItems h2").click(function(){
            $(this).parent().find("p").slideToggle()
            $(this).children().addClass("fa-minus")      
            $(this).children().removeClass("fa-plus")
            $(this).parent().siblings().find("i").addClass("fa-plus")  
            $(this).parent().siblings().find("p").slideUp()
        })