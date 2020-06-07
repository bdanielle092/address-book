// let addressBook = [
//     {
//         name: "Faith Magras",
//         address: "134 cape ln ",
//         thing: "dog toy",
//         storeLocation: "tj max"
//     },
//     {
//         name: "Grace Hardin",
//         address: "235 yellowbrook dr.",
//         thing: "water bollons",
//         storeLocation: "big lots"
//     },
//     {
//         name: "Brenda Barker",
//         address: "487 rock ln",
//         thing: "plates",
//         storeLocation: "target"
//     },
// ]


// Some starter code
// addressBook = () => {
//     // for(const currentAddressObject of ) {
//         const addressHTML = addressCoverter(currentAddressObject)

//         const addressArticleElment = document.querySelector("#addressList")
//         addressArticleElment.innerHTML += addressHTML

//     }
// // }
const container = document.querySelector("#container")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
   
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value
    if(!(personName === "" || personAddress === "") ){

    
    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
          ${personName}<br />
          ${personAddress}
        </section>
    `
document.querySelector("#fullName").value = ""
document.querySelector("#address").value = ""
document.querySelector("#fullName").focus()
    }else{
        alert("Enter all information.")
    }
})

document.querySelector("#saveToWishList").addEventListener("click", event => {
    
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thingName = document.querySelector("#thing").value
    const storeLocation = document.querySelector("#storeLocation").value
    if(!(thingName === "" || storeLocation === "") ){

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
          ${thingName}<br />
          ${storeLocation}
        </section>
    `
    document.getElementById("thing").value = ""
    document.getElementById("storeLocation").value = ""
    document.getElementById("thing").focus()
    }else{
        alert("Enter all information.")
    }
})
