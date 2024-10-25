import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../modelo/pessoa';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required,Validators.minLength(3)]),
    idade: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(120)]),
    cidade: new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  indice:number = -1;
  btnCadastrar:boolean = true;

  vetor:Pessoa[] = [];

  cadastrarPessoa(){
    //cadastro
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza
    this.formulario.reset();

    //Visualizar
    // console.table(this.vetor);
  }


  SelecionarPessoa(indice:number){
    this.indice = indice;
    this.formulario.setValue({
      nome: this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade,
    });

    this.btnCadastrar=false;
  }

  AlterarPessoa(){
    this.vetor[this.indice] =  this.formulario.value as Pessoa;
    this.formulario.reset();
    this.btnCadastrar = true;

  }

  ExcluirPessoa(){
    this.vetor.splice(this.indice,1);
    this.formulario.reset();
    this.btnCadastrar = true;
  }

  Cancelar(){
    this.formulario.reset();
    this.btnCadastrar = true;
  }
}
