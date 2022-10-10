import { Component, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  center = {lat: 24, lng: 12};
  zoom = 15;
  display?: google.maps.LatLngLiteral;
  
  constructor() { }

  ngOnInit(): void {
  }

  Enviar(){
    alert("Mensaje Enviado");
  }
}
