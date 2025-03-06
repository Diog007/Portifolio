import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

    typedText: string = '';
    fullText: string = 'Diogo do Nascimento Pereira';
    index: number = 0;
  
    ngOnInit(): void {
      this.startTypingEffect();
    }
  
    startTypingEffect(): void {
      if (this.index < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.index);
        this.index++;
        setTimeout(() => this.startTypingEffect(), 100);
      }
    }
  }
  
