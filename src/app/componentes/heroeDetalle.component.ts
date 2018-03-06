import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';

import {Heroe} from '../clases/heroe';

import {HeroeService} from '../services/heroe.service';

@Component ({
    selector    : 'my-detalle-heroe',
    templateUrl : './vistas/heroeDetalle.component.html',
    styleUrls   : ['./css/heroeDetalle.component.css'],
    providers   : [HeroeService]
})

export class DetalleHeroeComponent implements OnInit {
    
    @Input() heroe:Heroe;
    
    constructor(
        private heroeService:HeroeService,
        private route       :ActivatedRoute,
        private location    :Location) {
        
    }
    
    // Ciclos de vida
    ngOnInit() : void {
        
        this.route.params.forEach((params: Params) => {
            let id = +params['id']; //Con el signo "+" convertimos el parámetro en "number"
            this.heroeService.getHeroe(id)
            .then(heroe => this.heroe = heroe);
        });
    }
    
    irAtras() {
        this.location.back();
    }
    
}