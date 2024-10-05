// Function to load all phones with a log message
const loadAllPhones = () => {
    console.log("Phones loaded after a 3-second delay.");
    document.getElementById("spinner").style.display = "none";

    

}

// Function to handle search and load phones after a delay
const handleSearch = () => {
    document.getElementById("spinner").style.display = "block";
    setTimeout(() => {
        loadAllPhones();
    }, 3000);
}
