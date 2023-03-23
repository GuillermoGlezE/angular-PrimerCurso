import { Component } from "@angular/core";



 @Component ({
    selector : "app-heroe",
    templateUrl: "heroe.component.html"

})
export class HeroeComponent{

nombre : string = 'Ironman ...XD'
edad : number = 45;

optenerNombre(): string{

return `${this.nombre} - edad => ${this.edad}`;

}

get nombreCapitalizado(): string {

return this.nombre.toUpperCase();

}

cambiarNombre (): void {

    this.nombre = 'Spiderman';
}
cambiarEdad (): void {
    
    this.edad = 30;
}

}