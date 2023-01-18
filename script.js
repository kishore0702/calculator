document.getElementById("7").addEventListener("click" , displaynum7)
function displaynum7(){
    document.getElementById("input").value+="7"
}
document.getElementById("8").addEventListener("click" , displaynum8)
function displaynum8(){
    document.getElementById("input").value+="8"
}
document.getElementById("9").addEventListener("click" , displaynum9)
function displaynum9(){
    document.getElementById("input").value+="9"
}
document.getElementById("division").addEventListener("click" , displaynumdiv)
function displaynumdiv(){
    document.getElementById("input").value+="/"
}
document.getElementById("4").addEventListener("click" , displaynum4)
function displaynum4(){
    document.getElementById("input").value+="4"
}
document.getElementById("5").addEventListener("click" , displaynum5)
function displaynum5(){
    document.getElementById("input").value+="5"
}
document.getElementById("6").addEventListener("click" , displaynum6)
function displaynum6(){
    document.getElementById("input").value+="6"
}
document.getElementById("subtraction").addEventListener("click" , displaynumsub)
function displaynumsub(){
    document.getElementById("input").value+="-"
}
document.getElementById("1").addEventListener("click" , displaynum1)
function displaynum1(){
    document.getElementById("input").value+="1"
}
document.getElementById("2").addEventListener("click" , displaynum2)
function displaynum2(){
    document.getElementById("input").value+="2"
}
document.getElementById("3").addEventListener("click" , displaynum3)
function displaynum3(){
    document.getElementById("input").value+="3"
}
document.getElementById("addition").addEventListener("click" , displaynumadd)
function displaynumadd(){
    document.getElementById("input").value+="+"
    }
document.getElementById("0").addEventListener("click" , displaynum0)
function displaynum0(){
    document.getElementById("input").value+="0"
}
document.getElementById("00").addEventListener("click" , displaynum00)
function displaynum00(){
    document.getElementById("input").value+="00"
}
document.getElementById("dot").addEventListener("click" , displaynumdot)
function displaynumdot(){
    document.getElementById("input").value+="."
}
document.getElementById("multiply").addEventListener("click" , displaynummultiply)
function displaynummultiply(){
    document.getElementById("input").value+="*"
}

document.getElementById("backarrow").addEventListener("click",backspace)
function backspace(){
    var value = document.getElementById("input").value;
    document.getElementById("input").value = value.substr(0, value.length - 1);
}

document.getElementById("c").addEventListener("click",displayerase)
function displayerase(){
    document.getElementById("input").value=""
}

document.getElementById("equal").addEventListener("click",displaydata)
function displaydata(){
    var a=document.getElementById("input").value;
    var res=0;
    for(i=0;i<=a.length;i++){
        if(a.split("")[i]=="+"){
            var b=a.split("+");
            for(j=0;j<b.length;j++){
                res+=Number(b[j])

                }
            break
        }
        if(a.split("")[i]=="-" && a.split("")[0]!=="-"){
            var b=a.split("-");
            res=Number(b[0]);
            for(j=0;j<b.length-1;j++){
                res-=Number(b[j+1])
            }
            break
        }
        else if(a.split("")[i]=="-" && a.split("")[0]=="-") {
            var b=a.split("-");
           
            res="-" +Number(b[0]);
            for(j=0;j<b.length-1;j++){
                res-=Number(b[j+1])
            }
            break
        }

        if(a.split("")[i]=="*"){
            var b=a.split("*");
            res=1;
            for(j=0;j<b.length;j++){
                res*=Number(b[j])
            }
            break
        }

        if(a.split("")[i]=="/"){
            var b=a.split("/")
            res=Number(b[0])
            for (j=0;j<b.length-1;j++){
                res/=Number(b[j+1])
            }
            
        }

    }
    document.getElementById("input").value=res;
}
