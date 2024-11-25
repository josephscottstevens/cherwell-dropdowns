const GET_RESPONSE_BUTTON =document.querySelector("input")
let counter = 0;

console.log("page.js loaded")
localStorage.setItem("test2", JSON.stringify([1, 2]))

if (GET_RESPONSE_BUTTON) {

    GET_RESPONSE_BUTTON.value = "hello"
    GET_RESPONSE_BUTTON.textContent = "hello"

    GET_RESPONSE_BUTTON.addEventListener('click', async () => {
    // const response = await chrome.runtime.sendMessage('ping');
    console.log("page.js clicked", response)
    GET_RESPONSE_BUTTON.value = "hello"
    GET_RESPONSE_BUTTON.textContent = "hello"

    // if (response) {
    //     const element = document.createElement('p');
    //     element.id = `response-${counter}`;
    //     element.innerText = `Response ${counter}: ${response}`;
    //     document.body.appendChild(element);

    //     counter++;
    // }
    });
}

let testDropdown = `
    <select name="membership" id="membership">
        <option value="free">Free</option>
        <option value="bronze">Bronze</option>
        <option value="silver" selected>Silver</option>
        <option value="Gold">Gold</option>
    </select>
    `