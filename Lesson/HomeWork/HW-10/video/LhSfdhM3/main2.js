const sessionsList=JSON.parse(localStorage.getItem('sessionsList'));
    for (const sessionListElement of sessionsList) {
        const div=document.createElement("div");
        div.innerText=sessionListElement.toString();
        document.getElementById('target').appendChild(div);
}