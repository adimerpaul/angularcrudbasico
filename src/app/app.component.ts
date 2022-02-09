import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art={
    codigo:0,
    descripcion:"",
    precio:0
  }
  articulos=[
    {codigo:1,descripcion:'papas',precio:10.50},
    {codigo:2,descripcion:'manzanas',precio:12.10},
    {codigo:3,descripcion:'melones',precio:50},
  ]

  hayRegistros(){
    return this.articulos.length>0
  }
  agregar(){
    if(this.art.codigo==0){
      alert('El codigo no puede ser cero')
      return
    }
    for(let i=0;i<this.articulos.length;i++){
      if(this.articulos[i].codigo==this.art.codigo){
        alert('El codigo ya existe!!')
        return
      }
    }
    this.articulos.push(this.art)
    this.art={codigo:0,descripcion:'',precio:0}
  }
  borrar(codigo:number){
    for(let i=0;i<this.articulos.length;i++){
      if(this.articulos[i].codigo==codigo){
        this.articulos.splice(i,1)
        return
      }
    }
  }
  seleccionar(art:any){
    this.art.codigo=art.codigo
    this.art.descripcion=art.descripcion
    this.art.precio=art.precio
  }
  modificar(){
    for(let i=0;i<this.articulos.length;i++){
      if(this.articulos[i].codigo==this.art.codigo){
        this.articulos[i].descripcion=this.art.descripcion
        this.articulos[i].precio=this.art.precio
        this.art={codigo:0,descripcion:'',precio:0}
        return
      }
    }
    alert('No existe el codigo ingresado!!!')
  }
}

