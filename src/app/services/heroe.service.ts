import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';

import 'rxjs/operator/toPromise';

import {HEROES}     from '../mocks/mockHeroes'
import {Heroe}      from '../clases/heroe'

@Injectable()

export class HeroeService {
    
    private ruta: string = 'http://127.0.0.1:8080/heroes/getHeroes';
    
    constructor(private http: Http) {
        
    }
    
    getHeroes() : Heroe[] {
        return HEROES;
    }
    
    getHeroesPromise() : Promise<Heroe[]> {
        return Promise.resolve(HEROES);
    }
    
    getHeroesPromiseRetardo() : Promise<Heroe[]> {
        
        return new Promise<Heroe[]>(
            (resolve)=>{
                setTimeout(resolve, 2000)
            }
        ).then(
            () => this.getHeroes()
        );
    }
    
    getHeroe(id:number) : Promise<Heroe> {
        return this.getHeroesPromiseRetardo()
            .then(
                (heroes)=> heroes.find(heroe => heroe.id == id)
            );
    }
    
    getHeroesHttp() : Promise<Heroe[]> {
        /*
        return this.http.get(this.ruta)
        .toPromise()
        .then(
            (response) => {
                let respuesta : any = response;
                let heroes: Heroe[] = JSON.parse(respuesta._body);
            }
        ).catch()
        */
        return null;
    }
    
}