import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public autor1: any = { nombre:'Miguel', apellido:'Bautista' };
  public autor2: any = { nombre:'Alonso', apellido:'Viñé' };
}
