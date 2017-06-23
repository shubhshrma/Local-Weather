var state='c';

$(document).ready(function(){

    var html="";

    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(function(position){
        var url="https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/affb25aa15a43b5589b97f87e8663ae5/"+position.coords.latitude+","+position.coords.longitude;
        $.getJSON(url,function(json){

            console.log(json);
            rawText=JSON.stringify(json);
            obj=JSON.parse(rawText);
            document.getElementById("timezone").innerHTML = "<b>Timezone is " + obj.timezone+"</b>";
            document.getElementById("timezone").style.fontSize="40px";
            document.getElementById("temperature").innerHTML ="<b>Temperature is " +1/1.8*(obj.currently.temperature-32)
            +"&#8451;</b>";
            document.getElementById("temperature").style.fontSize="40px";

            var skycons=new Skycons({"color":"#ADFF2F"});
            skycons.add("icon",obj.currently.icon);
            skycons.play();

            document.getElementById("wind").innerHTML="<b>Wind speed is "+obj.currently.windSpeed+" mph</b>";
            document.getElementById("wind").style.fontSize="40px";
        });


      });

    }

  });


  function temp()
  {
    if(state==='c')
    {
      document.getElementById("temperature").innerHTML ="<b>Temperature is " +obj.currently.temperature
      +"&#8457;</b>";
      state='f';
    }
    else {

      document.getElementById("temperature").innerHTML ="<b>Temperature is " +1/1.8*(obj.currently.temperature-32)
      +"&#8451;</b>";
      state='c';
    }
  }
