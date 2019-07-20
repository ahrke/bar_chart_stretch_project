function drawBarCharts(data, options, elements){
  return $(buildBar(data,options)).appendTo(document.querySelector(elements))
}

function getBarHeight(numOfBars, height){
  return height / numOfBars;
}

function changeColor(searchQuery, color) {
  document.querySelector(searchQuery).style.backgroundColor = color;
  alert(document.querySelector("#colorPick").value)
  return alert("whoa wee, changing colors!")
}

function buildColorForm(barNum, chart) {
  var searchQuery = '#bar' + barNum + "of" + chart;
  var x = document.createElement("INPUT");
  x.setAttribute("type","color");
  alert(x.value)

  changeColor(searchQuery, x.value)
}

function maxGraphYValue(largestNum) {
  var temp = largestNum.toString()
  var length = temp.length

  var val = (parseInt(temp[0]) + 1) * (10 ** (length-1))
  return val;
}

function yAxisValuesDiv(endValue) {
  var yAxisValues = '<div class="yAxisValues">'
  for(var i = 0; i < 1.10; i += 0.15) {
    yAxisValues += '<span>' + Math.round(endValue * i) + '</span>'
  }
  yAxisValues += '</div>'

  return yAxisValues
}

function buildBar(data, options){
  const colors = ["#33FFA4", "#339EFF", "rgb(256, 159, 119)", "rgb(163, 59, 19)","rgb(63, 59, 119)"]
  var height = options.height;
  var width = options.width;
  var title = options.title;
  var chartName = options.name;
  var yAxisLabel = options.yAxis || "Sample Y Axis";
  var xAxisLabel = options.xAxis || "Sample X Axis";
  var barHeight = getBarHeight(data.length,height);
  var textHeight = barHeight/4
  var largestNum = 0


  data.forEach(num => {
    if(num.length > 1){
      (num[1] > largestNum) ? largestNum = num[1] : largestNum = largestNum;
    } else {
      (num > largestNum) ? largestNum = num : largestNum = largestNum;
    }
  });

  var testForAttributeValue = '"#bar1ofwonderful"'
  var testForAttributeValue2 = '"blue"'

  var chartStr = "<div class='chartBack' style='height:"
    + (height * 1.2)
    + "px;'>"
    + "<h1 class='chartTitle' onclick='document.querySelector(" + testForAttributeValue + ").style.backgroundColor = " + testForAttributeValue2 + "'>"
    + title
    + "</h1>"
    + "<h2 class='barLabelYAxis'>" + yAxisLabel + "</h2>"
    + "<div class='bars'>"

  for(var i = 0; i < data.length; i++){
    var label = '';
    var value;
    if(data[i].length > 1){
      label = data[i][0]
      value = data[i][1]
    } else {
      label = data[i]
      value = data[i]
    }
    chartStr += "<div class='bar'>"
      + "<span class='barText' style='font-size: "
      + textHeight
      + "px; margin: "
      + (textHeight * 1.5)
      + "px 10px'>"
      + label
      + "</span>"
      + "<input type='button' class='barBlock jscolor {valueElement: null, value: " + '"' + colors[i] + '"' + "}' id='"
      + "bar" + i + "of" + chartName
      + "' style='background-color:"
      + colors[i]
      + "; width:"
      + ((value/(largestNum * 1.1)) * width)
      + "px; height:"
      + barHeight
      + "px' "
      + "onclick=" + '"changeColor(' + i + ',' + "'" + chartName + "'" + ',' + "'blue'" + ')">'
      + "</input>"
      + "</div>"
  }

  // alert(chartStr)

  chartStr += "</div>"
    + yAxisValuesDiv(largestNum)
    + "<h2 class='barLabelXAxis'>" + xAxisLabel + "</h2>"
    + "</div>"

  //changeColor(1,"battlestar","blue")
  return chartStr
}
