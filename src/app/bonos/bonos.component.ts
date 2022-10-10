import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {Md5} from 'ts-md5';
import { FormControl, FormGroup } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-bonos',
  templateUrl: './bonos.component.html',
  styleUrls: ['./bonos.component.scss']
})
export class BonosComponent implements OnInit {

  md5:string ="";
  myDate:Date = new Date;

  valueSelect:string=""
  bonoSelect: FormGroup;

  constructor() { 
    this.bonoSelect = new FormGroup({
      pais: new FormControl(null)
  });
  }

  ngOnInit(): void {
  }


  createPdf(){
    this.md5 = Md5.hashStr('Valor de compra: ' + this.valueSelect + "Fecha: " + formatDate(this.myDate, 'yyyy/MM/dd hh:mm:ss', 'en'));
    
    const pdfDefinition: any = {
      content: [
        {
          text: 'Bono de Regalo George WorldWide \n Psw: '+ this.md5
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.download("Bono George WorldWide.pdf");

  }
}
