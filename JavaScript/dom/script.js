function submit() {
  const FN = document.getElementById("fullName");

  console.log(FN);
  console.log(FN.value);
  const data = document.getElementById("data");


  data.innerHTML="<b>"+FN.value+"</b>";
}



const sampleText = document.getElementById("sampleText");


console.log(sampleText);


console.log("Inner HTML",sampleText.innerHTML);
console.log("Inner Text");

console.log(sampleText.innerText);

console.log("Text Content");
console.log(sampleText.textContent);



