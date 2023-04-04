$(document).ready(function () {
  function putInResult(value) {
    $("#resultado").val(value);
  }
  function puchNum(value) {
    var concatenado = $("#resultado").val() + value;
    putInResult(concatenado);
  }
  $(".btn.btn-dark")
    .add('.btn.btn-primary')
    .on('click', function () { puchNum(this.innerText); });
  $("#bclean")
    .on('click', function () { putInResult(''); });
  $("#bequal")
    .on('click', function () { putInResult(eval($('#resultado').val())) });
});