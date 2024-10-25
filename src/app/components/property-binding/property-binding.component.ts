import { Component } from '@angular/core';
@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {
    imagem:string ="assets/dia.jpg";

    alterarImagem(){
      if(this.imagem === "assets/dia.jpg"){
        this.imagem = "assets/noite.jpg"
      }else{
        this.imagem = "assets/dia.jpg"
      }
    }
}
