const pic = document.querySelector("img");

pic.onclick = () => {
    const pic_src = pic.getAttribute("src");
    if (pic_src == "images/test.png")
        pic.setAttribute("src", "images/test2.png");
    else pic.setAttribute("src", "images/test.png");
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (! myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to this website, ${myName}`;
    }
}

if (! localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedname = localStorage.getItem("name");
    myHeading.textContent = `Welcome to this website, ${storedname}`;
}

myButton.onclick = () => {
    setUserName();
}