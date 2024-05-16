import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../../shared/btn-primary/btn-primary.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

}
