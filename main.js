"use strict";

const people = {
  kids: [],
  students: [],
  workers: []
};

const properties = {
  hairColors: ["brown", "blonde", "black"],
  jobPositions: ["worker", "manager", "director"],
  firms: ["firma1", "firma2", "firma3"],
  addresses: ["adresa 123", "ulica pere perica 77", "trg zrtava programiranja 2",
  ],
  faculties: ["fakultet1", "fakultet2", "fakultet3"],
};

const selectOptions = {
  numberOption: [1, 2, 3, 4, 5],
  peopleOption: ["Kids", "Students", "Workers"],
};

for (let i in selectOptions.numberOption) {
  let option =
    "<option value='" +
    selectOptions.numberOption[i] +
    "'>" +
    selectOptions.numberOption[i] +
    "</option>";
  document.getElementById("number").innerHTML += option;
}

for (let i in selectOptions.peopleOption) {
  let option =
    "<option value='" +
    selectOptions.peopleOption[i] +
    "'>" +
    selectOptions.peopleOption[i] +
    "</option>";
  document.getElementById("people").innerHTML += option;
}

let selectedNumber = document.getElementById("number");
let selectedPeople = document.getElementById("people");

function selectedFn() {
  const height = Math.floor(Math.random() * 51 + 150);
  const weight = Math.floor(Math.random() * 101 + 50);
  const hairIdx = Math.floor(Math.random() * properties.hairColors.length);
  const jobIdx = Math.floor(Math.random() * properties.jobPositions.length);
  const firmIdx = Math.floor(Math.random() * properties.firms.length);
  const addressIdx = Math.floor(Math.random() * properties.addresses.length);
  const facultiesIdx = Math.floor(Math.random() * properties.faculties.length);

  // Znam da je radi primjera samo, ali kids mi baš ne može
  // imati visinu i debljinu baš po jednakim parametrima kao student i adult xD
  const kidsHeight = Math.floor(Math.random() * 51 + 100);
  const kidsWeight = Math.floor(Math.random() * 51 + 50);

  if (selectedPeople.value === selectOptions.peopleOption[0]) {
    people.kids.push({
      height: kidsHeight,
      weight: kidsWeight,
      hair: properties.hairColors[hairIdx],
    });
  };

  if (selectedPeople.value === selectOptions.peopleOption[1]) {
    people.students.push({
      height: height,
      weight: weight,
      hair: properties.hairColors[hairIdx],
      job: {
        position: properties.jobPositions[jobIdx],
        firm: properties.firms[firmIdx],
        address: properties.addresses[addressIdx],
      },
      faculty: properties.faculties[facultiesIdx],
    });
  };

  if (selectedPeople.value === selectOptions.peopleOption[2]) {
    people.workers.push({
      height: height,
      weight: weight,
      hair: properties.hairColors[hairIdx],
      job: {
        position: properties.jobPositions[jobIdx],
        firm: properties.firms[firmIdx],
        address: properties.addresses[addressIdx],
      },
    });
  };
};

function generatePeople() {
  for (let i = 0; i < parseInt(selectedNumber.value); i++) {
    selectedFn();
  };
  console.log(people.kids, people.students, people.workers);
};

function sortPeopleByHeight() {
  if (selectedPeople.value === selectOptions.peopleOption[0]) {
    people.kids.sort((a, b) => b.height - a.height);
    return alert(JSON.stringify(people.kids));
  };
  if (selectedPeople.value === selectOptions.peopleOption[1]) {
    people.students.sort((a, b) => b.height - a.height);
    return alert(JSON.stringify(people.students));
  };
  if (selectedPeople.value === selectOptions.peopleOption[2]) {
    people.workers.sort((a, b) => b.height - a.height
    );
    return alert(JSON.stringify(people.workers));
  };
};

function filterPeopleByBlondeHair() {
  const kidsBlondehair = people.kids.filter((hair) => hair.hair === properties.hairColors[1]);
  const studentsBlondehair = people.students.filter((hair) => hair.hair === properties.hairColors[1]);
  const workersBlondehair = people.workers.filter((hair) => hair.hair === properties.hairColors[1]);

  alert(
    " Kids array has: " +
      kidsBlondehair.length +
      ", Students array has: " +
      studentsBlondehair.length +
      ", Workers array has: " +
      workersBlondehair.length +
      "\r\n" +
      " In all arrays are: " +
      (kidsBlondehair.length +
        studentsBlondehair.length +
        workersBlondehair.length)
  );
};

function filterPeopleByWorkplace() {
  const peopleInFirma2 = [
    people.students.filter((work) => work.job.firm === properties.firms[1]),
    people.workers.filter((work) => work.job.firm === properties.firms[1]),
  ];

  const jsonAlert = JSON.stringify(peopleInFirma2);

  if (selectedPeople.value === selectOptions.peopleOption[0]) {
    alert("Kids don't have a job!");
    !jsonAlert;
  } else {
    alert(jsonAlert);
  };
  
};

const tallestPersonArray = [];

function tallestPersonFn() {

  let tallestPerson = null;

  for (let i of people.kids) {
    tallestPerson = people.kids[0].height;
    if (tallestPerson <= i.height) {
      tallestPerson = i;
      tallestPersonArray.push(tallestPerson);
    };
  };

  for (let i of people.students) {
    tallestPerson = people.students[0].height;
    if (tallestPerson <= i.height) {
      tallestPerson = i;
      tallestPersonArray.push(tallestPerson);
    };
  };

  for (let i of people.workers) {
    tallestPerson = people.workers[0].height;
    if (tallestPerson <= i.height) {
      tallestPerson = i;
      tallestPersonArray.push(tallestPerson);
    };
  };

  tallestPersonArray.sort((a, b) => b.height - a.height);

  alert(JSON.stringify(tallestPersonArray[0]));
};

const allPeopleArr = [];
const jsonStringArr = [];

function heightGreaterThanWeight() {
  allPeopleArr.push(people.kids, people.students, people.workers);
  for (let i of allPeopleArr) {
    for (let j of i) {
      const value = j.height - j.weight;
      if (value >= 80) {
        jsonStringArr.push(j);
      };
    };
  };
  alert(JSON.stringify(jsonStringArr));
};

function peopleWithoutBlondeHair() {
  const peopleWithoutBlondeHair = [
    people.kids.filter((hair) => hair.hair !== properties.hairColors[1]),
    people.students.filter((hair) => hair.hair !== properties.hairColors[1]),
    people.workers.filter((hair) => hair.hair !== properties.hairColors[1]),
  ];

  alert(JSON.stringify(peopleWithoutBlondeHair));
};