

(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "July 12, 2023 00:00:00",
        countDown = new Date(birthday).getTime(),
        interval = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
  
            headline.innerText = "Happy birthday!";
            headline.style.fontSize = "1em";
            countdown.style.display = "none";
            content.style.display = "block";
            content.style.fontSize = "5rem";
            content.style.opacity = "1";

            const end = Date.now() + 20 * 1000;
            // go Buckeyes!
            const colors = ["#bb0000", "#FFC0CB"];
            
            (function frame() {
              confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
                shape: ["triangle"],
              });
            
              confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
                shape: ["triangle"],
              });
            
              if (Date.now() < end) {
                requestAnimationFrame(frame);
              }
            })();
             
            clearInterval(interval);
          }
          //seconds
        }, 0)
}());