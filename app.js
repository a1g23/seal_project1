// variables that i'll be using
// the base url
const baseurl = "https://api.openbrewerydb.org/v1/breweries?by_state="

// my div of all the outputs, so I can access in 

const $divOutput = $(".output")

// appData variable
const breweryData = {
    data: []
}

// variable with all state options
const stateArr = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ]

// variable to hold the information on each brewery
let brewInfo = []

stateArr.forEach(el => {
    // create a div that has the el value in it
    // first declare the variable of the main tag
    const $main = $("main")
    const $div = $("<div>")
    $div.text(el).addClass("eachstate")
    $main.append($div)

    // add the event listener for the states that are populated, once clicked, a function will run to update the url to only be looking at the right state of breweries
    $div.on("click", function getState (event) {
        const input = event.target.innerHTML
        brewInfo = []
        $divOutput.empty()
        getBreweries(input)
        
    })
    
});

// function to get data and put it into the variable that holds the breweryData
const getBreweries = (state = "") => {
    
    fetch(`${baseurl}${state}`)
    .then((res) => res.json())
    .then((data) => {
        breweryData.data = data
        //console.log(breweryData.data)
        createBrewOptions()
    })
}

// we want all the states to appear in the main tag on the screen. for each state avail, we'll create a new div



const createBrewOptions = () => {
    // variable to hold the an object of the data we want to show on the screen
    
    breweryData.data.map((info) => {
        
        brewInfo.push( {
            name: info.name,
            address: `${info.city}, ${info.state}`,
            phone: info.phone,
            website: info.website_url,
        })
        
    })
    //console.log(brewInfo)

    // for each of the brewInfo elements, we want to create a div with the information inside of it
    brewInfo.forEach((el) => {
        // adding a div with for each element and appending to the output div
        
        const $divEachBrew = $("<div>")
        $divEachBrew.addClass("eachBrew")
        $divOutput.append($divEachBrew)
        

        // adding a h1 to the new div with the name of the brewery
        const $h1EachBrew = $("<h1>")
        $h1EachBrew.text(el.name)
        $divEachBrew.append($h1EachBrew)

        // adding the h3 of address
        const $h3EachBrewAdd = $("<h3>")
        $h3EachBrewAdd.text(el.address)
        $divEachBrew.append($h3EachBrewAdd)

        // adding the h3 of phone
        const $h3EachBrewPh = $("<h3>")
        $h3EachBrewPh.text(el.phone)
        $divEachBrew.append($h3EachBrewPh)

        // adding the h3 of website
        const $h3EachBrewWeb = $("<h3>")
        $h3EachBrewWeb.text(el.website)
        $divEachBrew.append($h3EachBrewWeb)
    })
}


// function to click on a state

// we actually don't want to call the data in the for loop until we click on a state












