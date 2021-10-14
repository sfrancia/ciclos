import { Component, OnDestroy, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy{

  constructor(public navCtrl: NavController) {}

  ngOnInit(){
    alert("se ha cargado");
  }

  ngOnDestroy(){
      alert("se ha destruido");
  }

  irPagina(){
    this.navCtrl.navigateRoot('detalle');
  }

}






 
