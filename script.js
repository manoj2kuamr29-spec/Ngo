



document.addEventListener('DOMContentLoaded', function () {

    let aboutStats = document.getElementById('about-stats');
    let homeTab = document.getElementById('Home-tab');
    let aboutTab = document.getElementById('about-tab');
    let PrpgrammesEvent = document.getElementById('Prpgrammes-event');
    let teamTab = document.getElementById('team-tab');
    let reportsTab = document.getElementById('reports-tab');
    let CertificatesTab = document.getElementById('Certificates-tab');
    let gallerTab = document.getElementById('galler-tab');
    let contactTab = document.getElementById('contact-tab');
    let AnnualTab = document.getElementById('Annual-tab')
    let itrTab = document.getElementById('ITR-tab')
    let projectTab = document.getElementById('Project-tab')

    let headerNav = document.getElementById('header-nav-side-bar')
    let menusideBar = document.getElementById('menu-side-bar')
    let closeiconBar = document.getElementById('close-icon-bar')

    let homBtn = document.getElementById('Hom-btn');
    let aboutBtn = document.getElementById('about-btn');
    let ProgrammesBtn = document.getElementById('Programmes-btn');
    let TeamBtn = document.getElementById('Team-btn');
    let certificateBtn = document.getElementById('certificate-btn')
    let GalleryBtn = document.getElementById('Gallery-Btn')
    let ContactBtn = document.getElementById('Contact-btn')

    let donatingTab = document.getElementById('donating-tab')
    let MakeDonation = document.getElementById('Make-Donation')
    let BankTabDetails = document.getElementById('Bank-tab-details')
    let AudtiRepotsTab = document.getElementById('Audti-Repots-tab')
    let annualreportsTab = document.getElementById('Annual-reports-tab')
    let projectreportsTab = document.getElementById('Project-reports-tab')
    let itrreportsTab = document.getElementById('ITR-reports-tab');


    // Function to open the menu
    function openMenu() {
        menusideBar.style.display = 'none';
        headerNav.style.display = 'block';
    }

    // Function to close the menu
    function closeMenu() {
        menusideBar.style.display = 'block';
        headerNav.style.display = 'none';
    }

    // Event listener for the menu icon to open the menu
    menusideBar.addEventListener('click', () => {
        openMenu();
    });

    // Event listener for the close icon to close the menu
    closeiconBar.addEventListener('click', () => {
        closeMenu();
    });

    // This is the new function to hide the menu when a user clicks anywhere on the document
    document.addEventListener('click', function (event) {
        // Check if the menu is open and if the click happened outside of the menu and the menu icon
        const isClickInsideMenu = headerNav.contains(event.target);
        const isClickOnMenuIcon = menusideBar.contains(event.target);

        // If the menu is open and the click is outside both the menu and the menu icon, close the menu
        if (headerNav.style.display === 'block' && !isClickInsideMenu && !isClickOnMenuIcon) {
            closeMenu();
        }
    });



    //         menusideBar.addEventListener('click', () => {
    //     if (headerNav.style.display === 'none') {
    //          menusideBar.style.display = 'none'
    //         headerNav.style.display = 'block'
    //     } else {
    //         menusideBar.style.display = 'none'
    //         headerNav.style.display = 'block'
    //     }
    // });

    //    closeiconBar.addEventListener('click', () => {
    //     if (headerNav.style.display === 'block') {
    //          menusideBar.style.display = 'block'
    //         headerNav.style.display = 'none'
    //     } else {
    //         menusideBar.style.display = 'block'
    //         headerNav.style.display = 'none'
    //     }
    // });


















    annualreportsTab.addEventListener('click', () => {
        if (AnnualTab.style.display === 'none') {
            AnnualTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'


            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'

        } else {
            AnnualTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'

            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            projectTab.style.display = 'none';
            itrTab.style.display = 'none';
            reportsTab.style.display = 'none';
        }
    });



    projectreportsTab.addEventListener('click', () => {
        if (projectTab.style.display === 'none') {
            projectTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'


            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            AnnualTab.style.display = 'none'
            itrTab.style.display = 'none';
            reportsTab.style.display = 'none'
        } else {
            projectTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'

            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            AnnualTab.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
        }
    });




    itrreportsTab.addEventListener('click', () => {
        if (itrTab.style.display === 'none') {
            itrTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'


            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'
            reportsTab.style.display = 'none'

        } else {
            itrTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'

            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'
            reportsTab.style.display = 'none'
        }
    });




    AudtiRepotsTab.addEventListener('click', () => {
        if (reportsTab.style.display === 'none') {
            reportsTab.style.display = 'Block'
            BankTabDetails.style.display = 'none'

            AnnualTab.style.display = 'none'
            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            projectTab.style.display = 'none';
            itrTab.style.display = 'none';

        } else {
            reportsTab.style.display = 'Block';
            BankTabDetails.style.display = 'none';

            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            AnnualTab.style.display = 'none';
            projectTab.style.display = 'none';
            itrTab.style.display = 'none';
        }
    });



    MakeDonation.addEventListener('click', () => {
        if (BankTabDetails.style.display === 'none') {
            BankTabDetails.style.display = 'flex';


            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";

            projectTab.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'

        } else {
            BankTabDetails.style.display = 'flex'

            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'
        }
    });


    donatingTab.addEventListener('click', () => {
        if (BankTabDetails.style.display === 'none') {
            BankTabDetails.style.display = 'flex'


            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'

        } else {
            BankTabDetails.style.display = 'flex'

            aboutTab.style.display = "none";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'
        }
    });


    aboutBtn.addEventListener('click', () => {
        if (aboutTab.style.display === 'none') {
            aboutTab.style.display = "block";
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            //  aboutTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'




        } else {
            homeTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'


        }
    });

    ProgrammesBtn.addEventListener('click', () => {
        if (PrpgrammesEvent.style.display === 'none') {
            PrpgrammesEvent.style.display = "block";
            homeTab.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            //   PrpgrammesEvent.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'




        } else {
            homeTab.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'

        }
    });


    TeamBtn.addEventListener('click', () => {
        if (teamTab.style.display === 'none') {
            teamTab.style.display = "block";
            homeTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            //   teamTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'





        } else {
            homeTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'

        }
    });

    certificateBtn.addEventListener('click', () => {
        if (CertificatesTab.style.display === 'none') {
            CertificatesTab.style.display = "block";
            homeTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none"
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            //   CertificatesTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'



        } else {
            homeTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none"
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'

        }
    });


    GalleryBtn.addEventListener('click', () => {
        if (gallerTab.style.display === 'none') {
            gallerTab.style.display = "block";
            homeTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none"
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            //    gallerTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'




        } else {
            homeTab.style.display = "none";
            contactTab.style.display = "none";
            aboutStats.style.display = "none"
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'

        }
    });


    ContactBtn.addEventListener('click', () => {
        if (contactTab.style.display === 'none') {
            contactTab.style.display = "block";
            homeTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            // contactTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'




        } else {
            homeTab.style.display = "none";
            aboutStats.style.display = "none";
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "block";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'

        }
    });



    homBtn.addEventListener('click', () => {
        if (homeTab.style.display === 'block') {
            homeTab.style.display = "block";
            aboutStats.style.display = "flex";
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'





        } else {
            aboutTab.style.display = "none";
            PrpgrammesEvent.style.display = "none";
            teamTab.style.display = "none";
            CertificatesTab.style.display = "none";
            gallerTab.style.display = "none";
            contactTab.style.display = "none";
            homeTab.style.display = "block";
            aboutStats.style.display = "flex";
            BankTabDetails.style.display = 'none'
            itrTab.style.display = 'none'
            reportsTab.style.display = 'none'
            AnnualTab.style.display = 'none'
            projectTab.style.display = 'none'



        }
    });





});
























