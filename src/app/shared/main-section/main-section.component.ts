import { Component } from '@angular/core';
import { MainAnimationComponent } from '../main-animation/main-animation.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [MainAnimationComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
