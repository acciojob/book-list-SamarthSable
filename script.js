const btn = document.querySelector("#submit");

btn.addEventListener("click", function () {

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const isbn = document.querySelector("#isbn");

    const table = document.querySelector(".data");

    // Create new table row
    const tr = document.createElement("tr");

    // Title column
    const td1 = document.createElement("td");
    td1.innerText = title.value;
    tr.appendChild(td1);

    // Author column
    const td2 = document.createElement("td");
    td2.innerText = author.value;
    tr.appendChild(td2);

    // ISBN column
    const td3 = document.createElement("td");
    td3.innerText = isbn.value;
    tr.appendChild(td3);

    // Delete button column
    const td4 = document.createElement("td");

    const delbtn = document.createElement("button");
    delbtn.innerText = "x";

    // add required class
    delbtn.classList.add("delete");

    // delete functionality
    delbtn.addEventListener("click", function () {
        tr.remove();
    });

    td4.appendChild(delbtn);
    tr.appendChild(td4);

    // Append row to table
    table.appendChild(tr);

});
