window.onload = function () {
    var buts = document.getElementsByTagName("button");
    var button = document.getElementsByClassName("btn")[0];
    var username = document.getElementById("username");
    var name = document.getElementById("name");
    var email = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputPassword1");
    var confPassword = document.getElementById("exampleInputPassword2");
    var validation1  = document.getElementById("error1");
    var validation2  = document.getElementById("error2");
    var validation3  = document.getElementById("error3");
    var validation4  = document.getElementById("error4");
    var validation5  = document.getElementById("error5");
    var validation6  = document.getElementById("error6");
    var n = 0;
    var temp = [];
    var patt1 = /[@]/g;

    function passValid() {
        if (password.value == confPassword.value){
            return true;
        } else {
            validation5.className="notvalid";
            return false;
        }
    }

    function addRow(username,name,email) {
        var tr = document.createElement("tr");
        var tdUn = document.createElement("td");
        var tdN = document.createElement("td");
        var tdE = document.createElement("td");
        var tdD = document.createElement("td");
        var bot = document.createElement("button");
        var del = document.getElementsByTagName("tbody")[0];

        bot.className="btn btn-danger";
        bot.type="button";
        bot.innerHTML="Delet";
        bot.id= "n"+n;
        console.log(n);
        var tbody = document.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);
        tr.appendChild(tdUn);
        tr.appendChild(tdN);
        tr.appendChild(tdE);
        tr.appendChild(bot);
        tdUn.innerHTML=username;
        tdN.innerHTML=name;
        tdE.innerHTML=email;
        bot.onclick = function () {
            del.removeChild(tr);

        }

    }

    button.onclick = function () {

        if (username.value != "" &&
            name.value != "" &&
            email.value != "" &&
            password.value != "" &&
            confPassword.value != "") {
            var details = {
                "userName": username.value,
                "Name": name.value,
                "Email": email.value,
                "Password": password.value
            };

            function check(temp) {
                return temp.Email == details.Email;
            }
            var result = email.value.match(patt1);
            console.log(result);
            console.log(temp.filter(check).length)
            if (passValid() == true && temp.filter(check).length ==0 && result == "@" ) {
                temp.push(details);
                console.log(temp.filter(check));

                // if () {
                //     // alert("not valid");
                //     // delete temp[1];
                //
                // } else {
                //     alert("valid");
                // }
                console.log(temp);
                addRow(username.value,name.value,email.value);

            }

            else {
                alert("validation error email rebeted or not valid ")
            }
        }
        else if ( username.value == "") {
            validation1.className="usererror";
        }
        else if ( name.value == "") {
            validation2.className="nameerror";
            validation1.className="";
        }
        else if ( email.value == "" ||  result != "@") {
            validation3.className="emailerror";
            validation2.className="";
        }
        else if ( password.value == "") {
            validation4.className="passerror";
            validation3.className="";
        }
        else if ( confPassword.value == "") {
            validation6.className="passerror";
            validation4.className="";
        }



        n = n + 1;
    }
    localStorage.setItem("details",  temp);


}