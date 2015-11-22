function DonutShop(location, stats) {
  this.location = location;
  this.minCustomers = stats.minCustomers;
  this.maxCustomers = stats.maxCustomers;
  this.averageDonutsPerCustomer = stats.averageDonutsPerCustomer;
  this.hourlyDonuts = [];
  this.dailyDonuts = [];

  this.numberOfCustomers = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
  }

  this.donutsPerHour = function() {
    for (var i = 0; i < 11; i++) {
     var hourly = Math.round(this.numberOfCustomers() * this.averageDonutsPerCustomer);
     this.hourlyDonuts.push(hourly);
    }
  }

  this.donutsPerDay = function () {
    var sum = 0;
    for (var i = 0; i < this.hourlyDonuts.length; i++) {
      sum += this.hourlyDonuts[i];
    }
    this.dailyDonuts.push(sum);
  }

  DonutShop.prototype.render = function() {
      var tableRow = document.createElement("tr");
      var tableData = document.createElement("td");
      tableData.innerHTML = this.location;
      tableRow.appendChild(tableData);

      for(var i = 0; i < this.hourlyDonuts.length; i++) {
          tableData = document.createElement("td");
          tableData.innerHTML = this.hourlyDonuts[i];
          tableRow.appendChild(tableData);
      }

      tableData = document.createElement("td");
      tableData.innerHTML = this.dailyDonuts;
      tableRow.appendChild(tableData);
      document.getElementById("donut-shop").appendChild(tableRow);
  }
}

var downtown = new DonutShop("Downtown", {minCustomers: 8, maxCustomers: 43, averageDonutsPerCustomer: 4.50});
var capitolHill = new DonutShop("Capitol Hill", {minCustomers: 4, maxCustomers: 37, averageDonutsPerCustomer: 2.00});
var southLakeUnion = new DonutShop("South Lake Union", {minCustomers: 9, maxCustomers: 23, averageDonutsPerCustomer: 6.33});
var wedgewood = new DonutShop("Wedgewood", {minCustomers: 2, maxCustomers: 28, averageDonutsPerCustomer: 1.25});
var ballard = new DonutShop("Ballard", {minCustomers: 8, maxCustomers: 58, averageDonutsPerCustomer: 3.75});

downtown.numberOfCustomers();
downtown.donutsPerHour();
downtown.donutsPerDay();
downtown.render();

capitolHill.numberOfCustomers();
capitolHill.donutsPerHour();
capitolHill.donutsPerDay();
capitolHill.render();

southLakeUnion.numberOfCustomers();
southLakeUnion.donutsPerHour();
southLakeUnion.donutsPerDay();
southLakeUnion.render();

wedgewood.numberOfCustomers();
wedgewood.donutsPerHour();
wedgewood.donutsPerDay();
wedgewood.render();

ballard.numberOfCustomers();
ballard.donutsPerHour();
ballard.donutsPerDay();
ballard.render();
