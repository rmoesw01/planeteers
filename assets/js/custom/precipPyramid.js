am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var mainContainer = am4core.create("precipitation_chart", am4core.Container);
    mainContainer.width = am4core.percent(100);
    mainContainer.height = am4core.percent(100);
    mainContainer.layout = "horizontal";

    d3.json("assets/data/json/snow_prcp.json").then(function(currData) {
        var precipData = currData;
        console.log(precipData);

    var snowChart = mainContainer.createChild(am4charts.XYChart);
    snowChart.paddingRight = 0;
    snowChart.data = JSON.parse(JSON.stringify(precipData));
    snowChart.legend = new am4charts.Legend();
    
    // Create axes
    var snowCategoryAxis = snowChart.yAxes.push(new am4charts.CategoryAxis());
    snowCategoryAxis.dataFields.category = "year";
    snowCategoryAxis.renderer.grid.template.location = 0;
    snowCategoryAxis.renderer.minGridDistance = 50;
    snowCategoryAxis.numberFormatter.numberFormat = "#";

    var snowValueAxis = snowChart.xAxes.push(new am4charts.ValueAxis());
    snowValueAxis.renderer.inversed = true;
    snowValueAxis.min = 0;
    snowValueAxis.max = 2500;
    snowValueAxis.strictMinMax = true;
    snowValueAxis.renderer.minGridDistance = 50;
    snowValueAxis.numberFormatter = new am4core.NumberFormatter();
    snowValueAxis.numberFormatter.numberFormat = "#";

    // Create series
    var snowSeries = snowChart.series.push(new am4charts.ColumnSeries());
    snowSeries.dataFields.valueX = "snow fall";
    snowSeries.calculatePercent = true;
    snowSeries.dataFields.categoryY = "year";
    snowSeries.interpolationDuration = 1000;
    snowSeries.name = "Observed Snow Fall"
    snowSeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    snowSeries.numberFormatter.numberFormat = "#.##";
    snowSeries.hidden = false;

    var snowPredESeries = snowChart.series.push(new am4charts.ColumnSeries());
    snowPredESeries.dataFields.valueX = "snow_e";
    snowPredESeries.calculatePercent = true;
    snowPredESeries.dataFields.categoryY = "year";
    snowPredESeries.interpolationDuration = 1000;
    snowPredESeries.name = "Snow Fall - Stricter Rules"
    snowPredESeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    snowPredESeries.hidden = true;

    var snowPredSeries = snowChart.series.push(new am4charts.ColumnSeries());
    snowPredSeries.dataFields.valueX = "snow_u";
    snowPredSeries.calculatePercent = true;
    snowPredSeries.dataFields.categoryY = "year";
    snowPredSeries.name = "Snow Fall - Projection"
    snowPredSeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    snowPredSeries.hidden = false;

    var snowPredISeries = snowChart.series.push(new am4charts.ColumnSeries());
    snowPredISeries.dataFields.valueX = "snow_i";
    snowPredISeries.calculatePercent = true;
    snowPredISeries.dataFields.categoryY = "year";
    snowPredISeries.interpolationDuration = 1000;
    snowPredISeries.name = "Snow Fall - Easing Rules"
    snowPredISeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    snowPredISeries.hidden = true;

    var precipChart = mainContainer.createChild(am4charts.XYChart);
    precipChart.paddingLeft = 0;
    precipChart.data = JSON.parse(JSON.stringify(precipData));
    precipChart.legend = new am4charts.Legend();
    // Create axes
    var precipCategoryAxis = precipChart.yAxes.push(new am4charts.CategoryAxis());
    precipCategoryAxis.renderer.opposite = true;
    precipCategoryAxis.dataFields.category = "year";
    precipCategoryAxis.renderer.grid.template.location = 0;
    precipCategoryAxis.renderer.minGridDistance = 50;

    var precipValueAxis = precipChart.xAxes.push(new am4charts.ValueAxis());
    precipValueAxis.min = 0;
    precipValueAxis.max = 2500;
    precipValueAxis.strictMinMax = true;
    precipValueAxis.numberFormatter = new am4core.NumberFormatter();
    precipValueAxis.numberFormatter.numberFormat = "#";
    precipValueAxis.renderer.minLabelPosition = 0.01;
    precipValueAxis.renderer.minGridDistance = 50;

    // Create series
    var precipSeries = precipChart.series.push(new am4charts.ColumnSeries());
    precipSeries.dataFields.valueX = "precipitation";
    precipSeries.calculatePercent = true;
    precipSeries.fill = precipChart.colors.getIndex(14).brighten(-0.1);
    precipSeries.stroke = precipSeries.fill;
    precipSeries.name = "Observed Precipitation"
    precipSeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    precipSeries.hidden = false;
    precipSeries.dataFields.categoryY = "year";
    precipSeries.interpolationDuration = 1000;
    
    var precipPredESeries = precipChart.series.push(new am4charts.ColumnSeries());
    precipPredESeries.dataFields.valueX = "precipitation_e";
    precipPredESeries.calculatePercent = true;
    precipPredESeries.fill = precipChart.colors.getIndex(15).brighten(-0.6);
    precipPredESeries.stroke = precipPredESeries.fill;
    precipPredESeries.name = "Precipitation - Stricter Rules"
    precipPredESeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    precipPredESeries.hidden = true;
    precipPredESeries.dataFields.categoryY = "year";
    precipPredESeries.interpolationDuration = 1000;

    var precipPredSeries = precipChart.series.push(new am4charts.ColumnSeries());
    precipPredSeries.dataFields.valueX = "precipitation_u";
    precipPredSeries.calculatePercent = true;
    precipPredSeries.fill = precipChart.colors.getIndex(14).brighten(-0.4);
    precipPredSeries.stroke = precipPredSeries.fill;
    precipPredSeries.name = "Precipitation - Projection"
    precipPredSeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    precipPredSeries.hidden = false;
    precipPredSeries.dataFields.categoryY = "year";
    precipPredSeries.interpolationDuration = 1000;

    var precipPredISeries = precipChart.series.push(new am4charts.ColumnSeries());
    precipPredISeries.dataFields.valueX = "precipitation_i";
    precipPredISeries.calculatePercent = true;
    precipPredISeries.fill = precipChart.colors.getIndex(13).brighten(-0.2);
    precipPredISeries.stroke = precipPredISeries.fill;
    precipPredISeries.name = "Precipitation - Easing Rules"
    precipPredISeries.columns.template.tooltipText = "{name}-{categoryY}: {valueX} mm";
    precipPredISeries.hidden = true;
    precipPredISeries.dataFields.categoryY = "year";
    precipPredISeries.interpolationDuration = 1000;

    var label = mainContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.x = am4core.percent(80);
    label.horizontalCenter = "middle";
    label.y = 50;
    label.showOnInit = true;
    label.hiddenState.properties.dy = -100;

    });

}); // end am4core.ready()