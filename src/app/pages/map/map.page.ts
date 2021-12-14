import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, polyline } from 'leaflet';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import { HttpClient } from '@angular/common/http';

import { timer } from 'rxjs';

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

  //   //fortosi dedomenwn apo server 
  ngOnInit() {
    // this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data =>{
    //   // console.log(data);
    //   // data.foreach(async function(sensor){

    //   // })

    //   Object.entries(data).forEach(
    //     ([key, value]) => console.log(key, value)
    //     // Leaflet.marker([38.290014, 21.787147],{icon:greenIcon}).addTo(this.map)
    //     // .bindPopup("Type"+ "marker.type");
    //   );
    // });
  }

  //   //arxikopoihsh gia ta keys tou sensor

  Type: String;
  // Status: internal;
  Longitude: DoubleRange;
  Latitude: DoubleRange;

  constructor(

    private geolocation: Geolocation,
    public http: HttpClient
  ) { }

  ionViewDidEnter() {
    //   //o xartis xwris tipota topothesia kai zoom

    this.map = new Leaflet.Map('mapId').setView([38.290014, 21.787147], 15);
    Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v').addTo(this.map);



    //   //   //akolouthoun ta 3 diaforetika icons prasino,kitrino,kokkino 

    var greenIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    var yellowIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
      // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    var redIcon = new Leaflet.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      // shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [10, 21],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      // shadowSize: [41, 41]
    });
    //   //  //edw einai to thema mou me thn for loop pou prepei na ginei sto server wste na elegxei to status an einai 0,1h kati diaforetiko 

    //   //   // data.forEach(obj => {
    //   //   //   Object.entries(obj).forEach(([key, value]) => {
    //   //   //     console.log(`${key} ${value}`);
    //   //   //   });
    //   //   // if(marker.status=0){
    //   //   //   this.status=greenIcon;
    //   //   // }
    //   //   // if(marker.status=1){
    //   //   //   this.status=yellowIcon; 
    //   //   // }
    //   //   // else{

    //   //   //   this.status=redIcon;
    //   //   // }

    //   //   //kanonika an etrexe kanonika ftanoume sto teleutaio bhma edw opou to mono pou xreiazetai einai na parei to latitude kai longitude tou sensor kai analoga to 
    //   //    //stauts tou na dwsei to icon pou theloume epishs exw balei popup gia to ti typos einai rampa h asanser

    // Leaflet.marker([marker.latitude, marker.longitude],{icon:this.status}).addTo(this.map)
    // .bindPopup("Type"+ marker.type);
    // Leaflet.marker([38.290014, 21.787147],{icon:greenIcon}).addTo(this.map)
    // .bindPopup("Type"+ "marker.type");

    const source = timer(100,60000);

    const subscribe = source.subscribe(val => this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {


    //------> remove old markers before adding the new ones
    //implement after layers because you remove them using the clearLayer command





    // this.http.get("http://127.0.0.1:8080/api/loadmap").subscribe(data => {
      // console.log(data);
      // data.foreach(async function(sensor){

      // })
      
      var size = Object.keys(data).length;

      // console.log(data[0].location.latitude)
      // console.log(data[0].status)
      // Object.entries(data).forEach(
      //   // ([key, value]) => console.log(key, value)
      //   Leaflet.marker([38.290014, 21.787147],{icon:greenIcon}).addTo(this.map)
      //   .bindPopup("Type"+ "marker.type")
      // );
      for (let i = 0; i < size; i++) {
        if(data[i].status=="green")
        {
          Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: greenIcon }).addTo(this.map)
          .bindPopup("Type" + "marker.type")
        }
        else if(data[i].status=="yellow")
        {
          Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: yellowIcon }).addTo(this.map)
          .bindPopup("Type" + "marker.type")
        }
        else if(data[i].status=="red")
        {
          Leaflet.marker([data[i].location.longitude, data[i].location.latitude], { icon: redIcon }).addTo(this.map)
          .bindPopup("Type" + "marker.type")
        }

      }


    }))
  }



}




