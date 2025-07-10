function Fun(){
    const abcd = document.getElementById("abcd");

    abcd.style.backgroundColor = "blue";
    abcd.style.color="white"
}

function on(){
    const bulb = document.getElementById("gola");
    // bulb.style.backgroundColor="yellow"
    bulb.classList.add("jalgya")
    bulb.classList.remove("bhujgya")
}

function off(){
    const bulb = document.getElementById("gola");
    // bulb.style.backgroundColor="aqua"
    bulb.classList.add("bhujgya")
    bulb.classList.remove("jalgya")
}

function onOFF(){
    const bulb = document.getElementById("dusraGola");

    bulb.classList.toggle("kuchbhi")
}


function disco(color){
     const bulb = document.getElementById("tisraGola");
     bulb.style.backgroundColor=color
}

function OFF(){
     const bulb = document.getElementById("tisraGola");
     bulb.style.backgroundColor="aqua"
}