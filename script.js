function toggleMenu() {

    document
        .getElementById("navLinks")
        .classList.toggle("active");

}


document
    .querySelectorAll("#navLinks a")
    .forEach(function(link) {

        link.addEventListener("click", function() {

            document
                .getElementById("navLinks")
                .classList.remove("active");

        });

    });


document
    .getElementById("bookingForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const phone =
            document.getElementById("phone").value;

        const caseType =
            document.getElementById("caseType").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const message =
            document.getElementById("message").value;


        const whatsappNumber =
            "201092446998";


        const text =
            "⚖️ طلب حجز استشارة قانونية%0A%0A" +

            "👤 الاسم: " +
            encodeURIComponent(name) +
            "%0A" +

            "📞 رقم العميل: " +
            encodeURIComponent(phone) +
            "%0A" +

            "⚖️ نوع الاستشارة: " +
            encodeURIComponent(caseType) +
            "%0A" +

            "📅 التاريخ: " +
            encodeURIComponent(date) +
            "%0A" +

            "⏰ الوقت: " +
    
            "%0A" +

            "📝 التفاصيل: " +
            encodeURIComponent(message);


        window.open(
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            text,
            "_blank"
        );

    });
