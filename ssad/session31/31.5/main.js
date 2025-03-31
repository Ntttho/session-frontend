const employees = [
    {
        id: 1,
        name: "john",
        age: 18,
        address: "New York",
    },
    {
        id: 2,
        name: "Mike",
        age: 18,
        address: "Canada",
    },
    {
        id: 3,
        name: "Linda",
        age: 18,
        address: "California",
    },
    {
        id: 4,
        name: "Peter",
        age: 18,
        address: "London",
    }
]
let tb = document.getElementById("table");
for(let element of employees){
    let id = element.id;
    let name = element.name;
    let age = element.age;
    let address = element.address;
    tb.innerHTML += `<tr><td>${id}</td><td>${name}</td><td>${age}</td><td>${address}</td></tr>`;
}