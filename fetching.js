import fetch from "node-fetch";

async function fetchAndDisplay() {
    const res = await fetch("https://www.reddit.com/r/ProgrammingHumor.json");
    const json = await res.json();
    console.log(json);
}

fetchAndDisplay();