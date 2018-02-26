var number = new Array();
var fuhao = new Array();
var fu = false;
(function btnShow() {
    var x = ["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "x", "0", "x", "/", `<i class="fas fa-trash-alt"></i>`, ".", `<i class="fas fa-long-arrow-alt-left"></i>`, "="];
    for (let i = 0; i < x.length; i++) { // 產按鈕
        var button = document.createElement("button");
        button.innerHTML = x[i];
        button.className = "btn blue";
        button.onclick = function () { // 產按鈕按下的function
            switch (i) {
                case 3:
                case 7:
                case 11:
                case 15: // +
                    number.push(document.getElementById("num").value);
                    fuhao.push(x[i]);
                    fu = true;
                    if (number.length == 2) {
                        cal();
                        document.getElementById("num").value = number[0];
                    }
                    break;
                case 16: // 刪除
                    number = new Array();
                    fuhao = new Array();
                    document.getElementById("num").value = '';
                    break;
                case 18: // 倒退
                    document.getElementById("num").value !== '' ? document.getElementById("num").value = document.getElementById("num").value.substring(0, document.getElementById("num").value.length - 1) : null;
                    break;
                case x.length - 1:
                    if (fuhao.length !== 0) {
                        number.push(document.getElementById("num").value);
                    }
                    if (number.length == 2) {
                        cal();
                        document.getElementById("num").value = number[0];
                    }
                    document.getElementById("num").value = number[0];
                    break;
                default:
                    if (fu) {
                        document.getElementById("num").value = '';
                        fu = false;
                    }
                    if (i == 17) { // .
                        if (document.getElementById("num").value !== '') {
                            if (document.getElementById("num").value.indexOf('.') === -1) {
                                document.getElementById("num").value += x[i];
                            }
                        }
                    } else {
                        if (document.getElementById("num").value.length == 1 && document.getElementById("num").value.substring(0, 1) == 0) {

                        } else {
                            document.getElementById("num").value += x[i];
                        }   
                    }

                    break;
            }
        }
        x[i] == "x" ? button.style.visibility = 'hidden' : null // 陣列中有兩個不要的按鈕 不給顯示
        var body = document.getElementById("numberBtn");
        body.appendChild(button);
    }

    function cal() {
        switch (fuhao.pop()) {
            case '+':
                var num1 = number.pop();
                var num2 = number.pop();
                (String(num1).indexOf(".") > -1) || (String(num2).indexOf(".") > -1) ? number.push((parseFloat(num1) * 10000 + parseFloat(num2) * 10000) / 10000): number.push(parseInt(num1) + parseInt(num2));
                break;
            case '-':
                var num1 = number.pop();
                var num2 = number.pop();
                (String(num1).indexOf(".") > -1) || (String(num2).indexOf(".") > -1) ? number.push((parseFloat(num2) * 10000 - parseFloat(num1) * 10000) / 10000): number.push(parseInt(num2) - parseInt(num1));
                break;
            case '*':
                var num1 = number.pop();
                var num2 = number.pop();
                (String(num1).indexOf(".") > -1) || (String(num2).indexOf(".") > -1) ? number.push((parseFloat(num1) * parseFloat(num2) * 10000) / 10000): number.push(parseInt(num1) * parseInt(num2));
                break;
            case '/':
                var num1 = number.pop();
                var num2 = number.pop();
                (String(num1).indexOf(".") > -1) || (String(num2).indexOf(".") > -1) ? number.push((parseFloat(num2) / parseFloat(num1) * 10000) / 10000): number.push(parseInt(num2) / parseInt(num1));
                break;
        }
    }
}());