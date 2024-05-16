import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormacaoComponent } from './components/formacao/formacao.component';
import { FundoComponent } from './components/fundo/fundo.component';
import { SobreComponent } from './components/sobre/sobre.component';
import Aos, * as AOS from 'aos'
import { isPlatformBrowser } from '@angular/common';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormacaoComponent, FundoComponent, SobreComponent, SkillsComponent],
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
