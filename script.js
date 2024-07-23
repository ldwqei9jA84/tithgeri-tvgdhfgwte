document.addEventListener("DOMContentLoaded", function() {
    const mainIcon = document.getElementById('main-icon');
    const balanceElem = document.getElementById('balance');
    const carrot = document.getElementById('carrot');

    mainIcon.addEventListener('click', function() {
        // Update balance
        let currentBalance = parseFloat(balanceElem.textContent);
        currentBalance += 1;
        balanceElem.textContent = currentBalance.toFixed(2);

        // Show and animate carrot
        carrot.style.opacity = 1;
        setTimeout(() => {
            carrot.style.opacity = 0;
        }, 1000);
    });
});
