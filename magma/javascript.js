const logo = document.getElementById('logo');
const changeLogo = document.getElementById('changeLogo');

changeLogo.addEventListener("click", () => {
   logo.src = '../images/mm_logo2.svg';
});



function handleFormSubmit(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "-13";

   if (kodeInput === riktigKode) {
      alert("Litt for lett?");
      open("./code_two.html")
   } else {
      alert("Feil!");
   }
   }


function handleFormSubmit2(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "sangtekster";
   const kodeInputLower = kodeInput?.toLowerCase();

   if (kodeInputLower == riktigKode) {
      alert("Korrekt!");
      open("./numeroTres.html")
   } else {
      alert("Feil feil feil!");
   }
}

function handleFormSubmit3(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "marsipan";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Ikke verst!");
      open("./NumberFour.html")
   } else {
      alert("Det var ikke riktig!");
   }
}

function handleFormSubmit4(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "trampoline";
   const riktigKode2 = "godt jobbet";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Perfekt");
      open("./nrfem.html")
   } else if (kodeInputLower == riktigKode2) {
      alert("GENI!!");
      open("./finito.html")
} else {
   alert("Det var ikke det riktige svaret!");
}
}

function handleFormSubmit5(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "swift";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Korrekt!");
      open("./codeSix.html")
   } else {
      alert("Prøv igjen!");
   }
}

function handleFormSubmit6(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "evolution";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Riktig!");
      open("./nrSeven.html")
   } else {
      alert("FEIL FEIL FEIL!");
   }
}

function handleFormSubmit7(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "piano";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Grattis!");
      open("./eight.html")
   } else {
      alert("Nei og nei, totalt feil!");
   }
}

function handleFormSubmit8(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "forkjørsskilt";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Woop!");
      open("./numberNi.html")
   } else {
      alert("WROOOOONG!");
   }
}
function handleFormSubmit9(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "julaften";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Wohoooo korrekt");
      open("./code_ti.html")
   } else {
      alert("Really? FEIL!");
   }
}
function handleFormSubmit10(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "snakemaster";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Woop!");
      open("./oppgave_11.html")
   } else {
      alert("Jeg trenger det korrekte svaret!");
   }
}
function handleFormSubmit11(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "4";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Ikke verst!");
      open("./twelve.html")
   } else {
      alert("Det var ikke det riktige tallet!");
   }
}
function handleFormSubmit12(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "drastisk";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Imponerende!");
      open("./tretten.html")
   } else {
      alert("Feil!");
   }
}
   function handleFormSubmit13(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "1";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("Barnemat!");
         open("./codeFourteen.html")
      } else {
         alert("Ikke bare prøv noe random!");
      }
   }
   function handleFormSubmit14(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "bordplate";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("Smarting!");
         open("./kode_15.html")
      } else {
         alert("Det var ikke den riktige koden!");
      }
   }
   function handleFormSubmit15(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "smartass";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("Riktig!");
         open("./numeroSeksten.html")
      } else {
         alert("FEIL!");
      }
   }
   function handleFormSubmit16(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "tyskeren øl vann pop";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("Yay!");
         open("./17.html")
      } else {
         alert("FEIL! TIPS: Ingen komma, kun mellomrom!");
      }
   }

   function handleFormSubmit17(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "11";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("For lett?");
         open("./atten_code.html")
      } else {
         alert("Feil antall! Prøv igjen!");
      }
   }

   function handleFormSubmit18(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "the beginning of the end";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("Riktig!");
         open("./oppgave_nitten.html")
      } else {
         alert("Feil feil feil! Skjerpings!");
      }
   }
   function handleFormSubmit19(event) {
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "gjemt";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         alert("GENI!");
         open("./codeTjue.html")
      } else {
         alert("WROOONG!");
      }
   }
