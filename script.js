// Change the text of the heading dynamically
document.querySelector("h1").textContent = "DOM Manipulation";

// Modify the style of ordered list items
const orderedList = document.querySelectorAll("ol li");
orderedList.forEach((item, index) => {
    item.style.color = index % 2 === 0 ? "blue" : "green"; 
});

// Add new items dynamically to the ordered list
const newItemButton = document.createElement("button");
newItemButton.textContent = "Add New Car";
document.body.appendChild(newItemButton);

newItemButton.addEventListener("click", () => {
    const newCar = document.createElement("li");
    newCar.textContent = "Bugatti";
    document.querySelector("ol").appendChild(newCar);
});

// Remove the last item in the ordered list
const removeItemButton = document.createElement("button");
removeItemButton.textContent = "Remove Last Car";
document.body.appendChild(removeItemButton);

removeItemButton.addEventListener("click", () => {
    const ol = document.querySelector("ol");
    if (ol.lastElementChild) {
        ol.removeChild(ol.lastElementChild);
    } else {
        alert("No items left to remove!");
    }
});

// Enhance image style on hover
document.querySelector("img").addEventListener("mouseover", (event) => {
    event.target.style.border = "5px solid black";
});

document.querySelector("img").addEventListener("mouseout", (event) => {
    event.target.style.border = "3px solid #73b2ec";
});

// Registration Form: Provide a dynamic alert upon submission
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!");
});

// Table: Alternate row colors for better readability
const tableRows = document.querySelectorAll("tbody tr");
tableRows.forEach((row, index) => {
    row.style.backgroundColor = index % 2 === 0 ? "#061f2e" : "#155075";
});

// Form validation
document.querySelector("form").addEventListener("submit", (event) => {
    const name = document.getElementById("full_name").value.trim();
    const email = document.getElementById("user_email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "") {
        alert("Full Name is required.");
        event.preventDefault();
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
    } else {
        alert("Form validated and submitted successfully!");
    }
});

// Highlight table rows on hover
tableRows.forEach((row) => {
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "#f2f2f2";
    });
    row.addEventListener("mouseout", () => {
        row.style.backgroundColor = "";
    });
});

// Save user preference in localStorage
function savePreference(key, value) {
    localStorage.setItem(key, value);
}

// Retrieve user preference from localStorage
function getPreference(key) {
    return localStorage.getItem(key);
}

// Example usage: store theme preference
savePreference("theme", "dark");
console.log("Saved Theme:", getPreference("theme"));

// Animate button clicks
document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(1.1)";
        setTimeout(() => btn.style.transform = "scale(1)", 200);
    });
});

// Animate image on click
document.querySelector("img").addEventListener("click", () => {
    document.querySelector("img").style.transition = "transform 0.5s ease-in-out";
    document.querySelector("img").style.transform = "rotate(10deg)";
    setTimeout(() => document.querySelector("img").style.transform = "rotate(0)", 500);
});