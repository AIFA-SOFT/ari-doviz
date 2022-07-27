
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HeroeModel} from '../pages/comment.model';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OfferService {


  private url =
  'https://firebase-realtime-example.firebasedatabase.app';

constructor(private http: HttpClient) {}

crearHeroe(heroe: HeroeModel) {
  return this.http.post(`${this.url}/offers.json`, heroe).pipe(
      map((resp: any) => {
          heroe.offerid = resp.name;
      })
  );
}

actualizarHeroe(heroe: HeroeModel) {
  const heroeTemp = {
      ...heroe,
  };

  delete heroeTemp.offeremail;
  return this.http.put(`${this.url}/offers/${heroe.offerid}.json`, heroeTemp);
}

borrarHeroe(id: string) {
  return this.http.delete(`${this.url}/offers/${id}.json`);
}

getHeroe(id: string) {
  return this.http.get(`${this.url}/offers/${id}.json`);
}

getoffers() {
  return this.http
      .get(`${this.url}/offers.json`)
      .pipe(map(this.crearArreglo), delay(800));
}

private crearArreglo(heroesObj: any) {
  const heroes: HeroeModel[] = [];
  if (heroesObj === null) {
      return [];
  }
  Object.keys(heroesObj).forEach((key) => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.offerid = key;
      heroes.push(heroe);
  });
  return heroes;
}
}
