import { Component } from '@angular/core';


@Component ({
    selector : 'app-contador',
    template :`

    <h1> {{titulo}} </h1>

    <h3>la base es:<strong> {{base}} </strong></h3>
    
    <button (click)="acumular(+ base)">--aumenta-- </button>
    
    <span> {{numero}} </span>
    
    <button (click)="acumular(- base)"> --disminuye-- </button>
    
    `


})

export class ContadorComponent {
    titulo: string = 'contador App ...XD';
    numero: number = 10;
    base  : number = 5;
     
  
    acumular (valor: number,) {
    this.numero += valor ;
   
    }



}