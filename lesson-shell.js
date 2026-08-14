const lessonParams =
  new URLSearchParams(
    window.location.search
  );

const lessonView =
  lessonParams.get('view') === 'student'
    ? 'student'
    : 'teacher';

document.body.dataset.lessonView =
  lessonView;

const lesson =
  window.trackpadLesson;

const lessonTitle =
  document.getElementById('lessonTitle');

const lessonEyebrow =
  document.getElementById('lessonEyebrow');

const stepTitle =
  document.getElementById('stepTitle');

const teacherPrompt =
  document.getElementById('teacherPrompt');

const lessonActivity =
  document.getElementById('lessonActivity');

const lessonProgressText =
  document.getElementById('lessonProgressText');

const lessonProgressFill =
  document.getElementById('lessonProgressFill');

const previousStepButton =
  document.getElementById('previousStepButton');

const nextStepButton =
  document.getElementById('nextStepButton');

let currentStepIndex = 0;

function renderLessonStep() {
  if (
    !lesson ||
    !Array.isArray(lesson.steps) ||
    lesson.steps.length === 0
  ) {
    return;
  }

  const step =
    lesson.steps[currentStepIndex];

  lessonTitle.textContent =
    lesson.title;

  lessonEyebrow.textContent =
    lesson.eyebrow;

  stepTitle.textContent =
    step.title;

  teacherPrompt.textContent =
    step.teacherPrompt;

  lessonActivity.innerHTML =
    step.activityHtml;

  if (
    step.activityType ===
    'starPractice'
  ) {
    initializeStarPractice();
  }

  if (
    step.activityType ===
    'pathPractice'
  ) {
    initializePathPractice();
  }

  if (
    step.activityType ===
    'picturePractice'
  ) {
    initializePicturePractice();
  }

  if (
    step.activityType ===
    'revealPractice'
  ) {
    initializeRevealPractice();
  }

  lessonProgressText.textContent =
    `${currentStepIndex + 1} of ${lesson.steps.length}`;

  lessonProgressFill.style.width =
    `${
      ((currentStepIndex + 1) /
        lesson.steps.length) *
      100
    }%`;

  previousStepButton.disabled =
    currentStepIndex === 0;

  nextStepButton.textContent =
    currentStepIndex ===
    lesson.steps.length - 1
      ? 'Finish'
      : 'Next →';
}

previousStepButton.addEventListener(
  'click',
  () => {
    if (currentStepIndex <= 0) {
      return;
    }

    currentStepIndex -= 1;

    renderLessonStep();

    if (lessonView === 'teacher') {
      void saveSharedLessonState();
    }

    if (lessonView === 'teacher') {
      void saveSharedLessonState();
    }
  }
);

nextStepButton.addEventListener(
  'click',
  () => {
    if (
      currentStepIndex >=
      lesson.steps.length - 1
    ) {
      window.location.href =
        'index.html';

      return;
    }

    currentStepIndex += 1;

    renderLessonStep();

    if (lessonView === 'teacher') {
      void saveSharedLessonState();
    }

    if (lessonView === 'teacher') {
      void saveSharedLessonState();
    }
  }
);

renderLessonStep();

const teacherSyncPanel =
  document.getElementById(
    'teacherSyncPanel'
  );

const teacherSyncToggle =
  document.getElementById(
    'teacherSyncToggle'
  );

const teacherSyncStatus =
  document.getElementById(
    'teacherSyncStatus'
  );

const TEACHER_SYNC_KEY =
  'introTrackpadTeacherSync';

function updateTeacherSyncDisplay() {
  if (
    lessonView !== 'teacher' ||
    !teacherSyncToggle
  ) {
    return;
  }

  const enabled =
    teacherSyncToggle.checked;

  teacherSyncStatus.textContent =
    enabled
      ? 'Students follow the teacher'
      : 'Students move independently';
}

