import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HeroeModel } from '../comment.model';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lengths:number=0;
  heroes: HeroeModel[] = [];
  cargando = false;
  constructor(private heroesService: CommentService) {}

  ngOnInit() {
      this.cargando = true;
      this.heroesService.getHeroes().subscribe((resp) => {
        console.log(this.heroes);
          console.log(resp);
          this.heroes = resp;
          this.cargando = false;
          this.lengths =   this.heroes.length;
      });
  }





}
