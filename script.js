document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Booking form validation
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let checkIn = document.getElementById("checkIn").value;
            let checkOut = document.getElementById("checkOut").value;

            if (name === "" || email === "" || checkIn === "" || checkOut === "") {
                alert("Please fill in all fields.");
            } else {
                alert("Booking successful! You will receive a confirmation email soon.");
                this.reset();
            }
        });
    }

    // Hover effect on room cards
    const roomCards = document.querySelectorAll(".room-card");

    roomCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s";
        });

        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Payment form validation
    const paymentForm = document.getElementById("paymentForm");

    if (paymentForm) {
        paymentForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let cardNumber = document.getElementById("cardNumber").value.trim();
            let expiryDate = document.getElementById("expiryDate").value.trim();
            let cvv = document.getElementById("cvv").value.trim();

            if (cardNumber.length < 16 || expiryDate === "" || cvv.length < 3) {
                alert("Invalid payment details. Please check your information.");
            } else {
                alert("Payment successful! Thank you for booking with us.");
                this.reset();
            }
        });
    }
});
