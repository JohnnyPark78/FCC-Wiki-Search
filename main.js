var wikiArr = [];
var urlStr = "";

$(document).ready(function(){
    function req(request){
        urlStr = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + request;
        $.ajax({
            type:"GET",
            url: urlStr,
            dataType: "jsonp",
            success: function(response){
                wikiArr = response;
            },
            error: function(err){
                console.log(err);
                console.log("error");
            }
        }).done(function(){
            for(var i = 0; i < wikiArr[1].length; i++){
                $(".results").append('<div class="wiki-entry"><p class="item-number">' + (i +1) + '</p>' + 
                    '<p class="wiki-title"><a href="' + wikiArr[3][i] + '" target="_blank">' + wikiArr[1][i] +'</a></p>' + 
                    '<p class="wiki-text">' + wikiArr[2][i] + '</p></div>');
            }
            $(".results").show(2000);
        });
    };

    $("#go").on("click", function(){
        $(".results").html(" ");
        var q = $("#query").val();
        req(q);
    })
    
});
