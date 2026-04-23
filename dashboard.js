// dashboard.js

// ১. নতুন পোস্ট তৈরি করার ফাংশন
document.querySelector('.login-btn').addEventListener('click', function() {
    const postText = document.querySelector('textarea').value;

    if (postText.trim() === "") {
        alert("কিছু তো লিখুন!");
        return;
    }

    // নতুন পোস্টের জন্য HTML স্ট্রাকচার তৈরি
    const feed = document.querySelector('.feed');
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.style.marginTop = "20px";

    newPost.innerHTML = `
        <div class="user-info">
            <div class="profile-pic"></div>
            <div>
                <strong style="display: block;">সাজিদ আহমেদ</strong>
                <small style="color: #65676b;">এইমাত্র</small>
            </div>
        </div>
        <p>${postText}</p>
        <div class="post-actions">
            <span onclick="toggleLike(this)">লাইক</span>
            <span>কমেন্ট</span>
            <span>শেয়ার</span>
        </div>
    `;

    // ফিডের একদম উপরে নতুন পোস্ট যুক্ত করা
    feed.insertBefore(newPost, feed.childNodes[4]);

    // টেক্সট এরিয়া খালি করা
    document.querySelector('textarea').value = "";
});

// ২. লাইক বাটনের টগল ফাংশন
function toggleLike(element) {
    if (element.style.color === "rgb(24, 119, 242)") { // নীল রঙ চেক করা
        element.style.color = "#65676b";
        element.innerText = "লাইক";
    } else {
        element.style.color = "#1877f2";
        element.innerText = "লাইক দিয়েছেন";
    }
}