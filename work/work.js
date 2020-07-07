$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "work.json",
    dataType: "json",
    success: function(responseData, status){
      var output = "<ul class='list'>";
      $.each(responseData.job, function(i, item) {
        output += '<li class="listelm">';
        output += '<p class="smallTitle">' + item.title + '</p>';
        output += '<p class="subTitle">' + item.date + '</p>';
        output += '<p class="smallDesc">' + item.desc + '</p>';
        output += '</li>';
      });
      output += '</ul>';
      $('#jobs').html(output);
    }
  });
});
