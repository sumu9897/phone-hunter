const loadAllphones = async (isShowed = false, category) => {
    document.getElementById('spinner').style.display = 'none';
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${category?category:"iphone"}`);
    const data = await response.json();
    if (isShowed) {
        displayAllPhone(data.data)
    }
    else {
        displayAllPhone(data.data.slice(0,6))
    }
    
}
 
const displayAllPhone = (phones) => {
    document.getElementById('phones-container').innerHTML=""
    const phonesContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="max-w-sm m-3 p-5 bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
    <img class="w-24 mx-auto" src=${phone.image} alt="Product Image">
    <div class="p-5 text-center">
        <h5 class="text-xl font-semibold mb-2">iPhone 13 Pro Max</h5>
        <p class="text-gray-600 mb-4">There are many variations of passages of available, but the majority have suffered</p>
        <p class="text-2xl font-bold mb-4">$999</p>
        <button onclick="loaddetails('${phone.slug}')" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Show Details</button>
    </div>
</div>
        `
        phonesContainer.appendChild(div);

    });
}



const handleSpinner = () => {
    // Show the spinner

    document.getElementById('spinner').style.display = 'block';
    const searchText = document.getElementById("search-box").value;

    // Wait for 3 seconds before calling loaddata
    setTimeout(function() {
        loadAllphones(false,searchText);
    }, 3000);
}

const handleShowAll = () => {
    loadAllphones(true)
}


const loaddetails = async(slug) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data = await response.json();
  const { name, releaseDate, brand, image }=data.data;

    document.getElementById("modal-details").innerHTML = "";

    const modalcontainer = document.getElementById("modal-details");
    const div = document.createElement('div');
    div.innerHTML = `
    <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
        <img class="w-24 mx-auto" src=${image} alt="Product Image">
          <h3 class="text-lg font-bold">${name}</h3>
          <p class="py-4">${brand}</p>
          <p>${slug}</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    `
    modalcontainer.appendChild(div);
    my_modal_1.showModal();
}

loadAllphones()