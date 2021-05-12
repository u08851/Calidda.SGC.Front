import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ComiteServices } from 'src/app/services/comite.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-bar-secretaria',
  templateUrl: './bar-secretaria.component.html',
  styleUrls: ['./bar-secretaria.component.scss'],
  providers: [DatePipe]
})
export class BarSecretariaComponent implements OnInit {
  constructor(
    private comiteServices:ComiteServices,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {}

  dataReceived(value) {
    let chart = am4core.create('chartSecretaria', am4charts.XYChart);
    chart.maskBullets = false;
    
    let sinR = [];
    var temp = {};
    var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
    var result: any;

    sinR = value;
    sinR.forEach(function (a) {
      temp[a.code] = temp[a.code] || { category: a.code };
      temp[a.code][groups[a.nombre]] = a.count;
    });
    result = Object.keys(temp).map(function (k) { return temp[k]; });

    let val1 = 0;
    let val2 = 0;
    let val3 = 0;

    for(let g = 0; g < result.length; g++){
      val1 += result[g].value1
      val2 += result[g].value2
      val3 += result[g].value3
    }

    chart.data = result;

    let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxes1.dataFields.category = 'category';

    xAxes1.renderer.grid.template.location = 0;

    xAxes1.renderer.minGridDistance = 20;

    let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
    yAxes1.renderer.maxLabelPosition = 1;

    // SERIES 1 - Comités activos
    let series1 = chart.series.push(new am4charts.ColumnSeries());
    series1.name = 'Comités activos';

    series1.columns.template.strokeOpacity = 0;
    series1.columns.template.width = am4core.percent(55);
    series1.columns.template.column.cornerRadiusTopLeft = 10;
    series1.columns.template.column.cornerRadiusTopRight = 10;
    series1.columns.template.tooltipText = '{categoryX} {valueY}';

    series1.dataFields.valueY = 'value1';
    series1.dataFields.categoryX = 'category';

    let gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color('#FAB20080'));
    gradient.addColor(am4core.color('#FAB200'));
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

    // SERIES 2 - Comités en configuración
    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.name = 'Comités en configuración';

    series2.columns.template.strokeOpacity = 0;
    series2.columns.template.width = am4core.percent(55);
    series2.columns.template.column.cornerRadiusTopLeft = 10;
    series2.columns.template.column.cornerRadiusTopRight = 10;
    series2.columns.template.tooltipText = '{categoryX} {valueY}';

    series2.dataFields.valueY = 'value2';
    series2.dataFields.categoryX = 'category';

    let gradient2 = new am4core.LinearGradient();
    gradient2.addColor(am4core.color('#00A1DE99'));
    gradient2.addColor(am4core.color('#00A1DE'));
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

    // SERIES 3 - Comités de baja
    let series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.name = 'Comités de baja';

    series3.columns.template.strokeOpacity = 0;
    series3.columns.template.width = am4core.percent(55);
    series3.columns.template.column.cornerRadiusTopLeft = 10;
    series3.columns.template.column.cornerRadiusTopRight = 10;
    series3.columns.template.tooltipText = '{categoryX} {valueY}';

    series3.dataFields.valueY = 'value3';
    series3.dataFields.categoryX = 'category';

    let gradient3 = new am4core.LinearGradient();
    gradient3.addColor(am4core.color('#435468BF'));
    gradient3.addColor(am4core.color('#435468'));
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

  ngAfterViewInit() {
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.maskBullets = false;
    
    let sinR = [];
    var temp = {};
    var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
    var result: any;

    this.comiteServices.getListComite(
      0,
      this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
      this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
      null,
      null).subscribe(
      (response) =>{
        sinR = response.data;
        sinR.forEach(function (a) {
          temp[a.code] = temp[a.code] || { category: a.code };
          temp[a.code][groups[a.nombre]] = a.count;
        });
        result = Object.keys(temp).map(function (k) { return temp[k]; });

        chart.data = result;

        let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
        xAxes1.dataFields.category = 'category';

        xAxes1.renderer.grid.template.location = 0;

        xAxes1.renderer.minGridDistance = 20;

        let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
        yAxes1.renderer.maxLabelPosition = 1;

        // SERIES 1 - Comités activos
        let series1 = chart.series.push(new am4charts.ColumnSeries());
        series1.name = 'Comités activos';

        series1.columns.template.strokeOpacity = 0;
        series1.columns.template.width = am4core.percent(55);
        series1.columns.template.column.cornerRadiusTopLeft = 10;
        series1.columns.template.column.cornerRadiusTopRight = 10;
        series1.columns.template.tooltipText = '{categoryX} {valueY}';

        series1.dataFields.valueY = 'value1';
        series1.dataFields.categoryX = 'category';

        let gradient = new am4core.LinearGradient();
        gradient.addColor(am4core.color('#FAB20080'));
        gradient.addColor(am4core.color('#FAB200'));
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

        // SERIES 2 - Comités en configuración
        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.name = 'Comités en configuración';

        series2.columns.template.strokeOpacity = 0;
        series2.columns.template.width = am4core.percent(55);
        series2.columns.template.column.cornerRadiusTopLeft = 10;
        series2.columns.template.column.cornerRadiusTopRight = 10;
        series2.columns.template.tooltipText = '{categoryX} {valueY}';

        series2.dataFields.valueY = 'value2';
        series2.dataFields.categoryX = 'category';

        let gradient2 = new am4core.LinearGradient();
        gradient2.addColor(am4core.color('#00A1DE99'));
        gradient2.addColor(am4core.color('#00A1DE'));
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

        // SERIES 3 - Comités de baja
        let series3 = chart.series.push(new am4charts.ColumnSeries());
        series3.name = 'Comités de baja';

        series3.columns.template.strokeOpacity = 0;
        series3.columns.template.width = am4core.percent(55);
        series3.columns.template.column.cornerRadiusTopLeft = 10;
        series3.columns.template.column.cornerRadiusTopRight = 10;
        series3.columns.template.tooltipText = '{categoryX} {valueY}';

        series3.dataFields.valueY = 'value3';
        series3.dataFields.categoryX = 'category';

        let gradient3 = new am4core.LinearGradient();
        gradient3.addColor(am4core.color('#435468BF'));
        gradient3.addColor(am4core.color('#435468'));
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
    )
  }

}
