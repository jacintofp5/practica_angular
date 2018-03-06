import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {Heroe}        from '../clases/heroe';
import {HeroeService} from '../services/heroe.service';

@Component ({
    selector    : 'my-dashboard',
    templateUrl : './vistas/dashboard.component.html',
    styleUrls   : ['./css/dashboard.component.css'],
    providers   : [HeroeService]
})

export class DashBoardComponent implements OnInit {
    
    public heroes : Heroe[];
    
    constructor(
        private heroeService : HeroeService,
        private route        : Router) {
        
    }
    
    // Ciclos de vida
    ngOnInit(): void {
        this.heroeService.getHeroesPromiseRetardo()
        .then(
            (heroes) => this.heroes = heroes.slice(1, 5) 
        );
    }
    
    irDetalle(heroe : Heroe) : void {
        let link = ['/detalle', heroe.id];
        this.route.navigate(link);
    }
    
}