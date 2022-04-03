// from data.js
var tableData = data;

// Get a reference to the table body
var ufo_table = d3.select("tbody");


// Console.log the data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each ufo report object
data.forEach(function(uforeport) {
  console.log(uforeport);
});

data.forEach((uforeport) => {
  var row = ufo_table.append("tr");
  Object.entries(uforeport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value)  });
});

// Select the button
var button = d3.select("#filter-btn");


button.on('click', function table() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = tableData.filter(row=> row.datetime === inputValue);

  ufo_table.html(``);

// append filtered data to the table 
  filteredData.forEach(function(row) {
    var row= ufo_table.append("tr");
    Object.entries(row).forEach(function([key,value]) {
    var cell = row.append("td");
    cell.text(value)  });
  })})

  d3.selectAll("#filter-btn").on("click", table);
  table(tableData);

  

  

  