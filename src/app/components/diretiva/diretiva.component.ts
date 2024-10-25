import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diretiva.component.html',
  styleUrl: './diretiva.component.css'
})
export class DiretivaComponent {
    //ngClass
    
    //ngStyle
    lista: string[] = ['Aprovado','Aprovado','Reprovado']
    condicao: boolean = false;

    //ngFor
    nomes: string[] = ['Leonardo','Denise','Davi','Teca','Vitória']

    //ngIf
    exibir: boolean = true

    //ngSwitch
    linguagem: string = "HTML"; //HTML CSS JS

    acao(){
      if(this.exibir === true){
        this.exibir = false
      }else{
        this.exibir = true
      }
    }
}
