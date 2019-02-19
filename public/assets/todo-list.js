$(document).ready(function () {

  $('form').on('submit', function (e) {
    e.preventDefault();
    var item = $('form input');
    var todo = {
      item: item.val()
    };

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
        //console.log(this.data);
      }
    });

    return false;

  });

  $('li').on('click', function () {
    console.log('zeez');
    // var item = $(this).text().replace(/ /g, "-");
    var item1 = $.trim($(this).text());
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item1,
      success: function (data) {
        //do something with the data via front-end framework

        //console.log(item1);
        location.reload();
      }
    });
  });

});