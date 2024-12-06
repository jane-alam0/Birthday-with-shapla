// নির্দিষ্ট জন্মদিনের তারিখ এবং সময় সেট করুন
const targetDate = new Date("2024-12-04T22:08:00"); // YYYY-MM-DDTHH:MM:SS
const audio = new Audio("./audio.mp3");

function updateCountdown() {
  const now = new Date(); // বর্তমান তারিখ এবং সময়
  const timeLeft = targetDate - now; // সময়ের পার্থক্য (মিলিসেকেন্ডে)

  if (timeLeft <= 0) {
    // সময় শেষ হয়ে গেলে "জন্মদিনের বার্তা" দেখাবে
    document.getElementById("countdown").style.display = "none";
    document.getElementById("instruction").style.display = "none";
    document.getElementById("birthday-message").style.display = "block";
  } else {
    // বাকি সময় হিসাব করা
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Countdown দেখানো (প্রতি সেকেন্ডে আপডেট হবে)
    document.getElementById(
      "countdown"
    ).innerText = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  }
}

// অ্যানিমেশন শুরু করা
audio.loop = "true";
function startAnimation() {
  audio.play();
  const canvs = document.getElementsByClassName("can");
  canvs[0].classList.remove("canNone");
  const firstIntro = document.getElementById("first-intro");
  firstIntro.style.display = "none";
  const button = document.getElementById("button");
  setTimeout(() => {
    button.classList.remove("canNone");
  }, 11000);
}

// প্রতি সেকেন্ডে আপডেট করা
setInterval(updateCountdown, 1000);
updateCountdown();
