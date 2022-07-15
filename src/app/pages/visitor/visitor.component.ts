import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import Swal from 'sweetalert2';
import { HeroeModel } from '../comment.model';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-emptyPage',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {
  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(private heroesService: CommentService) {}

  ngOnInit() {
      this.cargando = true;
      this.heroesService.getHeroes().subscribe((resp) => {
          console.log(resp);
          this.heroes = resp;
          this.cargando = false;
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
