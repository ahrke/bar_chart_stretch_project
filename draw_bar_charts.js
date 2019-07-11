function drawBarCharts(data, options, elements){
  return $(buildBar(data,options)).appendTo(document.querySelector(elements))
}

function getBarHeight(numOfBars, height){
  return height / numOfBars;
}

function buildBar(data, options){
  const colors = ["#33FFA4", "#339EFF", "red", "purple","rgb(63, 59, 119)"]
  var height = options.height;
  var width = options.width;
  var title = options.title;
  var barHeight = getBarHeight(data.length,height);
  var textHeight = barHeight/4
  var sum = 0

  data.forEach(num => {
    (num > sum) ? sum = num : sum = sum
  });

  var chartStr = "<div class='chartBack' style='height:"
    + (height * 1.2)
    + "px;'>"
    + "<span class='barTitle'>"
    + title
    + "</span>"

  for(var i = 0; i < data.length; i++){
    chartStr +=
      "<div class='bar' style='background-color:"
      + colors[i]
      + "; width:"
      + ((data[i]/sum) * width)
      + "px; height:"
      + barHeight
      + "px'><span class='barText' style='font-size: "
      + textHeight
      + "px; margin: "
      + (textHeight * 1.5)
      + "px 10px'>"
      + data[i]
      + "</span></div>"
  }

  alert(chartStr)

  chartStr += "</div>"

  return chartStr
}
