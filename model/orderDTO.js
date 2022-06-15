function order(orderID,cusID,date,discount,total) {
    var orderID = orderID;
    var customerID = cusID;
    var date = date;
    var discount = discount;
    var total = total;

    this.getorderID = function () {
        return orderID;
    }

    this.setorderID = function (orderID) {
        orderID = orderID;

    }

    this.getcustomerID = function () {
        return cusID;
    }

    this.setcustomerID = function (cusID) {
        customerID = cusID;

    }

    this.getdate = function () {
        return date;
    }

    this.setdate = function (date) {
        date = date;

    }

    this.getdiscount = function () {
        return discount;
    }

    this.setdiscount = function (discount) {
        discount = discount;

    }

    this.gettotal = function () {
        return total;
    }

    this.settotal = function (total) {
        total = total;

    }

}
