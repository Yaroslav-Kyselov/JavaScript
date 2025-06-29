const input = document.getElementById("pairInput");
const list = document.getElementById("pairList");
let pairs = [];

function addPair() {
    const raw = input.value.trim();
    const match = raw.match(/^([\p{L}\d]+)\s*=\s*([\p{L}\d]+)$/u);
    if (!match) {
        alert("Invalid format. Use Name=Value.");
        return;
    }

    const name = match[1];
    const value = match[2];
    pairs.push({ name, value });
    input.value = "";
    renderList();
}

function sortByName() {
    pairs.sort((a, b) => a.name.localeCompare(b.name));
    renderList();
}

function sortByValue() {
    pairs.sort((a, b) => a.value.localeCompare(b.value));
    renderList();
}

function deleteSelected() {
    const selected = Array.from(list.selectedOptions).map(opt => opt.value);
    pairs = pairs.filter(p => !selected.includes(`${p.name}=${p.value}`));
    renderList();
}

function renderList() {
    list.innerHTML = "";
    for (const pair of pairs) {
        const option = document.createElement("option");
        option.value = `${pair.name}=${pair.value}`;
        option.textContent = `${pair.name}=${pair.value}`;
        list.appendChild(option);
    }
}