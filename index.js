//DATA (IN BILLIONS): National Defense, Veterans Benefits and Services, Transporation, Administration of Justice, Natural Resources and Environment
var data = [541,160,82.7,57.7,38.1]; //2016 data
var data2 = [594, 130, 86,49.3,35.8]; //2013 data
var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
barEnter.text(function(d) { return d; });

var toggle=1;
var b=document.getElementById("toggle");

//instant transition:
barEnter.style("width", function(d) {
  return d + "px"; });

var transition=function(e){
    chart.selectAll("div").remove()
    if(toggle==1){
	barUpdate = bar.data(data2);
	barEnter = barUpdate.enter().append("div");
	heading.innerHTML="Program Spending in 2013 (in billions)";
    }
    else{
	barUpdate = bar.data(data);
	barEnter = barUpdate.enter().append("div");
	heading.innerHTML="Program Spending in 2016 (in billions)";
    }
    barEnter.transition().duration(2000).style("width", function(d) {
	return d + "px"; });
    barEnter.text(function(d) { return d; });
    toggle*=-1;
};

b.addEventListener("click", transition);
