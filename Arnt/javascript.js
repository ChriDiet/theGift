const logo = document.getElementById('logo');
const changeLogo = document.getElementById('changeLogo');

changeLogo.addEventListener("click", () => {
   logo.src = '../images/arnt_logo2.svg';
});

var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
	isRunning: null		//call and returns true or false depending on whether the animation is running
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
	var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
				gradient.addColorStop("1.0", particle.color2);
				context.strokeStyle = gradient;
			} else
				context.strokeStyle = particle.color;
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();

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
