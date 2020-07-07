$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "projects.json",
    dataType: "json",
    success: function(responseData, status){
      var output = "<ul class='list'>";
      $.each(responseData.project, function(i, item) {
        output += '<li class="listelm">';
        output += '<p class="smallTitle">' + item.title + '</p>';
        output += '<p class="subTitle">' + item.date + '</p>';
        output += '<p class="smallDesc">' + item.desc + '</p>';
        output += '</li>';
      });
      output += '</ul>';
      $('#projects').html(output);
    }
  });
});