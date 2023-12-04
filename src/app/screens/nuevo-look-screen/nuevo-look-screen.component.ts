import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-look-screen',
  templateUrl: './nuevo-look-screen.component.html',
  styleUrls: ['./nuevo-look-screen.component.scss']
})
export class NuevoLookScreenComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public omitir(){
    this.router.navigate(["jugando"]);
  }

  public usarLentes(){
    this.router.navigate(["jugando"]);
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

}