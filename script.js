 let getSt = document.querySelector(".getstarted")
function startAnimation(){
    getSt.classList.add("animate");
    setTimeout(() => {
      window.location.href = "https://youtu.be/xvFZjo5PgG0?si=d1IonYrvaRVbT9wR";
    }
    , 1000);
}





getSt.onclick = startAnimation;
