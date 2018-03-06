import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';

import 'rxjs/operator/toPromise';

import {HEROES}     from '../mocks/mockHeroes'
import {Heroe}      from '../clases/heroe'

@Injectable()

export class HeroeService {
    
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
    
    getHeroesHttp() {
        
    }
    
}