// JavaScript for form submission and other interactivity
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Message:', message);

            // You would typically send this data to a server here using fetch() or another method.
            // For example:
            // fetch('/api/submit-form', { method: 'POST', body: JSON.stringify({ name, email, phone, message }) });

            alert('Thank you! Your message has been sent.');
            contactForm.reset(); // Clears the form fields
        });
    }

    const emailBlock = document.querySelector('.info-block.email');
    if (emailBlock) {
        emailBlock.style.cursor = 'pointer';
        emailBlock.addEventListener('click', () => {
            const emailAddress = emailBlock.querySelector('p:last-child').innerText;
            navigator.clipboard.writeText(emailAddress).then(() => {
                alert('Email address copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        });
    }
});












// ----------------------------------------------------------------------------------------------------




// Get the modal elements
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-btn");

// Function to open the modal with a specific image
function openModal(imageSrc) {
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Event listener for the close button
closeBtn.onclick = function () {
    modal.style.display = "none";
};

// Event listener to close the modal when clicking outside the image
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Get all certificate and news images that should open the modal
// We'll use a single class for all images that need modal functionality
const zoomableImages = document.querySelectorAll('.certificate-images-gallery img, .news-thumbnail img');

// Loop through and attach the click event to each image
zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
        openModal(img.src);
    });
});

