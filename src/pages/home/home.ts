import { Component} from '@angular/core';
import { NavController, ToastController} from 'ionic-angular';
import { VendedoresProvider } from '../../providers/vendedores/vendedores';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vendedores

  constructor(public navCtrl: NavController, public vendedor:VendedoresProvider, public toast: ToastController) {
    this.refrescar(0);
  }

verVendedor(){
    this.vendedor.obtenerDatos()
    .subscribe(
      (data) => {this.vendedores = data;},
      (error) => {console.log(error);}
    )
  }

  verVendedores (){
    this.vendedor.obtenerVendedores()
    .then((result: any) => {
      this.vendedores = result
    })
    .catch( (error) => {
      this.toast.create({ message: 'Error al mostrar los vendedores! Error:' + error.error, position: 'boton', duration: 3000 }).present();
       });
  }
  

  refrescar(refrescar) {
    this.vendedor.obtenerDatos()
    .subscribe(
      (data) => {this.vendedores = data;}
    ); if (refrescar != 0)
    refrescar.complete();
  };

  eliminarVendedor(vendedor: any) {
    this.vendedor.eliminarVendedor(vendedor.id)
    .then((result: any) => {
      let index = this.vendedores.indexOf(vendedor);
      this.vendedores.splice(index, 1);
      this.toast.create({ message: 'Vendedor eliminado con exito!', position: 'botton', duration: 3000 }).present();
    }
    ).catch( (error) => {
    this.toast.create({ message: 'Error no se puede eliminar vendedor! Error:' + error.error, position: 'boton', duration: 3000 }).present();
     });
    }

    openVendedor(id: number){
      this.vendedor.obtenerUno(id)
      .then((result: any) => {
        this.navCtrl.push('CrearUsuarioPage', { vendedor: result});
      })
      .catch((error) => {
        this.toast.create({ message: 'Error al recuperar el usuario! Error:' + error.error, position: 'boton', duration: 3000 }).present();
      });
    }

    openCreateVendedor () {
      this.navCtrl.push('CrearUsuarioPage');
    }

    editarVendedor(id: number) {
      this.vendedor.obtenerUno(id)
      .then((result: any) => {
        this.navCtrl.push('CrearUsuarioPage', { vendedor: result });
      })
      .catch((error) => {
        this.toast.create({ message: 'Error al recuperar el usuario! Error:' + error.error, position: 'boton', duration: 3000 }).present();
      });
    }
  

}
