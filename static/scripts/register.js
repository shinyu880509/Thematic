function register() {
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    var confirm = document.getElementById("confirm");
    var userEmail = document.getElementById("email");
    if (username.value == "") {
            alert("請輸入帳號");
        } else if (pass.value  == "") {
            alert("請輸入密碼");
        } else if (confirm.value  == "") {
            alert("請確認密碼");
        }else if (confirm.value  != pass.value) {
            alert("密碼與確認密碼不同");
        }else{
            window.location.href="/registeCheck/" + username.value + "/" + pass.value + "/" + userEmail.value; /*------------跳回login-------------*/ 
    }
    /*--------------註冊資料放進資料庫-------------*/  

                    /*柏恩不會寫*/

    /*-------------------------------------------*/ 
}

/*-------寄信-------*/
function ee() {
    var username = document.getElementById("username");
    var emailname = document.getElementById("email");
    var c = emailname.value.indexOf("@");
    if (username.value == ""){
        alert("請輸入帳號");
    }
    else if (emailname.value == "") {
        alert("請輸入信箱");
    }
    else{
        alert("信件已寄到 " + emailname.value + " 請確認");
        window.location.href="/message/" + emailname.value + "/" + username.value; 
    }
}
    