// Add functionality for the list menu to show and hide content
const listItems = document.querySelectorAll('.list-item');
const contentSections = document.querySelectorAll('.certificate-detail-content');

listItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all list items and content sections
        listItems.forEach(li => li.classList.remove('active'));
        contentSections.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked item and its content
        item.classList.add('active');
        const targetId = item.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Set the initial active state for the first item on page load
const firstItem = document.querySelector('.list-item');
if (firstItem) {
    firstItem.click();
}










document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hovered-card');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hovered-card');
        });
    });



});

// ----------------------------------mission -----------------count---------------

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = Math.ceil(target / 100);
        const interval = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = formatNumber(target) + "+";
                clearInterval(interval);
            } else {
                counter.textContent = formatNumber(count) + "+";
            }
        }, 30);
    });

    function formatNumber(num) {
        return num >= 1000 ? Math.floor(num / 1000) + "k" : num;
    }
});

// ....................--------------------------Yoga & Wellness Gallery----------------------

const track = document.getElementById('track');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;
const total = track.children.length;

function updateGallery() {
    track.style.transform = `translateX(-${index * 100}%)`;
}

prev.onclick = () => {
    index = (index > 0) ? index - 1 : total - 1;
    updateGallery();
};

next.onclick = () => {
    index = (index < total - 1) ? index + 1 : 0;
    updateGallery();
};

// Auto slideshow
setInterval(() => {
    index = (index + 1) % total;
    updateGallery();
}, 5000);

// ---------------------------------------------about-history-------------------------

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const detailsSections = document.querySelectorAll('.details-section');
    const dynamicImage = document.getElementById('dynamic-image');

    // Define image sources for each tab
    const imageMap = {
        'mission': 'Image/blog-b-1.jpg', // Group collaborating
        'values': 'Image/blog-b-3.jpg', // Diverse hands symbolizing unity/values
        'beliefs': 'Image/blog-2.jpg' // People discussing, symbolizing shared beliefs
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab; // Get the data-tab attribute (e.g., 'mission', 'values')

            // If the clicked tab is already active, do nothing
            if (tab.classList.contains('active')) {
                return;
            }

            // Remove 'active' class from all tabs and details sections
            tabs.forEach(t => t.classList.remove('active'));
            detailsSections.forEach(s => s.classList.remove('active'));

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Handle image change with fade animation
            dynamicImage.style.opacity = '0'; // Start fade out
            setTimeout(() => {
                dynamicImage.src = imageMap[tabName]; // Change image source
                dynamicImage.style.opacity = '1'; // Fade in new image
            }, 300); // Duration matches CSS transition for image opacity

            // Handle text details change with fade and slide animation
            const targetDetailsSection = document.getElementById(`${tabName}-details`);
            if (targetDetailsSection) {
                targetDetailsSection.classList.add('active'); // Activate the new details section
            }
        });
    });
});



// ------------------------------------------------------

// Scroll-triggered animation
window.addEventListener('scroll', () => {
    const banner = document.getElementById('bannerText');
    const bannerTop = banner.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (bannerTop < windowHeight - 100) {
        banner.classList.add('visible');
    }
});

// Initial load animation
window.addEventListener('load', () => {
    document.getElementById('bannerText').classList.add('visible');
});



