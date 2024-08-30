// window.onload = function() {
//     window.scrollTo(0, 0);
//     hidul.style.display = 'inline';
// }

document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const checkbtn = document.getElementById('checkbtn1');
    const header = document.getElementById('header');
    const hidul = document.getElementById('hidul');
    const listItems = header.querySelectorAll('li');

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
});
