function SubmitData() {
  const nm = document.getElementById("name").value;
  const em = document.getElementById("email").value;
  const ph = document.getElementById("phone").value;

  console.log(nm, em, ph);

  const newEntry = {
    name: nm,
    email: em,
    phone: ph,
  };

  console.log(newEntry);

  let studentList = JSON.parse(localStorage.getItem("StudentData")) || [];

  studentList.push(newEntry);

  localStorage.setItem("StudentData", JSON.stringify(studentList));
}

// <div class="row text-center">
//             <div class="col-4">Aman</div>
//             <div class="col-5">Aman@gmail.com</div>
//             <div class="col-3">2346468414</div>
//           </div>

function displayData() {
  const data = document.getElementById("Data");
  const AllData = JSON.parse(localStorage.getItem("StudentData")) || [];

  console.log("display data called", AllData.length);
  if (AllData.length === 0) {
    const d = document.createElement("div");
    const d1 = document.createElement("div");
    d1.innerText = "--No Data Found--";
    d.classList.add("row", "text-center", "fs-5", "p-3");
    d1.classList.add("col-12");
    d.appendChild(d1);
    data.appendChild(d);
    return;
  }

  // for (var i = 0; i < AllData.length; i++) {
  //   let temp = AllData[i];
  //   const d = document.createElement("div");
  //   d.classList.add("row", "text-center");
  //   d.innerHTML = `
  //           <div class="col-4">${temp.name}</div>
  //           <div class="col-5">${temp.email}</div>
  //           <div class="col-3">${temp.phone}</div>
  // `;

  //   data.appendChild(d);
  // }

  AllData.forEach((temp) => {
    const d = document.createElement("div");
    d.classList.add("row", "text-center");
    d.innerHTML = `
            <div class="col-4">${temp.name}</div>
            <div class="col-5">${temp["email"]}</div>
            <div class="col-3">${temp.phone}</div>
  `;

    data.appendChild(d);
  });
}

displayData();
