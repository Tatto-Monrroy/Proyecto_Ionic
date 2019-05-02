import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class VendedoresProvider {

  constructor(public http: HttpClient) {
    console.log('Hello VendedoresProvider Provider');
  }

  obtenerDatos(){
    return this.http.get('http://localhost:8080/vendedores');
  }

  obtenerVendedores() {
    return new Promise ((resolve, reject) => {

      this.http.get('http://localhost:8080/vendedores')
       .subscribe((resultado: any) => {
        resolve(resultado);
       }, (err) => {
          reject(err);
        })
      });
  }

  obtenerUno(id: number){
    return new Promise ((resolve, reject) => {

      this.http.get('http://localhost:8080/vendedor/' + id)
       .subscribe((resultado: any) => {
        resolve(resultado);
        (err) => {
          reject(err);
        }
      });
     });
  }


    crearVendedor(vendedor) {
      //console.log(vendedor);
      let option = {
        headers: {'Content-Type': 'application/json'}
      }
    
     return new Promise ((resolve, reject) => {

      this.http.post('http://localhost:8080/vendedor', JSON.stringify(vendedor) ,option)
       .subscribe((resultado: any) => {
        resolve(resultado);
        (err) => {
          reject(err);
        }
      });
     });
  }

  actualizarVendedor(vendedor: any) {
    let option = {
      headers: {'Content-Type': 'application/json'}
    }
    return new Promise ((resolve, reject) => {
      let data = {
        'codigo_vendedor': vendedor.codigo_vendedor,
        'contrasena': vendedor.contrasena,
        'nombre': vendedor.nombre,
        'apellido': vendedor.apellido,
        'fecha_nacimiento': vendedor.fecha_nacimiento,
        'correo_electronico': vendedor.correo_electronico,
        'telefono': vendedor.telefono,
        'pregunta': vendedor.pregunta
      }
  
      this.http.put('http://localhost:8080/vendedor/' + vendedor.id, data , option)
      .subscribe((resultado: any) => {
        resolve(resultado)
      },
    (error) => {
      reject(error)
    })
    });
  }
  
    eliminarVendedor(id: number) {
    return new Promise ((resolve, reject) => {
  
      this.http.delete('http://localhost:8080/vendedor/' + id)
      .subscribe((resultado: any) => {
        resolve(resultado);
      },
    (error) => {
      reject(error);
    })
    });
  }

}
