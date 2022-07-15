import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from '../comment.model';
import { CommentService } from '../comment.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitoradd',
  templateUrl: './visitoradd.component.html',
  styleUrls: ['./visitoradd.component.scss']
})
export class VisitoraddComponent implements OnInit {
  heroe = new HeroeModel();
  constructor(
      private heroesService: CommentService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
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
