$(function(){
    $("#next").click(function(){
        var next = curr + 1;
        if(next <= items.length){
            setIdAndStart(next);
            curr = next;
            playVideo(vidId, vidStart);
        }else{
            alert("You've reached the end");
        }
    })

    $("#prev").click(function(){
        var prev = curr - 1;
        if(prev >= 1){
            setIdAndStart(prev);
            curr = prev;
            playVideo(vidId, vidStart);
        }else{
            alert("You've reached the end");
        }
    })
})
