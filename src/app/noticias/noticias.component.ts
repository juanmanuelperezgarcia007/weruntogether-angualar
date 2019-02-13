import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
    noticias: any  []  
  constructor(private noticiasService:NoticiasService){
    this.noticiasService.getAllNoticiasPromise().then((res)=>{
     this.noticias=res['items']
     console.log (res['items'])
    })
  }

  ngOnInit() {
  }

}
