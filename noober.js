window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // //create a variable for the ride data
  // let rides = json.rides

  //loop through the json data
  for (let i=0; i <json.length; i++){
    let ride = json[i]
    console.log(ride)
  
// Define passenger first name 
let passengerFirstName = ride.passengerDetails.first

// Define passenger last name 
let passengerLastName = ride.passengerDetails.last

// Define passenger phone number
let passengerNumber = ride.passengerDetails.phoneNumber

// Define pickup address
let passengerPickupAddress = ride.pickupLocation.address

// Define pickup city 
let passengerPickupCity = ride.pickupLocation.city 

// Define pickup state
let passengerPickupState = ride.pickupLocation.state 

// Define pickup zip 
let passengerPickupZip = ride.pickupLocation.zip 

// Define dropoff address
let passengerDropoffAddress = ride.dropoffLocation.address

// Define dropoff city 
let passengerDropoffCity = ride.dropoffLocation.city 

// Define dropoff state 
let passengerDropoffState = ride.dropoffLocation.state 

// Define dropoff zip 
let passengerDropoffZip = ride.dropoffLocation.zip 

// Define number of passengers request 
let numberOfPassengers = ride.numberOfPassengers

let levelOfService
// Display Purple Service, if requested
if (ride.purpleRequested == true) {
  levelOfService = `Noober Purple`
}
else if (ride.numberOfPassengers > 3){
  levelOfService = `Noober XL`
}
else {
  levelOfService = `Noober X`
}


    let rideElement = document.querySelector(`.rides`)

    // Insert HTML into the products element, using the data from each product
    rideElement.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
          <p class="font-bold text-gray-600">${passengerNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${passengerPickupAddress}</p>
          <p>${passengerPickupCity}, ${passengerPickupState} ${passengerPickupZip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${passengerDropoffAddress}</p>
          <p>${passengerDropoffCity}, ${passengerDropoffState} ${passengerDropoffZip}</p>
        </div>
      </div>
    </div>
    `)
  //Create a variable for the HTML element that will change
  }

})