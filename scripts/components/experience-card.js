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
          <svg
            class="tlr-avatar-icon"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path
              d="M4 5.5C4 4.67 4.67 4 5.5 4H11V19H5.5C4.67 19 4 18.33 4 17.5V5.5Z"
            ></path>

            <path
              d="M20 5.5C20 4.67 19.33 4 18.5 4H13V19H18.5C19.33 19 20 18.33 20 17.5V5.5Z"
            ></path>

            <path
              d="M12 6.5L16.5 2L18 3.5L13.5 8L11 8.5L12 6.5Z"
            ></path>
          </svg>
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
        <a
          class="tlr-experience-title-link"
          href="../experience-detail/"
        >
          ${experience.title}
        </a>
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

      <a
        class="tlr-text-button"
        href="../experience-detail/"
      >
        مشاهده کامل تجربه
        <span aria-hidden="true">←</span>
      </a>
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