import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  imports: [CommonModule],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.css',
  standalone: true,
})
export class MeuComponenteComponent {
  status: string = 'sucesso'; 
}
