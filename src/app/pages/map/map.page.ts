import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Map,tileLayer,marker,polyline} from 'leaflet';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
  map: Leaflet.Map;
  marker:any;
  latlong=[];
  properties=[];

 

  constructor( 
    private geolocation: Geolocation,
    private router: Router
  ){}

  ngOnInit() {
    if(!!localStorage.getItem('token')){
      return true
    }
    else{
      
      this.router.navigate(["../login"])
      return false
    }
  }

ionViewDidEnter(){
  this.showMap();
  this.showMarker([38.290014, 21.787147],{icon: greenIcon});

  var greenIcon = Leaflet.icon({
    iconUrl: 'leaf-green.png',
    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
}
  showMap() {
    this.map = new Leaflet.Map('mapId').setView([38.290014, 21.787147],15);
    Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v').addTo(this.map);

  }
  showMarker(latlong,{icon: greenIcon}){
    this.marker=Leaflet.marker(latlong);
    this.marker.addTo(this.map)
    .bindPopup('Sensor');
    

  }
  
}