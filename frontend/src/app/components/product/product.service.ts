import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Localidade } from './localizacao.model';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl =  "http://127.0.0.1:8000/localidade/"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  makeMarkers(map: L.Map): void {
    this.http.get(this.baseUrl).subscribe((res: any) => {
      for (const c of res){
        const latitude = c.latitude;
        const longitude = c.longitude;
        const marker = L.marker([latitude, longitude]).addTo(map);
      }
    });
  }

  create(localidade: Localidade): Observable<Localidade>{
    return this.http.post<Localidade>(this.baseUrl, localidade)
  }

  read(): Observable<Localidade[]>{
    return this.http.get<Localidade[]>(this.baseUrl)
  }
}
