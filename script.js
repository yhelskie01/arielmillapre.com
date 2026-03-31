document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/posts')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('post-list');
            posts.forEach(post => {
                const postItem = document.createElement('div');
                postItem.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
                postList.appendChild(postItem);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission behavior

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert("Your message has been sent successfully!");
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

const stars = document.querySelectorAll('.star');
const ratingResult = document.getElementById('rating-result');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value');

        // Remove selected class from all stars
        stars.forEach(s => s.classList.remove('selected'));

        // Add selected class to the clicked star and all previous stars
        star.classList.add('selected');
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }

        // Display the rating result
        ratingResult.textContent = `You rated this ${rating} star${rating > 1 ? 's' : ''}.`;
    });
});

const images = document.querySelectorAll('.carousel-images img');
const enterButton = document.getElementById('enterButton');
let currentIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Event listener for the Enter button
enterButton.addEventListener('click', nextImage);

// Event listener for the Enter key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        nextImage();
    }
});

// Initialize the first image
showImage(currentIndex);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById("readMoreBtn").addEventListener("click", function() {
    const moreText = document.getElementById("more");
    const btnText = this;

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.textContent = "Read Less";
    } else {
        moreText.classList.add("hidden");
        btnText.textContent = "Read More";
    }
});