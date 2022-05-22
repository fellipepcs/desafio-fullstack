import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  private map: any;

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.initMap();
    this.ProductService.makeMarkers(this.map);
  }
  

  private initMap(): void {
    const map = new Map('map').setView([-15.835,-49.526], 5);
    tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }
}
