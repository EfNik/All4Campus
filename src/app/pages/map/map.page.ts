import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";




@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
  map: Leaflet.Map;
  status;
  latlong=[];
  properties=[];

 

  constructor( 
    private geolocation: Geolocation
  ){}
ionViewDidEnter(){

  this.showMap();
  
  fetch('./assets/markers.json')
    .then(res=>res.json())
    .then(data=>{
      this.properties=data.markers;

//for loop to take our data

for(const marker of this.properties){

  var greenIcon = new Leaflet.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [10, 21],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var yellowIcon = new Leaflet.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [10, 21],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var redIcon = new Leaflet.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [10, 21],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  
  
 //we are changing markers colour depending on the stautus of our sensors

 var latlng=[marker.latitude, marker.longitude]
    
      //check the marker's status and set a this status in order to change the icon

  if(marker.status==0){
        this.status=greenIcon;
      }
  if(marker.status==1){
        this.status=yellowIcon; 
      }
  else{

        this.status=redIcon;
      }
  Leaflet.marker([marker.latitude, marker.longitude], {icon:this.status}).addTo(this.map)
  .bindPopup("Status"+ marker.status+"<br>"+"Last checked time: "+marker.time);
      

  //!--dont check--!originally displaying some markers in order to test the visual
  //Leaflet.marker([38.29034, 21.787147],{icon:greenIcon}).addTo(this.map);
  //Leaflet.marker([38.29014, 21.787147],{icon:yellowIcon}).addTo(this.map);
  //Leaflet.marker([38.29054, 21.787137],{icon:redIcon}).addTo(this.map);
  
  
}
})
  
}
  //function showMap we have a general zoom around the space of university of Patras
  showMap() {
    this.map = new Leaflet.Map('mapId').setView([38.290014, 21.787147],15);
    Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    
  }
  
 
  
}
