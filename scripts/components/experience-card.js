const tlrStageLabels = {
  primary: "دوره ابتدایی",
  middle: "دوره اول متوسطه",
  high: "دوره دوم متوسطه"
};

const tlrCategoryLabels = {
  "creative-teaching": "تدریس خلاقانه",
  assessment: "ارزشیابی",
  "classroom-management": "مدیریت کلاس",
  "educational-technology": "فناوری آموزشی",
  "collaborative-learning": "یادگیری مشارکتی"
};

function getTeacherInitials(name) {
  return name
    .split(" ")
    .map(function (part) {
      return part.charAt(0);
    })
    .join("")
    .slice(0, 2);
}

function createExperienceCard(experience) {
  const article =
    document.createElement("article");

  article.className = "tlr-experience-card";

  article.innerHTML = `
    <header class="tlr-experience-header">
      <div class="tlr-author">
        <div
          class="tlr-avatar"
          aria-hidden="true"
        >
          ${getTeacherInitials(experience.author)}
        </div>

        <div>
          <h3 class="tlr-author-name">
            ${experience.author}
          </h3>

          <p class="tlr-author-meta">
            ${experience.role}
            ·
            ${experience.location}
          </p>
        </div>
      </div>

      <button
        class="tlr-save-button"
        type="button"
        aria-label="ذخیره تجربه"
      >
        <span aria-hidden="true">♡</span>
      </button>
    </header>

    <div class="tlr-experience-body">
      <div class="tlr-tag-row">
        <span class="tlr-category-tag">
          ${tlrCategoryLabels[experience.category]}
        </span>

        <span class="tlr-stage-tag">
          ${tlrStageLabels[experience.stage]}
          ·
          پایه ${experience.grade}
        </span>
      </div>

      <h2 class="tlr-experience-title">
        ${experience.title}
      </h2>

      <p class="tlr-experience-summary">
        ${experience.summary}
      </p>

      <div class="tlr-keyword-list">
        ${experience.keywords
          .map(function (keyword) {
            return `
              <span class="tlr-keyword">
                #${keyword}
              </span>
            `;
          })
          .join("")}
      </div>
    </div>

    <footer class="tlr-experience-footer">
      <div
        class="tlr-reaction-group"
        aria-label="واکنش به تجربه"
      ></div>

      <button
        class="tlr-text-button"
        type="button"
      >
        مشاهده تجربه
      </button>
    </footer>
  `;

  const reactionGroup =
    article.querySelector(
      ".tlr-reaction-group"
    );

  tlrReactionTypes.forEach(function (reaction) {
    const reactionButton =
      createReactionButton(
        reaction,
        experience.reactions[reaction.key],
        experience.id
      );

    reactionGroup.appendChild(reactionButton);
  });

  const saveButton =
    article.querySelector(
      ".tlr-save-button"
    );

  saveButton.addEventListener(
    "click",
    function () {
      const isSaved =
        saveButton.classList.toggle(
          "is-saved"
        );

      saveButton.setAttribute(
        "aria-label",
        isSaved
          ? "حذف از ذخیره‌شده‌ها"
          : "ذخیره تجربه"
      );

      saveButton.querySelector(
        "span"
      ).textContent = isSaved ? "♥" : "♡";
    }
  );

  return article;
}