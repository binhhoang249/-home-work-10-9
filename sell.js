var No = 0;
var total = 0;

function add() {
    No++;
    var form = document.querySelector('form[name="frm"]')
    var pname = form.querySelector('#pname').value; 
    var qty = parseInt(form.querySelector('#qty').value);
    var price = parseFloat(form.querySelector('#price').value); 
    var sub = qty * price;

    if (!pname || isNaN(qty) || isNaN(price)) {
        alert('Vui lòng nhập đầy đủ thông tin và kiểm tra lại các giá trị của bạn');
        return;
    }

    total += sub; 

    var row = "<tr>";
    row += "<td>" + No + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price+ "</td>"; 
    row += "<td>" + sub + "</td>";
    row += "</tr>";

    document.getElementById("tbl").innerHTML += row;
    document.getElementById("total").innerText = total; 
    form.reset(); 
}