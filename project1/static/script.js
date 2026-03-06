const generateBtn = document.getElementById('generateBtn');
const numberDisplay = document.getElementById('numberDisplay');
const infoText = document.getElementById('infoText');

generateBtn.addEventListener('click', generateNumber);

async function generateNumber() {
    generateBtn.disabled = true;
    infoText.textContent = 'Loading...';
    numberDisplay.textContent = '?';
    
    try {
        const response = await fetch('/rand_int');
        const number = await response.json();
        
        // Animate the number appearance
        numberDisplay.style.animation = 'none';
        setTimeout(() => {
            numberDisplay.textContent = number;
            numberDisplay.style.animation = '';
        }, 10);
        
        infoText.textContent = `Your lucky number is ${number}! 🍀`;
    } catch (error) {
        console.error('Error fetching number:', error);
        numberDisplay.textContent = '❌';
        infoText.textContent = 'Oops! Failed to get a number. Try again!';
    } finally {
        generateBtn.disabled = false;
    }
}

// Generate a number when the page loads
window.addEventListener('load', generateNumber);