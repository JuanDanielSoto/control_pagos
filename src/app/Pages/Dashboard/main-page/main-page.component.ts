import { Component } from '@angular/core';;
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-main-page',
  imports: [NgxChartsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  data = [
    { name: 'Enero', value: 5000 },
    { name: 'Febrero', value: 3200 },
    { name: 'Marzo', value: 2800 }
  ];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
}
