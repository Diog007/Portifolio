import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  activeSection: string = 'home';

  constructor(private router: Router) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const sections = ["home", "sobre", "certificados", "skills", "formacao", "projetos", "contato"];
    
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element && element.getBoundingClientRect().top <= 150) {
        this.activeSection = section;
      }
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  @HostListener('click', ['$event'])
  onLinkClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      const elementId = target.getAttribute('href')?.substring(1);
      const element = document.getElementById(elementId!);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Atualiza a URL sem recarregar a página
        this.router.navigate([], { fragment: elementId });
      }
    }
  }
}
