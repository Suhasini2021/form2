var row = 1
const submit = document.getElementById("sub");


let displayDetails = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    let dob = document.getElementById("dob").value;
    let checkbox = document.getElementById("check").value;

    let display = document.getElementById("disp");

    var newRow = display.insertRow(row);
    var col1 = newRow.insertcoll(0);
    var col2 = newRow.insertcol(1);
    var col3 = newRow.insertcoll(2);
    var col4 = newRow.insertcol(3);
    var col5 = newRow.insertcol(4);

    col1.innerHTML = name;
    col2.innerHTML = email;
    col3.innerHTML = password;
    col4.innerHTML = dob;
    col5.innerHTML = checkbox;

    row++;

};

submit.addEventListener("click" , displayDetails);
