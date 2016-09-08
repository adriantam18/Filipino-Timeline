$(function(){
    $("#next").click(function(){
        var next = currIndex + 1;
        if(next <= items.length){
            var entry = getEntry(next);
            currIndex = next;
            playVideo(entry);
            setVidInfo(entry);
        }else{
            alert("You've reached the end");
        }
    })

    $("#prev").click(function(){
        var prev = currIndex - 1;
        if(prev >= 1){
            var entry = getEntry(prev);
            currIndex = prev;
            playVideo(entry);
            setVidInfo(entry);
        }else{
            alert("You've reached the end");
        }
    })
})