// ----------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const testimonialTextElement = document.querySelector('.testimonial-text');
    const authorNameElement = document.querySelector('.author-name');
    const authorTitleElement = document.querySelector('.author-title');
    const authorAvatarElement = document.querySelector('.author-avatar');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    // Sample testimonials data
    const testimonials = [
        {
            text: `"Sita Murli Nav Shristy Foundation. is Very help full for poor people"`,
            author: "Manoj-Kumar",
            title: "Web Designer",
            avatar: "Allreports/m1.jpeg" // Replace with actual path
        },
        {
            text: `"This organization is doing amazing work! Their dedication to helping children is truly inspiring. I've seen firsthand the positive impact they make in the lives of many. Highly recommend supporting their cause."`,
            author: "John Doe",
            title: "Volunteer",
            avatar: "Image/user-2.png" // Example, replace with another avatar
        },
        {
            text: `"A heartfelt thank you to the team for their tireless efforts. The support provided has made a significant difference. It’s wonderful to see such commitment to improving the future for those in need."`,
            author: "Jane Smith",
            title: "Donor",
            avatar: "Image/user-2.png" // Example, replace with another avatar
        }
    ];

    let currentTestimonialIndex = 0;

    function updateTestimonial() {
        const current = testimonials[currentTestimonialIndex];
        testimonialTextElement.textContent = current.text;
        authorNameElement.textContent = current.author;
        authorTitleElement.textContent = current.title;
        authorAvatarElement.src = current.avatar;
    }

    leftArrow.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial();
    });

    rightArrow.addEventListener('click', () => {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        updateTestimonial();
    });

    // Initialize with the first testimonial
    updateTestimonial();
});


// -------------------------bank-details-----------------------------

function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(copyText)
        .then(() => {
            alert("Copied to clipboard: " + copyText);
        })
        .catch(err => {
            console.error('Failed to copy text: ', err);
            alert("Copy failed. Please try again.");
        });
}


