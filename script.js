
function startDownloadFile(num,duration) {
    let myPromise = new Promise((resolve,reject) => {
        
        let startDate = new Date();
        
        document.getElementById(`downloading-status${num}`).innerHTML = `Downloading started: ${startDate.getHours()}:${startDate.getMinutes()}:${startDate.getSeconds()}<br>`;

        setTimeout(() => {
            resolve(startDate);
            reject();
        },duration);
    });

    myPromise.then(
        // When Resolved
        (startDate) => {
            let endDate = new Date();

            document.getElementById(`downloading-status${num}`).innerHTML += `Downloading finished: ${endDate.getHours()}:${endDate.getMinutes()}:${endDate.getSeconds()}<br>`; 

            let totalTime = endDate - startDate;  

            document.getElementById(`downloading-status${num}`).innerHTML +=`Total time: ${totalTime/1000} seconds<br>`;
        },
        // When Rejected
        () => {}
    );

    let timer = setInterval(function() {
        console.log(`Status of Promise ${num} is`);
        console.log(myPromise);
    }, 1000);
}