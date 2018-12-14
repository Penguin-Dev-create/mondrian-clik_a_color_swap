let Bg = document.getElementsByClassName("block-color");

for (let i = 0; i < Bg.length; i++) // ajoute les eventListener à tous les blocs
{
  Bg[i].addEventListener("click", changeColorsGrid, false);
}

function changeColorsGrid() //
{

  //trnanforme les cases blanche
  if (this.classList.contains("Bg_white") == true) {
    for (let i = 0; i < Bg.length; i++) {
      let r = false;

      if (Bg[i].classList.contains("Bg_red") == true) {
        Bg[i].classList.remove("Bg_red");
        Bg[i].classList.add("Bg_white");
        r = true;
      } else if (Bg[i].classList.contains("Bg_white") == true && r == false) {
        Bg[i].classList.remove("Bg_white");
        Bg[i].classList.add("Bg_red");
      }
    }
  }


  //tansforme les cases rouge
  else if (this.classList.contains("Bg_red") == true) {
    for (let i = 0; i < Bg.length; i++) {
      let r = false;

      if (Bg[i].classList.contains("Bg_blue") == true) {
        Bg[i].classList.remove("Bg_blue");
        Bg[i].classList.add("Bg_red");
        r = true;
      } else if (Bg[i].classList.contains("Bg_red") == true && r == false) {
        Bg[i].classList.remove("Bg_red");
        Bg[i].classList.add("Bg_blue");
      }
    }
  }


  //trnanforme les cases blue
  else if (this.classList.contains("Bg_blue") == true) {
    for (let i = 0; i < Bg.length; i++) {
      let r = false;

      if (Bg[i].classList.contains("Bg_yellow") == true) {
        Bg[i].classList.remove("Bg_yellow");
        Bg[i].classList.add("Bg_blue");
        r = true;
      } else if (Bg[i].classList.contains("Bg_blue") == true && r == false) {
        Bg[i].classList.remove("Bg_blue");
        Bg[i].classList.add("Bg_yellow");
      }
    }
  }

  //trnanforme les cases jaune
  else if (this.classList.contains("Bg_yellow") == true) {
    for (let i = 0; i < Bg.length; i++) {
      let r = false;

      if (Bg[i].classList.contains("Bg_white") == true) {
        Bg[i].classList.remove("Bg_white");
        Bg[i].classList.add("Bg_yellow");
        r = true
      } else if (Bg[i].classList.contains("Bg_yellow") == true && r == false) {
        Bg[i].classList.remove("Bg_yellow");
        Bg[i].classList.add("Bg_white");
      }
    }
  }
}
