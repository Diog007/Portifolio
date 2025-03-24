import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SobreComponent } from '../sobre/sobre.component';
import { CertificadosComponent } from '../certificados/certificados.component';
import { SkillsComponent } from '../skills/skills.component';
import { FormacaoComponent } from '../formacao/formacao.component';
import { ProjetosComponent } from '../projetos/projetos.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, SobreComponent, CertificadosComponent, SkillsComponent, FormacaoComponent, ProjetosComponent, ContactComponent, FooterComponent],
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
  
