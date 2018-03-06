import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import { Heroe } from '../clases/heroe';
//import {HEROES} from '../mocks/mockHeroes';
import {HeroeService} from '../services/heroe.service';

@Component ({
    selector    : 'mi-heroe-componet',
    templateUrl : './vistas/heroes.component.html',
    styleUrls   : ['./css/heroes.component.css'],
    providers   : [HeroeService]
})

export class HeroesComponent implements OnInit {
    
    heroes : Heroe[];
    
    heroeSeleccionado : Heroe;
    
    constructor (
        private heroeService :HeroeService,
        private route        : Router) {
        //this.heroeSeleccionado = {id : 0, nombre: ''};
        this.heroeSeleccionado = new Heroe();
    }
    
    // Ciclos de vida
    ngOnInit(): void {
        this.getHeroes();
    }
    // Fin ciclos de vida
    
    getHeroes() {
        //this.heroes = this.heroeService.getHeroes();
        this.heroeService.getHeroesPromiseRetardo()
        .then(
            (heroes)=> {
                this.heroes = heroes;
            }
        );
    }
    
    seleccionar(heroe : Heroe) : void {
        this.heroeSeleccionado = heroe;
        //console.log(this.heroeSeleccionado.nombre);
    }
    
    irDetalle(heroe: Heroe) : void {
        let link = ['/detalle', heroe.id];
        this.route.navigate(link);
    }
    
}



