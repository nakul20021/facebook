// login.js

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // পেইজ রিলোড হওয়া বন্ধ করবে

    const email = document.querySelectorAll('input')[0].value;
    const password = document.querySelectorAll('input')[1].value;

    // একটি সাধারণ ভ্যালিডেশন
    if (email === "" || password === "") {
        alert("দয়া করে ইমেইল এবং পাসওয়ার্ড দুটোই দিন।");
    } else {
        // লগইন সফল হলে ড্যাশবোর্ডে নিয়ে যাবে
        alert("লগইন সফল হচ্ছে...");
        window.location.href = "dashboard.html";
    }
});