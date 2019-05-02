import { Component } from '@angular/core';

/**
 * Generated class for the CrearusuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'crearusuario',
  templateUrl: 'crearusuario.html'
})
export class CrearusuarioComponent {

  text: string;

  constructor() {
    console.log('Hello CrearusuarioComponent Component');
    this.text = 'Hello World';
  }

}
