

function raceChart(race_position){

    if(race_position == 1) {
        racenumber = 160 + 1
    }  
    else if(race_position == 2){
        racenumber = 158 + 1
    }
    else if(race_position == 3){
      racenumber = 156 + 1
  }
  else if(race_position == 4){
    racenumber = 154 + 1
}
else if(race_position == 5){
  racenumber = 152 + 1
}
else if(race_position == 6){
  racenumber = 150 + 1
}
else if(race_position == 7){
  racenumber = 148 + 1
}
else if(race_position == 8){
  racenumber = 146 + 1
}
else if(race_position == 9){
  racenumber = 144 + 1
}
        

am5.ready(function() {
    
    // Data
    var allData = {
      "1": {
        "YOUR HORSE": 0,
        "Horse 1": 0,
        "Horse 2": 0,
        "Horse 3": 0,
        "Horse 4": 0,
        "Horse 5": 0,
        "Horse 6": 0,
        "Horse 7": 0,
        "Horse 8": 0,
        "Horse 9": 0
      },
      "2": {
        "YOUR HORSE": 95,
        "Horse 1": 100,
        "Horse 2": 98,
        "Horse 3": 96,
        "Horse 4": 94,
        "Horse 5": 92,
        "Horse 6": 90,
        "Horse 7": 90,
        "Horse 8": 88,
        "Horse 9": 92
      },
      "3": {
        "YOUR HORSE": 100,
        "Horse 1": 105,
        "Horse 2": 103,
        "Horse 3": 101,
        "Horse 4": 99,
        "Horse 5": 97,
        "Horse 6": 95,
        "Horse 7": 95,
        "Horse 8": 93,
        "Horse 9": 97
      },
      "4": {
        "YOUR HORSE": 110,
        "Horse 1": 107,
        "Horse 2": 105,
        "Horse 3": 108,
        "Horse 4": 103,
        "Horse 5": 102,
        "Horse 6": 108,
        "Horse 7": 100,
        "Horse 8": 106,
        "Horse 9": 107
      },
      "5": {
        "YOUR HORSE": 115,
        "Horse 1": 113,
        "Horse 2": 113,
        "Horse 3": 110,
        "Horse 4": 106,
        "Horse 5": 107,
        "Horse 6": 112,
        "Horse 7": 110,
        "Horse 8": 109,
        "Horse 9": 111
      },
      "6": {
        "YOUR HORSE": 115,
        "Horse 1": 113,
        "Horse 2": 113,
        "Horse 3": 110,
        "Horse 4": 106,
        "Horse 5": 107,
        "Horse 6": 112,
        "Horse 7": 110,
        "Horse 8": 109,
        "Horse 9": 111
      },
      "7": {
        "YOUR HORSE": 120,
        "Horse 1": 121,
        "Horse 2": 119,
        "Horse 3": 118,
        "Horse 4": 113,
        "Horse 5": 115,
        "Horse 6": 116,
        "Horse 7": 119,
        "Horse 8": 118,
        "Horse 9": 117
      },
      "8": {
        "YOUR HORSE": 123,
        "Horse 1": 126,
        "Horse 2": 123,
        "Horse 3": 128,
        "Horse 4": 118,
        "Horse 5": 120,
        "Horse 6": 119,
        "Horse 7": 122,
        "Horse 8": 121,
        "Horse 9": 120
      },
      "9": {
        "YOUR HORSE": 129,
        "Horse 1": 129,
        "Horse 2": 128,
        "Horse 3": 128,
        "Horse 4": 120,
        "Horse 5": 125,
        "Horse 6": 124,
        "Horse 7": 124,
        "Horse 8": 125,
        "Horse 9": 126
      },
      "10": {
        "YOUR HORSE": 129,
        "Horse 1": 129,
        "Horse 2": 128,
        "Horse 3": 128,
        "Horse 4": 120,
        "Horse 5": 125,
        "Horse 6": 124,
        "Horse 7": 124,
        "Horse 8": 125,
        "Horse 9": 126
      },
      "11": {
        "YOUR HORSE": 132,
        "Horse 1": 130,
        "Horse 2": 130,
        "Horse 3": 129,
        "Horse 4": 129,
        "Horse 5": 127,
        "Horse 6": 128,
        "Horse 7": 128,
        "Horse 8": 126,
        "Horse 9": 127
      },
      "12": {
        "YOUR HORSE": 137,
        "Horse 1": 130,
        "Horse 2": 130,
        "Horse 3": 129,
        "Horse 4": 129,
        "Horse 5": 127,
        "Horse 6": 128,
        "Horse 7": 128,
        "Horse 8": 126,
        "Horse 9": 127
      },
      "13": {
        "YOUR HORSE": 145,
        "Horse 1": 135,
        "Horse 2": 138,
        "Horse 3": 134,
        "Horse 4": 133,
        "Horse 5": 137,
        "Horse 6": 132,
        "Horse 7": 134,
        "Horse 8": 136,
        "Horse 9": 134
      },
      "14": {
        "YOUR HORSE": 147,
        "Horse 1": 140,
        "Horse 2": 143,
        "Horse 3": 145,
        "Horse 4": 148,
        "Horse 5": 146,
        "Horse 6": 143,
        "Horse 7": 149,
        "Horse 8": 147,
        "Horse 9": 143
      },
      "15": {
        "YOUR HORSE": 150,
        "Horse 1": 145,
        "Horse 2": 147,
        "Horse 3": 148,
        "Horse 4": 153,
        "Horse 5": 154,
        "Horse 6": 152,
        "Horse 7": 156,
        "Horse 8": 151,
        "Horse 9": 154
      },
      "16": {
        "YOUR HORSE": 154,
        "Horse 1": 152,
        "Horse 2": 151,
        "Horse 3": 150,
        "Horse 4": 156,
        "Horse 5": 154,
        "Horse 6": 157,
        "Horse 7": 158,
        "Horse 8": 156,
        "Horse 9": 154
      },
      "17": {
        "YOUR HORSE": 0,
        "Horse 1": 160,
        "Horse 2": 158,
        "Horse 3": 156,
        "Horse 4": 154,
        "Horse 5": 152,
        "Horse 6": 150,
        "Horse 7": 148,
        "Horse 8": 146,
        "Horse 9": 144
      }
    };
 
    allData["17"]["YOUR HORSE"] = racenumber
    
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    root.numberFormatter.setAll({
      numberFormat: "#a",
    
      // Group only into M (millions), and B (billions)
      bigNumberPrefixes: [
        { number: 1e6, suffix: "M" },
        { number: 1e9, suffix: "B" }
      ],
    
      // Do not use small number prefixes at all
      smallNumberPrefixes: []
    });
    
    var stepDuration = 2000;
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "none",
      wheelY: "none"
    }));
    
    
    // We don't want zoom-out button to appear while animating, so we hide it at all
    chart.zoomOutButton.set("forceHidden", true);
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 20,
      inversed: true
    });
    // hide grid
    yRenderer.grid.template.set("visible", false);
    
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      maxDeviation: 0,
      categoryField: "network",
      renderer: yRenderer
    }));
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      maxDeviation: 0,
      min: 0,
      strictMinMax: true,
      extraMax: 0.1,
      renderer: am5xy.AxisRendererX.new(root, {})
    }));
    
    xAxis.set("interpolationDuration", stepDuration / 10);
    xAxis.set("interpolationEasing", am5.ease.linear);
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueXField: "value",
      categoryYField: "network"
    }));
    
    // Rounded corners for columns
    series.columns.template.setAll({ cornerRadiusBR: 5, cornerRadiusTR: 5 });
    
    // Make each column to be of a different color
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });
    
    // Add label bullet
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: 1,
        sprite: am5.Label.new(root, {
          text: "{valueXWorking.formatNumber('#.# a')}",
          fill: root.interfaceColors.get("alternativeText"),
          centerX: am5.p100,
          centerY: am5.p50,
          populateText: true
        })
      });
    });
    
    var label = chart.plotContainer.children.push(am5.Label.new(root, {
      text: "Go!",
      fontSize: "8em",
      opacity: 0.2,
      x: am5.p100,
      y: am5.p100,
      centerY: am5.p100,
      centerX: am5.p100
    }));
    
    // Get series item by category
    function getSeriesItem(category) {
      for (var i = 0; i < series.dataItems.length; i++) {
        var dataItem = series.dataItems[i];
        if (dataItem.get("categoryY") == category) {
          return dataItem;
        }
      }
    }
    
    // Axis sorting
    function sortCategoryAxis() {
      // sort by value
      series.dataItems.sort(function (x, y) {
        return y.get("valueX") - x.get("valueX"); // descending
        //return x.get("valueX") - y.get("valueX"); // ascending
      });
    
      // go through each axis item
      am5.array.each(yAxis.dataItems, function (dataItem) {
        // get corresponding series item
        var seriesDataItem = getSeriesItem(dataItem.get("category"));
    
        if (seriesDataItem) {
          // get index of series data item
          var index = series.dataItems.indexOf(seriesDataItem);
          // calculate delta position
          var deltaPosition =
            (index - dataItem.get("index", 0)) / series.dataItems.length;
          // set index to be the same as series data item index
          if (dataItem.get("index") != index) {
            dataItem.set("index", index);
            // set deltaPosition instanlty
            dataItem.set("deltaPosition", -deltaPosition);
            // animate delta position to 0
            dataItem.animate({
              key: "deltaPosition",
              to: 0,
              duration: stepDuration / 2,
              easing: am5.ease.out(am5.ease.cubic)
            });
          }
        }
      });
      // sort axis items by index.
      // This changes the order instantly, but as deltaPosition is set, they keep in the same places and then animate to true positions.
      yAxis.dataItems.sort(function (x, y) {
        return x.get("index") - y.get("index");
      });
    }
    
    var year = 1;
    
    // update data with values each 1.5 sec
    var interval = setInterval(function () {
      year++;
    
      if (year > 20) {
        clearInterval(interval);
        clearInterval(sortInterval);
      }
    
      updateData();
    }, stepDuration);
    
    var sortInterval = setInterval(function () {
      sortCategoryAxis();
    }, 100);
    
    function setInitialData() {
      var d = allData[year];
    
      for (var n in d) {
        series.data.push({ network: n, value: d[n] });
        yAxis.data.push({ network: n });
      }
    }
    
    function updateData() {
      var itemsWithNonZero = 0;
    
      if (allData[year]) {
        label.set("text", year.toString());
    
        am5.array.each(series.dataItems, function (dataItem) {
          var category = dataItem.get("categoryY");
          var value = allData[year][category];
    
          if (value > 0) {
            itemsWithNonZero++;
          }
    
          dataItem.animate({
            key: "valueX",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
          dataItem.animate({
            key: "valueXWorking",
            to: value,
            duration: stepDuration,
            easing: am5.ease.linear
          });
        });
    
        yAxis.zoom(0, itemsWithNonZero / yAxis.dataItems.length);
      }
    }
    
    setInitialData();
    setTimeout(function () {
      year++;
      updateData();
    }, 50);
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    
    }); // end am5.ready()
}