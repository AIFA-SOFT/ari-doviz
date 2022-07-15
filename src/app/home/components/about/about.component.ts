import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { OfferService } from 'src/app/offer/offer.service';
import { HeroeModel } from 'src/app/pages/comment.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
date:number= Date.now();
heroe = new HeroeModel();
constructor(
    private heroesService: OfferService,
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
            title: this.heroe.hrrname,
            text: 'Başarılı bir şekilde eklendi',
            icon: 'success',
        });
    });
}

}
