// Select elements from the HTML.
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// Initialize count variable.
let count = 0;

// Increase functionality.
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
};

// Decrease functionality.
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};

// Reset functionality.
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};
