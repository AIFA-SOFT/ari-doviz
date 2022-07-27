
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HeroeModel} from '../pages/comment.model';
import { map, delay } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HrService {
private url =
'https://firebase-realtime-example.firebasedatabase.app';

constructor(private http: HttpClient) {}

crearHeroe(heroe: HeroeModel) {
return this.http.post(`${this.url}/peoplehr.json`, heroe).pipe(
    map((resp: any) => {
        heroe.hrid = resp.name;
    })
);
}

actualizarHeroe(heroe: HeroeModel) {
// Creamos un objeto temporal y pasamos las propiedades del heroe con la sintaxis SPREAD(...heroe)
const heroeTemp = {
    ...heroe,
};

delete heroeTemp.vistoremail; // Eliminamos el ID del heroe temporal para que no seautilizado en FireBase
return this.http.put(`${this.url}/peoplehr/${heroe.vistorid}.json`, heroeTemp);
}

borrarHeroe(id: string) {
return this.http.delete(`${this.url}/peoplehr/${id}.json`);
}

getHeroe(id: string) {
return this.http.get(`${this.url}/peoplehr/${id}.json`);
}

getpeoplehr() {
return this.http
    .get(`${this.url}/peoplehr.json`)
    .pipe(map(this.crearArreglo), delay(800));
}


private crearArreglo(heroesObj: any) {
  const heroes: HeroeModel[] = [];
  if (heroesObj === null) {
      return [];
  }
  Object.keys(heroesObj).forEach((key) => {
      const heroe: HeroeModel = heroesObj[key];
      heroe.hrid = key;
      heroes.push(heroe);
  });
  return heroes;
}
}
