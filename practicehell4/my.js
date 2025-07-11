var add = document.querySelector("#add");       // ✅ Add button select
var remove = document.querySelector("#remove"); // ✅ Remove button select
var inp = document.querySelector("input");      // ✅ Input box select
var ul = document.querySelector("ul");          // ✅ <ul> select

var li; // yeh variable last added li store karega

add.addEventListener("click", function () {
    if (inp.value.trim() === '') {
        // ✅ Agar input khaali ho toh kuch na karo
    } else {
        li = document.createElement('li');      // ❌ galti thi: Document → ✅ document (JavaScript case-sensitive)
        li.textContent = inp.value;             // ❌ galti thi: inp.value() → ✅ inp.value (property hai, function nahi)
        ul.appendChild(li);                     // ❌ galti thi: appendchild → ✅ appendChild
        inp.value = "";                         // ✅ Input field clear kar diya
    }
});

remove.addEventListener("click", function () {
    // ✅ agar li exist karta hai aur ul ke andar hai
    if (li && ul.contains(li)) {
        ul.removeChild(li); // ✅ last added li ko hata do
        li = null;          // ✅ reference hata diya
    }
});
