var state='c';
var obj="";
$(document).ready(function(){

    var html="";

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){
        var url="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/affb25aa15a43b5589b97f87e8663ae5/"+position.coords.latitude+","+position.coords.longitude;
        $.getJSON(url,function(json){


            var rawText=JSON.stringify(json);
            var obj=JSON.parse(rawText);
            function temp()
  {
    if(state==='c')
    {
      document.getElementById("temperature").innerHTML ="<p>Temperature is " +obj.currently.temperature
      +"&#8457;</p>";
      state='f';
    }
    else {

      document.getElementById("temperature").innerHTML ="<p>Temperature is " +(1/1.8*(obj.currently.temperature-32)).toFixed(2)
      +"&#8451;</p>";
      state='c';
    }
  }
            $("#temperature").on("click",temp);
            document.getElementById("timezone").innerHTML = "<p>Timezone is " + obj.timezone+"</p>";
            document.getElementById("timezone").style.fontSize="40px";
            var skycons=new Skycons({"color":"#ADFF2F"});
            skycons.add("icon",obj.currently.icon);
            document.getElementById("conditions").innerHTML ='<p>Conditions : '+obj.currently.summary+'</p>';
            skycons.play();
            document.getElementById("conditions").style.fontSize="40px";
            document.getElementById("temperature").innerHTML ="Temperature is " +(1/1.8*(obj.currently.temperature-32)).toFixed(2)
            +"&#8451;</b>";
            document.getElementById("temperature").style.fontSize="40px";

            document.getElementById("wind").innerHTML="<p>Wind speed is "+obj.currently.windSpeed+" mph</p>";
            document.getElementById("wind").style.fontSize="40px";
        });


      });

    }

  });



 