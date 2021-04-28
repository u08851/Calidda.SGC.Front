import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.scss']
})
export class ReunionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    let chart = am4core.create('chartReuniones', am4charts.XYChart);
    chart.maskBullets = false;

    chart.data = [
      {
        category: 'Enero',
        value1: 12,
        value2: 37,
        value3: 25,
      },
      {
        category: 'Febrero',
        value1: 20,
        value2: 12,
        value3: 32,
      },
      {
        category: 'Marzo',
        value1: 23,
        value2: 17,
        value3: 4,
      },
      {
        category: 'Abril',
        value1: 4,
        value2: 28,
        value3: 2,
      },
      {
        category: 'Mayo',
        value1: 15,
        value2: 3,
        value3: 7,
      },
    ];

    let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxes1.dataFields.category = 'category';

    xAxes1.renderer.grid.template.location = 0;

    xAxes1.renderer.minGridDistance = 20;

    let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
    yAxes1.renderer.maxLabelPosition = 1;

    // SERIES 1 - Runiones realizadas
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.name = 'Runiones realizadas';

    series1.columns.template.strokeOpacity = 0;
    series1.columns.template.width = am4core.percent(55);
    series1.columns.template.column.cornerRadiusTopLeft = 10;
    series1.columns.template.column.cornerRadiusTopRight = 10;
    series1.columns.template.tooltipText = '{categoryX} {valueY}';

    series1.dataFields.valueY = 'value1';
    series1.dataFields.categoryX = 'category';

    let gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color('#939596'));
    gradient.addColor(am4core.color('#676A6D'));
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

    // SERIES 2 - Reuniones canceladas
    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.name = 'Reuniones canceladas';

    series2.columns.template.strokeOpacity = 0;
    series2.columns.template.width = am4core.percent(55);
    series2.columns.template.column.cornerRadiusTopLeft = 10;
    series2.columns.template.column.cornerRadiusTopRight = 10;
    series2.columns.template.tooltipText = '{categoryX} {valueY}';

    series2.dataFields.valueY = 'value2';
    series2.dataFields.categoryX = 'category';

    let gradient2 = new am4core.LinearGradient();
    gradient2.addColor(am4core.color('#d9ecf6'));
    gradient2.addColor(am4core.color('#CDE8F2'));
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

    // SERIES 3 - Reuniones reprogramadas
    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.name = 'Reuniones reprogramadas';

    series3.columns.template.strokeOpacity = 0;
    series3.columns.template.width = am4core.percent(55);
    series3.columns.template.column.cornerRadiusTopLeft = 10;
    series3.columns.template.column.cornerRadiusTopRight = 10;
    series3.columns.template.tooltipText = '{categoryX} {valueY}';

    series3.dataFields.valueY = 'value2';
    series3.dataFields.categoryX = 'category';

    let gradient3 = new am4core.LinearGradient();    
    gradient3.addColor(am4core.color('#8fc6df'));
    gradient3.addColor(am4core.color('#369DC3'));
    gradient3.rotation = 270;
    series3.columns.template.fill = gradient3;

    series3.sequencedInterpolation = true;
    series3.sequencedInterpolationDelay = 100;

    let bullet3 = series3.bullets.push(new am4charts.LabelBullet());
    bullet3.label.verticalCenter = 'bottom';
    bullet3.label.dy = 2;
    bullet3.label.text = '{valueY}';
    bullet3.label.fontWeight = 'bold';
    bullet3.label.fill = am4core.color('#000000');
    bullet3.interactionsEnabled = false;

    // LEGEND
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.align = 'right';
    chart.legend.contentAlign = 'right';
    chart.legend.paddingBottom = 20;
    chart.legend.markers.template.width = 18;
    chart.legend.markers.template.height = 8;
    chart.legend.visible = true;
    chart.legend.fill = am4core.color('series1' && 'series2' && 'series3');

  }
}
