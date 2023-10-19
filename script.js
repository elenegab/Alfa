// Get all year elements and year images
const years = document.querySelectorAll('.year');
const yearImages = document.querySelectorAll('.year-img');

// Add click event listeners to each year element
years.forEach((year, index) => {
    year.addEventListener('click', () => {
        // Hide all year images
        yearImages.forEach(img => {
            img.style.display = 'none';
        });

        // Remove the 'active' class from all years
        years.forEach(y => {
            y.classList.remove('active');
        });

        // Show the corresponding year image
        yearImages[index].style.display = 'block';

        // Add the 'active' class to the clicked year for animation
        year.classList.add('active');
    });
});

const addresses = document.querySelectorAll(".address");
        const maps = document.querySelectorAll(".map");

        addresses.forEach((address, index) => {
            address.addEventListener("click", () => {
                // Hide all maps
                maps.forEach(map => {
                    map.style.display = "none";
                });

                // Show the map corresponding to the clicked address
                maps[index].style.display = "block";
            });
        });
    






