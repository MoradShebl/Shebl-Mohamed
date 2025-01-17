
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const checkbtn = document.getElementById('checkbtn1');
    const header = document.getElementById('header');
    const hidul = document.getElementById('hidul');
    const listItems = header.querySelectorAll('li');
    const blur = document.getElementById("blur");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            header.style.height = '500px';
            listItems.forEach(li => {
                li.style.display = 'block';
            });
        } else {
            header.style.height = '60px';
            setTimeout(() => {
                listItems.forEach(li => {
                    li.style.display = 'none';
                });
            }, 500);
        }
    });

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            checkbtn.style.rotate = '-90deg';
        } else {
            checkbtn.style.rotate = '0deg';
        }
    });

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            hidul.style.display = 'block';
        } else {
            setTimeout(() => {
                hidul.style.display = 'none';
            }, 500);
        }
    });

    header.addEventListener("mouseenter", () => {
        blur.style.display = "block"; // Make the blur div visible
        blur.style.animation = "blur 0.5s forwards"; // Trigger the blur animation and retain the final state
    });

    header.addEventListener("mouseleave", () => {
        blur.style.animation = "stopblur 0.5s forwards"; // Trigger the stopblur animation and retain the final state
        setTimeout(() => {
            blur.style.display = "none"; // Hide the blur div after the animation ends
        }, 500); // Match the animation duration
    });
});
