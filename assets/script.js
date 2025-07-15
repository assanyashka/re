// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        e.target !== menuToggle && 
        !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

// Age calculation for info page
if (document.getElementById('age')) {
    const birthDate = new Date(2008, 5, 30); // June 30, 2008 (months are 0-indexed)
    const currentDate = new Date();
    
    // Calculate difference in milliseconds
    const diff = currentDate - birthDate;
    
    // Convert to years
    const years = diff / (1000 * 60 * 60 * 24 * 365.25);
    
    // Format to 6 decimal places
    const formattedAge = years.toFixed(6);
    
    // Update the age element
    document.getElementById('age').textContent = `${formattedAge} y. o.`;
}

// Alias rotation for info page
if (document.querySelector('.alias-container')) {
    const aliases = document.querySelectorAll('.alias');
    let currentIndex = 0;
    
    function rotateAlias() {
        // Remove active class from current alias
        aliases[currentIndex].classList.remove('active');
        
        // Move to next alias
        currentIndex = (currentIndex + 1) % aliases.length;
        
        // Add active class to new alias
        aliases[currentIndex].classList.add('active');
    }
    
    // Start rotation every 3 seconds
    setInterval(rotateAlias, 3000);
}

// Copy to clipboard function for donate page
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show copied feedback
        const copyBtn = event.target.closest('.copy-btn');
        if (copyBtn) {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = 'Copied! <i class="fas fa-check"></i>';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
