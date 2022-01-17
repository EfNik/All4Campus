// import { Component, OnInit } from '@angular/core';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { Map, tileLayer, marker, polyline } from 'leaflet';
// import * as Leaflet from 'leaflet';
// import "leaflet/dist/leaflet.css";
// import { HttpClient } from '@angular/common/http';

// import { timer } from 'rxjs';

// // import * as internal from 'stream';




// @Component({
//   selector: 'app-map',
//   templateUrl: './map.page.html',
//   styleUrls: ['./map.page.scss'],
// })
// export class MapPage implements OnInit {
//   map: Leaflet.Map;
//   marker: any;
//   latlong = [];
//   properties = [];
//   status;

//   //   //fortosi dedomenwn apo server 
//   ngOnInit() {
//     // this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data =>{
//     //   // console.log(data);
//     //   // data.foreach(async function(sensor){

//     //   // })

//     //   Object.entries(data).forEach(
//     //     ([key, value]) => console.log(key, value)
//     //     // Leaflet.marker([38.290014, 21.787147],{icon:greenIcon}).addTo(this.map)
//     //     // .bindPopup("Type"+ "marker.type");
//     //   );
//     // });
//   }

//   //   //arxikopoihsh gia ta keys tou sensor

//   Type: String;
//   // Status: internal;
//   Longitude: DoubleRange;
//   Latitude: DoubleRange;

//   constructor(

//     private geolocation: Geolocation,
//     public http: HttpClient
//   ) { }

//   ionViewDidEnter() {
//     //   //o xartis xwris tipota topothesia kai zoom

//     this.map = new Leaflet.Map('mapId').setView([38.290014, 21.787147], 15);
//     Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v').addTo(this.map);



//     //   //   //akolouthoun ta 3 diaforetika icons prasino,kitrino,kokkino 

//     var greenIcon = new Leaflet.Icon({
//       iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
//       // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//       iconSize: [10, 21],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       // shadowSize: [41, 41]
//     });
//     var yellowIcon = new Leaflet.Icon({
//       iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
//       // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//       iconSize: [10, 21],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       // shadowSize: [41, 41]
//     });
//     var redIcon = new Leaflet.Icon({
//       iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//       // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//       iconSize: [10, 21],
//       iconAnchor: [12, 41],
//       popupAnchor: [1, -34],
//       // shadowSize: [41, 41]
//     });
//     //   //  //edw einai to thema mou me thn for loop pou prepei na ginei sto server wste na elegxei to status an einai 0,1h kati diaforetiko 

//     //   //   // data.forEach(obj => {
//     //   //   //   Object.entries(obj).forEach(([key, value]) => {
//     //   //   //     console.log(`${key} ${value}`);
//     //   //   //   });
//     //   //   // if(marker.status=0){
//     //   //   //   this.status=greenIcon;
//     //   //   // }
//     //   //   // if(marker.status=1){
//     //   //   //   this.status=yellowIcon; 
//     //   //   // }
//     //   //   // else{

//     //   //   //   this.status=redIcon;
//     //   //   // }

//     //   //   //kanonika an etrexe kanonika ftanoume sto teleutaio bhma edw opou to mono pou xreiazetai einai na parei to latitude kai longitude tou sensor kai analoga to 
//     //   //    //stauts tou na dwsei to icon pou theloume epishs exw balei popup gia to ti typos einai rampa h asanser

//     // Leaflet.marker([marker.latitude, marker.longitude],{icon:this.status}).addTo(this.map)
//     // .bindPopup("Type"+ marker.type);
//     // Leaflet.marker([38.290014, 21.787147],{icon:greenIcon}).addTo(this.map)
//     // .bindPopup("Type"+ "marker.type");

//     const source = timer(100,60000);

//     const subscribe = source.subscribe(val => this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {


//     //------> remove old markers before adding the new ones
//     //implement after layers because you remove them using the clearLayer command





//     // this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {
//       // console.log(data);
//       // data.foreach(async function(sensor){

//       // })

//       var size = Object.keys(data).length;

//       // console.log(data[0].location.latitude)
//       // console.log(data[0].status)
//       // Object.entries(data).forEach(
//       //   // ([key, value]) => console.log(key, value)
//       //   Leaflet.marker([38.290014, 21.787147],{icon:greenIcon}).addTo(this.map)
//       //   .bindPopup("Type"+ "marker.type")
//       // );
//       for (let i = 0; i < size; i++) {
//         if(data[i].status=="green")
//         {
//           Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).addTo(this.map)
//           .bindPopup("Type" + "marker.type")
//         }
//         else if(data[i].status=="yellow")
//         {
//           Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).addTo(this.map)
//           .bindPopup("Type" + "marker.type")
//         }
//         else if(data[i].status=="red")
//         {
//           Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).addTo(this.map)
//           .bindPopup("Type" + "marker.type")
//         }

//       }


//     }))
//   }



// }

// --------------------------------------------------------------^old^------------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline } from 'leaflet';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { timer } from 'rxjs';
import { EorRimageGetService } from 'src/app/eor-rimage-get.service';
import { saveAs} from 'file-saver';

// import * as internal from 'stream';




