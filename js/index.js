window.onload = () => {
  const navButton = document.getElementById("navButton");
  const menu = document.getElementById("menuDiv");
  const spanList = document.querySelectorAll(".introText");
  const tl = new gsap.timeline({ repeat: 0 });
  const horn1 = document.getElementById("horn1");
  const horn2 = document.getElementById("horn2");
  const horn3 = document.getElementById("horn3");
  const horn4 = document.getElementById("horn4");
  const horn5 = document.getElementById("horn5");
  const horn6 = document.getElementById("horn6");
  const fringe1 = document.getElementById("fringe1");
  const fringe2 = document.getElementById("fringe2");
  const darkMane1 = document.getElementById("darkMane1");
  const darkMane2 = document.getElementById("darkMane2");
  const darkMane3 = document.getElementById("darkMane3");
  const darkMane4 = document.getElementById("darkMane4");
  const darkMane5 = document.getElementById("darkMane5");
  const darkMane6 = document.getElementById("darkMane6");
  const darkMane7 = document.getElementById("darkMane7");
  const darkMane8 = document.getElementById("darkMane8");
  const lightMane1 = document.getElementById("lightMane1");
  const lightMane2 = document.getElementById("lightMane2");
  const lightMane3 = document.getElementById("lightMane3");
  const lightMane4 = document.getElementById("lightMane4");
  const lightMane5 = document.getElementById("lightMane5");
  const lightMane6 = document.getElementById("lightMane6");
  const lightMane7 = document.getElementById("lightMane7");
  const colors = [
    "#ff70e2",
    "#ff996e",
    "#ffcf75",
    "#e3ff59",
    "#9cff73",
    "#83f7be",
  ];
  let currentColor = 0;
  let seconds = 30;

  // Mobilmeny (< 1440)
  navButton.addEventListener("click", () => {
    navButton.classList.toggle("menuClosed");
    navButton.classList.toggle("menuOpen");
    menu.classList.toggle("menuHide");
    menu.classList.toggle("menuShow");
    document.body.classList.toggle("noScroll");
  });

  // Animering av h1
  for (let i = 0; i < spanList.length; i++) {
    tl.to(spanList[i], {
      opacity: 1,
      y: -50,
      duration: 0.3,
    });
  }

  // Timer som används för stopp av animationerna (man bör inte animera någonting oändligt)
  const countDown = setInterval(() => {
    seconds--;
    if (seconds <= 0) clearInterval(countDown);
  }, 1000);

  // Funktion för att gå vidare till nästa färg i listan
  const nextColor = () => {
    currentColor++;
    if (currentColor > colors.length - 1) {
      currentColor = 0;
    }
  };

  // Funktion för att animera färgerna på enhörningens horn
  const changeHornColor = () => {
    const duration = 0.3;
    if (seconds <= 0) return;

    gsap.to(horn1, {
      duration: duration,
      fill: colors[currentColor],
    });

    nextColor();

    gsap.to(horn2, {
      duration: duration,
      fill: colors[currentColor],
    });

    nextColor();

    gsap.to(horn3, {
      duration: duration,
      fill: colors[currentColor],
    });

    nextColor();

    gsap.to(horn4, {
      duration: duration,
      fill: colors[currentColor],
    });

    nextColor();

    gsap.to(horn5, {
      duration: duration,
      fill: colors[currentColor],
    });

    nextColor();

    gsap.to(horn6, {
      duration: duration,
      fill: colors[currentColor],
      onComplete: changeHornColor,
    });
  };

  // Funktion för att animera håret, blev kanske inte superbra men det var kul med utmaningen.
  const hairPhysics = (mane, rotation, duration, position) => {
    const tl2 = gsap.timeline({ delay: 3, repeat: -1, yoyo: true, ease: "strong" });

    tl2.to(mane, {
      rotation: rotation,
      duration: duration,
      transformOrigin: position,
    });
    tl2.to(mane, {
      rotation: -rotation+5,
      duration: duration,
      transformOrigin: position,
    })
    .call(function() {
      if (seconds <= 0) {
         tl2.kill();
      }
    }, [], this);
  }

  // Timeout på första anropet för att låta texten spela klart så inte allting animeras samtidigt. hairPhysics har en timeline med inbyggd start på 3 istället.
  setTimeout(changeHornColor, 3000);
  hairPhysics(fringe1, 20, 0.6, "top left");
  hairPhysics(fringe2, -10, 0.7, "top left");
  hairPhysics(darkMane1, -15, 0.5, "bottom left");
  hairPhysics(darkMane2, -10, 0.3, "bottom left");
  hairPhysics(darkMane3, -5, 0.4, "bottom left");
  hairPhysics(darkMane4, -15, 0.6, "top left");
  hairPhysics(darkMane5, -5, 0.4, "top left");
  hairPhysics(darkMane6, -10, 0.5, "top left");
  hairPhysics(darkMane7, -7, 0.6, "top left");
  hairPhysics(darkMane8, -10, 0.4, "top left");
  hairPhysics(lightMane1, -17, 0.6, "bottom left");
  hairPhysics(lightMane2, -17, 0.5, "top left");
  hairPhysics(lightMane3, -12, 0.4, "top left");
  hairPhysics(lightMane4, -15, 0.5, "top left");
  hairPhysics(lightMane5, -13, 0.3, "top left");
  hairPhysics(lightMane6, -10, 0.4, "top left");
  hairPhysics(lightMane7, -10, 0.3, "top left");
};
