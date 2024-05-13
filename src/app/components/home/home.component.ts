import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BtnPrimaryComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
