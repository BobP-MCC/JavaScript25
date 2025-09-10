const ent = {
    name: "NCC-1701",
    image: "images/Enterprise-1701.jpg",
    class: "Constitution",
    captain: "James T. Kirk",
    crew: 430,
    launched: 2245
}

const entA = {
    name: "NCC-1701-A",
    image: "images/Enterprise-A.jpg",
    class: "Constitution II (refit)",
    captain: "James T. Kirk",
    crew: 430,
    launched: 2286
}

const entB = {
    name: "NCC-1701-B",
    image: "images/Enterprise-B.jpg",
    class: "Excelsior",
    captain: "John Harriman",
    crew: 750,
    launched: 2293
}

const entC = {
    name: "NCC-1701-C",
    image: "images/Enterprise-C.jpg",
    class: "Ambassador",
    captain: "Rachel Garrett",
    crew: 1000,
    launched: 2323
}

const entD = {
    name: "NCC-1701-D",
    image: "images/Enterprise-D.jpg",
    class: "Galaxy",
    captain: "Jean-Luc Picard",
    crew: 1014,
    launched: 2363
}

function display() {
    let html1 = `<h2>${ent.name}</h2>` +
        `<img src="${ent.image}" alt="USS Enterprise ${ent.name}">` +
        `<h3>Class: ${ent.class}</h3>` +
        `<h3>Captain: ${ent.captain}</h3>` +
        `<h3>Crew: ${ent.crew}</h3>` +
        `<h3>Launched: ${ent.launched}</h3>`;
    document.getElementById("ent").innerHTML = html1;

    let html2 = `<h2>${entA.name}</h2>` +
        `<img src="${entA.image}" alt="USS Enterprise ${ent.name}">` +
        `<h3>Class: ${entA.class}</h3>` +
        `<h3>Captain: ${entA.captain}</h3>` +
        `<h3>Crew: ${entA.crew}</h3>` +
        `<h3>Launched: ${entA.launched}</h3>`;
    document.getElementById("entA").innerHTML = html2;

    let html3 = `<h2>${entB.name}</h2>` +
        `<img src="${entB.image}" alt="USS Enterprise ${ent.name}">` +
        `<h3>Class: ${entB.class}</h3>` +
        `<h3>Captain: ${entB.captain}</h3>` +
        `<h3>Crew: ${entB.crew}</h3>` +
        `<h3>Launched: ${entB.launched}</h3>`;
    document.getElementById("entB").innerHTML = html3;

    let html4 = `<h2>${entC.name}</h2>` +
        `<img src="${entC.image}" alt="USS Enterprise ${ent.name}">` +
        `<h3>Class: ${entC.class}</h3>` +
        `<h3>Captain: ${entC.captain}</h3>` +
        `<h3>Crew: ${entC.crew}</h3>` +
        `<h3>Launched: ${entC.launched}</h3>`;
    document.getElementById("entC").innerHTML = html4;

    let html5 = `<h2>${entD.name}</h2>` +
        `<img src="${entD.image}" alt="USS Enterprise ${ent.name}">` +
        `<h3>Class: ${entD.class}</h3>` +
        `<h3>Captain: ${entD.captain}</h3>` +
        `<h3>Crew: ${entD.crew}</h3>` +
        `<h3>Launched: ${entD.launched}</h3>`;
    document.getElementById("entD").innerHTML = html5;
}
