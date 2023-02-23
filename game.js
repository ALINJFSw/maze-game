window.onload = () => {
  var status;
  var score = 0;
  var start = document.getElementById("start");
  var status_board = document.getElementById("status");
  var b1 = document.getElementsByClassName("boundary")[0];
  var b2 = document.getElementsByClassName("boundary")[1];
  var b3 = document.getElementsByClassName("boundary")[2];
  var b4 = document.getElementsByClassName("boundary")[3];
  var b5 = document.getElementsByClassName("boundary")[4];
  var end = document.getElementById("end");
  var rect1 = b1.getBoundingClientRect();
  var rect2 = b2.getBoundingClientRect();
  var rect3 = b3.getBoundingClientRect();
  var rect4 = b4.getBoundingClientRect();
  var rect5 = b5.getBoundingClientRect();
  var score_board = document.getElementsByClassName("example")[0];
  score_board.classList.add("score-board");
  var reset = document.createElement("button");
  reset.innerHTML = "reset";
  reset.className = "reset";
  reset.addEventListener("click", () => {
    score = 0;
    showScore(score);
  });
  
  document.body.append(reset);
  const showScore = (s_core) => {
    score_board.innerHTML = "your score = " + s_core;
  };
  showScore(score)
  status_board.innerHTML = "press S to play";

  const maze = (event) => {
    repeat();
    document.addEventListener("mousemove", playMaze);
  };

  const playMaze = (event) => {
    var xPos = event.clientX;
    var yPos = event.clientY;

    if (
      xPos < rect1.right &&
      xPos > rect1.left &&
      yPos < rect1.bottom &&
      yPos > rect1.top
    ) {
      loseGame();
    }
    if (
      xPos < rect2.right &&
      xPos > rect2.left &&
      yPos < rect2.bottom &&
      yPos > rect2.top
    ) {
      loseGame();
    }
    if (
      xPos < rect3.right &&
      xPos > rect3.left &&
      yPos < rect3.bottom &&
      yPos > rect3.top
    ) {
      loseGame();
    }
    if (
      xPos < rect4.right &&
      xPos > rect4.left &&
      yPos < rect4.bottom &&
      yPos > rect4.top
    ) {
      loseGame();
    }
    if (
      xPos < rect5.right &&
      xPos > rect5.left &&
      yPos < rect5.bottom &&
      yPos > rect5.top
    ) {
      loseGame();
    }
  };

  const loseGame = () => {
    document.removeEventListener("mousemove", playMaze);

    status = "lose";
    var shapes = document.getElementsByClassName("boundary");
    var i = 0;
    for (i; i < shapes.length; i++) {
      shapes[i].classList.add("lose");
    }
    status_board.innerHTML = "OPS You LOST !";
    status_board.classList.add("lose-message");
    console.log(score);

    score = score - 10;
    console.log(score);
    if (score < 0) score = 0;
    showScore(score);
  };

  const repeat = () => {
    status_board.innerHTML = "Playing";
    if (status === "lose") status_board.classList.remove("lose-message");
    if (status === "win") status_board.classList.remove("win-message");

    var shapes = document.getElementsByClassName("boundary");
    var i = 0;
    for (i; i < shapes.length; i++) {
      shapes[i].classList.remove("lose");
    }
  };

  const winGame = () => {
    document.removeEventListener("mousemove", playMaze);
    repeat();
    status = "win";
    status_board.innerHTML = "YAY You Win!";
    status_board.classList.add("win-message");
    score = score + 5;
    showScore(score);
  };

  start.addEventListener("mousedown", maze);

  end.addEventListener("mouseover", () => {
    winGame();
  });
};
