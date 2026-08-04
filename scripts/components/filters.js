const tlrGradeOptions = {
  primary: ["1", "2", "3", "4", "5", "6"],
  middle: ["7", "8", "9"],
  high: ["10", "11", "12"]
};

function updateGradeFilter(stageValue) {
  const gradeFilter =
    document.getElementById(
      "gradeFilter"
    );

  gradeFilter.innerHTML = `
    <option value="all">
      همه پایه‌ها
    </option>
  `;

  let grades = [];

  if (stageValue === "all") {
    grades = Object.values(
      tlrGradeOptions
    ).flat();
  } else {
    grades =
      tlrGradeOptions[stageValue];
  }

  grades.forEach(function (grade) {
    const option =
      document.createElement("option");

    option.value = grade;
    option.textContent = `پایه ${grade}`;

    gradeFilter.appendChild(option);
  });
}