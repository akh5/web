var front = document.getElementsByClassName("front");
var sign = document.getElementsByClassName("signup");
var back = document.getElementsByClassName("back");
var regin = document.getElementsByClassName("regin");
var racc = document.getElementById("racc");
var rpass = document.getElementById("rpass");
var alert = document.getElementById("alert");

var signacc = document.getElementsByClassName("signaccount");
var signpass = document.getElementsByClassName("signpassword");
var acc = document.getElementById("acc1")
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var error = document.getElementsByClassName("error");
var confirm = document.getElementsByClassName("confirm");

sign[0].onclick = function regin() {
    front[0].style.display = 'none';
    back[0].style.display = 'block';
    error[0].style.display='none';
};
function signup() {
    error[0].style.display='none';
        confirm[0].onclick = function () {
            if(pass1.value!=pass2.value){
                error[0].style.display='block';
                pass1.value="";
                pass2.value="";
            }
            if (acc.value!=""&&pass1.value!=""&&pass1.value==pass2.value){
                front[0].style.display = 'block';
                back[0].style.display = 'none';
                acc.value="";
                pass1.value="";
                pass2.value="";
            }
        }
}
function reginin(){
    var count = 3;
    regin[0].onclick = function () {
        if(count<=0){
            regin[0].style.display="none";
        }
        if (racc.value!="abc"&&rpass.value!="123456"){
            racc.value="";
            rpass.value="";
            alert.style.display="block";
            alert.innerText=`用户名或密码错误，登陆失败，还剩${count--}次机会`
            setTimeout (function () {
               alert.style.display = 'none';
            },1500)
        }
    }
}
signup();
reginin();