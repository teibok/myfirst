var result=[];
var d;
var e;
var ff;
var press=0;
var index=0;
var op="";

$(document).ready(function (){
/*Handling of Numbers part and clear*/
  $('#0').on('click',function(){
    result.push(0);
    $('#input').html(result);
  });

  $("#1").on("click",function(){
    result.push(1);
    $("#input").html(result);
  });

  $("#2").on("click",function(){
    result.push(2);
    $("#input").html(result);
  });

  $("#3").on("click",function(){
    result.push(3);
    $("#input").html(result);
  });

  $("#4").on("click",function(){
    result.push(4);
    $("#input").html(result);
  });

  $("#5").on("click",function(){
    result.push(5);
    $("#input").html(result);
  });

  $("#6").on("click",function(){
    result.push(6);
    $("#input").html(result);
  });

  $("#7").on("click",function(){
    result.push(7);
    $("#input").html(result);
  });

  $("#8").on("click",function(){
    result.push(8);
    $("#input").html(result);
  });

  $("#9").on("click",function(){
    result.push(9);
    $("#input").html(result);
  });

  $("#back").on("click",function(){
    result.pop();
    if(press>0&&index==result.length){--press;}
    $("#input").html(result);
  });

  $("#ac").on("click",function(){
    result.splice(0);
    press=0;
    index=0;
    ff=0;
    $("#input").html(result);
  });

  /*end of Handling Numbers and clear part*/
  /*Start of handling operators*/

  $("#plus").on("click",function(){
    result.push('+');

    ++press;
    if(press>1){op="+";calc2();}
    else{
    index=result.length-1;}

    $("#input").html(result);
  });

  $("#minus").on("click",function(){
    result.push('-');

    ++press;
    if(press>1){op="-";calc2();}
    else{
    index=result.length-1;}

    $("#input").html(result);
  });

  $("#mod").on("click",function(){
    result.push('%');

    ++press;
    if(press>1){op="%";calc2();}
    else{
    index=result.length-1;}

    $("#input").html(result);
  });

  $("#div").on("click",function(){
    result.push('/');

    ++press;
    if(press>1){op="/";calc2();}
    else{
    index=result.length-1;}

    $("#input").html(result);
  });

  $("#mul").on("click",function(){
    result.push('x');

    ++press;
    if(press>1){op="*";calc2();}
    else{
    index=result.length-1;}

    $("#input").html(result);
  });

  $("#dot").on("click",function(){
    result.push('.');
    $("#input").html(result);
  });

  $("#equal").on("click",function(){
    calc();
  });



/*End of Handling operators*/
});

/*The actual calculation part outside document.ready*/

function calc(){
    d=result.splice(0,index).join("");
    e=result.splice(1,result.length-1).join("");
    /*the various operations*/
    switch (result[0]) {
      case "+":ff=parseFloat(d)+parseFloat(e);
        break;
      case "-":ff=parseFloat(d)-parseFloat(e);
        break;
      case "/":ff=parseFloat(d)/parseFloat(e);
        break;
      case "*":ff=parseFloat(d)*parseFloat(e);
          break;
      case "%":ff=parseFloat(d)%parseFloat(e);
          break;
    }
    /*end of various operations*/
    result.pop();
    result.push(ff);
    $("#input").html(result);/*to output result*/
    press=0;
}//end of function


/* Start of function calc2() */
function calc2(){
  d=result.splice(0,index).join("");
  e=result.splice(1,result.length-2).join("");
  /*the various operations*/
  switch (result[0]) {
    case "+":ff=parseFloat(d)+parseFloat(e);
      break;
    case "-":ff=parseFloat(d)-parseFloat(e);
      break;
    case "/":ff=parseFloat(d)/parseFloat(e);
      break;
    case "*":ff=parseFloat(d)*parseFloat(e);
        break;
    case "%":ff=parseFloat(d)%parseFloat(e);
  }
  /*end of various operations*/
  result.splice(0,1,ff);
  $("#input").html(result);
  press=1;
  index=result.length-1;

}// end of function calc2
