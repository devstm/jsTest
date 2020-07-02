window.onload= function () {
    var button = document.getElementsByClassName("btn")[0];
    var username = document.getElementsByClassName("form-control")[0];
    var name = document.getElementsByClassName("form-control")[1];
    var email = document.getElementsByClassName("form-control")[2];
    var password = document.getElementsByClassName("form-control")[3];
    var confPassword = document.getElementsByClassName("form-control")[4];


    function passValid (){
        if(password.value == confPassword.value){
            alert("saved");
            return true;
        }else {
            alert("WassWord ERROR!");
            return false;
        }


    }

    function setCookie(username , name , email , password , confPassword) {
        document.cookie =username + name + email + password + confPassword;
    }

    function getCookie(username) {
        var name = username + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
     }

     function checkCookie() {
        var user=getCookie("cId");
            alert("Welcome again "+ username.value + name.value + email.value + password.value + confPassword.value);
        }




var id =0;
    button.onclick = function () {


        if (username.value != "" && name.value != "" && email.value != "" && password.value != "" && confPassword.value != "") {
            var details = {
                "userName": username,
                "Name": name,
                "Email": email,
                "Password": password
            };
            var x =  details.Email.value;
            console.log(x);
            var jsonDet = JSON.stringify(details);

            if (passValid() == true) {
                localStorage.setItem("saleh", jsonDet);
                 var text = localStorage.getItem("saleh");
                 var obj = JSON.parse(text);



                //setCookie(cId, username, name, email, password, confPassword);
                //checkCookie();


            } else {
                alert("not submiott")
            }


        } else {
            alert("userNameVal empty");
        }


    }

}