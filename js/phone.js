const loadPhone = async (searchText) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    //console.log(data.data)
    const phones = data.data;
    displayPhones(phones);
}
const displayPhones = phones => {
    // console.log(phones)
    document.getElementById('phone-container').innerHTML="";
    const phoneContainer = document.getElementById('phone-container');

    //display show all buton if there are more than condition
    const showAllContainer = document.getElementById("show-all-container")
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden')
    }else{
        showAllContainer.classList.add('hidden')
    }

    //display first 12 phones

    phones = phones.slice(0,12);
    phones.forEach(phone => {
        console.log(phone)
        //2. create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList =`card bg-gray-100 shadow-xl`;
        //3. set innerHTML
        phoneCard.innerHTML=`
        <figure>
            <img
              src="${phone.image}"
              alt="Phone" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        `
        //4. append child
        phoneContainer.appendChild(phoneCard);
    });
}

const handleSearch =()=>{
    const searchField = document.getElementById("search-field").value;
    const searchText = searchField

    loadPhone(searchText);

}


//handle search button
loadPhone()