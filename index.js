document.addEventListener("DOMContentLoaded", function () {
    const flavorInput = document.getElementById("flavorInput");
    const countButton = document.getElementById("countButton");

    countButton.addEventListener("click", function () {
        const inputText = flavorInput.value.trim();
        const flavors = inputText.split(",");
        const flavorCounts = {};

        // Count each flavor
        flavors.forEach((flavor) => {
            const trimmedFlavor = flavor.trim();
            if (trimmedFlavor) {
                flavorCounts[trimmedFlavor] = (flavorCounts[trimmedFlavor] || 0) + 1;
            }
        });

        // Display results in the console
        console.clear();
        console.table(flavorCounts);
    });
});