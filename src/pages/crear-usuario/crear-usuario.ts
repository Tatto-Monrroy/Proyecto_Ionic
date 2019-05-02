import { VendedoresProvider } from './../../providers/vendedores/vendedores';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-crear-usuario',
  templateUrl: 'crear-usuario.html',
})
export class CrearUsuarioPage {

 

  vendedor = {
    codigo : '',
    contrasena : '',
    nombre : '',
    apellido : '',
    nacimiento : '',
    correo : '',
    telefono: '',
    pregunta : ''
  };

  model: Vendedor;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private vendedorProvider: VendedoresProvider, public alerCtrl: AlertController, public toast: ToastController) {    
       
      if (this.navParams.data.vendedor){
      this.model = this.navParams.data.vendedor;
} else {
  this.model = new Vendedor();
}
     }

// crearVendedor() {
//   this.vendedorProvider.crearVendedor(this.vendedor).then((result) => {
//     console.log(result);
//   }, (err) => {
//     console.log(err);
//   });
crearVendedor() {
  this.crear()
  .then(() => {
    this.toast.create( { message: 'Vendedor Creado con Exito' , position: 'boton', duration: 3000 } ).present();
    //this.navCtrl.pop();
  })
  .catch((error) => {
    this.toast.create ({message: 'Error al crear el usuario! Error:' + error.error, position: 'boton', duration: 3000}).present();
  })
  }


private crear(){
  if (this.model.id){
   return this.vendedorProvider.actualizarVendedor(this.model);
} else {
  return this.vendedorProvider.crearVendedor(this.model);
}
}

doAlert() {
  let alert = this.alerCtrl.create({
    title: 'Nuevo Vendedor!',
    message: 'Vendedor creado con exito!',
    buttons: ['Ok']
  });
  alert.present()
}

}
export class Vendedor {
  id: number;
  codigo_vendedor: String;
  contrasena: string;
  nombre: string;
  apellido: string;
  fecha_nacimiento: Date;
  correo_electronico: string;
  telefono: number;
  pregunta: string;
}

