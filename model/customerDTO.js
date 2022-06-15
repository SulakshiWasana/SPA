function customer(cusID,cusName,cusAddress,cusSalary) {
    var _customerID = cusID;
    var _customerName = cusName;
    var _customerAddress = cusAddress;
    var _customerSalary = cusSalary;

    this.getcusID = function () {
        return _customerID;
    }

    this.setcusID = function (cusID) {
        _customerID = cusID;

    }

    this.getcusName = function () {
        return _customerName;
    }

    this.setcusName = function (cusName) {
        _customerName = cusName;

    }

    this.getcusAddress = function () {
        return _customerAddress;
    }

    this.setcusAddress = function (cusAddress) {
        _customerAddress = cusAddress;

    }

    this.getcusSalary = function () {
        return _customerSalary;
    }

    this.setcusSalary = function (cusSalary) {
        _customerSalary = cusSalary;

    }
}



