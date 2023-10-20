const years = document.querySelectorAll('.year');
const yearImages = document.querySelectorAll('.year-img');

years.forEach((year, index) => {
    year.addEventListener('click', () => {
        yearImages.forEach(img => {
            img.style.display = 'none';
        });
        years.forEach(y => {
            y.classList.remove('active');
        });
        yearImages[index].style.display = 'block';
        year.classList.add('active');
    });
});

const addresses = document.querySelectorAll(".address");
        const maps = document.querySelectorAll(".map");

        addresses.forEach((address, index) => {
            address.addEventListener("click", () => {
                maps.forEach(map => {
                    map.style.display = "none";
                });

                maps[index].style.display = "block";
            });
        });
  