if (lessonView === 'teacher') {
  const savedSync =
    localStorage.getItem(
      TEACHER_SYNC_KEY
    );

  teacherSyncToggle.checked =
    savedSync === 'true';

  updateTeacherSyncDisplay();

  teacherSyncToggle.addEventListener(
    'change',
    () => {
      localStorage.setItem(
        TEACHER_SYNC_KEY,
        String(
          teacherSyncToggle.checked
        )
      );

      updateTeacherSyncDisplay();
    }
  );
} else if (teacherSyncPanel) {
  teacherSyncPanel.hidden = true;
}

function initializeStarPractice() {
  const area =
    document.getElementById(
      'starPracticeArea'
    );

  const star =
    document.getElementById(
      'practiceStar'
    );

  const target =
    document.getElementById(
      'practiceStarTarget'
    );

  const success =
    document.getElementById(
      'starSuccess'
    );

  const countDisplay =
    document.getElementById(
      'starPracticeCount'
    );

  if (
    !area ||
    !star ||
    !target ||
    !success ||
    !countDisplay
  ) {
    return;
  }

  const targets = [
    { x: 78, y: 25 },
    { x: 25, y: 72 },
    { x: 75, y: 72 },
    { x: 28, y: 28 },
    { x: 52, y: 50 },
  ];

  let completed = 0;
  let draggingByHover = false;
  let locked = false;

  star.style.left = '18%';
  star.style.top = '50%';

  function placeTarget() {
    const position =
      targets[completed];

    if (!position) {
      return;
    }

    target.style.left =
      `${position.x}%`;

    target.style.top =
      `${position.y}%`;
  }

  function updateCount() {
    countDisplay.textContent =
      `${completed} / 5`;
  }

  function moveStarWithPointer(event) {
    if (
      !draggingByHover ||
      locked ||
      completed >= 5
    ) {
      return;
    }

    const rect =
      area.getBoundingClientRect();

    const x =
      Math.max(
        45,
        Math.min(
          rect.width - 45,
          event.clientX - rect.left
        )
      );

    const y =
      Math.max(
        45,
        Math.min(
          rect.height - 45,
          event.clientY - rect.top
        )
      );

    star.style.left =
      `${x}px`;

    star.style.top =
      `${y}px`;

    const starRect =
      star.getBoundingClientRect();

    const targetRect =
      target.getBoundingClientRect();

    const starCenterX =
      starRect.left +
      starRect.width / 2;

    const starCenterY =
      starRect.top +
      starRect.height / 2;

    const targetCenterX =
      targetRect.left +
      targetRect.width / 2;

    const targetCenterY =
      targetRect.top +
      targetRect.height / 2;

    const distance =
      Math.hypot(
        starCenterX -
          targetCenterX,
        starCenterY -
          targetCenterY
      );

    if (distance <= 42) {
      completeTarget();
    }
  }

  function completeTarget() {
    if (
      locked ||
      completed >= 5
    ) {
      return;
    }

    locked = true;
    draggingByHover = false;

    completed += 1;

    updateCount();

    star.classList.add(
      'is-found'
    );

    success.classList.add(
      'is-visible'
    );

    window.setTimeout(
      () => {
        star.classList.remove(
          'is-found'
        );

        success.classList.remove(
          'is-visible'
        );

        if (completed >= 5) {
          target.style.display =
            'none';

          success.textContent =
            'You did it!';

          success.classList.add(
            'is-visible'
          );

          return;
        }

        star.style.left = '18%';
        star.style.top = '50%';

        placeTarget();

        locked = false;
      },
      650
    );
  }

  star.addEventListener(
    'pointerenter',
    () => {
      if (
        locked ||
        completed >= 5
      ) {
        return;
      }

      draggingByHover = true;
    }
  );

  area.addEventListener(
    'pointermove',
    moveStarWithPointer
  );

  area.addEventListener(
    'pointerleave',
    () => {
      draggingByHover = false;
    }
  );

  placeTarget();
  updateCount();
}

