// Thêm hiệu ứng khi click vào thành viên
document.addEventListener('DOMContentLoaded', function() {
    const members = document.querySelectorAll('.member');
    
    members.forEach(member => {
        member.addEventListener('click', function() {
            // Thêm hiệu ứng nhấp nháy
            this.style.animation = 'blink 0.5s';
            
            // Reset animation sau khi kết thúc
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });
});

// Thêm style động cho hiệu ứng nhấp nháy
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
    }
`;
document.head.appendChild(style);