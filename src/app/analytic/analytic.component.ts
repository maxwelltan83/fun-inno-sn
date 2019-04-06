import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})
export class AnalyticComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Gadget', 'Desktop App', 'Mobile App', 'Craft', 'Other'];
  public doughnutChartData: number[] = [350, 200, 400, 100, 50];
  public doughnutChartType = 'doughnut';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = ['Gadget', 'Desktop App', 'Mobile App', 'Craft', 'Other'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData: any[] = [
    {data: [2, 5, 8, 3, 1], label: 'Ideas'}
  ];

  constructor() { }

  ngOnInit() {

  }

  public onDoughnutChartClicked(e: any): void {
    console.log(e);
  }

  public onDoughnutChartHovered(e: any): void {
    console.log(e);
  }

  public onBarChartClicked(e: any): void {
    console.log(e);
  }

  public onBarChartHovered(e: any): void {
    console.log(e);
  }
}