function initializePathPractice() {
  const startTarget =
    document.querySelector(
      '.path-start'
    );

  const finish =
    document.getElementById(
      'pathFinish'
    );

  const success =
    document.getElementById(
      'pathSuccess'
    );

  if (
    !startTarget ||
    !finish ||
    !success
  ) {
    return;
  }

  let started = false;
  let completed = false;

  finish.classList.add(
    'is-locked'
  );

  startTarget.addEventListener(
    'pointerenter',
    () => {
      if (started) {
        return;
      }

      started = true;

      startTarget.classList.add(
        'is-active'
      );

      finish.classList.remove(
        'is-locked'
      );

      finish.classList.add(
        'is-ready'
      );
    }
  );

  finish.addEventListener(
    'pointerenter',
    () => {
      if (
        !started ||
        completed
      ) {
        return;
      }

      completed = true;

      finish.classList.remove(
        'is-ready'
      );

      finish.classList.add(
        'is-found'
      );

      success.textContent =
        'You made it! ⭐';

      success.classList.add(
        'is-visible'
      );
    }
  );
}

function initializePicturePractice() {
  const prompt =
    document.getElementById(
      'pictureTargetPrompt'
    );

  const success =
    document.getElementById(
      'picturePracticeSuccess'
    );

  const countDisplay =
    document.getElementById(
      'picturePracticeCount'
    );

  const choices =
    Array.from(
      document.querySelectorAll(
        '.picture-choice'
      )
    );

  if (
    !prompt ||
    !success ||
    !countDisplay ||
    choices.length === 0
  ) {
    return;
  }

  const rounds = [
    {
      key: 'apple',
      label: 'Apple 🍎',
    },
    {
      key: 'star',
      label: 'Star ⭐',
    },
    {
      key: 'balloon',
      label: 'Balloon 🎈',
    },
    {
      key: 'sun',
      label: 'Sun ☀️',
    },
    {
      key: 'flower',
      label: 'Flower 🌼',
    },
  ];

  for (
    let index =
      rounds.length - 1;
    index > 0;
    index -= 1
  ) {
    const swapIndex =
      Math.floor(
        Math.random() *
        (index + 1)
      );

    [
      rounds[index],
      rounds[swapIndex],
    ] = [
      rounds[swapIndex],
      rounds[index],
    ];
  }

  let roundIndex = 0;
  let locked = false;

  function updateRound() {
    const round =
      rounds[roundIndex];

    choices.forEach(
      (choice) => {
        choice.classList.remove(
          'is-target',
          'is-found'
        );

        if (
          choice.dataset.picture ===
          round.key
        ) {
          choice.classList.add(
            'is-target'
          );
        }
      }
    );

    prompt.textContent =
      `Find the ${round.label}`;

    countDisplay.textContent =
      `${roundIndex} / 5`;
  }

  function completeRound(choice) {
    if (locked) {
      return;
    }

    const round =
      rounds[roundIndex];

    if (
      choice.dataset.picture !==
      round.key
    ) {
      return;
    }

    locked = true;

    choice.classList.add(
      'is-found'
    );

    success.classList.add(
      'is-visible'
    );

    roundIndex += 1;

    countDisplay.textContent =
      `${roundIndex} / 5`;

    window.setTimeout(
      () => {
        success.classList.remove(
          'is-visible'
        );

        if (
          roundIndex >=
          rounds.length
        ) {
          prompt.textContent =
            'You found them all! ⭐';

          choices.forEach(
            (item) => {
              item.classList.remove(
                'is-target'
              );
            }
          );

          return;
        }

        locked = false;
        updateRound();
      },
      650
    );
  }

  choices.forEach(
    (choice) => {
      choice.addEventListener(
        'pointerenter',
        () => {
          completeRound(choice);
        }
      );
    }
  );

  updateRound();
}

