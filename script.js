const cloudName = "dqqbcesbi";
const unsignedUploadPreset = "wedding2026";

// Initialize Upload Widget
var myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName,
    uploadPreset: unsignedUploadPreset,
    sources: ['local', 'camera'],
    resourceType: 'image', // Tells Cloudinary to ONLY expect images
    clientAllowedFormats: ['jpg', 'png', 'jpeg', 'webp'], // Limits what can be picked
    multiple: true,
    styles: {
        palette: {
            window: "#faf8f3",
            windowBorder: "#d4af37",
            tabIcon: "#d4af37",
            menuIcons: "#d4af37",
            textDark: "#9d7e3a",
            textLight: "#666666",
            link: "#d4af37",
            action: "#d4af37",
            inactiveTabIcon: "#c9a961",
            error: "#f44235",
            inProgress: "#d4af37",
            complete: "#20b832",
            sourceBg: "#f9f4eb"
        },
        fonts: {
            default: null,
            "'Dancing Script', cursive": "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
        }
    },
    text: {
        en: {
            menu: {
                "files": "From Phone",
                "camera": "Take Live Photo"
            },
            local: {
                "browse": "Choose Wedding Photos",
                "dd_title_single": "Drag your photo here"
            }
        }
    }
}, (error, result) => {
    if (!error && result && result.event === "success") {
        // Photo uploaded successfully (but not displayed on page)
        console.log('Photo uploaded successfully!');
    }
});

document.getElementById("upload_widget").onclick = () => myWidget.open();

// Countdown Timer
function updateCountdown() {
    const weddingDate = new Date('March 29, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    } else {
        // Wedding day has arrived!
        const countdownEl = document.getElementById('countdown');
        if (countdownEl) {
            countdownEl.innerHTML = '<p style="font-size: 2rem; color: #c44569; font-family: \'Playfair Display\', serif;">🎉 It\'s Our Wedding Day! 🎉</p>';
        }
    }
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);
