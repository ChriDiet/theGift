function changeImage() {
   let image = document.getElementById("klikk");
   if (image.getAttribute('src') === "../images/arnt_logo.svg") {
      image.src = "../images/arnt_logo2.svg";
   }
   else {
      image.src ="../images/arnt_logo.svg";
   }
}


function handleFormSubmit(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "-13";

   if (kodeInput === riktigKode) {
      alert("Litt for lett?");
      open("./code_two.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
   }


function handleFormSubmit2(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "dette var for lett";
   const kodeInputLower = kodeInput?.toLowerCase();

   if (kodeInputLower == riktigKode) {
      alert("Korrekt!");
      open("./numeroTres.html")
   } else {
      alert("Det var ikke den riktige koden!");
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
      alert("Det var ikke den riktige koden!");
   }
}

function handleFormSubmit4(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "trampoline";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Perfekt");
      open("./nrfem.html")
   } else {
      alert("Det var ikke den riktige koden!");
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
      alert("Det var ikke den riktige koden!");
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
      alert("Det var ikke den riktige koden!");
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
      alert("Det var ikke den riktige koden!");
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
      alert("Det var ikke den riktige koden!");
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
      alert("Det var ikke den riktige koden!");
   }
}
function handleFormSubmit10(event) {
   const kodeInput = document.getElementById("kode").value;
   const riktigKode = "snakemaster";
   const kodeInputLower = kodeInput?.toLowerCase();
   
   if (kodeInputLower == riktigKode) {
      alert("Woop!");
      open("./numberNi.html")
   } else {
      alert("Det var ikke den riktige koden!");
   }
}