@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: Leaflet.Map;
  marker: any;
  latlong = [];
  properties = [];
  status;
  fileName = 'testImage.png';


  ngOnInit() { }

  //   //arxikopoihsh gia ta keys tou sensor

  Type: String;
  // Status: internal;
  Longitude: DoubleRange;
  Latitude: DoubleRange;

  constructor(

    private geolocation: Geolocation,
    public http: HttpClient,
    private EorRi : EorRimageGetService
  ) { }

  ionViewDidEnter() {
    //   //o xartis xwris tipota topothesia kai zoom

    this.map = new Leaflet.Map('mapId').setView([38.290014, 21.787147], 15);
    Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v').addTo(this.map);

    // this.downloadImage2();
    // this.downloadFile();
    //   //   //akolouthoun ta 3 diaforetika icons prasino,kitrino,kokkino 

    var greenIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    var yellowIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    var redIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });

    //normal timer
    // const source = timer(100, 60000);
    // const source2 = timer(60099,59999);

    //test timer
    const source = timer(100, 10000);
    const source2 = timer(10099,9999);

    // marker.on('click', function(e) {
    //   marker.setIcon("adasd");
    // });
    // let test = 4;
    let rem=0;
    const subscribe = source.subscribe(val => this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {
    // const subscribe = source.subscribe(val => this.http.get("http://44.201.231.57/api/loadmap").subscribe(data => {
    
      source2.subscribe(val => legendControl.remove())
      // if(rem==1)
      // {
      //   legendControl.remove()
      // }
      
      // console.log(test);
      //remove previous layer menu
      //try1 
      // try{
      //   legendControl.eachLayer(function (layer) {
      //     legendControl.removeLayer(layer);
      //   });
      // }
      // catch(error)
      // {
      //   console.log(error);
      // }
 

      //try2
      // Leaflet.control.layers.removeLayers();

      //try3

      // try{
      //   this.map.removeLayer(rampes);
      //   this.map.removeLayer(elevs);
      // }
      // catch(error)
      // {
      //   console.log(error);
      // }

      //try 4

      // try{
      //   Leaflet.control.layers(0, overlays).removeLayer(0);
      // }
      // catch(error)
      // {
      //   console.log(error);
      // }

      // Leaflet.removeControl();


      //try 5 
      // try{
      //   legendControl.remove();
      // }
      // catch(error)
      // {
      //   console.log(error);
        
      // }
      

      //------> remove old markers before adding the new ones
      //implement after layers because you remove them using the clearLayer command


      var size = Object.keys(data).length;
      // var arr = <ramps[]>[];
      // var arr = <elevators[]>[];
      var ramps = [];
      var elevators = [];

      //start of the for loop prwta elegxos gia to type den thymamai pws to exeis grapsei opote diorthwse to an einai different kai meta push sto empty array.
      //not sure if the initialization of emtpy array is like that.

      for (let i = 0; i < size; i++) {
        if (data[i].type == "r") {

          if (data[i].status == "green") {
            // var ramp1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp1.bindPopup("<img src=" + "/assets/images/logo5.png"+ "/>"); });
            var ramp1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp1.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            ramps.push(ramp1);

          }
          else if (data[i].status == "yellow") {
            // var ramp2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id)
            // .on('click',console.log("-----------------------------------------"));
            var ramp2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp2.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            // .on('click',this.downloadImage(ramp2))
            // .on('click', file => this.downloadFile(file))
            // .on('click', function() {
            //   this.http.post("http://127.0.0.1:8080/api/getImage").subscribe(data => {

            //     ramp1.bindPopup("<img src=" + data+ "/>"); 
            //   }); 
              
            
            // });
            ramps.push(ramp2);
          }
          else if (data[i].status == "red") {
            var ramp3 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).bindPopup("id: " + data[i].id).on('click', function() {ramp3.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            ramps.push(ramp3);
          }
        }
        //type==e for elevators

        else if (data[i].type == "e") {
          
          if (data[i].status == "green") {
            var elev1 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev1.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            elevators.push(elev1);

          }
          else if (data[i].status == "yellow") {
            var elev2 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev2.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            elevators.push(elev2);
          }
          else if (data[i].status == "red") {
            var elev3 = Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).bindPopup("id: " + data[i].id).on('click', function() {elev3.bindPopup("<img src=" + "http://127.0.0.1:8080/api/image_issue?bug_id="+data[i].id+ ">"); });
            //+"<img src=" + "/assets/images/logo5.png"+ "/>"
            elevators.push(elev3);
          }
        }

      }

      // this.map.eachLayer(function (layer) {
      //   // this.map.removeLayer(layer);
      //   console.log(layer);
      // });
      // overlays.clearLayers();

      
      //step1
      var rampes = Leaflet.layerGroup(ramps);
      var elevs = Leaflet.layerGroup(elevators);

      //step2
      var overlays = {
        "Ramps": rampes,
        "Elevators": elevs
      };

      //step3 with also adding to the map
      var legendControl = Leaflet.control.layers(0, overlays);
      legendControl.addTo(this.map);

      rem =1;
      // legendControl.remove();
      // Leaflet.control._update();
      
    })
    
    )
    
  }


  returnBlob(res) : Blob {
    return new Blob([res], {type: 'image/png'});
  }

  downloadImage(marker){
    this.EorRi.downloadFile(this.fileName).subscribe( res => {
      if(res){
        const url = window.URL.createObjectURL(this.returnBlob(res))
        marker.bindPopup("<img src=" +url+ "/>");
      }
    })
  }

  downloadImage2(){
    console.log("-----342342-------------------------")
    this.EorRi.downloadFile(this.fileName).subscribe( res => {
      if(res){
        saveAs(this.returnBlob(res),this.fileName);
      }
    })
  }


  downloadFile(){
    this.EorRi.downloadFile({'filename': this.fileName}).subscribe(
      (data) => {
        if(data && data != undefined && data != null){
          saveAs(data,this.fileName);
        }
      }
    )
  }


}



