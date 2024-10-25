import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  //if  
  media: number = 2; //6 8 

  //For
  nomes: string[] = ['Leonardo', 'Denise', 'Davi', 'Teca']

  //switch
  linguagem: string = "HTML"; //HTML CSS JS
}
