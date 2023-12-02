// variables that i'll be using
// the base url
const baseurl = "https://api.openbrewerydb.org/v1/breweries?by_state="


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
const brewInfo = []


// function to get data and put it into the variable that holds the breweryData
const getBreweries = () => {

    fetch(baseurl)
    .then((res) => res.json())
    .then((data) => {
        breweryData.data = data
        console.log(breweryData.data)
        createBrewOptions()
    })
}

// we want all the states to appear in the main tag on the screen. for each state avail, we'll create a new div

stateArr.forEach(el => {
    // create a div that has the el value in it
    // first declare the variable of the main tag
    const $main = $("main")
    const $div = $("<div>")
    $div.text(el).addClass("eachstate")
    $main.append($div)

    // i only want one of each, no duplicates
});

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
    console.log(brewInfo)
    // for each of the brewInfo elements, we want to create a div with the information inside of it
    brewInfo.forEach((el) => {
        // adding a div with for each element and appending to the output div
        const $divOutput = $(".output")
        const $divEachBrew = $("<div>")
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



getBreweries()

// function to select a state

