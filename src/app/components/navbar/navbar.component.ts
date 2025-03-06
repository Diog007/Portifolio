import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    
    activeSection: string = 'home';
  
    @HostListener("window:scroll", [])
    onWindowScroll() {
      const sections = ["home", "sobre", "certificados",  "skills", "formacao", "projetos", "contatos"];
      
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
  }
  
