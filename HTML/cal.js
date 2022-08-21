var res = "";
function remove() {
    res = " ";
    document.getElementById("txt1").value = 0;
}
function cal(num) {
    res += num;
    document.getElementById("txt1").value = res;
}
function calc() {
    var result = eval(res);
    document.getElementById('txt1').value = result;
    res= result;
}
function undo() {
    res = res.substring(0, res.length- 1);
    document.getElementById('txt1').value = res;
}
