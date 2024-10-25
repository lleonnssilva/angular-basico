import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { FormModuleComponent } from './components/form-module/form-module.component';
import { CrudComponent } from './components/crud/crud.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InterpolacaoComponent,
    EventBindingComponent,
    PropertyBindingComponent,
    DiretivaComponent,
    ControlFlowComponent,
    BootstrapComponent,
    FormModuleComponent,
    CrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-basico';
}
