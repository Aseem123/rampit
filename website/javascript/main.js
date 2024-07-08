const buttons = document.querySelectorAll(".toggle-button");
buttons.forEach(button => {
button.addEventListener("click", function() {
        const currentContent = button.textContent; // Get current content
        const newContent = currentContent === '+' ? '-' : '+' // Toggle based on current content
        button.textContent = newContent; // Update button content
        const contentText = this.nextElementSibling;
        contentText.classList.toggle("hidden");
    });
    });