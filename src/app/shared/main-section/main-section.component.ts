import { Component } from '@angular/core';
import { MainAnimationComponent } from '../main-animation/main-animation.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [MainAnimationComponent, BtnPrimaryComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
