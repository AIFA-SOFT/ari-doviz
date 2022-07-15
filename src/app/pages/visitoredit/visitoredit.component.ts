import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { HeroeModel } from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-visitoredit',
  templateUrl: './visitoredit.component.html',
  styleUrls: ['./visitoredit.component.scss']
})
export class VisitoreditComponent implements OnInit {
  heroe = new HeroeModel();
  constructor(
      private heroesService: CommentService,
      private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
      const id:any  = this.route.snapshot.paramMap.get('id');
      // console.log(id);
      if (id !== 'nuevo') {
          this.heroesService.getHeroe(id).subscribe((resp:any = HeroeModel) => {
              console.log(resp);
              this.heroe = resp;
              this.heroe.vistorid = id;
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

      if (this.heroe.vistorid) {
          peticion = this.heroesService.actualizarHeroe(this.heroe);
      } else {
          peticion = this.heroesService.crearHeroe(this.heroe);
      }

      peticion.subscribe((resp) => {
          Swal.fire({
              title: this.heroe.vemail,
              text: 'Başarıyla Güncellendi',
              icon: 'success',

          });

      });
  }
}
