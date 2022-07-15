import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { HrService } from 'src/app/hr/hr.service';
import { HeroeModel } from 'src/app/pages/comment.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hr-form',
  templateUrl: './hr-form.component.html',
  styleUrls: ['./hr-form.component.scss']
})
export class HrFormComponent implements OnInit {

  heroe = new HeroeModel();
  constructor(
      private heroesService: HrService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.heroesService.getpeoplehr.length);
      const id = this.route.snapshot.paramMap.get('id');

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

      if (this.heroe.hrid) {
          peticion = this.heroesService.actualizarHeroe(this.heroe);
      } else {
          peticion = this.heroesService.crearHeroe(this.heroe);
      }

      peticion.subscribe((resp) => {
          Swal.fire({
              title: this.heroe.hemail,
              text: 'Başarılı bir şekilde eklendi',
              icon: 'success',
          });
      });
  }

}
