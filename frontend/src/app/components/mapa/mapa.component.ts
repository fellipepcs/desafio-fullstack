import { Localidade } from './../product/localizacao.model';
import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Map, marker, tileLayer } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private map: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.setInitialMarkers();
  }

  private setInitialMarkers(): void {
    const map = new Map('map').setView([51.505, -0.09], 5);
    tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    this.productService.read().subscribe((res) => {
      for (const c of res) {
        const latitude = c.latitude;
        const nome = c.nome;
        console.log(latitude);
        const longitude = c.longitude;
        console.log(longitude);
        const markerItem = L.marker([latitude, longitude]).addTo(map).bindPopup(nome);
        map.fitBounds([
          [markerItem.getLatLng().lat, markerItem.getLatLng().lng]
        ]);
      }
    })
  }
}
