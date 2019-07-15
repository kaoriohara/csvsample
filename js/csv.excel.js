$(window).load(function () {
  $.get('../csv/excel.csv', function (data) {
    var csv = $.csv.toArrays(data);
    var itemlist = '';

    $(csv).each(function (index) {
      itemlist += '<li><p>' + this[0] + '</p><p><a href="' + this[1] + '" target="_blank">' + this[2] + '</a></p></li>';
    })
    $('.linkbox-excel').html(itemlist);
  });
});
