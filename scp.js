// Fungsi untuk menambahkan efek scroll smooth
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default link
        const targetId = this.getAttribute('href'); // Ambil ID target
        const targetSection = document.querySelector(targetId); // Ambil elemen target
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll ke target dengan efek smooth
    });
});

// Fungsi untuk menambahkan efek pop-up pada teks dan border
const animateElements = document.querySelectorAll('.animate-text, .animate-border');

const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Tambahkan class 'show' saat elemen terlihat
        }
    });
}, {
    threshold: 0.5 // Elemen akan dianggap terlihat jika 50% muncul di layar
});

animateElements.forEach(element => {
    elementObserver.observe(element); // Observasi setiap elemen
});

// Kode JavaScript yang Anda berikan
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active')
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active')
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active')

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
        
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function openModal(imgSrc, modalId) {
    const modal = document.getElementById(modalId);
    const modalImg = document.getElementById(`modalImage${modalId.slice(-1)}`);
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}
