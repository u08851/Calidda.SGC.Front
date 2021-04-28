import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-compromisos',
  templateUrl: './compromisos.component.html',
  styleUrls: ['./compromisos.component.scss']
})
export class CompromisosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let chart = am4core.create('chartCompromisos', am4charts.XYChart);
    chart.maskBullets = false;

    chart.data = [
      {
        category: 'Enero',
        value1: 12,
        value2: 37
      },
      {
        category: 'Febrero',
        value1: 20,
        value2: 12
      },
      {
        category: 'Marzo',
        value1: 23,
        value2: 17
      },
      {
        category: 'Abril',
        value1: 4,
        value2: 28
      },
      {
        category: 'Mayo',
        value1: 15,
        value2: 3
      },
    ];

    let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxes1.dataFields.category = 'category';

    xAxes1.renderer.grid.template.location = 0;

    xAxes1.renderer.minGridDistance = 20;

    let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
    yAxes1.renderer.maxLabelPosition = 1;

    // SERIES 1 - Compromisos abiertos
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.name = 'Compromisos abiertos';

    series1.columns.template.strokeOpacity = 0;
    series1.columns.template.width = am4core.percent(55);
    series1.columns.template.column.cornerRadiusTopLeft = 10;
    series1.columns.template.column.cornerRadiusTopRight = 10;
    series1.columns.template.tooltipText = '{categoryX} {valueY}';

    series1.dataFields.valueY = 'value1';
    series1.dataFields.categoryX = 'category';

    let gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color('#b8e49c'));  
    gradient.addColor(am4core.color('#87D741'));
    gradient.rotation = 270;
    series1.columns.template.fill = gradient;
    
    series1.sequencedInterpolation = true;
    series1.sequencedInterpolationDelay = 100;

    let bullet1 = series1.bullets.push(new am4charts.LabelBullet());
    bullet1.label.verticalCenter = 'bottom';
    bullet1.label.dy = 2;
    bullet1.label.text = '{valueY}';
    bullet1.label.fontWeight = 'bold';
    bullet1.label.fill = am4core.color('#000000');
    bullet1.interactionsEnabled = false;

    // SERIES 2 - Compromisos Cerrados
    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.name = 'Compromisos Cerrados';

    series2.columns.template.strokeOpacity = 0;
    series2.columns.template.width = am4core.percent(55);
    series2.columns.template.column.cornerRadiusTopLeft = 10;
    series2.columns.template.column.cornerRadiusTopRight = 10;
    series2.columns.template.tooltipText = '{categoryX} {valueY}';

    series2.dataFields.valueY = 'value2';
    series2.dataFields.categoryX = 'category';

    let gradient2 = new am4core.LinearGradient();
    gradient2.addColor(am4core.color('#ced3d9'));
    gradient2.addColor(am4core.color('#CED3D9'));
    gradient2.rotation = 270;
    series2.columns.template.fill = gradient2;
    
    series2.sequencedInterpolation = true;
    series2.sequencedInterpolationDelay = 100;

    let bullet2 = series2.bullets.push(new am4charts.LabelBullet());
    bullet2.label.verticalCenter = 'bottom';
    bullet2.label.dy = 2;
    bullet2.label.text = '{valueY}';
    bullet2.label.fontWeight = 'bold';
    bullet2.label.fill = am4core.color('#000000');
    bullet2.interactionsEnabled = false;

  }
}
