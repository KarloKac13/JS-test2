"use strict";

const kids = [];

const workers = [];

const students = [];

const hairColors = ["brown", "blonde", "black"];

const jobPositions = ["worker", "manager", "director"];

const firms = ["firma1", "firma2", "firma3"];

const addresses = ["adresa 123", "ulica pere perica 77", "trg zrtava programiranja 2",
];
const faculties = ["fakultet1", "fakultet2", "fakultet3"];

const arr = [1, 2, 3, 4, 5];
const people = ["Kids", "Students", "Workers"];

for (let i in arr) {
  let option = "<option value='" + arr[i] + "'>" + arr[i] + "</option>";
  document.getElementById("number").innerHTML += option;
}

for (let i in people) {
  let option = "<option value='" + people[i] + "'>" + people[i] + "</option>";
  document.getElementById("people").innerHTML += option;
}

let selectedNumber = document.getElementById("number");
let selectedPeople = document.getElementById("people");

function selectedFn() {
  const height = Math.floor(Math.random() * 51 + 150);
  const weight = Math.floor(Math.random() * 101 + 50);
  const hairIdx = Math.floor(Math.random() * hairColors.length);
  const jobIdx = Math.floor(Math.random() * jobPositions.length);
  const firmIdx = Math.floor(Math.random() * firms.length);
  const addressIdx = Math.floor(Math.random() * addresses.length);
  const facultiesIdx = Math.floor(Math.random() * faculties.length);

  // Znam da je radi primjera samo, ali kids mi baš ne može
  // imati visinu i debljinu baš po jednakim parametrima kao student i adult xD
  const kidsHeight = Math.floor(Math.random() * 51 + 100);
  const kidsWeight = Math.floor(Math.random() * 51 + 50);

  if (selectedPeople.value === people[0]) {
    kids.push({
      height: kidsHeight,
      weight: kidsWeight,
      hair: hairColors[hairIdx],
    });
  };

  if (selectedPeople.value === people[1]) {
    students.push({
      height: height,
      weight: weight,
      hair: hairColors[hairIdx],
      job: {
        position: jobPositions[jobIdx],
        firm: firms[firmIdx],
        address: addresses[addressIdx],
      },
      faculty: faculties[facultiesIdx],
    });
  };

  if (selectedPeople.value === people[2]) {
    workers.push({
      height: height,
      weight: weight,
      hair: hairColors[hairIdx],
      job: {
        position: jobPositions[jobIdx],
        firm: firms[firmIdx],
        address: addresses[addressIdx],
      },
    });
  };
};

function generatePeople() {
  for (let i = 0; i < parseInt(selectedNumber.value); i++) {
    selectedFn();
  };
  console.log(kids, students, workers);
};

function sortPeopleByHeight() {
  if (selectedPeople.value === people[0]) {
    kids.sort(function (a, b) {
      return b.height - a.height;
    });
    return alert(JSON.stringify(kids));
  };
  if (selectedPeople.value === people[1]) {
    students.sort(function (a, b) {
      return b.height - a.height;
    });
    return alert(JSON.stringify(students));
  };
  if (selectedPeople.value === people[2]) {
    workers.sort(function (a, b) {
      return b.height - a.height;
    });
    return alert(JSON.stringify(workers));
  };
};

function filterPeopleByBlondeHair() {
  const kidsWithBlondehair = kids.filter(function (hair) {
    return hair.hair === hairColors[1];
  });
  const studentsWithBlondehair = students.filter(function (hair) {
    return hair.hair === hairColors[1];
  });
  const workersWithBlondehair = workers.filter(function (hair) {
    return hair.hair === hairColors[1];
  });

  alert(
    " Kids array has: " +
      kidsWithBlondehair.length +
      ", Students array has: " +
      studentsWithBlondehair.length +
      ", Workers array has: " +
      workersWithBlondehair.length +
      "\r\n" +
      " In all arrays are: " +
      (kidsWithBlondehair.length +
        studentsWithBlondehair.length +
        workersWithBlondehair.length)
  );
}

function filterPeopleByWorkplace() {
  const studentsWorkplace = students.filter(function (work) {
    return work.job.firm === firms[1];
  });
  const workersWorkplace = workers.filter(function (work) {
    return work.job.firm === firms[1];
  });

  let jsonAlertStudent = JSON.stringify(studentsWorkplace);
  let jsonAlertWorker = JSON.stringify(workersWorkplace);

  if (selectedPeople.value === people[0]) {
    alert("Kids don't have a job!");
    !jsonAlertStudent;
    !jsonAlertWorker;
  } else {
    alert(jsonAlertStudent + jsonAlertWorker);
  };
  
};

var tallestStudentIdx = null;
var tallestWorkerIdx = null;
var array;
var tallestPersonArray = [];

function tallestPerson() {
  if (students === []) {
    tallestStudentIdx = null;
    tallestWorkerIdx = workers[0].height;
  };

  if (workers === []) {
    tallestWorkerIdx = null;
    tallestStudentIdx = students[0].height;
  }

    for (var i of students) {
      if (tallestStudentIdx <= i.height) {
        tallestStudentIdx = i.height;
        if (tallestStudentIdx === i.height) {
          array = i;
          tallestPersonArray.push(array);
        }
      }
    };

  for (var i of workers) {
    if (tallestWorkerIdx <= i.height) {
      tallestWorkerIdx = i.height;
      if (tallestWorkerIdx === i.height) {
        array = i;
        tallestPersonArray.push(array)
      };
    };
  };

  tallestPersonArray.sort(function (a, b) {
    return b.height - a.height;
  });

  alert(JSON.stringify(tallestPersonArray[0]));
};

const allPeopleArr = [];
const jsonStringArr = [];

function heightGreaterThanWeight() {
  allPeopleArr.push(kids);
  allPeopleArr.push(students);
  allPeopleArr.push(workers);
  console.log(allPeopleArr);
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
  const kidsWithoutBlondehair = kids.filter(function (hair) {
    return hair.hair !== hairColors[1];
  });
  const studentsWithoutBlondehair = students.filter(function (hair) {
    return hair.hair !== hairColors[1];
  });
  const workersWithoutBlondehair = workers.filter(function (hair) {
    return hair.hair !== hairColors[1];
  });
  alert(JSON.stringify(kidsWithoutBlondehair) + JSON.stringify(studentsWithoutBlondehair) +
    JSON.stringify(workersWithoutBlondehair));
};