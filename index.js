/**
   D3 demo: transition basics

   Clyde "Thluffy" Sinclair
   SoftDev2 pd0
   2099-12-31
 **/

//build horiz bar chart...
//DATA (IN BILLIONS): National Defense, Veterans Benefits and Services, Transporation, Administration of Justice, Natural Resources and Environment
var data = [541,160,82.7,57.7,38.1]; //2016 data
var data2 = [594, 130, 86,49.3,35.8]; //2013 data
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");


//   USAGE: reload index.html before executing each from the console...

//instant transition:
barEnter.style("width", function(d) {
  return d + "px"; });

//5s transition:
//barEnter.transition().duration(5000).style("width", function(d) {
  //return d*100 + "px"; });

//trans time prop to bar width
//barEnter.transition().duration( function(d){ return d*1000; } )
  //.style("width", function(d) {
    //return d*100 + "px"; });


barEnter.text(function(d) { return d; });
