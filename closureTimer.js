/*
function timer(startValue, endValue) {
    return function timerCount() {
        while(startValue>endValue) {
            console.log(startValue);
            startValue=startValue-1;
        }

        console.log('Таймер завершил работу: ' + endValue);
    }
}

let closureTimer = timer(60,0);
closureTimer();

*/

/* почему не работает?
function timer(startValue, endValue) {
    return function timerCount() {
        while (startValue>endValue) {
            setTimeout(() => {
                console.log(startValue);
                startValue = startValue - 1;
            }, 1000);
        }

        console.log('Таймер завершил работу: ' + startValue);
    }
}

let closureTimer = timer(10,0);
closureTimer(); */


function timer(startValue, endValue) {
    return function timerCount() {
        if (startValue>endValue) {
            console.log(startValue);
            startValue = startValue - 1;
            setTimeout(timerCount, 1000);
        }

        else {
            console.log('Таймер завершил работу: ' + startValue);
        }
    }
}

let closureTimer = timer(5,0);
closureTimer();




