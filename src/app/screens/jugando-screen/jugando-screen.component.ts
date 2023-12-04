import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugando-screen',
  templateUrl: './jugando-screen.component.html',
  styleUrls: ['./jugando-screen.component.scss']
})
export class JugandoScreenComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  public terminarJuego(){
    this.router.navigate(["juego-terminado"]);
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

}