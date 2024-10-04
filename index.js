// Function to load all phones with a log message
const loadAllPhones = () => {
    console.log("Phones loaded after a 3-second delay.");
}

// Function to handle search and load phones after a delay
const handleSearch = () => {
    setTimeout(() => {
        loadAllPhones();
    }, 3000);
}
