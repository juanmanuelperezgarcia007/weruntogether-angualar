import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  AllPost: any
  tokenUsuario: any
  allComent: any
  fk_eventos: any
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.postService.getComentarios(params.id).then((res) => {
        if (res) {

          this.AllPost = res

          this.paint()

        }
        else {

          this.tokenUsuario = JSON.parse(localStorage.getItem('token'))

          this.AllPost = res[0]

        }
      })
    })
  }

  ngOnInit() {

    this.tokenUsuario = localStorage.getItem('token')

  }


  saveComentario(value) {

    this.tokenUsuario = localStorage.getItem('token')
    let idEventos = this.AllPost[0].eventoId

    this.postService.guardarComentario(this.tokenUsuario, value, idEventos).then((res) => {
      this.paint()
      alert('Comentario publicado')
    })

  }

  paint() {
    this.postService.pintarComentarios(this.AllPost[0].eventoId).then((resComentarios) => {
      this.allComent = resComentarios

    })
  }

  deleteComent(id) {

    this.postService.borrarComentarios(id).then((res) => {

      this.paint()


    })
  }


}
