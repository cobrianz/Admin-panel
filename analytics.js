const xValues = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "#6AFB92",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "#728FCE",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "#FF6347",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});

var zValues = ["Orders", "Expenses", "Income", "Students", "Tutors"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#728FCE", "#FF6347","#6AFB92","orange","brown"];

new Chart("myChart1", {
  type: "doughnut",
  data: {
    labels: zValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production"
    }
  }
});