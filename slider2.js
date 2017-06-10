sint=1;

$(document).ready(function (){
  start(1);
});

function start(int){
  sint=int;
  count=$("#slider > img").length;
  loop=setInterval(function(){
  if(sint>count)
    sint=1;
  else if(sint<1)
    sint=count;
  $("#slider > img").fadeOut(300);
  $("#slider > img#"+sint).fadeIn(300);
  ++sint;

},3000);
}

function stop(){
  window.clearInterval(loop);
}

function snext(){
  stop();
  start(sint+1);
}

function prev(){
  stop();
  start(sint-1);
}
