import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HeroeModel } from 'src/app/pages/comment.model';
import Swal from 'sweetalert2';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-offeredit',
  templateUrl: './offeredit.component.html',
  styleUrls: ['./offeredit.component.scss']
})
export class OffereditComponent implements OnInit {


  heroe = new HeroeModel();
  constructor(
      private heroesService: OfferService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id:any  = this.route.snapshot.paramMap.get('id');
      // console.log(id);
      if (id !== 'nuevo') {
          this.heroesService.getHeroe(id).subscribe((resp:any = HeroeModel) => {
              console.log(resp);
              this.heroe = resp;
              this.heroe.offerid = id;
          });
      }
  }

  guardar(form: NgForm) {


      Swal.fire({
          icon: 'info',
          title: 'Espere',
          text: 'Şuan Bekleniyor',
          allowOutsideClick: false,
      });
      Swal.showLoading();
      // console.log(form);
      // console.log(this.heroe);

      let peticion: Observable<any>;

      if (this.heroe.offerid) {
          peticion = this.heroesService.actualizarHeroe(this.heroe);
      } else {
          peticion = this.heroesService.crearHeroe(this.heroe);
      }

      peticion.subscribe((resp) => {
          Swal.fire({
              title: this.heroe.offerrname,
              text: 'Başarıyla Güncellendi',
              icon: 'success',

          });

      });
  }

}
