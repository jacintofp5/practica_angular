import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {Heroe}   from './clases/heroe';
import {ROUTING} from './services/rutas';

import {AppComponent}          from './app.component';
import {HeroesComponent}       from './componentes/heroes.component';
import {DetalleHeroeComponent} from './componentes/heroeDetalle.component';
import {DashBoardComponent}    from './componentes/dashboard.component';

@NgModule({
    declarations : [AppComponent, DetalleHeroeComponent, DashBoardComponent, HeroesComponent],
    imports      : [BrowserModule, FormsModule, ROUTING, HttpModule],
    providers    : [Heroe],
    bootstrap    : [AppComponent]
})
export class AppModule { }
