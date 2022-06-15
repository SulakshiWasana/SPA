function cart(citemID,citemName,citemPrice,ctdiscount,corderQty,csubTotal,ctotal) {
    let cartitemID = citemID
    let cartitemName = citemName
    let cartitemPrice = citemPrice
    let cartdiscount = ctdiscount
    let cartorderQty= corderQty
    let cartsubTotal = csubTotal
    let carttotal = ctotal

    this.getcartitemID = function () {
        return citemID;
    }

    this.setcartitemID = function (citem) {
        citemID = citem;

    }

    this.getcartitemName = function () {
        return citemName;
    }

    this.setcartitemName = function (ciName) {
        citemName = ciName;

    }

    this.getcartitemPrice = function () {
        return citemPrice;
    }

    this.setcartitemPrice = function (ciPrice) {
        citemPrice = ciPrice;

    }

    this.getcartdiscount = function () {
        return ctdiscount;
    }

    this.setcartdiscount = function (cdiscount){
        ctdiscount = cdiscount;

    }

    this.getcartorderQty = function () {
        return corderQty;
    }

    this.setcartorderQty = function (cQty) {
        corderQty = cQty;

    }

    this.getcartsubTotal = function () {
        return csubTotal;
    }

    this.setcartsubTotal = function (csTotal) {
        csubTotal = csTotal;

    }

    this.getcarttotal = function () {
        return ctotal;
    }

    this.setcarttotal = function (cTotal) {
        ctotal = cTotal;

    }


}