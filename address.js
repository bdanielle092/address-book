let addressBook = [
    {
        name: "Faith Magras",
        address: "134 cape ln ",
        thing: "dog toy",
        storeLocation: "tj max"
    },
    {
        name: "Grace Hardin",
        address: "235 yellowbrook dr.",
        thing: "water bollons",
        storeLocation: "big lots"
    },
    {
        name: "Brenda Barker",
        address: "487 rock ln",
        thing: "plates",
        storeLocation: "target"
    },
]


// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
          ${addressBook.name}
          ${addressBook.address}
          ${addressBook.thing}
          ${addressBook.storeLocation}
        </section>
    `

})
