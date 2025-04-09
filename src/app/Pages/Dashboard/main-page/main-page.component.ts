import { Component } from '@angular/core';;
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-main-page',
  imports: [NgxChartsModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  mesSeleccionado: string = '';
  data = [
    { name: 'Miguel CEO', value: 12000 },
    { name: 'Joss', value: 7000 },
    { name: 'Daniel', value: 5000 }
  ];

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(value);
  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  dataFiltrada() {
    if (!this.mesSeleccionado) return this.data;
    return this.data.filter(item => item.name === this.mesSeleccionado);
  }
}
