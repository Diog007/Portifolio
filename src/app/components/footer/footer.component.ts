import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
  export class FooterComponent implements OnInit {
      currentYear: number = new Date().getFullYear();
      typedText: string = '';
      fullText: string = 'Diogo do Nascimento Pereira';
      index: number = 0;
      typingSpeed: number = 10; // Velocidade de digitação
    
      ngOnInit(): void {
        this.startTypingEffect();
      }
    
      startTypingEffect(): void {
        if (this.index < this.fullText.length) {
          this.typedText += this.fullText.charAt(this.index);
          this.index++;
          setTimeout(() => this.startTypingEffect(), this.typingSpeed);
        } else {
          // Remover o cursor piscante após a digitação terminar
          setTimeout(() => {
            this.typedText = this.fullText; 
          }, 500);
        }
      }
    }
    