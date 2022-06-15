function item(itemID,itemName,itemQuantity,itemPrice) {
    var itemID = itemID;
    var itemName = itemName;
    var itemQuantity = itemQuantity;
    var itemPrice = itemPrice;

    this.getitemID = function () {
        return itemID;
    }

    this.setitemID = function (itemID) {
        itemID = itemID;

    }

    this.getitemName = function () {
        return itemName;
    }

    this.setitemName = function (itemName) {
        itemName = itemName;

    }

    this.getitemQuantity = function () {
        return itemQuantity;
    }

    this.setitemQuantity = function (itemQuantity) {
        itemQuantity = itemQuantity;

    }

    this.getitemPrice = function () {
        return itemPrice;
    }

    this.setitemPrice = function (itemPrice) {
        itemPrice = itemPrice;

    }
}