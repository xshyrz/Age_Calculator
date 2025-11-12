const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeIcon.classList.replace('bi-moon-fill', 'bi-moon');
    } else {
        themeIcon.classList.replace('bi-moon', 'bi-moon-fill');
    }
});

function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    if (isNaN(dob))return;
    const now = new Date();
    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate()- dob.getDate();
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").textContent = `You are ${years} years, ${months} months, and ${days} days old`;
}