// ------------------------------Gallery-----------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    const photoData = [
        { src: 'Image/imge1.jpeg', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/imge2.jpeg', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/imge3.jpeg', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/imge4.jpeg', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/imge5.jpeg', caption: 'Volunteers on a sustainable agriculture project.' },
        { src: 'Image/imge6.jpeg', caption: 'Empowering workshops for skill development.' },
        { src: 'Image/imge7.jpeg', caption: 'Empowering workshops for skill development.' },
        { src: 'Image/imge8.jpeg', caption: 'Empowering workshops for skill development.' },
        { src: 'Image/image9.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image10.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image11.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image12.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image13.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image14.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image15.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image16.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image17.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image18.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image19.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image20.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image21.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image22.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image23.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image24.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image25.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image26.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image27.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image28.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image29.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image30.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image31.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image32.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image33.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image34.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image35.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image36.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image37.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image38.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image39.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image40.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image41.png', caption: 'A collaborative brainstorming session.' },
        { src: 'Image/image42.png', caption: 'Students attending a digital literacy workshop.' },
        { src: 'Image/image43.png', caption: 'Highlights from our annual fundraising event.' },
        { src: 'Image/image44.png', caption: 'Community meeting fostering local engagement.' },
        { src: 'Image/image45.png', caption: 'A collaborative brainstorming session.' }
    ];

    const newPhotoData = [
        // { src: 'Image/News1.png', caption: 'New photo of the team working.' },
        { src: 'Image/News2.png', caption: 'A new image from a recent event.' },
        { src: 'Image/News3.png', caption: 'Another new image from our project.' },
        { src: 'Image/News4.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News5.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News6.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News7.png', caption: 'New photo of the team working.' },
        { src: 'Image/News8.png', caption: 'A new image from a recent event.' },
        { src: 'Image/News9.png', caption: 'Another new image from our project.' },
        { src: 'Image/News10.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News11.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News12.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News13.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News14.png', caption: 'Another new image from our project.' },
        { src: 'Image/News15.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News16.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News17.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News18.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News19.png', caption: 'New photo of the team working.' },
        { src: 'Image/News20.png', caption: 'A new image from a recent event.' },
        { src: 'Image/News21.png', caption: 'Another new image from our project.' },
        { src: 'Image/News22.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News23.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News24.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News25.png', caption: 'New photo of the team working.' },
        { src: 'Image/News26.png', caption: 'A new image from a recent event.' },
        { src: 'Image/News27.png', caption: 'Another new image from our project.' },
        { src: 'Image/News28.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News29.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News30.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News31.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News32.png', caption: 'Another new image from our project.' },
        { src: 'Image/News33.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News34.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News35.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News36.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News37.png', caption: 'New photo of the team working.' },
        { src: 'Image/News38.png', caption: 'A new image from a recent event.' },
        { src: 'Image/News39.png', caption: 'Another new image from our project.' },
        { src: 'Image/News40.png', caption: 'Fresh photo of our volunteers.' },
        { src: 'Image/News41.png', caption: 'Latest from our community gathering.' },
        { src: 'Image/News42.png', caption: 'The latest additions to our gallery.' },
        { src: 'Image/News43.png', caption: 'New photo of the team working.' },
        { src: 'Image/News44.png', caption: 'A new image from a recent event.' },
        { src: 'Image/News45.png', caption: 'Another new image from our project.' },
        { src: 'Image/News46.png', caption: 'Fresh photo of our volunteers.' }

    ];

    const mediaData = [
        { type: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', title: 'Example Video 1' },
        { type: 'video', src: 'https://www.youtube.com/embed/M009y4a5bA4', title: 'Example Video 2' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1534389659020-f5a89461d365?q=80&w=1770&auto=format&fit=crop', title: 'Media Image 1' },
        { type: 'video', src: 'https://www.youtube.com/embed/PjS-56X7n7Q', title: 'Example Video 3' },
    ];

    // --- DOM Elements ---
    const navItems = document.querySelectorAll('.nav-item');
    const gallerySections = document.querySelectorAll('.gallery-section');
    const photoGrid = document.getElementById('photo-grid');
    const newPhotoGrid = document.getElementById('new-photo-grid');
    const mediaGrid = document.getElementById('media-gallery-grid');

    // Modal elements (from your original code)
    const modalGalleryy = document.getElementById('myModal-gallery');
    const modalImgGallery = document.getElementById('modal-img-gallery');
    const captionText = document.getElementById('caption');
    const closeBtnGallery = document.getElementsByClassName('close-btn-gallery')[0];
    const prevBtn = document.getElementsByClassName('prev-gallery')[0];
    const nextBtn = document.getElementsByClassName('next-gallery')[0];
    let currentPhotoIndex = 0;
    let currentPhotoSet = [];

    // --- Core Functions ---

    function showGallery(targetId) {
        navItems.forEach(item => item.classList.remove('active'));
        gallerySections.forEach(section => section.classList.remove('active'));

        document.querySelector(`[data-target="${targetId}"]`).classList.add('active');
        document.getElementById(targetId).classList.add('active');
    }

    function renderPhotoGrid(gridElement, data) {
        gridElement.innerHTML = '';
        data.forEach((photo, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.caption;
            img.loading = 'lazy';

            photoItem.appendChild(img);
            gridElement.appendChild(photoItem);

            photoItem.addEventListener('click', () => {
                currentPhotoIndex = index;
                currentPhotoSet = data;
                openModal(currentPhotoSet[currentPhotoIndex]);
            });
        });
    }

    function renderMediaGallery() {
        mediaGrid.innerHTML = '';
        mediaData.forEach(item => {
            const mediaItem = document.createElement('div');
            mediaItem.className = 'media-item';

            if (item.type === 'video') {
                const iframe = document.createElement('iframe');
                iframe.src = item.src;
                iframe.title = item.title;
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                iframe.setAttribute('allowfullscreen', '');
                mediaItem.appendChild(iframe);
            } else if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.title;
                img.style.width = '100%';
                img.style.height = 'auto';
                img.style.borderRadius = '8px';
                mediaItem.appendChild(img);
            }
            mediaGrid.appendChild(mediaItem);
        });
    }

    // --- Modal Functions ---
    function openModal(photo) {
        modalGalleryy.style.display = 'block';
        modalImgGallery.src = photo.src;
        captionText.innerHTML = photo.caption;
    }

    function showNextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotoSet.length;
        openModal(currentPhotoSet[currentPhotoIndex]);
    }

    function showPrevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotoSet.length) % currentPhotoSet.length;
        openModal(currentPhotoSet[currentPhotoIndex]);
    }

    // --- Event Listeners ---
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute('data-target');
            showGallery(targetId);
        });
    });

    closeBtnGallery.onclick = () => modalGalleryy.style.display = 'none';
    nextBtn.onclick = showNextPhoto;
    prevBtn.onclick = showPrevPhoto;

    window.onclick = (event) => {
        if (event.target === modalGalleryy) {
            modal.style.display = 'none';
        }
    };

    document.addEventListener('keydown', (e) => {
        if (modalGalleryy.style.display === 'block') {
            if (e.key === 'ArrowRight') showNextPhoto();
            else if (e.key === 'ArrowLeft') showPrevPhoto();
            else if (e.key === 'Escape') modalGalleryy.style.display = 'none';
        }
    });

    // --- Initial Load ---
    renderPhotoGrid(photoGrid, photoData);
    renderPhotoGrid(newPhotoGrid, newPhotoData);
    renderMediaGallery();

    currentPhotoSet = photoData;
});









