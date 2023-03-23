import { CommonModule } from '@angular/common';
import { NgModule } from  '@angular/core';
import { ListadoComponent } from './listado/listado.components';
import { HeroeComponent } from './heroe/heroe.component';





@NgModule({

 declarations: [
    HeroeComponent,
    ListadoComponent

   ],

   exports: [
   ListadoComponent

   ],

   imports:[
   CommonModule

   ],
})
export class HeroesModule {}