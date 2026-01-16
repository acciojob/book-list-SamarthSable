const btn = document.querySelector("#submit");

btn.addEventListener("click", function () {

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const isbn = document.querySelector("#isbn");

    const table = document.querySelector("#book-list");

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = title.value;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = author.value;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = isbn.value;
    tr.appendChild(td3);

    const td4 = document.createElement("td");

    const delbtn = document.createElement("button");
    delbtn.innerText = "x";
    delbtn.classList.add("delete");

    delbtn.addEventListener("click", function () {
        tr.remove();
    });

    td4.appendChild(delbtn);
    tr.appendChild(td4);

    table.appendChild(tr);

    title.value = "";
    author.value = "";
    isbn.value = "";
});
