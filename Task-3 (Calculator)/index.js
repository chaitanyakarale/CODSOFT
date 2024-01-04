
$(".num").click(function (event) { 
   var val=$(this).prop("value");
   Solve(val);
   
});

function Solve(val) {
   var v = document.getElementById('Result');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('Result').value;
   var num2 = eval(num1);
   document.getElementById('Result').value = num2;
}
function clearAll() {
   var inp = document.getElementById('Result');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('Result');
   ev.value = ev.value.slice(0,-1);
}
