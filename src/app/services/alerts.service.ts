import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {


  constructor() { }

  showAlertError(text:string){
   return Swal.fire({
      title:'Ha ocurrido un error',
      icon:'error',
      text:text,
      confirmButtonText:'Aceptar',
    });
  }

  showAlertSuccess(text:string){
  return  Swal.fire({
      title:'Exitoso!!',
      icon:'success',
      text:text,
      confirmButtonText:'Aceptar',
    });
  }

  showAlertWaiting(){
    return  Swal.fire({
      title:'Por favor espere un momento',
      allowOutsideClick:false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });
    }

    showCustomAlert(html:string){
      return  Swal.fire({
          title:'Exitoso!!',
          showCloseButton: true,
          html:html
        });
      }
}
