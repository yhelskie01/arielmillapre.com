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
