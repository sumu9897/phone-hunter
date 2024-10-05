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

    phones.forEach((phone) =>{
        //  console.log(phone)
        const {brand,image,slug,phone_name} =phone;
        const div = document.createElement("div");
        div.innerHTML =`
        <div class="card bg-base-100 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone_name}</h2>
    <p>${slug}</p>
    <div class="card-actions">


      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
        `;
        phonesContainer.appendChild(div);
    });
    
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

const phoneDetails = async(slugs) =>{
    // console.log(slug)

    const response =await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`)
    const data =await response.json();
    console.log(data.data);

    const { brand,image,slug, name, mainFeatures,releaseDate,others }= data.data;
    
    const modalcontainer=document.getElementById('modal-container');
    modalcontainer.innerHTML=`
    <dialog id="my_modal_1" class="modal">
                  <div class="modal-box">
                  <img src=${image} />
                    <h3 class="text-lg font-bold">${name}</h3>
                    <h2><span>Storage :</span>${mainFeatures.storage}</h2>
                    <h2><span>Display Size :</span>${mainFeatures.displaySize}</h2>
                    <h2><span>Chipset :</span>${mainFeatures.chipSet}</h2>
                    <h2><span>Memory :</span>${mainFeatures.memory}</h2>
                    <h2><span>Slug :</span>${slug}</h2>
                    <h2><span>Release data :</span>${releaseDate}</h2>
                    
                    <h2><span>Brand :</span>${brand}</h2>
                    
                    <div class="modal-action">

                      <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
    `;
    my_modal_1.showModal();
}

loadAllPhones(false, "iphone")

// const phone={
//     brand: "Apple ", 
//     phone_name: "iPhone 13 mini", 
//     slug: "apple_iphone_13_mini-11104", 
//     image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
// }


//console.log(brand,image,slug) // Output: Apple  https://fdn2.gsm