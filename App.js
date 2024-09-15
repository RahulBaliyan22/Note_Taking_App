let btn = document.getElementById("btn");
let inp = document.getElementById("note");
let listEl = document.getElementById("list");

document.addEventListener("keydown", (e) => {
  if (e.which === 13) {
    let listItem = document.createElement("li");
    listItem.style.cursor = "pointer";
    listItem.cs;
    let note = inp.value;
    listItem.innerText = note;
    listEl.appendChild(listItem);
    inp.value = "";
    listItem.addEventListener("click", () => {
      listItem.remove();
    });
  }
});
btn.addEventListener("click", () => {
  let listItem = document.createElement("li");
  listItem.style.cursor = "pointer";
  listItem.cs;

  
  let note = inp.value;


  listItem.innerText = note;


  listEl.appendChild(listItem);



  // note = '';//why not this



  inp.value = "";


  listItem.addEventListener("click", () => {
    listItem.remove();
  });
});
