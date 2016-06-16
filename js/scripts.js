$(document).ready(function() {

  var groceryList = [];

  $("#groceries").submit(function(event) {
    event.preventDefault();

    var item = $("#item").val();
    groceryList.push(item);
    $("#item").val("");
  });

  $("#submitList").click(function(event) {
    event.preventDefault();

    var finishedList = groceryList.map(function(element) {
      return element.toUpperCase();
    });

    finishedList.sort();
    finishedList.forEach(function(element) {
      $("#output").append("<li>" + element + "</li>");
    });

    $("#output").show();
  });
});
