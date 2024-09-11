var No = 0;
function add() {
    No++;
    const form = document.querySelector('form[name="frm"]'); // lấy phần tử theo tên
    const pname = form.querySelector('#pname').value; 
    const qty = parseInt(form.querySelector('#quantity').value, 10);
    const price = parseFloat(form.querySelector('#price').value); 
    if (!pname || isNaN(qty) || isNaN(price)) {
        alert('Vui lòng nhập đầy đủ thông tin và kiểm tra lại các giá trị của bạn');
        return;
    }
    const sub = qty * price;
    var row = "<tr>";
    row += "<td>" + No + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price.toFixed(2) + "</td>"; 
    row += "<td>" + sub.toFixed(2) + "</td>";
    row += "</tr>"; // kết thúc hàng
    document.getElementById("tbl").innerHTML += row;
}

function reset() {
    document.querySelector('form[name="frm"]').reset(); 
}