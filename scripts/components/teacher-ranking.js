function renderTeacherRanking(teachers) {
  const rankingList =
    document.getElementById(
      "teacherRanking"
    );

  rankingList.innerHTML = "";

  teachers.forEach(function (
    teacher,
    index
  ) {
    const listItem =
      document.createElement("li");

    listItem.className =
      "tlr-ranking-item";

    listItem.innerHTML = `
      <span class="tlr-rank-number">
        ${index + 1}
      </span>

      <span
        class="tlr-ranking-avatar"
        aria-hidden="true"
      >
        ${getTeacherInitials(teacher.name)}
      </span>

      <div>
        <h3 class="tlr-ranking-name">
          ${teacher.name}
        </h3>

        <p class="tlr-ranking-meta">
          ${teacher.role}
        </p>
      </div>

      <span class="tlr-ranking-score">
        ${teacher.score}
      </span>
    `;

    rankingList.appendChild(listItem);
  });
}