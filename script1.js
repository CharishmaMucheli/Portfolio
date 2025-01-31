document.addEventListener("DOMContentLoaded", () => {
    const projectCards = document.querySelectorAll(".project-card");
    
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
        });
        
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });
    
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for reaching out! I will get back to you soon.");
        this.reset();
    });
});
