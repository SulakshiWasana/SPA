$("#btnItem").click(function () {
    saveItem();
    loadAllItem();
})

function saveItem() {
    let itemID = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemQuantity = $("#txtItemQuantity").val();
    let itemPrice= $("#txtItemPrice").val();

    itemDB.push(new item(itemID,itemName,itemQuantity,itemPrice))

    addValuesToCmbItems("<option>"+itemID+"</option>");
}

function loadAllItem() {
    $("#itemTable").empty();
    for (var i of itemDB) {
        let row = `<tr><td>${i.getitemID()}</td><td>${i.getitemName()}</td><td>${i.getitemQuantity()}</td><td>${i.getitemPrice()}</td></tr>`;
        $("#itemTable").append(row);
    }
    clearTextFeild();
}


function clearTextFeild(){
    $("#txtItemID").val('');
    $("#txtItemName").val('');
    $("#txtItemQuantity").val('');
    $("#txtItemPrice").val('');
}