 let timeLeft = 15;
    setInterval(async () => {
        document.getElementById("timer").textContent = timeLeft;
    timeLeft--;
        if (timeLeft < 0) {
            const response = await fetch("/");
            const text = await response.text();
            document.open();
            document.write(text);
            timeLeft = 15;
            document.close();
        }
        }, 1000);

        
// let timeLeft = 15;

// const countdown = setInterval(() => {
//     document.getElementById("timer").textContent = timeLeft;
//     timeLeft--;

//     if (timeLeft < 0) {
//         window.location.reload();  // load new meme
//     }
// }, 1000); 