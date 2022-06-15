$("#btnCustomer").click(function () {
    saveCustomer();
    clearAll();
    loadAllCustomers();
})

function saveCustomer() {
    let customerID = $("#txtCusID").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAdd").val();
    let customerSalary = $("#txtCusSal").val();

    customerDB.push(new customer(customerID,customerName,customerAddress,customerSalary))

    addValuesToCmbCustomers("<option>"+customerID+"</option>");
}

function loadAllCustomers() {
    $("#customerTable").empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.getcusID()}</td><td>${i.getcusName()}</td><td>${i.getcusAddress()}</td><td>${i.getcusSalary()}</td></tr>`;
        $("#customerTable").append(row);
    }
}

//validation started
// customer regular expressions
const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;


$('#txtCusID,#txtCusName,#txtCusAdd,#txtCusSal').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});

$('#txtCusID,#txtCusName,#txtCusAdd,#txtCusSal').on('blur', function () {
    formValid();
});

//focusing events
$("#txtCusID").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }

    if (eventOb.key == "Control") {
        var typedCustomerID = $("#txtCusID").val();
        var srcCustomer = searchCustomerFromID(typedCustomerID);
        $("#txtCusID").val(srcCustomer.getCustomerID());
        $("#txtCusName").val(srcCustomer.getCustomerName());
        $("#txtCusAdd").val(srcCustomer.getCustomerAddress());
        $("#txtCusSal").val(srcCustomer.getCustomerSalary());
    }
});

$("#txtCusName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCusAdd").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCusSal").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

// focusing events end
$("#btnCustomer").attr('disabled', true);

function clearAll() {
    $('#txtCusID,#txtCusName,#txtCusAdd,#txtCusSal').val("");
    $('#txtCusID,#txtCusName,#txtCusAdd,#txtCusSal').css('border', '2px solid #ced4da');
    $('#txtCusID').focus();
    $("#btnCustomer").attr('disabled', true);
    loadAllCustomers();

}

function formValid() {
    var cusID = $("#txtCusID").val();
    $("#txtCusID").css('border', '2px solid green');
    if (cusIDRegEx.test(cusID)) {
        var cusName = $("#txtCusName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtCusName").css('border', '2px solid green');
            var cusAddress = $("#txtCusAdd").val();
            if (cusAddressRegEx.test(cusAddress)) {
                var cusSalary = $("#txtCusSal").val();
                var resp = cusSalaryRegEx.test(cusSalary);
                $("#txtCusAdd").css('border', '2px solid green');
                if (resp) {
                    $("#txtCusSal").css('border', '2px solid green');
                    return true;
                } else {
                    $("#txtCusSal").css('border', '2px solid red');
                    return false;
                }
            } else {
                $("#txtCusAdd").css('border', '2px solid red');
                return false;
            }
        } else {
            $("#txtCusName").css('border', '2px solid red');
            return false;
        }
    } else {
        $("#txtCusID").css('border', '2px solid red');
        return false;
    }
}

function checkIfValid() {
    var cusID = $("#txtCusID").val();
    if (cusIDRegEx.test(cusID)) {
        $("#txtCusName").focus();
        var cusName = $("#txtCusName").val();
        if (cusNameRegEx.test(cusName)) {
            $("#txtCusAdd").focus();
            var cusAddress = $("#txtCusAdd").val();
            if (cusAddressRegEx.test(cusAddress)) {
                $("#txtCusSal").focus();
                var cusSalary = $("#txtCusSal").val();
                var resp = cusSalaryRegEx.test(cusSalary);
                if (resp) {
                    let res = confirm("Do you really need to add this Customer..?");
                    if (res) {
                        saveCustomer();
                        clearAll();
                    }
                } else {
                    $("#txtCusSal").focus();
                }
            } else {
                $("#txtCusAdd").focus();
            }
        } else {
            $("#txtCusName").focus();
        }
    } else {
        $("#txtCusID").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnCustomer").attr('disabled', false);
    } else {
        $("#btnCustomer").attr('disabled', true);
    }
}

$('#btnCustomer').click(function () {
    checkIfValid();
});
