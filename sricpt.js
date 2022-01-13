function jump() {
  var run = document.getElementById("runImg");
  var st = getComputedStyle(run).getPropertyValue("display");
  if (st != "none") {
    var mario = document.getElementById("man");
    mario.classList.add("jump");
    setTimeout(function () {
      mario.classList.remove("jump");
    }, 1500);
  }
}

function run() {
  var stand = document.getElementById("standImg");

  var run = document.getElementById("runImg");

  var object = document.getElementById("land1");

  var man = document.getElementById("man");

  var score = document.getElementById("scoreSpan");

  var alret = document.getElementById("alret");
  alret.style.display = "none";

  var gameOver = document.getElementById("gameOver");

  var btn = document.getElementById("start");

  var runScore = document.getElementById("runScore");

  var counter = 0;

  var scorePoint = 0;

  stand.style.display = "none";
  run.style.display = "block";
  object.style.display = "block";

  var checkDead = setInterval(function () {
    let characterTop = parseInt(
      window.getComputedStyle(man).getPropertyValue("top")
    );

    let blockLeft = parseInt(
      window.getComputedStyle(object).getPropertyValue("left")
    );

    if (blockLeft < 350 && blockLeft > 250 && characterTop >= 180) {
      object.style.animation = "none";

      object.style.animation = "moveLeft 8s infinite linear";

      gameOver.innerHTML = Math.floor(scorePoint / 100);

      setTimeout(pause, 500);

      function pause() {
        stand.style.display = "block";
        run.style.display = "none";
        object.style.display = "none";
      }

      setTimeout(scoreboard, 700);

      function scoreboard() {
        alret.style.display = "flex";
        if (alret != "none") {
          runScore.style.display = "none";
          btn.style.display = "none";
        }
      }

      console.log(stand);
    } else {
      // object.style.animation = "moveLeft 8s infinite linear";

      var sc = getComputedStyle(run).getPropertyValue("display");

      if (sc != "none") {
        counter++;
        scorePoint++;
        score.innerHTML = Math.floor(counter / 100);
      } else {
        counter = 0;
        scorePoint = 0;
        score.innerHTML = "0";
      }

      console.log(sc);
    }
  }, 10);
}

function tryAgain() {
  var alret = document.getElementById("alret");
  var runScore = document.getElementById("runScore");
  var btn = document.getElementById("start");

  alret.style.display = "none";

  runScore.style.display = "block";

  btn.style.display = "block";
}
