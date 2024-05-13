import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainAnimationComponent } from '../../shared/main-animation/main-animation.component';
import { MainSectionComponent } from '../../shared/main-section/main-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnPrimaryComponent, HeaderComponent, MainAnimationComponent, MainSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
