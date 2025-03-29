import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { MeuComponenteComponent } from './app/meu-componente/meu-componente.component';


const bootstrap = () => bootstrapApplication(MeuComponenteComponent, config);

export default bootstrap;

