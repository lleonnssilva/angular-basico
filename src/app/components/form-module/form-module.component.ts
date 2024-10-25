import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-module',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './form-module.component.html',
  styleUrl: './form-module.component.css'
})
export class FormModuleComponent {
    nome: string = "";
    cidade: string = "";

    formulario = new FormGroup({
      nome: new FormControl(''),
      cidade: new FormControl('')
    })
}
