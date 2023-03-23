
import { Component } from "@angular/core";

@Component({

    selector: 'app-listado',
    templateUrl: './listado.components.html',

})

export class ListadoComponent {


items : string [] = ["batman","superman","gatubela","pinguino", "roobin"];
heroesBorrados : string =``;
eventoActivo : boolean = false;
noBorrado: any = '';

deleteItem()  {

  this.heroesBorrados =  this.items.shift() || `` ;
  


} 



}