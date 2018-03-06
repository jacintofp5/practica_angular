import {DetalleHeroeComponent} from '../componentes/heroeDetalle.component';
import {HeroesComponent}       from '../componentes/heroes.component';
import {DashBoardComponent}    from '../componentes/dashboard.component';
import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';

const RUTAS: Routes = [
    {
        path     : 'heroes',
        component: HeroesComponent
    },
    {
        path     : 'dashboard',
        component: DashBoardComponent
    },
    {
        path     : 'detalle/:id',
        component: DetalleHeroeComponent
    },
    {
        path      : '',
        redirectTo: '/heroes',
        pathMatch : 'full'
    }
    
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(RUTAS);