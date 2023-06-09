import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModulo } from './contadores/contadores.module';

@NgModule({

  declarations: [

    AppComponent

  ],

  imports: [

    BrowserModule,
    HeroesModule,
    ContadorModulo,

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
