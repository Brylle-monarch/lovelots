const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const questionContainer = document.getElementById("questionContainer");
const statusText = document.getElementById("statusText");
const bearGif = document.getElementById("bearGif");

// Function to move the "No" button randomly
noBtn.addEventListener("mouseover", () => {
    const maxX = questionContainer.clientWidth - noBtn.clientWidth;
    const maxY = questionContainer.clientHeight - noBtn.clientHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Action when "Yes" is clicked
yesBtn.addEventListener("click", () => {
    statusText.innerHTML = "I love you darling ko! 🥰";
    // Change GIF to a happy one
    bearGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTl0aDMxbTRoNjhwNDYzNWpvcXdtcnpmaDljMXRvNWk2azY5MDhlbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fpmJ0eZWcSZAcGoIv5/giphy.gif";
    noBtn.style.display = "none";
});