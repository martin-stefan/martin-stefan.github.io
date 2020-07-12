$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "work.json",
    dataType: "json",
    success: function(responseData, status){
      var output = '<div class="row">';
      // var output = "<ul class='list'>";
      $.each(responseData.job, function(i, item) {
        output += '<div class="col-1-of-3">';
        output += '<div class="card">';
        output += '<div class="card__side>';
        // output += '<li class="listelm">';
        output += '<p class="smallTitle">' + item.title + " - " + item.comp + '</p>';
        output += '<p class="subTitle">' + item.date + '</p>';
        output += '<p class="smallDesc">' + item.desc + '</p>';
        // output += '</li>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
      });
      // output += '</ul>';
      output += '</div>';
      $('#jobs').html(output);
    }
  });
});