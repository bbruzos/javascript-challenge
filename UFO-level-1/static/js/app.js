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
var dateVal = 
}

