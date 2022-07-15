import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { HrService } from 'src/app/hr/hr.service';
import { HeroeModel } from 'src/app/pages/comment.model';
import Swal from 'sweetalert2';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offerlist',
  templateUrl: './offerlist.component.html',
  styleUrls: ['./offerlist.component.scss']
})
export class OfferlistComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(private heroesService: OfferService) {}

  ngOnInit() {
      this.heroesService.getoffers().subscribe((resp) => {
          console.log(resp);
          this.heroes = resp;
          this.cargando = false;
      });
  }

  borrarHeroe(heroe: HeroeModel, i: number) {
      Swal.fire({
          title: 'Silmek istediğinize emin misiniz?',
          text: `Silmek istediğine emin misin ${heroe.offerrname}`,
          icon: 'question',
          showConfirmButton: true,
          showCancelButton: true,
      }).then((resp) => {
          if (resp.value) {
              this.heroes.splice(i, 1);
              this.heroesService.borrarHeroe(heroe.offerid).subscribe();
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
