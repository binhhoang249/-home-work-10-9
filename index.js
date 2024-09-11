var id = 0;
function sell() {
    id++;
    const form = document.querySelector('form[name="frm"]'); // lấy phần tử theo tên
    const pname = form.querySelector('#pname').value; 
    const qty = parseInt(form.querySelector('#quantity').value, 10);
    const price = parseFloat(form.querySelector('#price').value); 
    const dc = parseFloat(form.querySelector('#dc').value);
    if (!pname || isNaN(qty) || isNaN(price) || isNaN(dc)) {
        alert('Vui lòng nhập đầy đủ thông tin và kiểm tra lại các giá trị của bạn');
        return;
    }
    const sub = qty * price * (1 - dc / 100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price.toFixed(2) + "</td>"; 
    row += "<td>" + dc + "%</td>";
    row += "<td>" + sub.toFixed(2) + "</td>";
    row += "</tr>"; // kết thúc hàng
    document.getElementById("tbl").innerHTML += row;
}

function reset() {
    document.querySelector('form[name="frm"]').reset(); 
}