let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");

// why writing window.handleLoveClick
// https://github.com/codesandbox/codesandbox-client/issues/1502

window.handleLoveClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  // active group becomes after
  currentGroup.dataset.status = "after";

  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    // next group becomes active
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

window.handleHateClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  // active group becomes after
  currentGroup.dataset.status = "before";

  nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    // next group becomes active
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
