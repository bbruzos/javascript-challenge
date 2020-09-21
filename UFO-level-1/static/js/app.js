// from data.js
var tableData = data;

// Selecting the tbody

var tbody = d3.select("tbody")
console.log("First Step")

// Use data entries as objects to grab key,value pairs from data
// Loop through objects and place data in table area of html
function dataDisplay(item){
    tbody.text("");
    item.forEach(ufo_sighting => {
        console.table(ufo_sighting);
        add_tr = tbody.append("tr");

        Object.entries(ufo_sighting).forEach(function([key,value]){
            add_td = add_tr.append("td").text(value);
        });
    });
}

// Perform the function on data to display on site
dataDisplay(tableData)
console.log("Second Step")

// Select filter button
var filterBtn = d3.select("#filter-btn")
filterBtn.on("click", function(){
    console.log("Step 3")

// Prevent page from refreshing on click
d3.event.preventDefault();

// Choose input element and grab raw HTML node
// Then grab the value property of the input element
var dateInput = d3.select("#datetime");
var dateVal = dateInput.property("value");

var cityInput = d3.select("#city");
var cityVal = cityInput.property("value");

var stateInput = d3.select("#state");
var stateVal = stateInput.property("value");

var countryInput = d3.select("#country");
var countryVal = countryInput.property("value");

var shapeInput = d3.select("#shape");
var shapeVal = shapeInput.property("value");

// show value of user inputs
console.log(dateVal);
console.log(cityVal);
console.log(stateVal);
console.log(countryVal);
console.log(shapeVal);

var tableFilter = tableData.filter(ufo_sighting =>{
    return(ufo_sighting.datetime===dateVal || !dateVal) &&
              (ufo_sighting.city===cityVal || !cityVal) &&
              (ufo_sighting.state===stateVal || !stateVal) &&
              (ufo_sighting.country===countryVal || !countryVal) &&
              (ufo_sighting.shape===shapeVal || !shapeVal )
})

// Run filter function through the dataDisplay function to display filtered input
dataDisplay(tableFilter);

});


