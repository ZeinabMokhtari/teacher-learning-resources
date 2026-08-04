function createReactionButton(
  reaction,
  count,
  experienceId
) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "tlr-reaction-button";

  button.dataset.reaction = reaction.key;
  button.dataset.experienceId = experienceId;

  button.setAttribute("aria-pressed", "false");
  button.setAttribute(
    "aria-label",
    `${reaction.label}، ${count} واکنش`
  );

  button.innerHTML = `
    <span aria-hidden="true">
      ${reaction.emoji}
    </span>

    <span>
      ${reaction.label}
    </span>

    <strong>
      ${count}
    </strong>
  `;

  button.addEventListener("click", function () {
    const isActive =
      button.classList.toggle("is-active");

    button.setAttribute(
      "aria-pressed",
      String(isActive)
    );

    const countElement =
      button.querySelector("strong");

    const currentCount =
      Number(countElement.textContent);

    countElement.textContent =
      isActive
        ? currentCount + 1
        : currentCount - 1;
  });

  return button;
}