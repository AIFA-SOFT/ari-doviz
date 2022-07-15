import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HeroeModel } from 'src/app/pages/comment.model';
import { CommentService } from 'src/app/pages/comment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.scss']
})
export class OfferPageComponent implements OnInit {
  heroe = new HeroeModel();
  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(
      private heroesService: CommentService,
      private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.cargando = true;
      this.heroesService.getHeroes().subscribe((resp) => {
          console.log(resp);
          this.heroes = resp;
          this.cargando = false;
      });
  }

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



  borrarHeroe(heroe: HeroeModel, i: number) {
      Swal.fire({
        title: 'Silmek istediğinize emin misiniz?',
        text: `Silmek istediğine emin misin ${heroe.visitorname}`,
        icon: 'question',
          showConfirmButton: true,
          showCancelButton: true,
      }).then((resp) => {
          if (resp.value) {
              this.heroes.splice(i, 1);
              this.heroesService.borrarHeroe(heroe.vistorid).subscribe();
          }
      });
  }




























}
