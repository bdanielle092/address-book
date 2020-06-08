
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
    // makes sure both fields are filled
document.querySelector("#fullName").value = ""
document.querySelector("#address").value = ""
// makes the cursor go to the first entry 
document.querySelector("#fullName").focus()
// alerts user if they didn't fill both entry
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
    // makes sure both fields are filled
    document.getElementById("thing").value = ""
    document.getElementById("storeLocation").value = ""
    // makes the cursor go to the first entry 
   document.getElementById("thing").focus()
//    alerts the user if they didn't fill both entry
    }else{
        alert("Enter all information.")
    }
})
