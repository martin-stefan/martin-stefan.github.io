$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "projects.json",
    dataType: "json",
    success: function(responseData, status){
      var output = '<div class="row">';
      // output += "<ul class='list'>";
      $.each(responseData.project, function(i, item) {
        output += '<div class="col-1-of-2">';
        output += '<div class="card u-margin-top-medium">';
        output += '<div class="card__side">';
        // output += '<li class="listelm">';
        output += '<p class="smallTitle">' + item.title + '</p>';
        output += '<p class="subTitle">' + item.date + '</p>';
        output += '<p class="smallDesc">' + item.desc + '</p>';
        // output += '</li>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
      });
      // output += '</ul>';
      output += '</div>';
      $('#projects').html(output);
    }
  });
});