function initializeRevealPractice() {
  const area =
    document.getElementById(
      'revealPracticeArea'
    );

  const canvas =
    document.getElementById(
      'revealCanvas'
    );

  const progress =
    document.getElementById(
      'revealProgress'
    );

  if (
    !area ||
    !canvas ||
    !progress
  ) {
    return;
  }

  const context =
    canvas.getContext('2d');

  if (!context) {
    return;
  }

  const rect =
    area.getBoundingClientRect();

  const scale =
    window.devicePixelRatio || 1;

  canvas.width =
    Math.round(rect.width * scale);

  canvas.height =
    Math.round(rect.height * scale);

  canvas.style.width =
    `${rect.width}px`;

  canvas.style.height =
    `${rect.height}px`;

  context.setTransform(
    scale,
    0,
    0,
    scale,
    0,
    0
  );

  context.globalCompositeOperation =
    'source-over';

  context.fillStyle =
    '#6f8293';

  context.fillRect(
    0,
    0,
    rect.width,
    rect.height
  );

  context.fillStyle =
    'rgba(255, 255, 255, 0.12)';

  for (
    let y = 0;
    y < rect.height;
    y += 34
  ) {
    for (
      let x = 0;
      x < rect.width;
      x += 34
    ) {
      context.beginPath();

      context.arc(
        x + 17,
        y + 17,
        3,
        0,
        Math.PI * 2
      );

      context.fill();
    }
  }

  context.globalCompositeOperation =
    'destination-out';

  function revealAt(event) {
    const bounds =
      canvas.getBoundingClientRect();

    const x =
      event.clientX -
      bounds.left;

    const y =
      event.clientY -
      bounds.top;

    context.beginPath();

    context.arc(
      x,
      y,
      34,
      0,
      Math.PI * 2
    );

    context.fill();

    progress.textContent =
      'Keep sliding!';
  }

  canvas.addEventListener(
    'pointermove',
    revealAt
  );
}

/* ----------------------------------------
   Teacher / Student lesson synchronization
----------------------------------------- */

let lessonSyncPollTimer = 0;

async function getSharedLessonState() {
  try {
    const response =
      await fetch(
        '/api/lesson-state',
        {
          cache: 'no-store',
        }
      );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

async function saveSharedLessonState() {
  if (lessonView !== 'teacher') {
    return;
  }

  try {
    await fetch(
      '/api/lesson-state',
      {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify({
          syncEnabled:
            Boolean(
              teacherSyncToggle &&
              teacherSyncToggle.checked
            ),

          lesson: 1,

          step:
            currentStepIndex,
        }),
      }
    );
  } catch {
    // Keep the lesson usable even
    // if synchronization is unavailable.
  }
}

function applyStudentSyncState(
  state
) {
  if (
    lessonView !== 'student' ||
    !state
  ) {
    return;
  }

  const synced =
    state.syncEnabled === true;

  document.body.dataset.synced =
    String(synced);

  /*
   * When Teacher Sync is on,
   * navigation belongs to the teacher.
   */
  if (synced) {
    previousStepButton.disabled =
      true;

    nextStepButton.disabled =
      true;

    const nextStep =
      Math.max(
        0,
        Math.min(
          Number(state.step) || 0,
          lesson.steps.length - 1
        )
      );

    if (
      nextStep !==
      currentStepIndex
    ) {
      currentStepIndex =
        nextStep;

      renderLessonStep();

      /*
       * renderLessonStep normally sets
       * button state, so lock them again.
       */
      previousStepButton.disabled =
        true;

      nextStepButton.disabled =
        true;
    }

    return;
  }

  /*
   * Sync is off. Restore normal
   * independent navigation.
   */
  previousStepButton.disabled =
    currentStepIndex === 0;

  nextStepButton.disabled =
    false;
}

async function pollTeacherLessonState() {
  if (lessonView !== 'student') {
    return;
  }

  const state =
    await getSharedLessonState();

  applyStudentSyncState(state);
}

if (lessonView === 'teacher') {
  /*
   * Publish whenever the teacher changes
   * the Teacher Sync setting.
   */
  if (teacherSyncToggle) {
    teacherSyncToggle.addEventListener(
      'change',
      () => {
        void saveSharedLessonState();
      }
    );
  }

  /*
   * Publish the initial teacher state.
   */
  void saveSharedLessonState();
}

if (lessonView === 'student') {
  /*
   * Check twice per second. This is plenty
   * fast for teacher-led lesson navigation.
   */
  void pollTeacherLessonState();

  lessonSyncPollTimer =
    window.setInterval(
      pollTeacherLessonState,
      500
    );
}
