// Function to load all phones with a log message
const loadAllPhones = async(status, searchText) => {
    //console.log(brandName);
    document.getElementById("spinner").style.display = "none";

    // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
    // .then(res => res.json())
    // .then(data => {console.log(data)})

    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`);
    const data = await response.json();
    console.log(data)
    if(status){
        displayAllPhone(data.data);
    }else{
        displayAllPhone(data.data.slice(0,6))
    }
    

    console.log(status)

}

const displayAllPhone =(phones) =>{
    const phonesContainer = document.getElementById("phones-container");
    // for(phone of phones){
    //     console.log(phone)
    // }

    phones.forEach(phone =>{
        console.log(phone)
    })
    
}

// Function to handle search and load phones after a delay
const handleSearch = () => {
    document.getElementById("spinner").style.display = "block";
    const searchText= document.getElementById("search-box").value;
    setTimeout(() => {
        loadAllPhones(false,searchText);
    }, 3000);
}

const handleShowAll =()=>{
    loadAllPhones(true)
}

loadAllPhones(false, "iphone")