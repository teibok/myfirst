var cr="red";

$(document).ready(function(){
  reset();
  $('#grid').on('mouseenter','#small_grid',function(){
    $p=$(this);
    change_color($p);
  })
  $('#reset').on('click',function(){
    reset();
  });
  $('#randomcolour').on('click',function(){
    randomcolour();
  });
  $('#context').on('click',function(){
    $('p').slideToggle();
  });
  /* error:syntax; $('#erase').on('click',erase());  does not work*/
  $('#erase').on('click',function(){
    $("#grid").children("#small_grid").css("background-color",'black');
  });

});
/*functions begin here*/
function reset(){
  remove_divs();
  var n=prompt("enter a number (1-100)",16);
  var i=Math.floor(parseFloat(n));//convert string to integer number
  var size=Math.floor(640/i);
  i*=i;
  var j=0;
  while(j<i)
  {
    $('#grid').append("<div id=\"small_grid\"></div>");
    ++j;
  }
  $("#grid > #small_grid").css({"height":size+"px","width":size+"px"});
}

function remove_divs(){
  $('#grid > #small_grid').remove();//removes all small_grids
  $('#grid > #small_grid').css("background-color",'black');/*this is required to remove
  the color set by previous reset*/
}

function erase(){
  $('#grid > #small_grid').css("background-color",'black');
}

function randomcolour(){
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  cr="rgb("+r+","+g+","+b+")";
  /*error:console.log(typeof cr); this returns the type of variable,string,array,object,etc.
  in this case string so push operations do not work*/

}

function change_color($color_this){
  $($color_this).css("background-color",cr);
}
