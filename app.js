window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const score = document.querySelector(".score");
  let totalScore = 0;

  const colors = [
    "#47a5cc",
    "#5194cc",
    "#5b82cc",
    "#6671cc",
    "#705fcc",
    "#7a4ecc",
  ];

  //sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
      yourScore();
    });
  });
  //Function for makes Bubbles when you play!
  const createBubble = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };
  //A random no generator
  function addScore() {
    return Math.random() * 10;
  }

  function yourScore() {
    let add = Number(addScore().toFixed());
    console.log(typeof add);
    totalScore = totalScore + add;
    const viewScore = document.createElement("div");
    score.appendChild(viewScore);
    score.innerHTML = totalScore;
    if (totalScore == 69) {
      alert("You've just won the game! 🎉");
      totalScore = 0;
    }

    // if score goes above 70
    if (totalScore >= 70) {
      alert("So close! Play Again 🔥");
      totalScore = 0;
    }
  }
});
