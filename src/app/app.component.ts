import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { FundoComponent } from './components/fundo/fundo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import Aos, * as AOS from 'aos'
import { isPlatformBrowser } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormacaoComponent,
     FundoComponent, SobreComponent, SkillsComponent,
      ProjetosComponent, FooterComponent, HomeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portifolio-web';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
      window.addEventListener('load', AOS.refresh);
    }
  }
}
