console.log("Promise exam");

function task(fullfilled, rejected) {
    console.log("task 실행");
    setTimeout(function () {
        console.log("task 실행 끝!");
        // fullfilled("실행 결과 값");
        rejected("Error message@");    }, 1000);
}

function fullfilled(result) {
    console.log("task 끝난 후 >>> fullfilled 실행 > ", result);
}

function rejected(err) {
    console.log("task에서 reject 실행 >>>fullfilled 실행 >>> ", err);
}

new Promise(task).then(fullfilled, rejected);
// 풀필드?