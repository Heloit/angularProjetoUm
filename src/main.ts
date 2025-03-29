import { bootstrapApplication } from '@angular/platform-browser';
import { MeuComponenteComponent } from './app/meu-componente/meu-componente.component';

bootstrapApplication(MeuComponenteComponent)
  .catch(err => console.error(err));
