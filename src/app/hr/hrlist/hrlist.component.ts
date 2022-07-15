import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { HeroeModel } from 'src/app/pages/comment.model';
import Swal from 'sweetalert2';
import { HrService } from '../hr.service';

@Component({
  selector: 'app-hrlist',
  templateUrl: './hrlist.component.html',
  styleUrls: ['./hrlist.component.scss']
})
export class HrlistComponent implements OnInit {


  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(private heroesService: HrService) {}

  ngOnInit() {
      this.heroesService.getpeoplehr().subscribe((resp: HeroeModel[]) => {
          console.log(resp);
          this.heroes = resp;
          this.cargando = false;
      });
  }

  borrarHeroe(heroe: HeroeModel, i: number) {
      Swal.fire({
          title: 'Silmek istediğinize emin misiniz?',
          text: `Silmek istediğine emin misin ${heroe.hemail}`,
          icon: 'question',
          showConfirmButton: true,
          showCancelButton: true,
      }).then((resp) => {
          if (resp.value) {
              this.heroes.splice(i, 1);
              this.heroesService.borrarHeroe(heroe.hrid).subscribe();
          }
      });
  }





  heroe = new HeroeModel();



  guardar(form: NgForm) {
      Swal.fire({
          icon: 'info',
          title: 'Şuan Bekleniyor',
          text: 'Şuan Bekleniyor',
          allowOutsideClick: false,
      });
      Swal.showLoading();
      let peticion: Observable<any>;

      if (this.heroe.vistorid) {
          peticion = this.heroesService.actualizarHeroe(this.heroe);
      } else {
          peticion = this.heroesService.crearHeroe(this.heroe);
      }

      peticion.subscribe((resp) => {
          Swal.fire({
              title: this.heroe.vistoremail,
              text: 'Başarılı bir şekilde eklendi',
              icon: 'success',
          });
      });
    }
  }
