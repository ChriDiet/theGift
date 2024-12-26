const errorMessages = [
   "Det var dessverre feil",
   "Prøv igjen!",
   "Ikke riktig, prøv på nytt",
   "Dette er ikke riktig",
   "Feil svar :(",
   "Oops! Det stemmer ikke",
   "Kanskje neste gang?",
   "Ikke bra nok..",
   "Nope. Prøv igjen!",
   "Feil! Ikke gi opp!",
   "Nope",
   "Fortsett å prøve!",
   "Dette var feil, forsøk igjen.",
   "Ikke bare gjett deg frem da",
   "Det stemmer dessverre ikke",
   "Nei, nei og atter nei",
   "Hmm, prøv noe annet",
   "Feil feil feil!",
   "Niks"
];
const logo = document.getElementById('logo');
const changeLogo = document.getElementById('changeLogo');

changeLogo.addEventListener("click", () => {
   logo.src = '../images/p_logo2.svg';
});
function displayHint1() {
   document.getElementById("hintet").textContent = "Det finnes et felt på denne siden";
}

function displayHint2() {
   document.getElementById("hintet").textContent = "Det står allerede noe i feltet";
}

function displayHint3() {
   document.getElementById("hintet").textContent = "Du må bytte ut noe med svaret ditt";
}
function displayHint4() {
   document.getElementById("hintet").textContent = "Før html";
}
function displayHint11() {
   document.getElementById("hintet").textContent = "Engelsk - norsk - norsk";
}

function displayHint22() {
   document.getElementById("hintet").textContent = "Hvordan er været?";
}

function displayHint33() {
   document.getElementById("hintet").textContent = "Ikke varmt, ikke kaldt, men ....?";
}

function handleFormSubmit(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "-13";

   if (kodeInput === riktigKode) {
      window.location.href="./code_two.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
   }


function handleFormSubmit2(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "sangtekster";
   const kodeInputLower = kodeInput?.toLowerCase();

   if (kodeInputLower == riktigKode) {
      window.location.href="./numeroTres.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}

function handleFormSubmit3(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "marsipan";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./NumberFour.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}

function handleFormSubmit4(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "trampoline";
   const riktigKode2 = "godt jobbet";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./nrfem.html";
   } else if (kodeInputLower == riktigKode2) {
      window.location.href="./finito.html";
} else {
   const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
}
}

function handleFormSubmit5(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "swift";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./codeSix.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}

function handleFormSubmit6(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "evolution";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./nrSeven.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}

function handleFormSubmit7(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "piano";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./eight.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}

function handleFormSubmit8(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "forkjørsskilt";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./numberNi.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}
function handleFormSubmit9(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "julaften";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./code_ti.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}

function handleFormSubmit11(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "4";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./twelve.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}
function handleFormSubmit12(event) {
   event.preventDefault()
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "drastisk";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      window.location.href="./tretten.html";
   } else {
      const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
   }
}
   function handleFormSubmit13(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "1";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./codeFourteen.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }
   function handleFormSubmit14(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "bordplate";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./kode_15.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }
   function handleFormSubmit15(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "smartass";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./numeroSeksten.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
         document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }
   function handleFormSubmit16(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "tyskeren øl vann pop";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./17.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }

   function handleFormSubmit17(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "snakemaster";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./atten_code.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }

   function handleFormSubmit18(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "the beginning of the end";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./oppgave_nitten.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }
   function handleFormSubmit19(event) {
      event.preventDefault()
      const kodeInput = document.getElementById("kode").value;
      const riktigKode = "gjemt";
      const kodeInputLower = kodeInput?.toLowerCase();
      
      if (kodeInputLower == riktigKode) {
         window.location.href="./codeTjue.html";
      } else {
         const randomIndex = Math.floor(Math.random() * errorMessages.length);
      document.getElementById("status").textContent = errorMessages[randomIndex];
      }
   }
