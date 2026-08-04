const tlrExperienceState = {
  query: "",
  stage: "all",
  grade: "all",
  category: "all",
  sort: "newest"
};

function getTotalReactions(reactions) {
  return Object.values(
    reactions
  ).reduce(function (total, count) {
    return total + count;
  }, 0);
}

function filterExperiences() {
  const query =
    tlrExperienceState.query
      .trim()
      .toLowerCase();

  const filteredExperiences =
    tlrExperiences.filter(
      function (experience) {
        const searchableText = [
          experience.title,
          experience.summary,
          experience.author,
          experience.role,
          ...experience.keywords
        ]
          .join(" ")
          .toLowerCase();

        const matchesQuery =
          !query ||
          searchableText.includes(query);

        const matchesStage =
          tlrExperienceState.stage === "all" ||
          experience.stage ===
            tlrExperienceState.stage;

        const matchesGrade =
          tlrExperienceState.grade === "all" ||
          experience.grade ===
            tlrExperienceState.grade;

        const matchesCategory =
          tlrExperienceState.category === "all" ||
          experience.category ===
            tlrExperienceState.category;

        return (
          matchesQuery &&
          matchesStage &&
          matchesGrade &&
          matchesCategory
        );
      }
    );

  return filteredExperiences.sort(
    function (first, second) {
      if (
        tlrExperienceState.sort ===
        "most-reacted"
      ) {
        return (
          getTotalReactions(
            second.reactions
          ) -
          getTotalReactions(
            first.reactions
          )
        );
      }

      if (
        tlrExperienceState.sort ===
        "most-saved"
      ) {
        return (
          second.savedCount -
          first.savedCount
        );
      }

      return (
        new Date(second.createdAt) -
        new Date(first.createdAt)
      );
    }
  );
}

function renderExperiences() {
  const experienceList =
    document.getElementById(
      "experienceList"
    );

  const resultCount =
    document.getElementById(
      "resultCount"
    );

  const emptyState =
    document.getElementById(
      "emptyState"
    );

  const experiences =
    filterExperiences();

  experienceList.innerHTML = "";

  experiences.forEach(
    function (experience) {
      const card =
        createExperienceCard(
          experience
        );

      experienceList.appendChild(card);
    }
  );

  resultCount.textContent =
    `${experiences.length} تجربه نمایش داده می‌شود`;

  emptyState.hidden =
    experiences.length !== 0;
}

function syncFilters() {
  tlrExperienceState.query =
    document.getElementById(
      "experienceSearch"
    ).value;

  tlrExperienceState.stage =
    document.getElementById(
      "stageFilter"
    ).value;

  tlrExperienceState.grade =
    document.getElementById(
      "gradeFilter"
    ).value;

  tlrExperienceState.category =
    document.getElementById(
      "categoryFilter"
    ).value;

  tlrExperienceState.sort =
    document.getElementById(
      "sortFilter"
    ).value;

  renderExperiences();
}

function initializeExperiencePage() {
  const searchInput =
    document.getElementById(
      "experienceSearch"
    );

  const stageFilter =
    document.getElementById(
      "stageFilter"
    );

  const gradeFilter =
    document.getElementById(
      "gradeFilter"
    );

  const categoryFilter =
    document.getElementById(
      "categoryFilter"
    );

  const sortFilter =
    document.getElementById(
      "sortFilter"
    );

  searchInput.addEventListener(
    "input",
    syncFilters
  );

  stageFilter.addEventListener(
    "change",
    function () {
      updateGradeFilter(
        stageFilter.value
      );

      tlrExperienceState.grade =
        "all";

      syncFilters();
    }
  );

  gradeFilter.addEventListener(
    "change",
    syncFilters
  );

  categoryFilter.addEventListener(
    "change",
    syncFilters
  );

  sortFilter.addEventListener(
    "change",
    syncFilters
  );

  updateGradeFilter("all");

  renderTeacherRanking(
    tlrTeachers
  );

  renderExperiences();
}

document.addEventListener(
  "DOMContentLoaded",
  initializeExperiencePage
);