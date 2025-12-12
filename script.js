const nicheQuestions = {
    school: [
        "School Name?",
        "Location?",
        "How many classes?",
        "Do you need online admission form?",
        "Do you want gallery section?"
    ],
    restaurant: [
        "Restaurant Name?",
        "Full Address?",
        "Food Menu list?",
        "Do you need online order?",
        "Do you want table booking?"
    ],
    ecommerce: [
        "Business Name?",
        "Which products you sell?",
        "How many categories?",
        "COD chahiye?",
        "Online payment chahiye?"
    ],
    hospital: [
        "Hospital Name?",
        "Location?",
        "Doctor list?",
        "Departments?",
        "Emergency number?"
    ],
    salon: [
        "Salon Name?",
        "Location?",
        "Services list?",
        "Home service chahiye?",
        "Appointment system chahiye?"
    ],
    portfolio: [
        "Your Name?",
        "Skills?",
        "Experience?",
        "Projects count?",
        "Contact Number?"
    ],
    travel: [
        "Travel Agency Name?",
        "Location?",
        "Packages list?",
        "Online booking?",
        "Support number?"
    ]
};

function generateQuestions() {
    const niche = document.getElementById("niche").value;
    if (!niche) return alert("Please select niche first!");

    const qBox = document.getElementById("questions");
    qBox.innerHTML = "";

    nicheQuestions[niche].forEach((q, i) => {
        qBox.innerHTML += `
        <label>${q}</label>
        <input id="q${i}" placeholder="Enter answer...">
        `;
    });

    document.getElementById("questionForm").classList.remove("hidden");
}

function sendToWhatsApp() {
    const niche = document.getElementById("niche").value;
    let message = `New Project Request (%0A Niche: ${niche} ) %0A%0A`;

    nicheQuestions[niche].forEach((q, i) => {
        const ans = document.getElementById(`q${i}`).value;
        message += `${q}: ${ans}%0A`;
    });

    const phone = "917485832166";  
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
