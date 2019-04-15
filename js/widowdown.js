$(function(){
    $(window).scroll(function(){
        var anchor = $('html,body').scrollTop();
        if(anchor>=400){
            $(".leftBox").show(500)
        }else{
            $(".leftBox").hide(500)
        }
    })
    $(window).scroll(function(){
        var anchot = $('html,body').scrollTop();
        if(anchot>=400){
            $(".rightBox").show(500)
        }else{
            $(".rightBox").hide(500)
        }
    })
    
})
