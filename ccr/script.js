    var x = document.getElementById("contentCheckIn");
    //variáveis globais: 

    var todayCheck = new Date();

    var initialHour;
    var finalHour;

    var h = todayCheck.getHours();
    var m = todayCheck.getMinutes();
    var s = todayCheck.getSeconds();


    var initialHour = h + ":" + m + ":" + s;
    var finalHour = h + ":" + m + ":" + s;
    var countHourTotal = finalHour - initialHour;

    
    //console.log(initialHour)
    //localizador
    function getLocalizacao() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
      }
      else { alert = "Falha ao te localizar!"; }

      //window.location.reload(); 

    }

    let horaCerta = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();

    

    function mostrarPosition(positionMap) {
        //API Maps

    //     (function() {

    //        var positionMap = new google.maps.Map(document.getElementById('map'), {
    //           zoom: 8,
    //           center: {
    //             lat: -23.6815315,
    //             lng: -46.8754965
    //           }
    //         });
          
            
    //     document.querySelector('button').addEventListener('click', function() {
          
    //           var lat = document.getElementById('lat').value;
    //             var lon = document.getElementById('lon').value;
          
    //           var point = new google.maps.LatLng(lat, lon);
    //           map.panTo(point);
          
    //         }, false);
          
    //       })();
    // }

   

    }

    function cronometro(start, end){

    }

    var latitudeX;
    var longitudeY;

    function getPosition(position){
        var latitudeX = -23.5184975 //position.coords.latitude;
        var longitudeY = +-46.694544799999996//position.coords.longitude;

    
        console.log("voce está em: "+ latitudeX + longitudeY)
    }

    function ifPositionMatch(pointOne, pointTwo){
        if(pointOne == pointTwo){
            startCronometro;
        }
    }
    
    function initMap(lat, long) {
        var coord = lat, long;
 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: coord 
        });
 
        var marker = new google.maps.Marker({
          position: coordenadas,
          map: map,
          title: 'Você está aqui!'
        });
      }
