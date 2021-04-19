import { Component, OnInit } from '@angular/core';
/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss'],
})
export class DonutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {

    // Create chart instance
    let chart = am4core.create("Donutchartdiv", am4charts.PieChart);
    chart.innerRadius = 70;

    // Add data
    chart.data = [
      {
        frecuencia: 'Semanal',
        value: 501.9,
      },
      {
        frecuencia: 'Quincenal',
        value: 301.9,
      },
      {
        frecuencia: 'Trimestral',
        value: 201.1,
      },
      {
        frecuencia: 'Mensual',
        value: 165.8,
      },
      {
        frecuencia: 'Semestral',
        value: 139.9,
      },
      {
        frecuencia: 'Anual',
        value: 128.3,
      },
    ];

    // Add label
    let label = chart.seriesContainer.createChild(am4core.Label);
    label.text = "1995";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 30;
    label.fontWeight = "600";
    label.fill = am4core.color("#264867");

    // Add and configure Series
    let pieSeries1 = chart.series.push(new am4charts.PieSeries());
    pieSeries1.dataFields.value = "value";
    pieSeries1.dataFields.category = "frecuencia";
    pieSeries1.ticks.template.disabled = true;
    pieSeries1.alignLabels = false;
    pieSeries1.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries1.labels.template.radius = am4core.percent(-20);
    pieSeries1.labels.template.fill = am4core.color('white');
    pieSeries1.labels.template.fontSize = 16;
    pieSeries1.labels.template.fontWeight = "600";

    pieSeries1.colors.list = [
      am4core.color("#AA0976"),
      am4core.color("#F3B065"),
      am4core.color("#B4B75C"),
      am4core.color("#8FDCF8"),
      am4core.color("#81D99E"),
      am4core.color("#5198F7"),
    ];

    // Legend 
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'right';
    chart.legend.align = 'right';
    chart.legend.contentAlign = 'right';
    chart.legend.paddingBottom = 20;
    chart.legend.markers.template.width = 18;
    chart.legend.markers.template.height = 8;
    chart.legend.visible = true;

  }
}
