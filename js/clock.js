let nameSurname = prompt("Adınız ve Soyadınız : ")

document.getElementById('myName').innerHTML = nameSurname;

function showTime(){
    let now = new Date();
    let hou = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let day = now.getDay();

    let days =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumatesi"];
    
    hou = hou < 10 ? "0" + hou : hou; 
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let time = `${hou}:${min}:${sec} ${days[day]}`;
    
    setTimeout(showTime, 1000);

    document.getElementById("myClock").innerText = time;

}

showTime();
