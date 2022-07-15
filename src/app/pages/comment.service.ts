
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HeroeModel} from './comment.model';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CommentService {


  private url =
  'https://aridoviz-default-rtdb.europe-west1.firebasedatabase.app';

constructor(private http: HttpClient) {}

crearHeroe(heroe: HeroeModel) {
  return this.http.post(`${this.url}/heroes.json`, heroe).pipe(
      map((resp: any) => {
          heroe.vistorid = resp.name;
      })
  );
}

actualizarHeroe(heroe: HeroeModel) {
  // Creamos un objeto temporal y pasamos las propiedades del heroe con la sintaxis SPREAD(...heroe)
  const heroeTemp = {
      ...heroe,
  };

  delete heroeTemp.vistoremail; // Eliminamos el ID del heroe temporal para que no seautilizado en FireBase
  return this.http.put(`${this.url}/heroes/${heroe.vistorid}.json`, heroeTemp);
}

borrarHeroe(id: string) {
  return this.http.delete(`${this.url}/heroes/${id}.json`);
}

getHeroe(id: string) {
  return this.http.get(`${this.url}/heroes/${id}.json`);
}

getHeroes() {
  return this.http
      .get(`${this.url}/heroes.json`)
      .pipe(map(this.crearArreglo), delay(800));
}

private crearArreglo(heroesObj: any) {
  const heroes: HeroeModel[] = [];
  // console.log(heroesObj);
  if (heroesObj === null) {
      return [];
  }
  Object.keys(heroesObj).forEach((key) => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.vistorid = key;
      heroes.push(heroe);
  });
  // console.log(heroes);
  return heroes;
}

}
