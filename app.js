const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const dateText = document.getElementById('dateText');

getTime();

function getTime() {
    var now = new Date();

    var getHours = now.getHours();
    var getMinutes = now.getMinutes();
    var getSeconds = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    if(getHours < 10){
        hours.innerHTML = '0' + getHours;
    }else {
        hours.innerHTML = getHours;
    }

    if(getMinutes < 10){
        minutes.innerHTML = '0' + getMinutes;
    }else{
        minutes.innerHTML = getMinutes;
    }

    if(getSeconds < 10){
        seconds.innerHTML = '0' + getSeconds;
    }else{
        seconds.innerHTML = getSeconds;
    }

    dateText.innerHTML = day + '/' + month + '/' + year

}

setInterval(function(){
    getTime();
},1000)
