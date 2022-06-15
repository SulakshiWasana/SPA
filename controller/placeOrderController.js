
// $(".txtOrderId").text(generateOrderID());

$("#btnAddtoCart").click(function () {
    let itemQty=parseInt($("#itemqty").val());
    let orderQty=parseInt($("#OrderQty").val());
    if ($("#OrderQty").val()!=''){
        if (itemQty<orderQty){
            alert("No Qty");
        }else {
            addToCart();
            calitemQuantity();
            loadCartTable();
        }
    }else {
        alert("Type karala Na");
    }
})

$("#cnfOrder").click(function () {
    generateOrderID();
    saveOrder();
    cartDB=[];
    $("#cartTabale").empty();
})


function generateOrderID() {
    try {
        let lastorderID = orderDB[orderDB.length-1].getorderID();
        let neworderID = parseInt(lastorderID.substring(1,4))+1;
        if (neworderID<10){
            $(".txtOrderId").text("O00"+neworderID);
        }else if (neworderID<100){
            $(".txtOrderId").text("O0"+neworderID);
        }else {
            $(".txtOrderId").text("O"+neworderID);
        }
    }catch (e) {
        $(".txtOrderId").text("O001");
    }

}

$("#cmbcustormerId").click(function () {
    cusID = $("#cmbcustormerId").val();
    for (let i=0; i<customerDB.length; i++){
        if (customerDB[i].getcusID()==cusID){
            let customerName = customerDB[i].getcusName();
            let customerAddress = customerDB[i].getcusAddress();
            let customerSalary = customerDB[i].getcusSalary();
            $("#cusName").val(customerName);
            $("#CusAddress").val(customerAddress);
            $("#CusSalary").val(customerSalary);

        }
    }

})

$("#cmbItemId").click(function () {
    itemID = $("#cmbItemId").val();
    for (let i=0; i<itemDB.length; i++){
        if (itemDB[i].getitemID()==itemID){
            let itemName = itemDB[i].getitemName();
            let itemQuantity = itemDB[i].getitemQuantity();
            let itemPrice = itemDB[i].getitemPrice();
            $("#itNames").val(itemName);
            $("#itemqty").val(itemQuantity);
            $("#itemprice").val(itemPrice);
        }
    }

})

function addValuesToCmbCustomers(value) {
    $("#cmbcustormerId").append(value);

}

function addValuesToCmbItems(value) {
    $("#cmbItemId").append(value);

}

function saveOrder() {
    let orderID = $(".txtOrderId").text();
    let customerID = $("#cmbcustormerId").val();
    let date = $("#date").val();
    let discount = $("#discount").val();
    let total = $("#txtTotal").val();

    orderDB.push(new order(orderID,customerID,date,discount,total));
}

function calitemQuantity(orderQty) {
    var qtyonhand = parseInt(orderQty);
    var availableQty = parseInt($("#txtItemID").val());
    availableQty=availableQty-qtyonhand;
    itemID=$("#cmbItemId").val();
    for (const i in itemDB) {
        if (itemID==itemDB[i].getitemID()){
            itemDB[i].setitemQuantity(availableQty);
            $("#itemqty").val(itemDB[i].getitemQuantity());
        }

    }

}

let subTotal = 0;
let dis = 0;
let total =0;

function calculateTotal(orderQty,itemPrice,discount) {
    subTotal+=orderQty*itemPrice;
    dis+=(orderQty*itemPrice*discount)/100;
    total=subTotal-dis;
    $("#txtTotal").text(total);
    $("#txtsubTotal").text(subTotal);

}

function addToCart() {
    let itemID = $("#cmbItemId").val();
    let itemName = $("#itNames").val();
    let itemQuantity = $("#itemqty").val();
    let itemPrice = $("#itemprice").val();
    let discount = $("#discount").val();
    let orderQty= $("#OrderQty").val();
    let subTotal = itemPrice*orderQty;
    let total = $("#txtTotal").text();

    calculateTotal($("#OrderQty").val(),$("#itemprice").val(),$("#discount").val());
    for (const i in cartDB) {
        if (cartDB[i].getcartitemID()==itemID){
            var newQuantity =+cartDB[i].getcartorderQty()+ +orderQty;
            var newTotal = itemPrice*newQuantity;
            cartDB[i].setcartorderQty(newQuantity);
            cartDB[i].setcarttotal(newTotal);
            return;
        }

    }

    cartDB.push(new cart(itemID,itemName,itemPrice,orderQty,subTotal,discount,total));

}

function loadCartTable() {
    $("#cartTabale").empty();
    for (const i of cartDB) {
        let row = `<tr>
                <td>${i.getcartitemID()}</td>
                <td>${i.getcartitemName()}</td>
                <td>${i.getcartorderQty()}</td>
                <td>${i.getcartitemPrice()}</td>
                <td>${i.getcarttotal()}</td>
    </tr>`

        $("#cartTabale").append(row)
    }

}

function clearAll(){
    $("#datetime").val('');
    $("#cmbcustormerId").val('');
    $("#cusName").val('');
    $("#CusSalary").val('');
    $("#CusAddress").val('');
    $("#txtTotal").text('');
    $("#txtsubTotal").text('');
}

function clearAddtoCart(){
    $("#cmbItemId").val('');
    $("#itNames").val('');
    $("#itemprice").val('');
    $("#Qtyonhand").val('');
    $("#orderQty").val('');
    $("#txtDiscount").val('');
}


