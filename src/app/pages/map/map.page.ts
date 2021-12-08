import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Map,tileLayer,marker,polyline} from 'leaflet';
import * as Leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";



@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage  {
  map: Map;
  marker:any;
  latlong=[];
  properties=[];

 

  constructor( 
    private geolocation: Geolocation
  ){}
ionViewDidEnter(){
  this.showMap();
  this.showMarker([38.290014, 21.787147]);

  
}
  showMap() {
    this.map = new Map('mapId').setView([38.290014, 21.787147],15);
    Leaflet.tileLayer('https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=4MmzHCgC720WufGIKa3v').addTo(this.map);

  }
  showMarker(latlong){
    this.marker=Leaflet.marker(latlong);
    this.marker.addTo(this.map)
    .bindPopup('aa');
    

  }
  
}