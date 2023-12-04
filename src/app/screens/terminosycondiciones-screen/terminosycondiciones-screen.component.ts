import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminosycondiciones-screen',
  templateUrl: './terminosycondiciones-screen.component.html',
  styleUrls: ['./terminosycondiciones-screen.component.scss']
})
export class TerminosycondicionesScreenComponent implements OnInit{
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

}