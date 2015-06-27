$(function() {
  $('#alert').click(function() {
    $('#testArea').html('<em>hi there</em>');
    var preBuffer = $('#textA').text();
    var postBuffer = $('#textB').text();

    $('#textA').text(preBuffer.slice(0, preBuffer.length - 1));
    $('#textB').text(preBuffer.charAt(preBuffer.length - 1) + postBuffer);

    var preBuffer2 = $('#textIn').val();
    var postBuffer2 = $('#textOut').text();

    $('#textIn').val(preBuffer2.slice(0, preBuffer2.length - 1));
    $('#textOut').text(preBuffer2.charAt(preBuffer2.length - 1) + postBuffer2);

  });
});
