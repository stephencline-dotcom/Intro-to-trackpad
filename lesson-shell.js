const lessonParams =
  new URLSearchParams(
    window.location.search
  );

const lessonView =
  lessonParams.get('view') === 'student'
    ? 'student'
    : 'teacher';

const requestedLessonNumber =
  Number.parseInt(
    lessonParams.get('lesson') || '1',
    10
  );

const currentLessonNumber =
  [1, 2, 3, 4, 5, 6].includes(
    requestedLessonNumber
  )
    ? requestedLessonNumber
    : 1;

document.body.dataset.lessonView =
  lessonView;

const lessonHomeButton =
  document.getElementById(
    'lessonHomeButton'
  );

if (lessonHomeButton) {
  lessonHomeButton.href =
    lessonView === 'student'
      ? 'student-home.html'
      : 'index.html';
}

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

  if (
    step.activityType ===
    'followLeader'
  ) {
    initializeFollowLeader();
  }

  if (
    step.activityType ===
    'butterflyPractice'
  ) {
    initializeButterflyPractice();
  }

  if (
    step.activityType ===
    'dotPractice'
  ) {
    initializeDotPractice();
  }

  if (
    step.activityType ===
    'sceneSearch'
  ) {
    initializeSceneSearch();
  }

  if (
    step.activityType ===
    'clickTeaching'
  ) {
    initializeClickTeaching();
  }

  if (
    step.activityType ===
    'week4Review'
  ) {
    initializeWeek4Review();
  }

  if (
    step.activityType ===
    'followClick'
  ) {
    initializeFollowClick();
  }

  if (
    step.activityType ===
    'week4MovingSearch'
  ) {
    initializeWeek4MovingSearch();
  }

  if (
    step.activityType ===
    'checkpointMaze'
  ) {
    initializeCheckpointMaze();
  }

  if (
    step.activityType ===
    'week4Sequence'
  ) {
    initializeWeek4Sequence();
  }

  if (
    step.activityType ===
    'whackTarget'
  ) {
    initializeWhackTarget();
  }

  if (
    step.activityType ===
    'week4RevealChoose'
  ) {
    initializeWeek4RevealChoose();
  }

  if (
    step.activityType ===
    'week5Review'
  ) {
    initializeWeek5Review();
  }

  if (
    step.activityType ===
    'week5TeamDemo'
  ) {
    initializeWeek5TeamDemo();
  }

  if (
    step.activityType ===
    'week5TargetPractice'
  ) {
    initializeWeek5TargetPractice();
  }

  if (
    step.activityType ===
    'week5HoldPath'
  ) {
    initializeWeek5HoldPath();
  }

  if (
    step.activityType ===
    'week5DragSort'
  ) {
    initializeWeek5DragSort();
  }

  if (
    step.activityType ===
    'week5Puzzle'
  ) {
    initializeWeek5Puzzle();
  }

  if (
    step.activityType ===
    'week6Review'
  ) {
    initializeWeek6Review();
  }

  if (
    step.activityType ===
    'week6Animals'
  ) {
    initializeWeek6Animals();
  }

  if (
    step.activityType ===
    'week6Obstacle'
  ) {
    initializeWeek6Obstacle();
  }

  if (
    step.activityType ===
    'week6MovingDelivery'
  ) {
    initializeWeek6MovingDelivery();
  }

  if (
    step.activityType ===
    'week6CleanRoom'
  ) {
    initializeWeek6CleanRoom();
  }

  if (
    step.activityType ===
    'week6DontDrop'
  ) {
    initializeWeek6DontDrop();
  }

  if (
    step.activityType ===
    'week6Puzzle'
  ) {
    initializeWeek6Puzzle();
  }

  if (
    step.activityType ===
    'week6Final'
  ) {
    initializeWeek6Final();
  }

  if (
    step.activityType ===
    'clickWaitTeaching'
  ) {
    initializeClickWaitTeaching();
  }

  if (
    step.activityType ===
    'watchClick'
  ) {
    initializeWatchClick();
  }

  if (
    step.activityType ===
    'bigButtonPractice'
  ) {
    initializeBigButtonPractice();
  }

  if (
    step.activityType ===
    'clickPicturePractice'
  ) {
    initializeClickPicturePractice();
  }

  if (
    step.activityType ===
    'bubblePractice'
  ) {
    initializeBubblePractice();
  }

  if (
    step.activityType ===
    'treasurePractice'
  ) {
    initializeTreasurePractice();
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

    if (lessonView === 'teacher') {
      resetTeacherPracticeRelease();
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
      if (lessonView === 'student') {
        showStudentLessonComplete();

        return;
      }

      window.location.href =
        'index.html';

      return;
    }

    if (lessonView === 'teacher') {
      resetTeacherPracticeRelease();
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

/* ----------------------------------------
   Teacher Freeze Screens controls
----------------------------------------- */

const teacherFreezeToggle =
  document.getElementById(
    'teacherFreezeToggle'
  );

const teacherFreezeStatus =
  document.getElementById(
    'teacherFreezeStatus'
  );

const teacherUnlockButton =
  document.getElementById(
    'teacherUnlockButton'
  );

const teacherPracticeReleaseButton =
  document.getElementById(
    'teacherPracticeReleaseButton'
  );

const TEACHER_FREEZE_KEY =
  'introTrackpadTeacherFreeze';

let teacherUnlockVersion = 0;
let teacherPracticeReleased = false;

function updateTeacherFreezeDisplay() {
  if (
    lessonView !== 'teacher' ||
    !teacherFreezeToggle ||
    !teacherFreezeStatus
  ) {
    return;
  }

  const frozen =
    teacherFreezeToggle.checked;

  teacherFreezeStatus.textContent =
    frozen
      ? 'Freeze is armed'
      : 'Trackpads are active';

  if (teacherUnlockButton) {
    teacherUnlockButton.disabled =
      !frozen;
  }
}

function updateTeacherPracticeReleaseDisplay() {
  if (
    lessonView !== 'teacher' ||
    !teacherPracticeReleaseButton
  ) {
    return;
  }

  const freezeArmed =
    Boolean(
      teacherFreezeToggle &&
      teacherFreezeToggle.checked
    );

  teacherPracticeReleaseButton.disabled =
    !freezeArmed;

  teacherPracticeReleaseButton.textContent =
    teacherPracticeReleased
      ? '🟢 Unlocked Students Released'
      : '🔓 Release Unlocked Students';

  teacherPracticeReleaseButton.classList.toggle(
    'is-released',
    teacherPracticeReleased
  );
}

function resetTeacherPracticeRelease() {
  if (!teacherPracticeReleased) {
    return;
  }

  teacherPracticeReleased = false;

  updateTeacherPracticeReleaseDisplay();
}

if (
  lessonView === 'teacher' &&
  teacherFreezeToggle
) {
  const savedFreeze =
    localStorage.getItem(
      TEACHER_FREEZE_KEY
    );

  teacherFreezeToggle.checked =
    savedFreeze === 'true';

  updateTeacherFreezeDisplay();
  updateTeacherPracticeReleaseDisplay();

  teacherFreezeToggle.addEventListener(
    'change',
    () => {
      localStorage.setItem(
        TEACHER_FREEZE_KEY,
        String(
          teacherFreezeToggle.checked
        )
      );

      /*
       * Turning Freeze OFF also broadcasts
       * an unlock to every student device.
       */
      if (!teacherFreezeToggle.checked) {
        teacherUnlockVersion += 1;
        teacherPracticeReleased = false;
      }

      updateTeacherFreezeDisplay();
      updateTeacherPracticeReleaseDisplay();

      void saveSharedLessonState();
    }
  );

  if (teacherPracticeReleaseButton) {
    teacherPracticeReleaseButton.addEventListener(
      'click',
      () => {
        if (
          !teacherFreezeToggle.checked
        ) {
          return;
        }

        teacherPracticeReleased =
          !teacherPracticeReleased;

        updateTeacherPracticeReleaseDisplay();

        void saveSharedLessonState();
      }
    );
  }

  if (teacherUnlockButton) {
    teacherUnlockButton.addEventListener(
      'click',
      () => {
        teacherUnlockVersion += 1;

        void saveSharedLessonState();

        teacherFreezeStatus.textContent =
          'Students unlocked';

        window.setTimeout(
          updateTeacherFreezeDisplay,
          1200
        );
      }
    );
  }
}

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

    stopLessonDragSound();

    completed += 1;

    updateCount();

    star.classList.add(
      'is-found'
    );

    success.classList.add(
      'is-visible'
    );

    playLessonSuccessSound();

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

      startLessonDragSound();
    }
  );

  area.addEventListener(
    'pointermove',
    (event) => {
      if (draggingByHover) {
        startLessonDragSound();
      }

      moveStarWithPointer(event);
    }
  );

  area.addEventListener(
    'pointerleave',
    () => {
      draggingByHover = false;
      stopLessonDragSound();
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

      startLessonDragSound();

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

  const practiceArea =
    document.getElementById(
      'pathPracticeArea'
    );

  if (practiceArea) {
    practiceArea.addEventListener(
      'pointermove',
      () => {
        if (
          started &&
          !completed
        ) {
          startLessonDragSound();
        }
      }
    );

    practiceArea.addEventListener(
      'pointerleave',
      () => {
        stopLessonDragSound();
      }
    );
  }

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

      stopLessonDragSound();

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

      playLessonSuccessSound();
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

  const rounds =
    choices
      .map((choice) => ({
        key:
          choice.dataset.picture,

        label:
          choice.dataset.label ||
          choice.dataset.picture,
      }))
      .filter(
        (round) =>
          Boolean(round.key)
      );

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

  /*
   * Keep each round short.
   * Six pictures can be displayed,
   * but students complete five.
   */
  rounds.splice(5);


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

    playLessonSuccessSound();

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
      1250
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

  const columns = 12;
  const rows = 7;

  const revealedCells =
    new Set();

  const totalCells =
    columns * rows;

  let finished = false;

  function markRevealedCell(x, y) {
    const column =
      Math.max(
        0,
        Math.min(
          columns - 1,
          Math.floor(
            (x / rect.width) *
            columns
          )
        )
      );

    const row =
      Math.max(
        0,
        Math.min(
          rows - 1,
          Math.floor(
            (y / rect.height) *
            rows
          )
        )
      );

    revealedCells.add(
      `${column}-${row}`
    );

    const ratio =
      revealedCells.size /
      totalCells;

    if (
      !finished &&
      ratio >= 0.92
    ) {
      finished = true;

      stopLessonDragSound();
      playLessonSuccessSound();

      progress.textContent =
        'Great job! ⭐';

      progress.classList.add(
        'reveal-complete'
      );
    }
  }

  function revealAt(event) {
    if (finished) {
      return;
    }

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

    startLessonDragSound();

    markRevealedCell(
      x,
      y
    );
  }

  canvas.addEventListener(
    'pointermove',
    revealAt
  );

  canvas.addEventListener(
    'pointerleave',
    stopLessonDragSound
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

          freezeEnabled:
            Boolean(
              teacherFreezeToggle &&
              teacherFreezeToggle.checked
            ),

          unlockVersion:
            teacherUnlockVersion,

          practiceReleased:
            teacherPracticeReleased,

          lesson:
            currentLessonNumber,

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

  const teacherLesson =
    Number.parseInt(
      state.lesson,
      10
    );

  if (
    synced &&
    Number.isInteger(teacherLesson) &&
    teacherLesson !== currentLessonNumber
  ) {
    window.location.href =
      `lesson.html?lesson=${teacherLesson}&view=student`;

    return;
  }

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
  applyStudentFreezeState(state);
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
      100
    );
}

/* ----------------------------------------
   Lesson sound system
----------------------------------------- */

const lessonSuccessSound =
  new Audio(
    'sounds/sparkle.mp3'
  );

const lessonDragSound =
  new Audio(
    'sounds/sparkledrag.mp3'
  );

lessonSuccessSound.preload =
  'auto';

lessonDragSound.preload =
  'auto';

lessonDragSound.loop = true;

lessonSuccessSound.volume =
  0.85;

lessonDragSound.volume =
  0.45;

let lessonDragSoundActive =
  false;

let lessonDragStopTimer = 0;

function playLessonSuccessSound() {
  try {
    lessonSuccessSound.currentTime =
      0;

    void lessonSuccessSound.play();
  } catch {
    // Keep the lesson usable if audio is blocked.
  }
}

function startLessonDragSound() {
  window.clearTimeout(
    lessonDragStopTimer
  );

  if (!lessonDragSoundActive) {
    lessonDragSoundActive = true;

    try {
      void lessonDragSound.play();
    } catch {
      // Keep the lesson usable if audio is blocked.
    }
  }

  lessonDragStopTimer =
    window.setTimeout(
      stopLessonDragSound,
      140
    );
}

function stopLessonDragSound() {
  window.clearTimeout(
    lessonDragStopTimer
  );

  lessonDragStopTimer = 0;

  if (!lessonDragSoundActive) {
    return;
  }

  lessonDragSoundActive = false;

  lessonDragSound.pause();

  try {
    lessonDragSound.currentTime =
      0;
  } catch {
    // Reset is optional.
  }
}

document.addEventListener(
  'pointermove',
  () => {
    const step =
      lesson &&
      Array.isArray(lesson.steps)
        ? lesson.steps[
            currentStepIndex
          ]
        : null;

    if (
      !step ||
      !step.activityType
    ) {
      return;
    }

    const movementActivities =
      new Set([
        'picturePractice',
        'revealPractice',
      ]);

    if (
      movementActivities.has(
        step.activityType
      )
    ) {
      startLessonDragSound();
    }
  }
);

document.addEventListener(
  'pointerleave',
  stopLessonDragSound
);

window.addEventListener(
  'blur',
  stopLessonDragSound
);

function initializeFollowLeader() {
  const area =
    document.getElementById(
      'followLeaderArea'
    );

  const dot =
    document.getElementById(
      'followLeaderDot'
    );

  const progressFill =
    document.getElementById(
      'followLeaderProgressFill'
    );

  const success =
    document.getElementById(
      'followLeaderSuccess'
    );

  if (
    !area ||
    !dot ||
    !progressFill ||
    !success
  ) {
    return;
  }

  const requiredSeconds = 10;
  const followDistance = 85;

  let followTime = 0;
  let lastTimestamp = 0;
  let pointerX = null;
  let pointerY = null;
  let pointerMoving = false;
  let pointerMoveTimer = 0;
  let completed = false;

  function step(timestamp) {
    if (completed) {
      return;
    }

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const delta =
      Math.min(
        0.05,
        (
          timestamp -
          lastTimestamp
        ) / 1000
      );

    lastTimestamp = timestamp;

    if (
      pointerX !== null &&
      pointerY !== null
    ) {
      const dotRect =
        dot.getBoundingClientRect();

      const dotX =
        dotRect.left +
        dotRect.width / 2;

      const dotY =
        dotRect.top +
        dotRect.height / 2;

      const distance =
        Math.hypot(
          pointerX - dotX,
          pointerY - dotY
        );

      const following =
        distance <= followDistance;

      if (following) {
        followTime += delta;

        if (pointerMoving) {
          startLessonDragSound();
        }
      } else {
        stopLessonDragSound();
      }

      const progress =
        Math.min(
          1,
          followTime /
          requiredSeconds
        );

      progressFill.style.width =
        `${progress * 100}%`;

      if (
        followTime >=
        requiredSeconds
      ) {
        completed = true;

        stopLessonDragSound();

        dot.style.animationPlayState =
          'paused';

        progressFill.style.width =
          '100%';

        success.classList.add(
          'is-visible'
        );

        playLessonSuccessSound();

        return;
      }
    }

    window.requestAnimationFrame(
      step
    );
  }

  area.addEventListener(
    'pointermove',
    (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      pointerMoving = true;

      window.clearTimeout(
        pointerMoveTimer
      );

      pointerMoveTimer =
        window.setTimeout(
          () => {
            pointerMoving = false;
            stopLessonDragSound();
          },
          140
        );
    }
  );

  area.addEventListener(
    'pointerleave',
    () => {
      pointerX = null;
      pointerY = null;

      pointerMoving = false;

      stopLessonDragSound();
    }
  );

  window.requestAnimationFrame(
    step
  );
}

function initializeButterflyPractice() {
  const area =
    document.getElementById(
      'butterflyPracticeArea'
    );

  const butterfly =
    document.getElementById(
      'movingButterfly'
    );

  const success =
    document.getElementById(
      'butterflySuccess'
    );

  const count =
    document.getElementById(
      'butterflyCount'
    );

  if (
    !area ||
    !butterfly ||
    !success ||
    !count
  ) {
    return;
  }

  const positions = [
    { x: 76, y: 24 },
    { x: 25, y: 25 },
    { x: 72, y: 72 },
    { x: 30, y: 72 },
    { x: 52, y: 42 },
  ];

  let completed = 0;
  let locked = false;

  function moveButterfly() {
    if (completed >= positions.length) {
      return;
    }

    const position =
      positions[completed];

    butterfly.style.left =
      `${position.x}%`;

    butterfly.style.top =
      `${position.y}%`;
  }

  butterfly.addEventListener(
    'pointerenter',
    () => {
      if (
        locked ||
        completed >= positions.length
      ) {
        return;
      }

      locked = true;

      butterfly.classList.add(
        'is-caught'
      );

      success.classList.add(
        'is-visible'
      );

      playLessonSuccessSound();

      completed += 1;

      count.textContent =
        `${completed} / 5`;

      window.setTimeout(
        () => {
          butterfly.classList.remove(
            'is-caught'
          );

          success.classList.remove(
            'is-visible'
          );

          if (completed >= 5) {
            butterfly.textContent =
              '⭐';

            success.textContent =
              'You caught them all!';

            success.classList.add(
              'is-visible'
            );

            return;
          }

          moveButterfly();

          locked = false;
        },
        1100
      );
    }
  );

  moveButterfly();
}

function initializeDotPractice() {
  const area =
    document.getElementById(
      'dotPracticeArea'
    );

  const dots =
    Array.from(
      document.querySelectorAll(
        '.practice-dot'
      )
    );

  const lineLayer =
    document.getElementById(
      'dotLineLayer'
    );

  const success =
    document.getElementById(
      'dotSuccess'
    );

  if (
    !area ||
    dots.length === 0 ||
    !lineLayer ||
    !success
  ) {
    return;
  }

  let currentDot = 0;
  let completed = false;

  let lastPoint = null;
  let activeLine = null;

  function getDotCenter(dot) {
    const areaRect =
      area.getBoundingClientRect();

    const dotRect =
      dot.getBoundingClientRect();

    return {
      x:
        dotRect.left -
        areaRect.left +
        dotRect.width / 2,

      y:
        dotRect.top -
        areaRect.top +
        dotRect.height / 2,
    };
  }

  function createLine(
    x1,
    y1,
    x2,
    y2,
    isActive = false
  ) {
    const line =
      document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );

    line.setAttribute(
      'x1',
      String(x1)
    );

    line.setAttribute(
      'y1',
      String(y1)
    );

    line.setAttribute(
      'x2',
      String(x2)
    );

    line.setAttribute(
      'y2',
      String(y2)
    );

    line.setAttribute(
      'class',
      isActive
        ? 'dot-follow-line is-active'
        : 'dot-follow-line is-complete'
    );

    lineLayer.appendChild(
      line
    );

    return line;
  }

  function startFollowingFrom(dot) {
    lastPoint =
      getDotCenter(dot);

    activeLine =
      createLine(
        lastPoint.x,
        lastPoint.y,
        lastPoint.x,
        lastPoint.y,
        true
      );
  }

  function lockActiveLineTo(dot) {
    if (
      !activeLine ||
      !lastPoint
    ) {
      return;
    }

    const targetPoint =
      getDotCenter(dot);

    activeLine.setAttribute(
      'x2',
      String(targetPoint.x)
    );

    activeLine.setAttribute(
      'y2',
      String(targetPoint.y)
    );

    activeLine.setAttribute(
      'class',
      'dot-follow-line is-complete'
    );

    activeLine = null;
    lastPoint = targetPoint;
  }

  function updateDots() {
    dots.forEach(
      (dot, index) => {
        dot.classList.toggle(
          'is-active',
          index === currentDot
        );
      }
    );
  }

  area.addEventListener(
    'pointermove',
    (event) => {
      if (
        completed ||
        !activeLine ||
        !lastPoint
      ) {
        return;
      }

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left;

      const y =
        event.clientY -
        areaRect.top;

      activeLine.setAttribute(
        'x2',
        String(x)
      );

      activeLine.setAttribute(
        'y2',
        String(y)
      );

      startLessonDragSound();
    }
  );

  area.addEventListener(
    'pointerleave',
    stopLessonDragSound
  );

  dots.forEach(
    (dot, index) => {
      dot.addEventListener(
        'pointerenter',
        () => {
          if (
            completed ||
            index !== currentDot
          ) {
            return;
          }

          stopLessonDragSound();

          dot.classList.remove(
            'is-active'
          );

          dot.classList.add(
            'is-complete'
          );

          playLessonSuccessSound();

          if (currentDot === 0) {
            startFollowingFrom(dot);
            currentDot += 1;
            updateDots();
            return;
          }

          lockActiveLineTo(dot);

          currentDot += 1;

          if (
            currentDot >=
            dots.length
          ) {
            completed = true;

            success.textContent =
              'GREAT JOB! ⭐';

            success.classList.add(
              'is-visible'
            );

            return;
          }

          startFollowingFrom(dot);
          updateDots();
        }
      );
    }
  );

  updateDots();
}

function initializeSceneSearch() {
  const area =
    document.getElementById(
      'sceneSearchArea'
    );

  const prompt =
    document.getElementById(
      'sceneSearchPrompt'
    );

  const success =
    document.getElementById(
      'sceneSearchSuccess'
    );

  const count =
    document.getElementById(
      'sceneSearchCount'
    );

  const objects =
    Array.from(
      document.querySelectorAll(
        '.scene-search-object'
      )
    );

  if (
    !area ||
    !prompt ||
    !success ||
    !count ||
    objects.length === 0
  ) {
    return;
  }

  const rounds =
    objects.map(
      (object) => ({
        key:
          object.dataset.search,

        label:
          object.dataset.label,
      })
    );

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

  rounds.splice(5);

  const movers =
    objects.map(
      (object, index) => ({
        element: object,

        x:
          80 +
          (index % 3) * 190,

        y:
          65 +
          Math.floor(index / 3) * 180,

        vx:
          index % 2 === 0
            ? 38 + index * 3
            : -(34 + index * 3),

        vy:
          index % 3 === 0
            ? 28
            : -26,
      })
    );

  let lastTimestamp = 0;
  let roundIndex = 0;
  let locked = false;
  let finished = false;

  function updateRound() {
    const round =
      rounds[roundIndex];

    objects.forEach(
      (object) => {
        object.classList.remove(
          'is-target',
          'is-found'
        );

        if (
          object.dataset.search ===
          round.key
        ) {
          object.classList.add(
            'is-target'
          );
        }
      }
    );

    prompt.textContent =
      `Find the ${round.label}`;

    count.textContent =
      `${roundIndex} / 5`;
  }

  function animateObjects(timestamp) {
    if (finished) {
      return;
    }

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const delta =
      Math.min(
        0.04,
        (
          timestamp -
          lastTimestamp
        ) / 1000
      );

    lastTimestamp = timestamp;

    const areaRect =
      area.getBoundingClientRect();

    movers.forEach(
      (mover) => {
        const object =
          mover.element;

        const width =
          object.offsetWidth || 90;

        const height =
          object.offsetHeight || 90;

        mover.x +=
          mover.vx * delta;

        mover.y +=
          mover.vy * delta;

        if (
          mover.x <= 5 ||
          mover.x + width >=
            areaRect.width - 5
        ) {
          mover.vx *= -1;

          mover.x =
            Math.max(
              5,
              Math.min(
                areaRect.width -
                  width -
                  5,
                mover.x
              )
            );
        }

        if (
          mover.y <= 5 ||
          mover.y + height >=
            areaRect.height - 5
        ) {
          mover.vy *= -1;

          mover.y =
            Math.max(
              5,
              Math.min(
                areaRect.height -
                  height -
                  5,
                mover.y
              )
            );
        }

        object.style.left =
          `${mover.x}px`;

        object.style.top =
          `${mover.y}px`;

        object.style.right =
          'auto';

        object.style.bottom =
          'auto';
      }
    );

    window.requestAnimationFrame(
      animateObjects
    );
  }

  objects.forEach(
    (object) => {
      object.addEventListener(
        'pointerenter',
        () => {
          if (
            locked ||
            finished
          ) {
            return;
          }

          const round =
            rounds[roundIndex];

          if (
            object.dataset.search !==
            round.key
          ) {
            return;
          }

          locked = true;

          object.classList.add(
            'is-found'
          );

          success.textContent =
            'Found it! ⭐';

          success.classList.add(
            'is-visible'
          );

          playLessonSuccessSound();

          roundIndex += 1;

          count.textContent =
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
                finished = true;

                prompt.textContent =
                  'Finished!';

                success.textContent =
                  'YOU FOUND THEM ALL! ⭐';

                success.classList.add(
                  'is-visible',
                  'is-complete'
                );

                objects.forEach(
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
            1100
          );
        }
      );
    }
  );

  updateRound();

  window.requestAnimationFrame(
    animateObjects
  );
}

/* ----------------------------------------
   Reusable click sound
----------------------------------------- */

const lessonClickSound =
  new Audio(
    'sounds/click.mp3'
  );

lessonClickSound.preload =
  'auto';

lessonClickSound.volume =
  0.9;

let lastLessonClickSoundAt = 0;

function playLessonClickSound() {
  const now =
    performance.now();

  /*
   * Prevent duplicate click triggers from
   * stacking on top of one another.
   */
  if (
    now -
    lastLessonClickSoundAt <
    900
  ) {
    return;
  }

  lastLessonClickSoundAt =
    now;

  try {
    lessonClickSound.pause();

    lessonClickSound.currentTime =
      0;

    void lessonClickSound.play();
  } catch {
    // Keep lesson usable if audio is blocked.
  }
}

function initializeClickTeaching() {
  const sequence =
    document.getElementById(
      'clickTeachingSequence'
    );

  if (!sequence) {
    return;
  }

  const steps =
    Array.from(
      sequence.querySelectorAll(
        '.click-sequence-step'
      )
    );

  if (steps.length === 0) {
    return;
  }

  let stepIndex = 0;
  let stopped = false;
  let clickPlayedThisCycle = false;

  function clearStates() {
    steps.forEach(
      (step) => {
        step.classList.remove(
          'is-active',
          'is-clicking'
        );
      }
    );
  }

  function showStep() {
    if (
      stopped ||
      !document.body.contains(
        sequence
      )
    ) {
      stopped = true;
      return;
    }

    if (stepIndex === 0) {
      clickPlayedThisCycle = false;
    }

    clearStates();

    const step =
      steps[stepIndex];

    step.classList.add(
      'is-active'
    );

    if (
      step.dataset.clickStep ===
      'click'
    ) {
      step.classList.add(
        'is-clicking'
      );

      if (!clickPlayedThisCycle) {
        clickPlayedThisCycle = true;
        playLessonClickSound();
      }
    }

    window.setTimeout(
      () => {
        if (
          stopped ||
          !document.body.contains(
            sequence
          )
        ) {
          stopped = true;
          return;
        }

        stepIndex =
          (stepIndex + 1) %
          steps.length;

        showStep();
      },
      1400
    );
  }

  showStep();
}

function initializeWatchClick() {
  const cursor =
    document.getElementById(
      'watchClickCursor'
    );

  const finger =
    document.getElementById(
      'watchClickFinger'
    );

  const button =
    document.getElementById(
      'watchClickButton'
    );

  const stage =
    document.getElementById(
      'watchClickStage'
    );

  const pressRing =
    document.getElementById(
      'watchClickPress'
    );

  if (
    !cursor ||
    !finger ||
    !button ||
    !stage ||
    !pressRing
  ) {
    return;
  }

  let stopped = false;
  let clickPlayedThisCycle = false;

  async function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  async function runDemo() {
    while (!stopped) {
      if (
        !document.body.contains(
          cursor
        )
      ) {
        stopped = true;
        return;
      }

      clickPlayedThisCycle = false;

      stage.textContent =
        'MOVE';

      cursor.style.left =
        '15%';

      cursor.style.top =
        '63%';

      finger.classList.remove(
        'is-moving',
        'is-stopped',
        'is-clicking'
      );

      pressRing.classList.remove(
        'is-active'
      );

      button.classList.remove(
        'is-clicked'
      );

      await wait(700);

      if (stopped) {
        return;
      }

      /*
       * The finger slides across the trackpad
       * while the cursor moves on the screen.
       */
      finger.classList.add(
        'is-moving'
      );

      cursor.style.left =
        '47%';

      cursor.style.top =
        '48%';

      await wait(950);

      if (stopped) {
        return;
      }

      finger.classList.remove(
        'is-moving'
      );

      finger.classList.add(
        'is-stopped'
      );

      if (stopped) {
        return;
      }

      stage.textContent =
        'STOP';

      await wait(650);

      if (stopped) {
        return;
      }

      stage.textContent =
        'CLICK';

      finger.classList.add(
        'is-clicking'
      );

      button.classList.add(
        'is-clicked'
      );

      pressRing.classList.remove(
        'is-active'
      );

      void pressRing.offsetWidth;

      pressRing.classList.add(
        'is-active'
      );

      if (!clickPlayedThisCycle) {
        clickPlayedThisCycle = true;
        playLessonClickSound();
      }

      /*
       * Let the click register, then give
       * immediate success feedback while
       * the button is still reacting.
       */
      await wait(300);

      if (stopped) {
        return;
      }

      playLessonSuccessSound();

      await wait(220);

      if (stopped) {
        return;
      }

      stage.textContent =
        'LIFT';

      finger.classList.remove(
        'is-clicking'
      );

      await wait(650);

      if (stopped) {
        return;
      }

      stage.textContent =
        'GOOD!';

      await wait(900);
    }
  }

  void runDemo();
}

function initializeBigButtonPractice() {
  const button =
    document.getElementById(
      'bigClickButton'
    );

  const success =
    document.getElementById(
      'bigButtonSuccess'
    );

  const count =
    document.getElementById(
      'bigButtonCount'
    );

  if (
    !button ||
    !success ||
    !count
  ) {
    return;
  }

  const positions = [
    {
      x: 50,
      y: 50,
      label: 'CLICK ME!',
    },
    {
      x: 25,
      y: 30,
      label: 'CLICK HERE!',
    },
    {
      x: 74,
      y: 68,
      label: 'ONE MORE!',
    },
  ];

  let completed = 0;
  let locked = false;

  const clickWaitGuard =
    createClickWaitGuard(1100);

  function showButton() {
    const position =
      positions[completed];

    button.style.left =
      `${position.x}%`;

    button.style.top =
      `${position.y}%`;

    button.textContent =
      position.label;
  }

  button.addEventListener(
    'click',
    () => {
      if (
        completed >= positions.length
      ) {
        return;
      }

      if (locked) {
        showClickWaitReminder();
        return;
      }

      if (!clickWaitGuard.begin()) {
        return;
      }

      locked = true;
      clickWaitGuard.lock();

      /*
       * Physical action feedback first.
       */
      playLessonClickSound();

      button.classList.add(
        'is-correct'
      );

      /*
       * Success follows shortly after
       * the physical click.
       */
      window.setTimeout(
        () => {
          playLessonSuccessSound();

          success.textContent =
            'Great job! ⭐';

          success.classList.add(
            'is-visible'
          );
        },
        250
      );

      completed += 1;

      count.textContent =
        `${completed} / 3`;

      window.setTimeout(
        () => {
          if (
            completed >=
            positions.length
          ) {
            button.hidden = true;

            success.textContent =
              'GREAT JOB! ⭐';

            success.classList.add(
              'is-visible',
              'is-complete'
            );

            return;
          }

          success.classList.remove(
            'is-visible'
          );

          button.classList.remove(
            'is-correct'
          );

          showButton();

          locked = false;
        },
        1200
      );
    }
  );

  showButton();
}

function initializeClickPicturePractice() {
  const prompt =
    document.getElementById(
      'clickPicturePrompt'
    );

  const success =
    document.getElementById(
      'clickPictureSuccess'
    );

  const count =
    document.getElementById(
      'clickPictureCount'
    );

  const choices =
    Array.from(
      document.querySelectorAll(
        '.click-picture-choice'
      )
    );

  if (
    !prompt ||
    !success ||
    !count ||
    choices.length === 0
  ) {
    return;
  }

  const rounds =
    choices.map(
      (choice) => ({
        key:
          choice.dataset.clickPicture,

        label:
          choice.dataset.label,
      })
    );

  /*
   * Randomize the targets so students
   * cannot predict where to move next.
   */
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

  rounds.splice(5);

  let roundIndex = 0;
  let locked = false;

  const clickWaitGuard =
    createClickWaitGuard(1100);

  function updateRound() {
    const round =
      rounds[roundIndex];

    choices.forEach(
      (choice) => {
        choice.classList.remove(
          'is-target',
          'is-correct'
        );

        if (
          choice.dataset.clickPicture ===
          round.key
        ) {
          choice.classList.add(
            'is-target'
          );
        }
      }
    );

    prompt.textContent =
      `Click the ${round.label}`;

    count.textContent =
      `${roundIndex} / 5`;
  }

  choices.forEach(
    (choice) => {
      choice.addEventListener(
        'click',
        () => {
          if (locked) {
            showClickWaitReminder();
            return;
          }

          const round =
            rounds[roundIndex];

          /*
           * Wrong picture:
           * no penalty and no negative sound.
           */
          if (
            choice.dataset.clickPicture !==
            round.key
          ) {
            return;
          }

          if (!clickWaitGuard.begin()) {
            return;
          }

          locked = true;
          clickWaitGuard.lock();

          playLessonClickSound();

          choice.classList.add(
            'is-correct'
          );

          window.setTimeout(
            () => {
              playLessonSuccessSound();

              success.textContent =
                'Great job! ⭐';

              success.classList.add(
                'is-visible'
              );
            },
            250
          );

          roundIndex += 1;

          count.textContent =
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
                  'Finished!';

                success.textContent =
                  'GREAT JOB! ⭐';

                success.classList.add(
                  'is-visible',
                  'click-picture-final-banner'
                );

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
            1200
          );
        }
      );
    }
  );

  updateRound();
}

function initializeBubblePractice() {
  const area =
    document.getElementById(
      'bubblePracticeArea'
    );

  const bubbles =
    Array.from(
      document.querySelectorAll(
        '.practice-bubble'
      )
    );

  const count =
    document.getElementById(
      'bubbleCount'
    );

  const success =
    document.getElementById(
      'bubbleSuccess'
    );

  if (
    !area ||
    bubbles.length === 0 ||
    !count ||
    !success
  ) {
    return;
  }

  const movers =
    bubbles.map(
      (bubble, index) => ({
        element: bubble,

        x:
          55 +
          (index % 3) * 210,

        y:
          45 +
          Math.floor(index / 3) * 190,

        vx:
          index % 2 === 0
            ? 32 + index * 3
            : -(30 + index * 3),

        vy:
          index % 3 === 0
            ? 24
            : -22,

        popped: false,
      })
    );

  let poppedCount = 0;
  let lastTimestamp = 0;
  let finished = false;
  let bubbleClickWaiting = false;

  const clickWaitGuard =
    createClickWaitGuard(650);

  function animateBubbles(timestamp) {
    if (finished) {
      return;
    }

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const delta =
      Math.min(
        0.04,
        (
          timestamp -
          lastTimestamp
        ) / 1000
      );

    lastTimestamp = timestamp;

    const areaRect =
      area.getBoundingClientRect();

    movers.forEach(
      (mover) => {
        if (mover.popped) {
          return;
        }

        const bubble =
          mover.element;

        const width =
          bubble.offsetWidth || 88;

        const height =
          bubble.offsetHeight || 88;

        mover.x +=
          mover.vx * delta;

        mover.y +=
          mover.vy * delta;

        if (
          mover.x <= 8 ||
          mover.x + width >=
            areaRect.width - 8
        ) {
          mover.vx *= -1;

          mover.x =
            Math.max(
              8,
              Math.min(
                areaRect.width -
                  width -
                  8,
                mover.x
              )
            );
        }

        if (
          mover.y <= 8 ||
          mover.y + height >=
            areaRect.height - 8
        ) {
          mover.vy *= -1;

          mover.y =
            Math.max(
              8,
              Math.min(
                areaRect.height -
                  height -
                  8,
                mover.y
              )
            );
        }

        bubble.style.left =
          `${mover.x}px`;

        bubble.style.top =
          `${mover.y}px`;
      }
    );

    window.requestAnimationFrame(
      animateBubbles
    );
  }

  area.addEventListener(
    'click',
    (event) => {
      if (!bubbleClickWaiting) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      showClickWaitReminder();
    },
    true
  );

  movers.forEach(
    (mover) => {
      mover.element.addEventListener(
        'click',
        () => {
          if (finished) {
            return;
          }

          if (mover.popped) {
            showClickWaitReminder();
            return;
          }

          if (!clickWaitGuard.begin()) {
            return;
          }

          clickWaitGuard.lock();
          mover.popped = true;

          bubbleClickWaiting = true;

          window.setTimeout(
            () => {
              bubbleClickWaiting = false;
            },
            750
          );

          playLessonClickSound();

          mover.element.classList.add(
            'is-popping'
          );

          poppedCount += 1;

          count.textContent =
            `${poppedCount} / 5`;

          window.setTimeout(
            playLessonSuccessSound,
            220
          );

          window.setTimeout(
            () => {
              mover.element.hidden =
                true;
            },
            300
          );

          if (
            poppedCount >=
            bubbles.length
          ) {
            finished = true;

            window.setTimeout(
              () => {
                success.textContent =
                  'GREAT JOB! ⭐';

                success.classList.add(
                  'is-visible',
                  'is-complete'
                );
              },
              500
            );
          }
        }
      );
    }
  );

  count.textContent =
    `0 / ${bubbles.length}`;

  window.requestAnimationFrame(
    animateBubbles
  );
}

function initializeTreasurePractice() {
  const area =
    document.getElementById(
      'treasurePracticeArea'
    );

  const boxes =
    Array.from(
      document.querySelectorAll(
        '.treasure-box'
      )
    );

  const success =
    document.getElementById(
      'treasureSuccess'
    );

  if (
    !area ||
    boxes.length === 0 ||
    !success
  ) {
    return;
  }

  const treasureIndex =
    Math.floor(
      Math.random() *
      boxes.length
    );

  let finished = false;

  const clickWaitGuard =
    createClickWaitGuard(700);

  const wrongReveals = [
    '🍪',
    '🐸',
    '🎈',
    '🧸',
    '🌼',
    '⚽',
  ];

  boxes.forEach(
    (box, index) => {
      let opened = false;

      box.addEventListener(
        'click',
        () => {
          if (finished) {
            return;
          }

          if (opened) {
            showClickWaitReminder();
            return;
          }

          if (!clickWaitGuard.begin()) {
            return;
          }

          clickWaitGuard.lock();
          opened = true;

          playLessonClickSound();

          if (
            index ===
            treasureIndex
          ) {
            finished = true;

            box.classList.add(
              'is-treasure'
            );

            box.innerHTML = `
              <span class="treasure-box-reveal">
                ⭐
              </span>
            `;

            window.setTimeout(
              () => {
                playLessonSuccessSound();

                success.textContent =
                  'YOU FOUND THE TREASURE! ⭐';

                success.classList.add(
                  'is-visible',
                  'treasure-final-banner'
                );
              },
              250
            );

            return;
          }

          box.classList.add(
            'is-open'
          );

          box.innerHTML = `
            <span class="treasure-box-reveal">
              ${
                wrongReveals[
                  index %
                  wrongReveals.length
                ]
              }
            </span>
          `;
        }
      );
    }
  );
}

/* ----------------------------------------
   Click Once + Wait teaching system
----------------------------------------- */

const lessonWrongSound =
  new Audio(
    'sounds/wrong.mp3'
  );

lessonWrongSound.preload =
  'auto';

lessonWrongSound.volume =
  0.75;

let lastWrongSoundAt = 0;
let clickWaitReminderTimer = 0;

function playLessonWrongSound() {
  const now =
    performance.now();

  if (
    now - lastWrongSoundAt <
    900
  ) {
    return;
  }

  lastWrongSoundAt =
    now;

  try {
    lessonWrongSound.pause();

    lessonWrongSound.currentTime =
      0;

    void lessonWrongSound.play();
  } catch {
    // Keep lesson usable if audio is blocked.
  }
}

function showClickWaitReminder() {
  const reminder =
    document.getElementById(
      'clickWaitReminder'
    );

  if (!reminder) {
    return;
  }

  playLessonWrongSound();

  window.clearTimeout(
    clickWaitReminderTimer
  );

  reminder.hidden = false;

  reminder.classList.remove(
    'is-showing'
  );

  void reminder.offsetWidth;

  reminder.classList.add(
    'is-showing'
  );

  clickWaitReminderTimer =
    window.setTimeout(
      () => {
        reminder.hidden = true;

        reminder.classList.remove(
          'is-showing'
        );
      },
      1400
    );
}

function createClickWaitGuard(
  waitMilliseconds = 900
) {
  let lockedUntil = 0;

  return {
    begin() {
      const now =
        performance.now();

      if (now < lockedUntil) {
        showClickWaitReminder();

        return false;
      }

      return true;
    },

    lock() {
      lockedUntil =
        performance.now() +
        waitMilliseconds;
    },

    clear() {
      lockedUntil = 0;
    },
  };
}

function initializeClickWaitTeaching() {
  const demo =
    document.getElementById(
      'clickWaitTeachingDemo'
    );

  const button =
    document.getElementById(
      'clickWaitDemoButton'
    );

  const thinking =
    document.getElementById(
      'clickWaitDemoThinking'
    );

  const answer =
    document.getElementById(
      'clickWaitDemoAnswer'
    );

  const words =
    document.getElementById(
      'clickWaitTeachingWords'
    );

  if (
    !demo ||
    !button ||
    !thinking ||
    !answer ||
    !words
  ) {
    return;
  }

  const cards =
    Array.from(
      demo.querySelectorAll(
        '.click-wait-teaching-card'
      )
    );

  let stopped = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  function activateCard(name) {
    cards.forEach(
      (card) => {
        card.classList.toggle(
          'is-active',
          card.dataset.waitStep === name
        );
      }
    );
  }

  async function run() {
    while (!stopped) {
      if (
        !document.body.contains(
          demo
        )
      ) {
        stopped = true;
        return;
      }

      button.classList.remove(
        'is-clicked'
      );

      thinking.classList.remove(
        'is-visible'
      );

      answer.classList.remove(
        'is-visible'
      );

      activateCard('click');

      words.textContent =
        'CLICK ONCE';

      await wait(700);

      if (stopped) {
        return;
      }

      button.classList.add(
        'is-clicked'
      );

      playLessonClickSound();

      await wait(350);

      if (stopped) {
        return;
      }

      button.classList.remove(
        'is-clicked'
      );

      activateCard('wait');

      words.textContent =
        'HANDS OFF — WAIT';

      thinking.classList.add(
        'is-visible'
      );

      /*
       * The intentional wait is the lesson.
       */
      await wait(1800);

      if (stopped) {
        return;
      }

      thinking.classList.remove(
        'is-visible'
      );

      activateCard('watch');

      words.textContent =
        'WATCH WHAT HAPPENS';

      answer.classList.add(
        'is-visible'
      );

      playLessonSuccessSound();

      await wait(1400);
    }
  }

  void run();
}

function initializeWeek4Review() {
  const grid =
    document.getElementById(
      'week4ReviewGrid'
    );

  const ready =
    document.getElementById(
      'week4ReviewReady'
    );

  if (!grid || !ready) {
    return;
  }

  const cards =
    Array.from(
      grid.querySelectorAll(
        '.week4-review-card'
      )
    );

  let stopped = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  async function run() {
    while (!stopped) {
      if (
        !document.body.contains(
          grid
        )
      ) {
        stopped = true;
        return;
      }

      cards.forEach(
        (card) => {
          card.classList.remove(
            'is-active',
            'is-ready'
          );
        }
      );

      ready.classList.remove(
        'is-visible'
      );

      for (
        let index = 0;
        index < cards.length;
        index += 1
      ) {
        cards.forEach(
          (card) =>
            card.classList.remove(
              'is-active'
            )
        );

        cards[index].classList.add(
          'is-active'
        );

        await wait(900);

        if (stopped) {
          return;
        }
      }

      cards.forEach(
        (card) => {
          card.classList.remove(
            'is-active'
          );

          card.classList.add(
            'is-ready'
          );
        }
      );

      ready.classList.add(
        'is-visible'
      );

      await wait(1800);
    }
  }

  void run();
}

function initializeFollowClick() {
  const area =
    document.getElementById(
      'followClickArea'
    );

  const target =
    document.getElementById(
      'followClickTarget'
    );

  const instruction =
    document.getElementById(
      'followClickInstruction'
    );

  const count =
    document.getElementById(
      'followClickCount'
    );

  const success =
    document.getElementById(
      'followClickSuccess'
    );

  if (
    !area ||
    !target ||
    !instruction ||
    !count ||
    !success
  ) {
    return;
  }

  const positions = [
    { x: 76, y: 30 },
    { x: 25, y: 72 },
    { x: 72, y: 70 },
    { x: 30, y: 28 },
    { x: 52, y: 52 },
  ];

  const clickWaitGuard =
    createClickWaitGuard(1000);

  let completed = 0;
  let readyToClick = false;
  let locked = false;
  let stopped = false;
  let firstMoveStarted = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  async function moveTarget() {
    if (
      stopped ||
      completed >=
        positions.length
    ) {
      return;
    }

    readyToClick = false;
    locked = false;

    target.classList.remove(
      'is-ready',
      'is-correct'
    );

    target.classList.add(
      'is-moving'
    );

    instruction.textContent =
      'FOLLOW THE STAR';

    instruction.classList.remove(
      'is-ready'
    );

    /*
     * Make the first round visibly move
     * before students are allowed to click.
     */
    if (!firstMoveStarted) {
      firstMoveStarted = true;

      target.style.transition =
        'none';

      target.style.left =
        '8%';

      target.style.top =
        '78%';

      void target.offsetWidth;

      target.style.transition = '';
    }

    const position =
      positions[completed];

    requestAnimationFrame(
      () => {
        target.style.left =
          `${position.x}%`;

        target.style.top =
          `${position.y}%`;
      }
    );

    await wait(1600);

    if (
      stopped ||
      !document.body.contains(
        target
      )
    ) {
      stopped = true;
      return;
    }

    target.classList.remove(
      'is-moving'
    );

    target.classList.add(
      'is-ready'
    );

    instruction.textContent =
      'STOP — CLICK ONCE!';

    instruction.classList.add(
      'is-ready'
    );

    readyToClick = true;
  }

  target.addEventListener(
    'click',
    () => {
      if (stopped) {
        return;
      }

      /*
       * Clicking while the target is moving
       * does not count.
       */
      if (!readyToClick) {
        return;
      }

      if (locked) {
        showClickWaitReminder();
        return;
      }

      if (!clickWaitGuard.begin()) {
        return;
      }

      locked = true;
      readyToClick = false;

      clickWaitGuard.lock();

      playLessonClickSound();

      target.classList.remove(
        'is-ready'
      );

      target.classList.add(
        'is-correct'
      );

      completed += 1;

      count.textContent =
        `${completed} / 5`;

      window.setTimeout(
        playLessonSuccessSound,
        250
      );

      if (
        completed >=
        positions.length
      ) {
        window.setTimeout(
          () => {
            target.hidden = true;

            instruction.hidden =
              true;

            success.textContent =
              'GREAT JOB! ⭐';

            success.classList.add(
              'is-visible',
              'is-complete'
            );
          },
          900
        );

        return;
      }

      window.setTimeout(
        () => {
          void moveTarget();
        },
        1100
      );
    }
  );

  void moveTarget();
}

function initializeWeek4MovingSearch() {
  const area =
    document.getElementById(
      'week4SearchArea'
    );

  const prompt =
    document.getElementById(
      'week4SearchPrompt'
    );

  const count =
    document.getElementById(
      'week4SearchCount'
    );

  const success =
    document.getElementById(
      'week4SearchSuccess'
    );

  const objects =
    Array.from(
      document.querySelectorAll(
        '.week4-search-object'
      )
    );

  if (
    !area ||
    !prompt ||
    !count ||
    !success ||
    objects.length === 0
  ) {
    return;
  }

  const rounds =
    objects.map(
      (object) => ({
        key:
          object.dataset.search,

        label:
          object.dataset.label,
      })
    );

  /*
   * Randomize which five objects
   * students must find.
   */
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

  rounds.splice(5);

  const movers =
    objects.map(
      (object, index) => ({
        element: object,

        x:
          45 +
          (index % 3) * 210,

        y:
          55 +
          Math.floor(index / 3) * 175,

        vx:
          index % 2 === 0
            ? 34 + index * 2
            : -(32 + index * 2),

        vy:
          index % 3 === 0
            ? 25
            : -23,
      })
    );

  const clickWaitGuard =
    createClickWaitGuard(900);

  let roundIndex = 0;
  let locked = false;
  let finished = false;
  let lastTimestamp = 0;

  function updateRound() {
    const round =
      rounds[roundIndex];

    objects.forEach(
      (object) => {
        object.classList.remove(
          'is-target',
          'is-correct'
        );

        if (
          object.dataset.search ===
          round.key
        ) {
          object.classList.add(
            'is-target'
          );
        }
      }
    );

    prompt.textContent =
      `Find and click the ${round.label}`;

    count.textContent =
      `${roundIndex} / 5`;
  }

  function animate(timestamp) {
    if (
      finished ||
      !document.body.contains(area)
    ) {
      return;
    }

    if (!lastTimestamp) {
      lastTimestamp = timestamp;
    }

    const delta =
      Math.min(
        0.04,
        (
          timestamp -
          lastTimestamp
        ) / 1000
      );

    lastTimestamp = timestamp;

    const areaRect =
      area.getBoundingClientRect();

    movers.forEach(
      (mover) => {
        const object =
          mover.element;

        const width =
          object.offsetWidth || 88;

        const height =
          object.offsetHeight || 88;

        mover.x +=
          mover.vx * delta;

        mover.y +=
          mover.vy * delta;

        if (
          mover.x <= 8 ||
          mover.x + width >=
            areaRect.width - 8
        ) {
          mover.vx *= -1;

          mover.x =
            Math.max(
              8,
              Math.min(
                areaRect.width -
                  width -
                  8,
                mover.x
              )
            );
        }

        if (
          mover.y <= 8 ||
          mover.y + height >=
            areaRect.height - 8
        ) {
          mover.vy *= -1;

          mover.y =
            Math.max(
              8,
              Math.min(
                areaRect.height -
                  height -
                  8,
                mover.y
              )
            );
        }

        object.style.left =
          `${mover.x}px`;

        object.style.top =
          `${mover.y}px`;
      }
    );

    window.requestAnimationFrame(
      animate
    );
  }

  objects.forEach(
    (object) => {
      object.addEventListener(
        'click',
        () => {
          if (finished) {
            return;
          }

          if (locked) {
            showClickWaitReminder();
            return;
          }

          const round =
            rounds[roundIndex];

          /*
           * Wrong object:
           * no penalty. Just keep looking.
           */
          if (
            object.dataset.search !==
            round.key
          ) {
            return;
          }

          if (!clickWaitGuard.begin()) {
            return;
          }

          locked = true;

          clickWaitGuard.lock();

          playLessonClickSound();

          object.classList.add(
            'is-correct'
          );

          roundIndex += 1;

          count.textContent =
            `${roundIndex} / 5`;

          window.setTimeout(
            playLessonSuccessSound,
            250
          );

          window.setTimeout(
            () => {
              if (
                roundIndex >=
                rounds.length
              ) {
                finished = true;

                prompt.textContent =
                  'Finished!';

                objects.forEach(
                  (item) => {
                    item.classList.remove(
                      'is-target'
                    );

                    item.classList.add(
                      'is-finished'
                    );
                  }
                );

                success.textContent =
                  'GREAT JOB! ⭐';

                success.classList.add(
                  'is-visible',
                  'is-complete'
                );

                return;
              }

              locked = false;
              updateRound();
            },
            1100
          );
        }
      );
    }
  );

  updateRound();

  window.requestAnimationFrame(
    animate
  );
}

function initializeCheckpointMaze() {
  const area =
    document.getElementById(
      'checkpointMazeArea'
    );

  const start =
    document.getElementById(
      'checkpointMazeStart'
    );

  const prompt =
    document.getElementById(
      'checkpointMazePrompt'
    );

  const success =
    document.getElementById(
      'checkpointMazeSuccess'
    );

  const checkpoints =
    Array.from(
      document.querySelectorAll(
        '.maze-checkpoint'
      )
    );

  if (
    !area ||
    !start ||
    !prompt ||
    !success ||
    checkpoints.length === 0
  ) {
    return;
  }

  const clickWaitGuard =
    createClickWaitGuard(850);

  let started = false;
  let currentCheckpoint = 0;
  let locked = false;
  let finished = false;

  function updateCheckpoint() {
    checkpoints.forEach(
      (checkpoint, index) => {
        checkpoint.classList.toggle(
          'is-active',
          index === currentCheckpoint
        );
      }
    );

    if (
      currentCheckpoint <
      checkpoints.length
    ) {
      prompt.textContent =
        `Follow the road → Click ${currentCheckpoint + 1}`;
    }
  }

  start.addEventListener(
    'pointerenter',
    () => {
      if (started) {
        return;
      }

      started = true;

      start.classList.add(
        'is-started'
      );

      startLessonDragSound();

      updateCheckpoint();
    }
  );

  area.addEventListener(
    'pointermove',
    () => {
      if (
        started &&
        !finished &&
        !locked
      ) {
        startLessonDragSound();
      }
    }
  );

  area.addEventListener(
    'pointerleave',
    stopLessonDragSound
  );

  checkpoints.forEach(
    (checkpoint, index) => {
      checkpoint.addEventListener(
        'click',
        () => {
          if (
            !started ||
            finished
          ) {
            return;
          }

          if (locked) {
            showClickWaitReminder();
            return;
          }

          if (
            index !==
            currentCheckpoint
          ) {
            return;
          }

          if (!clickWaitGuard.begin()) {
            return;
          }

          locked = true;

          clickWaitGuard.lock();

          stopLessonDragSound();

          playLessonClickSound();

          checkpoint.classList.remove(
            'is-active'
          );

          checkpoint.classList.add(
            'is-complete'
          );

          window.setTimeout(
            playLessonSuccessSound,
            250
          );

          currentCheckpoint += 1;

          window.setTimeout(
            () => {
              if (
                currentCheckpoint >=
                checkpoints.length
              ) {
                finished = true;

                prompt.textContent =
                  'Finished!';

                success.textContent =
                  'GREAT JOB! ⭐';

                success.classList.add(
                  'is-visible',
                  'is-complete'
                );

                return;
              }

              locked = false;

              updateCheckpoint();

              startLessonDragSound();
            },
            900
          );
        }
      );
    }
  );
}

function initializeWeek4Sequence() {
  const area =
    document.getElementById(
      'week4SequenceArea'
    );

  const lineLayer =
    document.getElementById(
      'week4SequenceLines'
    );

  const prompt =
    document.getElementById(
      'week4SequencePrompt'
    );

  const success =
    document.getElementById(
      'week4SequenceSuccess'
    );

  const targets =
    Array.from(
      document.querySelectorAll(
        '.week4-sequence-target'
      )
    );

  if (
    !area ||
    !lineLayer ||
    !prompt ||
    !success ||
    targets.length === 0
  ) {
    return;
  }

  const clickWaitGuard =
    createClickWaitGuard(850);

  let current = 0;
  let locked = false;
  let finished = false;

  function getCenter(target) {
    const areaRect =
      area.getBoundingClientRect();

    const targetRect =
      target.getBoundingClientRect();

    return {
      x:
        targetRect.left -
        areaRect.left +
        targetRect.width / 2,

      y:
        targetRect.top -
        areaRect.top +
        targetRect.height / 2,
    };
  }

  function drawLine(
    fromTarget,
    toTarget
  ) {
    const from =
      getCenter(fromTarget);

    const to =
      getCenter(toTarget);

    const line =
      document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );

    line.setAttribute(
      'x1',
      String(from.x)
    );

    line.setAttribute(
      'y1',
      String(from.y)
    );

    line.setAttribute(
      'x2',
      String(to.x)
    );

    line.setAttribute(
      'y2',
      String(to.y)
    );

    line.setAttribute(
      'class',
      'week4-sequence-line'
    );

    lineLayer.appendChild(
      line
    );
  }

  function updateTarget() {
    targets.forEach(
      (target, index) => {
        target.classList.toggle(
          'is-active',
          index === current
        );
      }
    );

    if (current < targets.length) {
      prompt.textContent =
        `Click ${current + 1}`;
    }
  }

  targets.forEach(
    (target, index) => {
      target.addEventListener(
        'click',
        () => {
          if (finished) {
            return;
          }

          if (locked) {
            showClickWaitReminder();
            return;
          }

          if (index !== current) {
            return;
          }

          if (!clickWaitGuard.begin()) {
            return;
          }

          locked = true;
          clickWaitGuard.lock();

          playLessonClickSound();

          target.classList.remove(
            'is-active'
          );

          target.classList.add(
            'is-complete'
          );

          if (current > 0) {
            drawLine(
              targets[current - 1],
              target
            );
          }

          current += 1;

          window.setTimeout(
            playLessonSuccessSound,
            250
          );

          window.setTimeout(
            () => {
              if (
                current >=
                targets.length
              ) {
                finished = true;

                prompt.textContent =
                  'Finished!';

                success.textContent =
                  'GREAT JOB! ⭐';

                success.classList.add(
                  'is-visible',
                  'is-complete'
                );

                return;
              }

              locked = false;
              updateTarget();
            },
            850
          );
        }
      );
    }
  );

  updateTarget();
}

function initializeWhackTarget() {
  const button =
    document.getElementById(
      'whackTarget'
    );

  const words =
    document.getElementById(
      'waitGreenWords'
    );

  const count =
    document.getElementById(
      'whackTargetCount'
    );

  const success =
    document.getElementById(
      'whackTargetSuccess'
    );

  if (
    !button ||
    !words ||
    !count ||
    !success
  ) {
    return;
  }

  let completed = 0;
  let state = 'red';
  let finished = false;
  let roundToken = 0;

  /*
   * True after the first correct green click
   * while we check whether the student waits.
   */
  let waitingAfterClick = false;
  let extraClickDetected = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  function setState(nextState) {
    state = nextState;

    button.classList.remove(
      'is-red',
      'is-yellow',
      'is-green',
      'is-correct'
    );

    button.classList.add(
      `is-${nextState}`
    );

    if (nextState === 'red') {
      button.textContent = '✋';

      words.textContent =
        'STOP — DO NOT CLICK';
    }

    if (nextState === 'yellow') {
      button.textContent = '👀';

      words.textContent =
        'GET READY...';
    }

    if (nextState === 'green') {
      button.textContent = '👇';

      words.textContent =
        'CLICK ONCE!';
    }
  }

  async function runRound() {
    if (
      finished ||
      !document.body.contains(
        button
      )
    ) {
      return;
    }

    const token =
      ++roundToken;

    waitingAfterClick = false;
    extraClickDetected = false;

    setState('red');

    const redWait =
      1100 +
      Math.floor(
        Math.random() * 900
      );

    await wait(redWait);

    if (
      finished ||
      token !== roundToken
    ) {
      return;
    }

    setState('yellow');

    await wait(
      650 +
      Math.floor(
        Math.random() * 350
      )
    );

    if (
      finished ||
      token !== roundToken
    ) {
      return;
    }

    setState('green');
  }

  async function checkSingleClick() {
    waitingAfterClick = true;
    extraClickDetected = false;

    button.classList.remove(
      'is-green'
    );

    button.classList.add(
      'is-correct'
    );

    button.textContent = '✋';

    words.textContent =
      'NOW WAIT...';

    /*
     * This is the important teaching window.
     * The point is NOT earned yet.
     */
    await wait(750);

    if (
      finished ||
      !document.body.contains(
        button
      )
    ) {
      return;
    }

    waitingAfterClick = false;

    if (extraClickDetected) {
      /*
       * They clicked more than once.
       * No point. Retry.
       */
      words.textContent =
        'CLICK ONCE — THEN WAIT!';

      button.classList.remove(
        'is-correct'
      );

      await wait(900);

      if (!finished) {
        void runRound();
      }

      return;
    }

    /*
     * They clicked once AND waited.
     * Now the point is earned.
     */
    completed += 1;

    count.textContent =
      `${completed} / 5`;

    button.textContent = '⭐';

    words.textContent =
      'GOOD WAITING!';

    playLessonSuccessSound();

    await wait(900);

    if (completed >= 5) {
      finished = true;

      button.hidden = true;
      words.hidden = true;

      success.textContent =
        'GREAT JOB! ⭐';

      success.classList.add(
        'is-visible',
        'is-complete'
      );

      return;
    }

    void runRound();
  }

  button.addEventListener(
    'click',
    () => {
      if (finished) {
        return;
      }

      /*
       * A second click during the waiting
       * window cancels this round's point.
       */
      if (waitingAfterClick) {
        if (!extraClickDetected) {
          extraClickDetected = true;

          playLessonWrongSound();
          showClickWaitReminder();

          words.textContent =
            'TOO MANY CLICKS — WAIT!';
        }

        return;
      }

      /*
       * Clicking before green:
       * no point.
       */
      if (
        state === 'red' ||
        state === 'yellow'
      ) {
        playLessonWrongSound();
        showClickWaitReminder();

        words.textContent =
          'WAIT FOR GREEN! ✋';

        return;
      }

      if (state !== 'green') {
        return;
      }

      /*
       * First correct click.
       * Still no point until they wait.
       */
      state = 'checking';

      playLessonClickSound();

      void checkSingleClick();
    }
  );

  count.textContent = '0 / 5';

  void runRound();
}

function initializeWeek4RevealChoose() {
  const area =
    document.getElementById(
      'week4RevealArea'
    );

  const canvas =
    document.getElementById(
      'week4RevealCanvas'
    );

  const progress =
    document.getElementById(
      'week4RevealProgress'
    );

  const success =
    document.getElementById(
      'week4RevealSuccess'
    );

  if (
    !area ||
    !canvas ||
    !progress ||
    !success
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
    Math.round(
      rect.width * scale
    );

  canvas.height =
    Math.round(
      rect.height * scale
    );

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
    '#66788a';

  context.fillRect(
    0,
    0,
    rect.width,
    rect.height
  );

  context.fillStyle =
    'rgba(255,255,255,0.13)';

  for (
    let y = 0;
    y < rect.height;
    y += 32
  ) {
    for (
      let x = 0;
      x < rect.width;
      x += 32
    ) {
      context.beginPath();

      context.arc(
        x + 16,
        y + 16,
        3,
        0,
        Math.PI * 2
      );

      context.fill();
    }
  }

  context.globalCompositeOperation =
    'destination-out';

  const columns = 14;
  const rows = 8;

  const revealedCells =
    new Set();

  const totalCells =
    columns * rows;

  const spiderThresholds =
    [0.30, 0.50, 0.70, 0.85];

  const spiderPositions = [
    { x: 24, y: 28 },
    { x: 72, y: 30 },
    { x: 34, y: 68 },
    { x: 70, y: 70 },
  ];

  let nextSpiderIndex = 0;
  let spiderActive = false;
  let finished = false;

  const spider =
    document.createElement(
      'button'
    );

  spider.type = 'button';
  spider.className =
    'week4-reveal-spider';

  spider.textContent = '🕷️';

  spider.hidden = true;
  spider.style.display = 'none';

  area.appendChild(spider);

  function showSpider() {
    if (
      spiderActive ||
      nextSpiderIndex >=
        spiderThresholds.length
    ) {
      return;
    }

    const position =
      spiderPositions[
        nextSpiderIndex
      ];

    spider.style.left =
      `${position.x}%`;

    spider.style.top =
      `${position.y}%`;

    spider.hidden = false;
    spider.style.display = '';

    spiderActive = true;

    stopLessonDragSound();

    progress.textContent =
      'Click the spider! 🕷️';
  }

  function finishChallenge() {
    if (finished) {
      return;
    }

    finished = true;

    stopLessonDragSound();

    context.clearRect(
      0,
      0,
      rect.width,
      rect.height
    );

    spider.hidden = true;

    progress.hidden = true;

    playLessonSuccessSound();

    success.textContent =
      'GREAT JOB! ⭐';

    success.classList.add(
      'is-visible',
      'is-complete'
    );
  }

  function checkProgress() {
    const ratio =
      revealedCells.size /
      totalCells;

    if (
      !spiderActive &&
      nextSpiderIndex <
        spiderThresholds.length &&
      ratio >=
        spiderThresholds[
          nextSpiderIndex
        ]
    ) {
      showSpider();
    }

    if (
      ratio >= 0.95 &&
      nextSpiderIndex >=
        spiderThresholds.length &&
      !spiderActive
    ) {
      finishChallenge();
    }
  }

  function markCell(x, y) {
    const column =
      Math.max(
        0,
        Math.min(
          columns - 1,
          Math.floor(
            (x / rect.width) *
            columns
          )
        )
      );

    const row =
      Math.max(
        0,
        Math.min(
          rows - 1,
          Math.floor(
            (y / rect.height) *
            rows
          )
        )
      );

    for (
      let rowOffset = -1;
      rowOffset <= 1;
      rowOffset += 1
    ) {
      for (
        let columnOffset = -1;
        columnOffset <= 1;
        columnOffset += 1
      ) {
        const nearbyColumn =
          column + columnOffset;

        const nearbyRow =
          row + rowOffset;

        if (
          nearbyColumn >= 0 &&
          nearbyColumn < columns &&
          nearbyRow >= 0 &&
          nearbyRow < rows
        ) {
          revealedCells.add(
            `${nearbyColumn}-${nearbyRow}`
          );
        }
      }
    }

    checkProgress();
  }

  function revealAt(event) {
    if (
      finished ||
      spiderActive
    ) {
      return;
    }

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
      28,
      0,
      Math.PI * 2
    );

    context.fill();

    startLessonDragSound();

    markCell(x, y);
  }

  canvas.addEventListener(
    'pointermove',
    revealAt
  );

  canvas.addEventListener(
    'pointerleave',
    stopLessonDragSound
  );

  let waitingAfterSpiderClick = false;
  let extraClickDetected = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  spider.addEventListener(
    'click',
    async () => {
      if (
        finished ||
        !spiderActive
      ) {
        return;
      }

      if (waitingAfterSpiderClick) {
        if (!extraClickDetected) {
          extraClickDetected = true;

          showClickWaitReminder();
        }

        return;
      }

      waitingAfterSpiderClick = true;
      extraClickDetected = false;

      playLessonClickSound();

      spider.classList.add(
        'is-clicked'
      );

      progress.textContent =
        'Now wait...';

      await wait(700);

      waitingAfterSpiderClick =
        false;

      if (extraClickDetected) {
        spider.classList.remove(
          'is-clicked'
        );

        progress.textContent =
          'Click once — then wait!';

        await wait(700);

        progress.textContent =
          'Click the spider! 🕷️';

        return;
      }

      spider.classList.remove(
        'is-clicked'
      );

      spider.hidden = true;
      spider.style.display = 'none';

      spiderActive = false;

      nextSpiderIndex += 1;

      playLessonSuccessSound();

      progress.textContent =
        'Keep revealing!';

      checkProgress();
    }
  );
}

function initializeWeek5TeamDemo() {
  const cursor =
    document.getElementById(
      'week5TeamCursor'
    );

  const rightHand =
    document.getElementById(
      'week5DemoRight'
    );

  const leftHand =
    document.getElementById(
      'week5DemoLeft'
    );

  const pressHold =
    document.getElementById(
      'week5LeftPressHold'
    );

  const words =
    document.getElementById(
      'week5TeamWords'
    );

  const target =
    document.querySelector(
      '.week5-team-target'
    );

  if (
    !cursor ||
    !rightHand ||
    !leftHand ||
    !pressHold ||
    !words ||
    !target
  ) {
    return;
  }

  let stopped = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  async function run() {
    while (!stopped) {
      if (
        !document.body.contains(
          cursor
        )
      ) {
        stopped = true;
        return;
      }

      /*
       * RESET
       */
      stopLessonSlideSound();

      cursor.style.left = '18%';
      cursor.style.top = '62%';

      target.style.left = '70%';
      target.style.top = '45%';

      rightHand.classList.remove(
        'is-moving',
        'is-moving-to-star',
        'is-dragging-star'
      );

      leftHand.classList.remove(
        'is-clicking'
      );

      pressHold.classList.remove(
        'is-holding'
      );

      target.classList.remove(
        'is-clicked',
        'is-held'
      );

      words.textContent =
        'RIGHT HAND — MOVE TO THE STAR';

      await wait(700);

      if (stopped) {
        return;
      }

      /*
       * RIGHT HAND MOVES CURSOR
       * TO THE STAR.
       */
      rightHand.classList.add(
        'is-moving-to-star'
      );

      cursor.style.left = '66%';
      cursor.style.top = '43%';

      await wait(1200);

      if (stopped) {
        return;
      }

      words.textContent =
        'RIGHT HAND — STOP';

      await wait(550);

      if (stopped) {
        return;
      }

      /*
       * LEFT HAND PRESSES.
       * IT STAYS DOWN.
       */
      words.textContent =
        'LEFT HAND — PRESS AND HOLD';

      leftHand.classList.add(
        'is-clicking'
      );

      pressHold.classList.add(
        'is-holding'
      );

      target.classList.add(
        'is-held'
      );

      playLessonClickSound();

      await wait(650);

      if (stopped) {
        return;
      }

      /*
       * LEFT REMAINS HELD.
       * RIGHT HAND NOW DRAGS.
       */
      words.textContent =
        'KEEP HOLDING — RIGHT HAND MOVES';

      /*
       * The click has become a drag:
       * LEFT is held while RIGHT moves.
       */
      startLessonSlideSound();

      rightHand.classList.remove(
        'is-moving-to-star'
      );

      await wait(150);

      rightHand.classList.add(
        'is-dragging-star'
      );

      cursor.style.left = '30%';
      cursor.style.top = '68%';

      target.style.left = '34%';
      target.style.top = '69%';

      await wait(1250);

      if (stopped) {
        return;
      }

      /*
       * RELEASE ONLY AFTER
       * THE STAR HAS MOVED.
       */
      words.textContent =
        'LEFT HAND — RELEASE';

      /*
       * Movement is finished, so the
       * dragging sound stops before release.
       */
      stopLessonSlideSound();

      leftHand.classList.remove(
        'is-clicking'
      );

      pressHold.classList.remove(
        'is-holding'
      );

      target.classList.remove(
        'is-held'
      );

      target.classList.add(
        'is-clicked'
      );

      playLessonSuccessSound();

      await wait(800);

      words.textContent =
        'TWO HANDS — TWO JOBS!';

      await wait(1200);
    }
  }

  void run();
}

/* ----------------------------------------
   Two-hand drag / hold sound
----------------------------------------- */

const lessonSlideSound =
  new Audio(
    'sounds/slide.mp3'
  );

lessonSlideSound.preload =
  'auto';

lessonSlideSound.loop =
  true;

lessonSlideSound.volume =
  0.7;

let lessonSlideSoundPlaying =
  false;

function startLessonSlideSound() {
  if (lessonSlideSoundPlaying) {
    return;
  }

  lessonSlideSoundPlaying =
    true;

  try {
    lessonSlideSound.currentTime =
      0;

    void lessonSlideSound.play();
  } catch {
    lessonSlideSoundPlaying =
      false;
  }
}

function stopLessonSlideSound() {
  lessonSlideSoundPlaying =
    false;

  try {
    lessonSlideSound.pause();

    lessonSlideSound.currentTime =
      0;
  } catch {
    // Keep lesson usable if audio is blocked.
  }
}

document.addEventListener(
  'pointerleave',
  stopLessonSlideSound
);

window.addEventListener(
  'blur',
  stopLessonSlideSound
);

function initializeWeek5Review() {
  const row =
    document.getElementById(
      'week5ReviewRow'
    );

  const ready =
    document.getElementById(
      'week5ReviewReady'
    );

  if (!row || !ready) {
    return;
  }

  const cards =
    Array.from(
      row.querySelectorAll(
        '.week5-review-card'
      )
    );

  let stopped = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  async function run() {
    while (!stopped) {
      if (
        !document.body.contains(
          row
        )
      ) {
        stopped = true;
        return;
      }

      cards.forEach(
        (card) => {
          card.classList.remove(
            'is-active',
            'is-ready'
          );
        }
      );

      ready.classList.remove(
        'is-visible'
      );

      for (
        let index = 0;
        index < cards.length;
        index += 1
      ) {
        cards.forEach(
          (card) =>
            card.classList.remove(
              'is-active'
            )
        );

        cards[index].classList.add(
          'is-active'
        );

        await wait(1400);

        if (stopped) {
          return;
        }
      }

      cards.forEach(
        (card) => {
          card.classList.remove(
            'is-active'
          );

          card.classList.add(
            'is-ready'
          );
        }
      );

      ready.classList.add(
        'is-visible'
      );

      await wait(2200);
    }
  }

  void run();
}

function initializeWeek5TargetPractice() {
  const area =
    document.getElementById(
      'week5TargetArea'
    );

  const star =
    document.getElementById(
      'week5DragStar'
    );

  const target =
    document.getElementById(
      'week5DropTarget'
    );

  const prompt =
    document.getElementById(
      'week5HoldPrompt'
    );

  const indicator =
    document.getElementById(
      'week5HoldIndicator'
    );

  const count =
    document.getElementById(
      'week5TargetCount'
    );

  const success =
    document.getElementById(
      'week5TargetSuccess'
    );

  if (
    !area ||
    !star ||
    !target ||
    !prompt ||
    !indicator ||
    !count ||
    !success
  ) {
    return;
  }

  const rounds = [
    {
      starX: 18,
      starY: 55,
      targetX: 75,
      targetY: 55,
    },
    {
      starX: 72,
      starY: 28,
      targetX: 24,
      targetY: 70,
    },
    {
      starX: 24,
      starY: 28,
      targetX: 72,
      targetY: 72,
    },
    {
      starX: 74,
      starY: 68,
      targetX: 28,
      targetY: 30,
    },
    {
      starX: 20,
      starY: 72,
      targetX: 72,
      targetY: 28,
    },
  ];

  let roundIndex = 0;
  let holding = false;
  let dragging = false;
  let finished = false;

  let pointerId = null;

  let offsetX = 0;
  let offsetY = 0;

  function positionRound() {
    const round =
      rounds[roundIndex];

    star.style.left =
      `${round.starX}%`;

    star.style.top =
      `${round.starY}%`;

    target.style.left =
      `${round.targetX}%`;

    target.style.top =
      `${round.targetY}%`;

    target.style.right =
      'auto';

    target.style.transform =
      'translate(-50%, -50%)';

    star.classList.remove(
      'is-held'
    );

    target.classList.remove(
      'is-ready-release'
    );

    indicator.classList.remove(
      'is-visible'
    );

    prompt.textContent =
      '1. PRESS AND HOLD THE STAR';

    holding = false;
    dragging = false;

    stopLessonSlideSound();
  }

  function starIsInsideTarget() {
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

    return (
      starCenterX >=
        targetRect.left &&
      starCenterX <=
        targetRect.right &&
      starCenterY >=
        targetRect.top &&
      starCenterY <=
        targetRect.bottom
    );
  }

  star.addEventListener(
    'pointerdown',
    (event) => {
      if (finished) {
        return;
      }

      event.preventDefault();

      pointerId =
        event.pointerId;

      star.setPointerCapture(
        pointerId
      );

      const starRect =
        star.getBoundingClientRect();

      offsetX =
        event.clientX -
        starRect.left;

      offsetY =
        event.clientY -
        starRect.top;

      holding = true;
      dragging = false;

      star.classList.add(
        'is-held'
      );

      indicator.classList.add(
        'is-visible'
      );

      prompt.textContent =
        '2. KEEP HOLDING — MOVE WITH RIGHT HAND';

      playLessonClickSound();
    }
  );

  star.addEventListener(
    'pointermove',
    (event) => {
      if (
        !holding ||
        event.pointerId !==
          pointerId
      ) {
        return;
      }

      event.preventDefault();

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left -
        offsetX;

      const y =
        event.clientY -
        areaRect.top -
        offsetY;

      const maxX =
        areaRect.width -
        star.offsetWidth;

      const maxY =
        areaRect.height -
        star.offsetHeight;

      const clampedX =
        Math.max(
          0,
          Math.min(
            maxX,
            x
          )
        );

      const clampedY =
        Math.max(
          0,
          Math.min(
            maxY,
            y
          )
        );

      star.style.left =
        `${clampedX}px`;

      star.style.top =
        `${clampedY}px`;

      star.style.transform =
        'none';

      if (!dragging) {
        dragging = true;

        startLessonSlideSound();
      }

      if (
        starIsInsideTarget()
      ) {
        target.classList.add(
          'is-ready-release'
        );

        prompt.textContent =
          '3. NOW RELEASE!';
      } else {
        target.classList.remove(
          'is-ready-release'
        );

        prompt.textContent =
          'KEEP HOLDING — KEEP MOVING';
      }
    }
  );

  function finishPointer(
    event
  ) {
    if (
      !holding ||
      event.pointerId !==
        pointerId
    ) {
      return;
    }

    holding = false;

    stopLessonSlideSound();

    indicator.classList.remove(
      'is-visible'
    );

    star.classList.remove(
      'is-held'
    );

    const correctRelease =
      starIsInsideTarget();

    if (!correctRelease) {
      /*
       * The student lifted the LEFT finger
       * before completing the drag.
       */
      playLessonLetGoSound();

      prompt.textContent =
        'PRESS AND HOLD AGAIN';

      /*
       * Make the important lesson extremely
       * obvious when the LEFT finger lifts.
       */
      indicator.textContent =
        '✋ DON\'T LET GO!';

      indicator.classList.remove(
        'is-visible'
      );

      indicator.classList.add(
        'is-let-go-warning'
      );

      void indicator.offsetWidth;

      indicator.classList.add(
        'is-visible'
      );

      window.setTimeout(
        () => {
          indicator.classList.remove(
            'is-visible',
            'is-let-go-warning'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';
        },
        1400
      );

      /*
       * Releasing too early sends the star
       * back to its starting position.
       */
      const round =
        rounds[roundIndex];

      star.style.left =
        `${round.starX}%`;

      star.style.top =
        `${round.starY}%`;

      star.style.transform =
        'translate(-50%, -50%)';

      target.classList.remove(
        'is-ready-release'
      );

      window.setTimeout(
        () => {
          if (!finished) {
            prompt.textContent =
              'PRESS AND HOLD AGAIN';
          }
        },
        900
      );

      return;
    }

    roundIndex += 1;

    count.textContent =
      `${roundIndex} / 4`;

    prompt.textContent =
      'GREAT HOLD!';

    playLessonSuccessSound();

    if (
      roundIndex >=
      rounds.length
    ) {
      finished = true;

      window.setTimeout(
        () => {
          star.hidden = true;
          target.hidden = true;
          prompt.hidden = true;

          success.textContent =
            'GREAT JOB! ⭐';

          success.classList.add(
            'is-visible',
            'is-complete'
          );
        },
        700
      );

      return;
    }

    window.setTimeout(
      positionRound,
      900
    );
  }

  star.addEventListener(
    'pointerup',
    finishPointer
  );

  star.addEventListener(
    'pointercancel',
    finishPointer
  );

  count.textContent =
    '0 / 5';

  positionRound();
}

/* ----------------------------------------
   Released-too-early sound
----------------------------------------- */

const lessonLetGoSound =
  new Audio(
    'sounds/letgo.mp3'
  );

lessonLetGoSound.preload =
  'auto';

lessonLetGoSound.volume =
  0.8;

function playLessonLetGoSound() {
  try {
    lessonLetGoSound.pause();

    lessonLetGoSound.currentTime =
      0;

    void lessonLetGoSound.play();
  } catch {
    // Keep lesson usable if audio is blocked.
  }
}

function initializeWeek5HoldPath() {
  const area =
    document.getElementById(
      'week5HoldPathArea'
    );

  const star =
    document.getElementById(
      'week5PathStar'
    );

  const finish =
    document.getElementById(
      'week5PathFinish'
    );

  const prompt =
    document.getElementById(
      'week5PathPrompt'
    );

  const indicator =
    document.getElementById(
      'week5PathHoldIndicator'
    );

  const success =
    document.getElementById(
      'week5PathSuccess'
    );

  const path =
    area?.querySelector(
      '.week5-hold-path-main'
    );

  const svg =
    area?.querySelector(
      '.week5-hold-path-road'
    );

  if (
    !area ||
    !star ||
    !finish ||
    !prompt ||
    !indicator ||
    !success ||
    !path ||
    !svg
  ) {
    return;
  }

  let holding = false;
  let finished = false;
  let pointerId = null;

  let offsetX = 0;
  let offsetY = 0;

  function resetStar(message) {
    stopLessonSlideSound();

    holding = false;

    star.classList.remove(
      'is-held'
    );

    finish.classList.remove(
      'is-ready-release'
    );

    indicator.classList.remove(
      'is-visible'
    );

    star.style.left = '7%';
    star.style.bottom = '6%';
    star.style.top = 'auto';
    star.style.transform = 'none';

    prompt.textContent =
      message ||
      'PRESS AND HOLD THE STAR';
  }

  function pointIsNearPath(
    clientX,
    clientY
  ) {
    const svgRect =
      svg.getBoundingClientRect();

    const svgPoint =
      svg.createSVGPoint();

    svgPoint.x =
      (
        (clientX - svgRect.left) /
        svgRect.width
      ) * 760;

    svgPoint.y =
      (
        (clientY - svgRect.top) /
        svgRect.height
      ) * 390;

    const totalLength =
      path.getTotalLength();

    let closestDistance =
      Infinity;

    for (
      let distance = 0;
      distance <= totalLength;
      distance += 8
    ) {
      const point =
        path.getPointAtLength(
          distance
        );

      const dx =
        svgPoint.x - point.x;

      const dy =
        svgPoint.y - point.y;

      const currentDistance =
        Math.hypot(
          dx,
          dy
        );

      if (
        currentDistance <
        closestDistance
      ) {
        closestDistance =
          currentDistance;
      }
    }

    /*
     * Road is roughly 66px wide.
     * Give students some forgiveness.
     */
    return closestDistance <= 48;
  }

  function starIsInsideFinish() {
    const starRect =
      star.getBoundingClientRect();

    const finishRect =
      finish.getBoundingClientRect();

    const centerX =
      starRect.left +
      starRect.width / 2;

    const centerY =
      starRect.top +
      starRect.height / 2;

    return (
      centerX >= finishRect.left &&
      centerX <= finishRect.right &&
      centerY >= finishRect.top &&
      centerY <= finishRect.bottom
    );
  }

  star.addEventListener(
    'pointerdown',
    (event) => {
      if (finished) {
        return;
      }

      event.preventDefault();

      pointerId =
        event.pointerId;

      star.setPointerCapture(
        pointerId
      );

      const starRect =
        star.getBoundingClientRect();

      offsetX =
        event.clientX -
        starRect.left;

      offsetY =
        event.clientY -
        starRect.top;

      holding = true;

      star.classList.add(
        'is-held'
      );

      indicator.classList.add(
        'is-visible'
      );

      prompt.textContent =
        'KEEP HOLDING — FOLLOW THE PATH';

      playLessonClickSound();
    }
  );

  star.addEventListener(
    'pointermove',
    (event) => {
      if (
        !holding ||
        event.pointerId !==
          pointerId ||
        finished
      ) {
        return;
      }

      event.preventDefault();

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left -
        offsetX;

      const y =
        event.clientY -
        areaRect.top -
        offsetY;

      const maxX =
        areaRect.width -
        star.offsetWidth;

      const maxY =
        areaRect.height -
        star.offsetHeight;

      const clampedX =
        Math.max(
          0,
          Math.min(
            maxX,
            x
          )
        );

      const clampedY =
        Math.max(
          0,
          Math.min(
            maxY,
            y
          )
        );

      star.style.left =
        `${clampedX}px`;

      star.style.top =
        `${clampedY}px`;

      star.style.bottom =
        'auto';

      star.style.transform =
        'none';

      startLessonSlideSound();

      const starRect =
        star.getBoundingClientRect();

      const centerX =
        starRect.left +
        starRect.width / 2;

      const centerY =
        starRect.top +
        starRect.height / 2;

      /*
       * Leave the road = immediate reset.
       */
      if (
        !pointIsNearPath(
          centerX,
          centerY
        )
      ) {
        playLessonLetGoSound();

        prompt.textContent =
          'STAY ON THE PATH!';

        resetStar(
          'PRESS AND HOLD — TRY AGAIN'
        );

        return;
      }

      if (
        starIsInsideFinish()
      ) {
        finish.classList.add(
          'is-ready-release'
        );

        prompt.textContent =
          'NOW RELEASE!';
      } else {
        finish.classList.remove(
          'is-ready-release'
        );

        prompt.textContent =
          'KEEP HOLDING — FOLLOW THE PATH';
      }
    }
  );

  function finishPointer(
    event
  ) {
    if (
      !holding ||
      event.pointerId !==
        pointerId ||
      finished
    ) {
      return;
    }

    holding = false;

    stopLessonSlideSound();

    indicator.classList.remove(
      'is-visible'
    );

    star.classList.remove(
      'is-held'
    );

    if (
      !starIsInsideFinish()
    ) {
      playLessonLetGoSound();

      resetStar(
        'DON\'T LET GO — TRY AGAIN'
      );

      return;
    }

    finished = true;

    finish.classList.add(
      'is-ready-release'
    );

    prompt.textContent =
      'GREAT HOLD!';

    playLessonSuccessSound();

    window.setTimeout(
      () => {
        star.hidden = true;

        success.textContent =
          'GREAT JOB! ⭐';

        success.classList.add(
          'is-visible',
          'is-complete'
        );
      },
      600
    );
  }

  star.addEventListener(
    'pointerup',
    finishPointer
  );

  star.addEventListener(
    'pointercancel',
    finishPointer
  );

  resetStar();
}

function initializeWeek5DragSort() {
  const area =
    document.getElementById(
      'week5SortArea'
    );

  const prompt =
    document.getElementById(
      'week5SortPrompt'
    );

  const indicator =
    document.getElementById(
      'week5SortHoldIndicator'
    );

  const count =
    document.getElementById(
      'week5SortCount'
    );

  const success =
    document.getElementById(
      'week5SortSuccess'
    );

  const objects =
    Array.from(
      document.querySelectorAll(
        '.week5-sort-object'
      )
    );

  const targets =
    Array.from(
      document.querySelectorAll(
        '.week5-sort-target'
      )
    );

  if (
    !area ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    objects.length !== 5 ||
    targets.length !== 5
  ) {
    return;
  }

  let completed = 0;

  objects.forEach(
    (object) => {
      const startLeft =
        object.style.left;

      const startTop =
        object.style.top;

      let holding = false;
      let pointerId = null;
      let offsetX = 0;
      let offsetY = 0;

      const key =
        object.dataset.sort;

      const target =
        targets.find(
          (item) =>
            item.dataset.sortTarget ===
            key
        );

      if (!target) {
        return;
      }

      function resetObject() {
        stopLessonSlideSound();

        holding = false;

        object.classList.remove(
          'is-held'
        );

        target.classList.remove(
          'is-ready-release'
        );

        /*
         * Leave the shared warning alone here.
         * Early-release feedback may still
         * need to stay visible while the
         * object snaps back to its start.
         */

        /*
         * Remove inline drag coordinates so
         * CSS puts it back in its own row.
         */
        object.style.left =
          startLeft;

        object.style.top =
          startTop;

        object.style.transform =
          'translate(-50%, -50%)';
      }

      function isInsideTarget() {
        const objectRect =
          object.getBoundingClientRect();

        const targetRect =
          target.getBoundingClientRect();

        const centerX =
          objectRect.left +
          objectRect.width / 2;

        const centerY =
          objectRect.top +
          objectRect.height / 2;

        return (
          centerX >= targetRect.left &&
          centerX <= targetRect.right &&
          centerY >= targetRect.top &&
          centerY <= targetRect.bottom
        );
      }

      object.addEventListener(
        'pointerdown',
        (event) => {
          if (
            object.classList.contains(
              'is-complete'
            )
          ) {
            return;
          }

          event.preventDefault();

          pointerId =
            event.pointerId;

          object.setPointerCapture(
            pointerId
          );

          const rect =
            object.getBoundingClientRect();

          offsetX =
            event.clientX -
            rect.left;

          offsetY =
            event.clientY -
            rect.top;

          holding = true;

          object.classList.add(
            'is-held'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';

          indicator.classList.add(
            'is-visible'
          );

          prompt.textContent =
            'KEEP HOLDING — MOVE TO THE MATCH';

          playLessonClickSound();
        }
      );

      object.addEventListener(
        'pointermove',
        (event) => {
          if (
            !holding ||
            event.pointerId !==
              pointerId
          ) {
            return;
          }

          event.preventDefault();

          const areaRect =
            area.getBoundingClientRect();

          const x =
            event.clientX -
            areaRect.left -
            offsetX;

          const y =
            event.clientY -
            areaRect.top -
            offsetY;

          const maxX =
            areaRect.width -
            object.offsetWidth;

          const maxY =
            areaRect.height -
            object.offsetHeight;

          object.style.left =
            `${
              Math.max(
                0,
                Math.min(
                  maxX,
                  x
                )
              )
            }px`;

          object.style.top =
            `${
              Math.max(
                0,
                Math.min(
                  maxY,
                  y
                )
              )
            }px`;

          object.style.transform =
            'none';

          startLessonSlideSound();

          if (isInsideTarget()) {
            target.classList.add(
              'is-ready-release'
            );

            prompt.textContent =
              'NOW RELEASE!';
          } else {
            target.classList.remove(
              'is-ready-release'
            );

            prompt.textContent =
              'KEEP HOLDING — FIND THE MATCH';
          }
        }
      );

      function finishDrag(event) {
        if (
          !holding ||
          event.pointerId !==
            pointerId
        ) {
          return;
        }

        holding = false;

        stopLessonSlideSound();

        indicator.classList.remove(
          'is-visible'
        );

        object.classList.remove(
          'is-held'
        );

        if (!isInsideTarget()) {
          playLessonLetGoSound();

          indicator.textContent =
            "✋ DON'T LET GO!";

          indicator.classList.add(
            'is-visible',
            'is-let-go-warning'
          );

          resetObject();

          window.setTimeout(
            () => {
              indicator.classList.remove(
                'is-visible',
                'is-let-go-warning'
              );

              indicator.textContent =
                '👈 KEEP HOLDING!';
            },
            1200
          );

          prompt.textContent =
            'PRESS AND HOLD AGAIN';

          return;
        }

        object.classList.add(
          'is-complete'
        );

        target.classList.remove(
          'is-ready-release'
        );

        target.classList.add(
          'is-complete'
        );

        object.hidden = true;

        completed += 1;

        count.textContent =
          `${completed} / 5`;

        prompt.textContent =
          'GREAT HOLD!';

        playLessonSuccessSound();

        if (completed >= 5) {
          prompt.hidden = true;

          success.textContent =
            'GREAT JOB! ⭐';

          success.classList.add(
            'is-visible',
            'is-complete'
          );

          return;
        }

        window.setTimeout(
          () => {
            prompt.textContent =
              'PRESS AND HOLD AN OBJECT';
          },
          750
        );
      }

      object.addEventListener(
        'pointerup',
        finishDrag
      );

      object.addEventListener(
        'pointercancel',
        finishDrag
      );
    }
  );

  count.textContent = '0 / 5';
}

function initializeWeek5Puzzle() {
  const area =
    document.getElementById(
      'week5PuzzleArea'
    );

  const prompt =
    document.getElementById(
      'week5PuzzlePrompt'
    );

  const indicator =
    document.getElementById(
      'week5PuzzleHoldIndicator'
    );

  const count =
    document.getElementById(
      'week5PuzzleCount'
    );

  const success =
    document.getElementById(
      'week5PuzzleSuccess'
    );

  const pieces =
    Array.from(
      document.querySelectorAll(
        '.week5-puzzle-piece'
      )
    );

  const slots =
    Array.from(
      document.querySelectorAll(
        '.week5-puzzle-slot'
      )
    );

  if (
    !area ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    pieces.length !== 6 ||
    slots.length !== 6
  ) {
    return;
  }

  let completed = 0;

  pieces.forEach(
    (piece) => {
      const pieceNumber =
        piece.dataset.piece;

      const slot =
        slots.find(
          (item) =>
            item.dataset.slot ===
            pieceNumber
        );

      if (!slot) {
        return;
      }

      /*
       * Save the CSS-defined starting
       * position before dragging begins.
       */
      const startingLeft =
        getComputedStyle(piece).left;

      const startingTop =
        getComputedStyle(piece).top;

      let holding = false;
      let pointerId = null;

      let offsetX = 0;
      let offsetY = 0;

      function getSlotOverlap(testSlot) {
        const pieceRect =
          piece.getBoundingClientRect();

        const slotRect =
          testSlot.getBoundingClientRect();

        const overlapLeft =
          Math.max(
            pieceRect.left,
            slotRect.left
          );

        const overlapTop =
          Math.max(
            pieceRect.top,
            slotRect.top
          );

        const overlapRight =
          Math.min(
            pieceRect.right,
            slotRect.right
          );

        const overlapBottom =
          Math.min(
            pieceRect.bottom,
            slotRect.bottom
          );

        const overlapWidth =
          Math.max(
            0,
            overlapRight -
            overlapLeft
          );

        const overlapHeight =
          Math.max(
            0,
            overlapBottom -
            overlapTop
          );

        return (
          overlapWidth *
          overlapHeight
        );
      }

      function getSlotUnderPiece() {
        let bestSlot = null;
        let bestOverlap = 0;

        slots.forEach(
          (testSlot) => {
            const overlap =
              getSlotOverlap(
                testSlot
              );

            if (
              overlap >
              bestOverlap
            ) {
              bestOverlap =
                overlap;

              bestSlot =
                testSlot;
            }
          }
        );

        /*
         * Require a little real overlap so
         * merely brushing the board edge
         * does not count as choosing a slot.
         */
        const pieceArea =
          piece.offsetWidth *
          piece.offsetHeight;

        if (
          bestOverlap <
          pieceArea * 0.18
        ) {
          return null;
        }

        return bestSlot;
      }

      function pieceIsInsideSlot() {
        return (
          getSlotUnderPiece() ===
          slot
        );
      }

      function resetPiece() {
        stopLessonSlideSound();

        holding = false;

        piece.classList.remove(
          'is-held'
        );

        slot.classList.remove(
          'is-ready-release'
        );

        piece.style.left =
          startingLeft;

        piece.style.top =
          startingTop;

        piece.style.transform =
          'none';
      }

      piece.addEventListener(
        'pointerdown',
        (event) => {
          if (
            piece.classList.contains(
              'is-complete'
            )
          ) {
            return;
          }

          event.preventDefault();

          pointerId =
            event.pointerId;

          piece.setPointerCapture(
            pointerId
          );

          const pieceRect =
            piece.getBoundingClientRect();

          offsetX =
            event.clientX -
            pieceRect.left;

          offsetY =
            event.clientY -
            pieceRect.top;

          holding = true;

          piece.classList.add(
            'is-held'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';

          indicator.classList.remove(
            'is-let-go-warning'
          );

          indicator.classList.add(
            'is-visible'
          );

          prompt.textContent =
            'KEEP HOLDING — FIND ITS SPOT';

          playLessonClickSound();
        }
      );

      piece.addEventListener(
        'pointermove',
        (event) => {
          if (
            !holding ||
            event.pointerId !==
              pointerId
          ) {
            return;
          }

          event.preventDefault();

          const areaRect =
            area.getBoundingClientRect();

          const x =
            event.clientX -
            areaRect.left -
            offsetX;

          const y =
            event.clientY -
            areaRect.top -
            offsetY;

          const maxX =
            areaRect.width -
            piece.offsetWidth;

          const maxY =
            areaRect.height -
            piece.offsetHeight;

          piece.style.left =
            `${
              Math.max(
                0,
                Math.min(
                  maxX,
                  x
                )
              )
            }px`;

          piece.style.top =
            `${
              Math.max(
                0,
                Math.min(
                  maxY,
                  y
                )
              )
            }px`;

          piece.style.transform =
            'none';

          startLessonSlideSound();

          if (pieceIsInsideSlot()) {
            slot.classList.add(
              'is-ready-release'
            );

            prompt.textContent =
              'NOW RELEASE!';
          } else {
            slot.classList.remove(
              'is-ready-release'
            );

            prompt.textContent =
              'KEEP HOLDING — FIND ITS SPOT';
          }
        }
      );

      function finishPiece(event) {
        if (
          !holding ||
          event.pointerId !==
            pointerId
        ) {
          return;
        }

        holding = false;

        stopLessonSlideSound();

        piece.classList.remove(
          'is-held'
        );

        indicator.classList.remove(
          'is-visible'
        );

        if (!pieceIsInsideSlot()) {
          const releasedSlot =
            getSlotUnderPiece();

          resetPiece();

          if (
            releasedSlot &&
            releasedSlot !== slot
          ) {
            playLessonWrongSound();

            indicator.textContent =
              '❌ WRONG SPOT!';

            prompt.textContent =
              'TRY A DIFFERENT SPOT';
          } else {
            playLessonLetGoSound();

            indicator.textContent =
              "✋ DON'T LET GO!";

            prompt.textContent =
              'PRESS AND HOLD AGAIN';
          }

          indicator.classList.add(
            'is-visible',
            'is-let-go-warning'
          );

          window.setTimeout(
            () => {
              indicator.classList.remove(
                'is-visible',
                'is-let-go-warning'
              );

              indicator.textContent =
                '👈 KEEP HOLDING!';
            },
            1400
          );

          return;
        }

        /*
         * Correct release:
         * lock this image section directly
         * into its matching puzzle slot.
         */
        slot.style.backgroundImage =
          'url("images/lego.png")';

        slot.style.backgroundSize =
          '330px 240px';

        const positions = [
          '0 0',
          '-110px 0',
          '-220px 0',
          '0 -120px',
          '-110px -120px',
          '-220px -120px',
        ];

        slot.style.backgroundPosition =
          positions[
            Number(pieceNumber)
          ];

        slot.classList.remove(
          'is-ready-release'
        );

        slot.classList.add(
          'is-complete'
        );

        piece.classList.add(
          'is-complete'
        );

        piece.hidden = true;

        completed += 1;

        count.textContent =
          `${completed} / 6`;

        prompt.textContent =
          'GREAT HOLD!';

        playLessonSuccessSound();

        if (completed >= 6) {
          prompt.textContent =
            'PICTURE COMPLETE!';

          window.setTimeout(
            () => {
              success.textContent =
                'GREAT JOB! ⭐';

              success.classList.add(
                'is-visible',
                'is-complete'
              );
            },
            500
          );

          return;
        }

        window.setTimeout(
          () => {
            prompt.textContent =
              'PRESS AND HOLD ANOTHER PIECE';
          },
          700
        );
      }

      piece.addEventListener(
        'pointerup',
        finishPiece
      );

      piece.addEventListener(
        'pointercancel',
        finishPiece
      );
    }
  );

  count.textContent =
    '0 / 6';
}

/* ----------------------------------------
   Student local Freeze Screen behavior
----------------------------------------- */

const studentFreezeOverlay =
  document.getElementById(
    'studentFreezeOverlay'
  );

let studentFreezeArmed = false;
let studentLocked = false;
let studentPracticeReleased = false;
let studentFreezeArmedAt = 0;
let lastStudentUnlockVersion = null;

function lockThisStudentScreen() {
  if (
    lessonView !== 'student' ||
    !studentFreezeOverlay ||
    studentLocked
  ) {
    return;
  }

  studentLocked = true;
  studentFreezeOverlay.hidden = false;

  document.body.classList.add(
    'student-screen-locked'
  );
}

function unlockThisStudentScreen() {
  if (
    lessonView !== 'student' ||
    !studentFreezeOverlay
  ) {
    return;
  }

  studentLocked = false;
  studentFreezeOverlay.hidden = true;

  document.body.classList.remove(
    'student-screen-locked'
  );
}

function applyStudentFreezeState(state) {
  if (
    lessonView !== 'student' ||
    !state
  ) {
    return;
  }

  const nextFreezeArmed =
    state.freezeEnabled === true;

  const nextPracticeReleased =
    state.practiceReleased === true;

  const nextUnlockVersion =
    Number.isInteger(
      state.unlockVersion
    )
      ? state.unlockVersion
      : 0;

  /*
   * First poll establishes the baseline.
   * Do not treat it as a new unlock.
   */
  if (
    lastStudentUnlockVersion === null
  ) {
    lastStudentUnlockVersion =
      nextUnlockVersion;
  } else if (
    nextUnlockVersion !==
    lastStudentUnlockVersion
  ) {
    lastStudentUnlockVersion =
      nextUnlockVersion;

    unlockThisStudentScreen();
  }

  /*
   * Freeze just became armed.
   * Give the trackpad a short grace period
   * so residual movement does not lock a child.
   */
  if (
    nextFreezeArmed &&
    !studentFreezeArmed
  ) {
    studentFreezeArmedAt =
      performance.now();
  }

  studentFreezeArmed =
    nextFreezeArmed;

  /*
   * Practice Release does NOT unlock
   * students who are already frozen.
   * It only prevents currently-unlocked
   * students from becoming newly frozen.
   */
  studentPracticeReleased =
    nextPracticeReleased;

  /*
   * Turning Freeze OFF always clears
   * any local lock.
   */
  if (!studentFreezeArmed) {
    unlockThisStudentScreen();
  }
}

function studentTrackpadActivity() {
  if (
    lessonView !== 'student' ||
    !studentFreezeArmed ||
    studentLocked ||
    studentPracticeReleased
  ) {
    return;
  }

  /*
   * Ignore the first 650ms after Freeze
   * becomes armed.
   */
  if (
    performance.now() -
      studentFreezeArmedAt <
    650
  ) {
    return;
  }

  lockThisStudentScreen();
}

if (lessonView === 'student') {
  /*
   * Local-only detection.
   * These events NEVER publish to the server.
   */
  window.addEventListener(
    'pointerdown',
    studentTrackpadActivity,
    {
      capture: true,
    }
  );

  window.addEventListener(
    'pointermove',
    studentTrackpadActivity,
    {
      capture: true,
    }
  );

  window.addEventListener(
    'click',
    studentTrackpadActivity,
    {
      capture: true,
    }
  );
}

function initializeWeek6Review() {
  const row =
    document.getElementById(
      'week6ReviewRow'
    );

  const ready =
    document.getElementById(
      'week6ReviewReady'
    );

  if (!row || !ready) {
    return;
  }

  const cards =
    Array.from(
      row.querySelectorAll(
        '.week6-review-card'
      )
    );

  let stopped = false;

  function wait(ms) {
    return new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );
  }

  async function run() {
    while (!stopped) {
      if (
        !document.body.contains(
          row
        )
      ) {
        stopped = true;
        return;
      }

      cards.forEach(
        (card) => {
          card.classList.remove(
            'is-active',
            'is-hold-focus',
            'is-ready'
          );
        }
      );

      ready.classList.remove(
        'is-visible'
      );

      for (
        let index = 0;
        index < cards.length;
        index += 1
      ) {
        cards.forEach(
          (card) => {
            card.classList.remove(
              'is-active',
              'is-hold-focus'
            );
          }
        );

        cards[index].classList.add(
          'is-active'
        );

        /*
         * HOLD stays highlighted longer.
         */
        if (index === 1) {
          cards[index].classList.add(
            'is-hold-focus'
          );

          await wait(2000);
        } else {
          await wait(1400);
        }

        if (stopped) {
          return;
        }
      }

      cards.forEach(
        (card) => {
          card.classList.remove(
            'is-active',
            'is-hold-focus'
          );

          card.classList.add(
            'is-ready'
          );
        }
      );

      ready.classList.add(
        'is-visible'
      );

      await wait(2400);
    }
  }

  void run();
}

function initializeWeek6Animals() {
  const area =
    document.getElementById(
      'week6AnimalArea'
    );

  const prompt =
    document.getElementById(
      'week6AnimalPrompt'
    );

  const indicator =
    document.getElementById(
      'week6AnimalHoldIndicator'
    );

  const count =
    document.getElementById(
      'week6AnimalCount'
    );

  const success =
    document.getElementById(
      'week6AnimalSuccess'
    );

  const animals =
    Array.from(
      document.querySelectorAll(
        '.week6-animal-object'
      )
    );

  const foods =
    Array.from(
      document.querySelectorAll(
        '.week6-animal-home'
      )
    );

  if (
    !area ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    animals.length !== 5 ||
    foods.length !== 5
  ) {
    return;
  }

  let completed = 0;

  animals.forEach(
    (animal) => {
      const key =
        animal.dataset.animal;

      const food =
        foods.find(
          (item) =>
            item.dataset.home === key
        );

      if (!food) {
        return;
      }

      const startingLeft =
        getComputedStyle(animal).left;

      const startingTop =
        getComputedStyle(animal).top;

      let holding = false;
      let pointerId = null;

      let offsetX = 0;
      let offsetY = 0;

      function getFoodUnderAnimal() {
        const animalRect =
          animal.getBoundingClientRect();

        const centerX =
          animalRect.left +
          animalRect.width / 2;

        const centerY =
          animalRect.top +
          animalRect.height / 2;

        return (
          foods.find(
            (testFood) => {
              const rect =
                testFood.getBoundingClientRect();

              return (
                centerX >= rect.left &&
                centerX <= rect.right &&
                centerY >= rect.top &&
                centerY <= rect.bottom
              );
            }
          ) || null
        );
      }

      function resetAnimal() {
        stopLessonSlideSound();

        holding = false;

        animal.classList.remove(
          'is-held'
        );

        food.classList.remove(
          'is-ready-release'
        );

        animal.style.left =
          startingLeft;

        animal.style.top =
          startingTop;

        animal.style.transform =
          'translate(-50%, -50%)';
      }

      animal.addEventListener(
        'pointerdown',
        (event) => {
          if (
            animal.classList.contains(
              'is-complete'
            )
          ) {
            return;
          }

          event.preventDefault();

          pointerId =
            event.pointerId;

          animal.setPointerCapture(
            pointerId
          );

          const rect =
            animal.getBoundingClientRect();

          offsetX =
            event.clientX -
            rect.left;

          offsetY =
            event.clientY -
            rect.top;

          holding = true;

          animal.classList.add(
            'is-held'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';

          indicator.classList.remove(
            'is-let-go-warning'
          );

          indicator.classList.add(
            'is-visible'
          );

          prompt.textContent =
            'KEEP HOLDING — FIND ITS FOOD';

          playLessonClickSound();
        }
      );

      animal.addEventListener(
        'pointermove',
        (event) => {
          if (
            !holding ||
            event.pointerId !==
              pointerId
          ) {
            return;
          }

          event.preventDefault();

          const areaRect =
            area.getBoundingClientRect();

          const x =
            event.clientX -
            areaRect.left -
            offsetX;

          const y =
            event.clientY -
            areaRect.top -
            offsetY;

          const maxX =
            areaRect.width -
            animal.offsetWidth;

          const maxY =
            areaRect.height -
            animal.offsetHeight;

          animal.style.left =
            `${
              Math.max(
                0,
                Math.min(
                  maxX,
                  x
                )
              )
            }px`;

          animal.style.top =
            `${
              Math.max(
                0,
                Math.min(
                  maxY,
                  y
                )
              )
            }px`;

          animal.style.transform =
            'none';

          startLessonSlideSound();

          const releasedFood =
            getFoodUnderAnimal();

          if (releasedFood === food) {
            food.classList.add(
              'is-ready-release'
            );

            prompt.textContent =
              'NOW RELEASE!';
          } else {
            food.classList.remove(
              'is-ready-release'
            );

            prompt.textContent =
              'KEEP HOLDING — FIND ITS FOOD';
          }
        }
      );

      function finishAnimal(event) {
        if (
          !holding ||
          event.pointerId !==
            pointerId
        ) {
          return;
        }

        holding = false;

        stopLessonSlideSound();

        animal.classList.remove(
          'is-held'
        );

        indicator.classList.remove(
          'is-visible'
        );

        const releasedFood =
          getFoodUnderAnimal();

        if (releasedFood !== food) {
          resetAnimal();

          if (releasedFood) {
            playLessonWrongSound();

            indicator.textContent =
              '❌ WRONG FOOD!';

            prompt.textContent =
              'TRY A DIFFERENT FOOD';
          } else {
            playLessonLetGoSound();

            indicator.textContent =
              "✋ DON'T LET GO!";

            prompt.textContent =
              'PRESS AND HOLD AGAIN';
          }

          indicator.classList.add(
            'is-visible',
            'is-let-go-warning'
          );

          window.setTimeout(
            () => {
              indicator.classList.remove(
                'is-visible',
                'is-let-go-warning'
              );

              indicator.textContent =
                '👈 KEEP HOLDING!';
            },
            1400
          );

          return;
        }

        food.classList.remove(
          'is-ready-release'
        );

        food.classList.add(
          'is-complete'
        );

        animal.classList.add(
          'is-complete'
        );

        animal.hidden = true;

        completed += 1;

        count.textContent =
          `${completed} / 5`;

        prompt.textContent =
          'YUM! GREAT HOLD!';

        playLessonSuccessSound();

        if (completed >= 5) {
          prompt.hidden = true;

          success.textContent =
            'GREAT JOB! ⭐';

          success.classList.add(
            'is-visible',
            'is-complete'
          );

          return;
        }

        window.setTimeout(
          () => {
            prompt.textContent =
              'PRESS AND HOLD ANOTHER ANIMAL';
          },
          750
        );
      }

      animal.addEventListener(
        'pointerup',
        finishAnimal
      );

      animal.addEventListener(
        'pointercancel',
        finishAnimal
      );
    }
  );

  count.textContent =
    '0 / 5';
}

function initializeWeek6Obstacle() {
  const area =
    document.getElementById(
      'week6ObstacleArea'
    );

  const car =
    document.getElementById(
      'week6ObstacleObject'
    );

  const target =
    document.getElementById(
      'week6ObstacleTarget'
    );

  const prompt =
    document.getElementById(
      'week6ObstaclePrompt'
    );

  const indicator =
    document.getElementById(
      'week6ObstacleHoldIndicator'
    );

  const count =
    document.getElementById(
      'week6ObstacleCount'
    );

  const success =
    document.getElementById(
      'week6ObstacleSuccess'
    );

  const obstacles =
    Array.from(
      document.querySelectorAll(
        '.week6-obstacle'
      )
    );

  if (
    !area ||
    !car ||
    !target ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    obstacles.length !== 3
  ) {
    return;
  }

  const rounds = [
    {
      carX: 8,
      carY: 72,
      targetX: 82,
      targetY: 18,
      obstaclePositions: [
        [30, 45],
        [52, 18],
        [65, 60],
      ],
    },
    {
      carX: 10,
      carY: 20,
      targetX: 82,
      targetY: 72,
      obstaclePositions: [
        [30, 22],
        [48, 58],
        [68, 34],
      ],
    },
    {
      carX: 12,
      carY: 72,
      targetX: 80,
      targetY: 24,
      obstaclePositions: [
        [28, 62],
        [48, 34],
        [67, 58],
      ],
    },
    {
      carX: 10,
      carY: 26,
      targetX: 82,
      targetY: 68,
      obstaclePositions: [
        [29, 42],
        [50, 70],
        [69, 30],
      ],
    },
    {
      carX: 10,
      carY: 72,
      targetX: 82,
      targetY: 20,
      obstaclePositions: [
        [30, 28],
        [48, 55],
        [67, 34],
      ],
    },
  ];

  let roundIndex = 0;
  let holding = false;
  let pointerId = null;

  let offsetX = 0;
  let offsetY = 0;

  function applyRound() {
    const round =
      rounds[roundIndex];

    car.style.left =
      `${round.carX}%`;

    car.style.top =
      `${round.carY}%`;

    car.style.bottom =
      'auto';

    car.style.transform =
      'translate(-50%, -50%)';

    target.style.left =
      `${round.targetX}%`;

    target.style.top =
      `${round.targetY}%`;

    target.style.right =
      'auto';

    target.style.transform =
      'translate(-50%, -50%)';

    obstacles.forEach(
      (obstacle, index) => {
        const [
          x,
          y,
        ] =
          round.obstaclePositions[
            index
          ];

        obstacle.style.left =
          `${x}%`;

        obstacle.style.top =
          `${y}%`;
      }
    );

    target.classList.remove(
      'is-ready-release'
    );

    car.classList.remove(
      'is-held'
    );

    indicator.classList.remove(
      'is-visible',
      'is-let-go-warning'
    );

    prompt.textContent =
      'PRESS AND HOLD THE CAR';

    stopLessonSlideSound();
  }

  function carHitsObstacle() {
    const carRect =
      car.getBoundingClientRect();

    return obstacles.some(
      (obstacle) => {
        const rect =
          obstacle.getBoundingClientRect();

        const overlap =
          !(
            carRect.right <
              rect.left + 12 ||
            carRect.left >
              rect.right - 12 ||
            carRect.bottom <
              rect.top + 12 ||
            carRect.top >
              rect.bottom - 12
          );

        return overlap;
      }
    );
  }

  function carInsideTarget() {
    const carRect =
      car.getBoundingClientRect();

    const targetRect =
      target.getBoundingClientRect();

    const centerX =
      carRect.left +
      carRect.width / 2;

    const centerY =
      carRect.top +
      carRect.height / 2;

    return (
      centerX >= targetRect.left &&
      centerX <= targetRect.right &&
      centerY >= targetRect.top &&
      centerY <= targetRect.bottom
    );
  }

  function resetRound(
    message
  ) {
    holding = false;

    stopLessonSlideSound();

    car.classList.remove(
      'is-held'
    );

    target.classList.remove(
      'is-ready-release'
    );

    const round =
      rounds[roundIndex];

    car.style.left =
      `${round.carX}%`;

    car.style.top =
      `${round.carY}%`;

    car.style.transform =
      'translate(-50%, -50%)';

    prompt.textContent =
      message;
  }

  car.addEventListener(
    'pointerdown',
    (event) => {
      event.preventDefault();

      pointerId =
        event.pointerId;

      car.setPointerCapture(
        pointerId
      );

      const rect =
        car.getBoundingClientRect();

      offsetX =
        event.clientX -
        rect.left;

      offsetY =
        event.clientY -
        rect.top;

      holding = true;

      car.classList.add(
        'is-held'
      );

      indicator.textContent =
        '👈 KEEP HOLDING!';

      indicator.classList.remove(
        'is-let-go-warning'
      );

      indicator.classList.add(
        'is-visible'
      );

      prompt.textContent =
        'KEEP HOLDING — STEER AROUND!';

      playLessonClickSound();
    }
  );

  car.addEventListener(
    'pointermove',
    (event) => {
      if (
        !holding ||
        event.pointerId !==
          pointerId
      ) {
        return;
      }

      event.preventDefault();

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left -
        offsetX;

      const y =
        event.clientY -
        areaRect.top -
        offsetY;

      const maxX =
        areaRect.width -
        car.offsetWidth;

      const maxY =
        areaRect.height -
        car.offsetHeight;

      car.style.left =
        `${
          Math.max(
            0,
            Math.min(
              maxX,
              x
            )
          )
        }px`;

      car.style.top =
        `${
          Math.max(
            0,
            Math.min(
              maxY,
              y
            )
          )
        }px`;

      car.style.transform =
        'none';

      startLessonSlideSound();

      if (carHitsObstacle()) {
        playLessonWrongSound();

        resetRound(
          'WATCH OUT — TRY AGAIN!'
        );

        indicator.textContent =
          '🚧 AROUND THE OBSTACLES!';

        indicator.classList.add(
          'is-visible',
          'is-let-go-warning'
        );

        window.setTimeout(
          () => {
            indicator.classList.remove(
              'is-visible',
              'is-let-go-warning'
            );

            indicator.textContent =
              '👈 KEEP HOLDING!';
          },
          1200
        );

        return;
      }

      if (carInsideTarget()) {
        target.classList.add(
          'is-ready-release'
        );

        prompt.textContent =
          'NOW RELEASE!';
      } else {
        target.classList.remove(
          'is-ready-release'
        );

        prompt.textContent =
          'KEEP HOLDING — STEER AROUND!';
      }
    }
  );

  function finishCar(
    event
  ) {
    if (
      !holding ||
      event.pointerId !==
        pointerId
    ) {
      return;
    }

    holding = false;

    stopLessonSlideSound();

    car.classList.remove(
      'is-held'
    );

    indicator.classList.remove(
      'is-visible'
    );

    if (!carInsideTarget()) {
      playLessonLetGoSound();

      resetRound(
        'PRESS AND HOLD AGAIN'
      );

      indicator.textContent =
        "✋ DON'T LET GO!";

      indicator.classList.add(
        'is-visible',
        'is-let-go-warning'
      );

      window.setTimeout(
        () => {
          indicator.classList.remove(
            'is-visible',
            'is-let-go-warning'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';
        },
        1400
      );

      return;
    }

    roundIndex += 1;

    count.textContent =
      `${roundIndex} / 5`;

    prompt.textContent =
      'GREAT CONTROL!';

    playLessonSuccessSound();

    if (
      roundIndex >=
      rounds.length
    ) {
      car.hidden = true;
      target.hidden = true;

      prompt.hidden = true;

      success.textContent =
        'GREAT JOB! ⭐';

      success.classList.add(
        'is-visible',
        'is-complete'
      );

      return;
    }

    window.setTimeout(
      applyRound,
      800
    );
  }

  car.addEventListener(
    'pointerup',
    finishCar
  );

  car.addEventListener(
    'pointercancel',
    finishCar
  );

  count.textContent =
    '0 / 5';

  applyRound();
}

/* ----------------------------------------
   Student activity fit-to-screen
----------------------------------------- */

function fitStudentLessonToViewport() {
  if (
    lessonView !== 'student' ||
    !lessonActivity
  ) {
    return;
  }

  /*
   * Always measure at natural size first.
   */
  lessonActivity.style.zoom = '1';

  window.requestAnimationFrame(
    () => {
      const availableHeight =
        lessonActivity.clientHeight;

      const content =
        lessonActivity.firstElementChild;

      if (
        !content ||
        availableHeight <= 0
      ) {
        return;
      }

      const neededHeight =
        content.scrollHeight;

      if (
        neededHeight <=
        availableHeight
      ) {
        lessonActivity.style.zoom =
          '1';

        return;
      }

      /*
       * Leave a little breathing room.
       */
      const scale =
        Math.max(
          0.72,
          Math.min(
            1,
            (
              availableHeight - 8
            ) /
            neededHeight
          )
        );

      lessonActivity.style.zoom =
        String(scale);
    }
  );
}

window.addEventListener(
  'resize',
  fitStudentLessonToViewport
);

/* ----------------------------------------
   Student lesson completion screen
----------------------------------------- */

function showStudentLessonComplete() {
  if (
    lessonView !== 'student' ||
    !lessonActivity
  ) {
    return;
  }

  const weekNumber =
    Number.isInteger(
      currentLessonNumber
    )
      ? currentLessonNumber
      : '';

  lessonActivity.innerHTML = `
    <div class="student-lesson-complete">
      <div class="student-complete-stars">
        ⭐ ✨ ⭐
      </div>

      <h2>GREAT JOB!</h2>

      <p class="student-complete-message">
        You finished Week ${weekNumber}!
      </p>

      <div class="student-complete-wait">
        <span>🙌</span>

        <strong>
          Wait for your teacher.
        </strong>
      </div>

      <div class="student-complete-stars-bottom">
        ✨ ⭐ ✨
      </div>
    </div>
  `;

  /*
   * Students are finished, so remove
   * their lesson navigation.
   */
  if (previousStepButton) {
    previousStepButton.hidden = true;
  }

  if (nextStepButton) {
    nextStepButton.hidden = true;
  }
}

function initializeWeek6MovingDelivery() {
  const area =
    document.getElementById(
      'week6DeliveryArea'
    );

  const packageBox =
    document.getElementById(
      'week6DeliveryObject'
    );

  const truck =
    document.getElementById(
      'week6DeliveryTarget'
    );

  const prompt =
    document.getElementById(
      'week6DeliveryPrompt'
    );

  const indicator =
    document.getElementById(
      'week6DeliveryHoldIndicator'
    );

  const count =
    document.getElementById(
      'week6DeliveryCount'
    );

  const success =
    document.getElementById(
      'week6DeliverySuccess'
    );

  if (
    !area ||
    !packageBox ||
    !truck ||
    !prompt ||
    !indicator ||
    !count ||
    !success
  ) {
    return;
  }

  /*
   * Each delivery gets a little harder.
   *
   * Round 1: slow vertical
   * Round 2: faster vertical
   * Round 3: wider vertical range
   * Round 4: vertical + horizontal
   * Round 5: two-direction challenge
   */
  const rounds = [
    {
      packageY: 28,

      minY: 28,
      maxY: 66,

      minX: 82,
      maxX: 82,

      speedY: 0.009,
      speedX: 0,
    },

    {
      packageY: 68,

      minY: 20,
      maxY: 74,

      minX: 82,
      maxX: 82,

      speedY: 0.016,
      speedX: 0,
    },

    {
      packageY: 48,

      minY: 48,
      maxY: 48,

      minX: 60,
      maxX: 84,

      speedY: 0,
      speedX: 0.014,
    },

    {
      packageY: 68,

      minY: 22,
      maxY: 72,

      minX: 68,
      maxX: 84,

      speedY: 0.014,
      speedX: 0.009,
    },

    {
      packageY: 30,

      minY: 16,
      maxY: 78,

      minX: 58,
      maxX: 84,

      speedY: 0.018,
      speedX: 0.013,
    },
  ];

  let roundIndex = 0;

  let holding = false;
  let pointerId = null;

  let offsetX = 0;
  let offsetY = 0;

  let truckX = 82;
  let truckY = 28;

  let directionX = 1;
  let directionY = 1;

  let lastTime = 0;
  let stopped = false;
  let roundActive = false;

  function currentRound() {
    return rounds[roundIndex];
  }

  function resetPackage() {
    const round =
      currentRound();

    holding = false;

    stopLessonSlideSound();

    packageBox.classList.remove(
      'is-held'
    );

    truck.classList.remove(
      'is-ready-release'
    );

    packageBox.style.left =
      '10%';

    packageBox.style.top =
      `${round.packageY}%`;

    packageBox.style.transform =
      'translate(-50%, -50%)';
  }

  function prepareRound() {
    const round =
      currentRound();

    roundActive = true;

    truckX =
      round.maxX;

    truckY =
      round.minY;

    directionX = -1;
    directionY = 1;

    truck.style.left =
      `${truckX}%`;

    truck.style.right =
      'auto';

    truck.style.top =
      `${truckY}%`;

    resetPackage();

    prompt.textContent =
      `DELIVERY ${roundIndex + 1} OF 5 — PRESS AND HOLD`;

    indicator.classList.remove(
      'is-visible',
      'is-let-go-warning'
    );
  }

  function packageInsideTruck() {
    const packageRect =
      packageBox.getBoundingClientRect();

    const truckRect =
      truck.getBoundingClientRect();

    const centerX =
      packageRect.left +
      packageRect.width / 2;

    const centerY =
      packageRect.top +
      packageRect.height / 2;

    return (
      centerX >= truckRect.left &&
      centerX <= truckRect.right &&
      centerY >= truckRect.top &&
      centerY <= truckRect.bottom
    );
  }

  function animateTruck(timestamp) {
    if (
      stopped ||
      !document.body.contains(area)
    ) {
      return;
    }

    if (!lastTime) {
      lastTime = timestamp;
    }

    const delta =
      Math.min(
        40,
        timestamp - lastTime
      );

    lastTime = timestamp;

    if (!roundActive) {
      window.requestAnimationFrame(
        animateTruck
      );

      return;
    }

    const round =
      currentRound();

    truckY +=
      directionY *
      round.speedY *
      delta;

    if (truckY >= round.maxY) {
      truckY = round.maxY;
      directionY = -1;
    }

    if (truckY <= round.minY) {
      truckY = round.minY;
      directionY = 1;
    }

    if (round.speedX > 0) {
      truckX +=
        directionX *
        round.speedX *
        delta;

      if (truckX >= round.maxX) {
        truckX = round.maxX;
        directionX = -1;
      }

      if (truckX <= round.minX) {
        truckX = round.minX;
        directionX = 1;
      }
    }

    truck.style.left =
      `${truckX}%`;

    truck.style.top =
      `${truckY}%`;

    window.requestAnimationFrame(
      animateTruck
    );
  }

  packageBox.addEventListener(
    'pointerdown',
    (event) => {
      event.preventDefault();

      pointerId =
        event.pointerId;

      packageBox.setPointerCapture(
        pointerId
      );

      const rect =
        packageBox.getBoundingClientRect();

      offsetX =
        event.clientX -
        rect.left;

      offsetY =
        event.clientY -
        rect.top;

      holding = true;

      packageBox.classList.add(
        'is-held'
      );

      indicator.textContent =
        '👈 KEEP HOLDING!';

      indicator.classList.remove(
        'is-let-go-warning'
      );

      indicator.classList.add(
        'is-visible'
      );

      prompt.textContent =
        'KEEP HOLDING — CATCH THE TRUCK';

      playLessonClickSound();
    }
  );

  packageBox.addEventListener(
    'pointermove',
    (event) => {
      if (
        !holding ||
        event.pointerId !==
          pointerId
      ) {
        return;
      }

      event.preventDefault();

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left -
        offsetX;

      const y =
        event.clientY -
        areaRect.top -
        offsetY;

      const maxX =
        areaRect.width -
        packageBox.offsetWidth;

      const maxY =
        areaRect.height -
        packageBox.offsetHeight;

      packageBox.style.left =
        `${
          Math.max(
            0,
            Math.min(
              maxX,
              x
            )
          )
        }px`;

      packageBox.style.top =
        `${
          Math.max(
            0,
            Math.min(
              maxY,
              y
            )
          )
        }px`;

      packageBox.style.transform =
        'none';

      startLessonSlideSound();

      if (packageInsideTruck()) {
        truck.classList.add(
          'is-ready-release'
        );

        prompt.textContent =
          'NOW RELEASE!';
      } else {
        truck.classList.remove(
          'is-ready-release'
        );

        prompt.textContent =
          'KEEP HOLDING — CATCH THE TRUCK';
      }
    }
  );

  function finishDelivery(event) {
    if (
      !holding ||
      event.pointerId !==
        pointerId
    ) {
      return;
    }

    holding = false;

    stopLessonSlideSound();

    packageBox.classList.remove(
      'is-held'
    );

    indicator.classList.remove(
      'is-visible'
    );

    if (!packageInsideTruck()) {
      playLessonLetGoSound();

      resetPackage();

      indicator.textContent =
        "✋ DON'T LET GO!";

      indicator.classList.add(
        'is-visible',
        'is-let-go-warning'
      );

      prompt.textContent =
        'PRESS AND HOLD AGAIN';

      window.setTimeout(
        () => {
          indicator.classList.remove(
            'is-visible',
            'is-let-go-warning'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';
        },
        1400
      );

      return;
    }

    truck.classList.remove(
      'is-ready-release'
    );

    /*
     * Freeze the truck in place during
     * the success pause. Do not begin
     * the next round's movement yet.
     */
    roundActive = false;

    roundIndex += 1;

    count.textContent =
      `${roundIndex} / 5`;

    prompt.textContent =
      'DELIVERED! 📦';

    playLessonSuccessSound();

    if (
      roundIndex >=
      rounds.length
    ) {
      stopped = true;

      packageBox.hidden = true;
      truck.hidden = true;

      prompt.hidden = true;

      success.textContent =
        'GREAT JOB! ⭐';

      success.classList.add(
        'is-visible',
        'is-complete'
      );

      return;
    }

    window.setTimeout(
      prepareRound,
      800
    );
  }

  packageBox.addEventListener(
    'pointerup',
    finishDelivery
  );

  packageBox.addEventListener(
    'pointercancel',
    finishDelivery
  );

  count.textContent =
    '0 / 5';

  prepareRound();

  window.requestAnimationFrame(
    animateTruck
  );
}

function initializeWeek6CleanRoom() {
  const area =
    document.getElementById(
      'week6CleanArea'
    );

  const box =
    document.getElementById(
      'week6CleanBox'
    );

  const targetDisplay =
    document.getElementById(
      'week6CleanTarget'
    );

  const prompt =
    document.getElementById(
      'week6CleanPrompt'
    );

  const indicator =
    document.getElementById(
      'week6CleanHoldIndicator'
    );

  const count =
    document.getElementById(
      'week6CleanCount'
    );

  const success =
    document.getElementById(
      'week6CleanSuccess'
    );

  const objects =
    Array.from(
      document.querySelectorAll(
        '.week6-clean-object'
      )
    );

  if (
    !area ||
    !box ||
    !targetDisplay ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    objects.length !== 5
  ) {
    return;
  }

  const rounds = [
    {
      key: 'toy',
      icon: '🧸',
    },
    {
      key: 'book',
      icon: '📕',
    },
    {
      key: 'ball',
      icon: '⚽',
    },
    {
      key: 'pencil',
      icon: '✏️',
    },
    {
      key: 'paper',
      icon: '📄',
    },
  ];

  let roundIndex = 0;

  function currentRound() {
    return rounds[roundIndex];
  }

  function updateTarget() {
    const round =
      currentRound();

    targetDisplay.textContent =
      round.icon;

    prompt.textContent =
      'FIND THE FLASHING ITEM';

    count.textContent =
      `${roundIndex} / 5`;
  }

  function objectInsideBox(object) {
    const objectRect =
      object.getBoundingClientRect();

    const boxRect =
      box.getBoundingClientRect();

    const centerX =
      objectRect.left +
      objectRect.width / 2;

    const centerY =
      objectRect.top +
      objectRect.height / 2;

    return (
      centerX >= boxRect.left &&
      centerX <= boxRect.right &&
      centerY >= boxRect.top &&
      centerY <= boxRect.bottom
    );
  }

  objects.forEach(
    (object) => {
      const key =
        object.dataset.clean;

      const startingLeft =
        getComputedStyle(object).left;

      const startingTop =
        getComputedStyle(object).top;

      const startingTransform =
        getComputedStyle(object).transform;

      let holding = false;
      let pointerId = null;

      let offsetX = 0;
      let offsetY = 0;

      function resetObject() {
        holding = false;

        stopLessonSlideSound();

        object.classList.remove(
          'is-held'
        );

        box.classList.remove(
          'is-ready-release'
        );

        object.style.left =
          startingLeft;

        object.style.top =
          startingTop;

        object.style.transform =
          startingTransform === 'none'
            ? 'none'
            : startingTransform;
      }

      object.addEventListener(
        'pointerdown',
        (event) => {
          if (
            object.classList.contains(
              'is-complete'
            )
          ) {
            return;
          }

          event.preventDefault();

          const round =
            currentRound();

          /*
           * Wrong object:
           * do not even begin the drag.
           */
          if (key !== round.key) {
            playLessonWrongSound();

            prompt.textContent =
              'FIND THE FLASHING ITEM!';

            object.classList.add(
              'is-wrong'
            );

            window.setTimeout(
              () => {
                object.classList.remove(
                  'is-wrong'
                );

                prompt.textContent =
                  'FIND THE FLASHING ITEM';
              },
              900
            );

            return;
          }

          pointerId =
            event.pointerId;

          object.setPointerCapture(
            pointerId
          );

          const rect =
            object.getBoundingClientRect();

          offsetX =
            event.clientX -
            rect.left;

          offsetY =
            event.clientY -
            rect.top;

          holding = true;

          object.classList.add(
            'is-held'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';

          indicator.classList.remove(
            'is-let-go-warning'
          );

          indicator.classList.add(
            'is-visible'
          );

          prompt.textContent =
            'KEEP HOLDING — PUT IT IN THE BOX';

          playLessonClickSound();
        }
      );

      object.addEventListener(
        'pointermove',
        (event) => {
          if (
            !holding ||
            event.pointerId !==
              pointerId
          ) {
            return;
          }

          event.preventDefault();

          const areaRect =
            area.getBoundingClientRect();

          const x =
            event.clientX -
            areaRect.left -
            offsetX;

          const y =
            event.clientY -
            areaRect.top -
            offsetY;

          const maxX =
            areaRect.width -
            object.offsetWidth;

          const maxY =
            areaRect.height -
            object.offsetHeight;

          object.style.left =
            `${
              Math.max(
                0,
                Math.min(
                  maxX,
                  x
                )
              )
            }px`;

          object.style.top =
            `${
              Math.max(
                0,
                Math.min(
                  maxY,
                  y
                )
              )
            }px`;

          object.style.transform =
            'none';

          startLessonSlideSound();

          if (objectInsideBox(object)) {
            box.classList.add(
              'is-ready-release'
            );

            prompt.textContent =
              'NOW RELEASE!';
          } else {
            box.classList.remove(
              'is-ready-release'
            );

            prompt.textContent =
              'KEEP HOLDING — PUT IT IN THE BOX';
          }
        }
      );

      function finishObject(event) {
        if (
          !holding ||
          event.pointerId !==
            pointerId
        ) {
          return;
        }

        holding = false;

        stopLessonSlideSound();

        object.classList.remove(
          'is-held'
        );

        indicator.classList.remove(
          'is-visible'
        );

        if (!objectInsideBox(object)) {
          playLessonLetGoSound();

          resetObject();

          indicator.textContent =
            "✋ DON'T LET GO!";

          indicator.classList.add(
            'is-visible',
            'is-let-go-warning'
          );

          prompt.textContent =
            'PRESS AND HOLD AGAIN';

          window.setTimeout(
            () => {
              indicator.classList.remove(
                'is-visible',
                'is-let-go-warning'
              );

              indicator.textContent =
                '👈 KEEP HOLDING!';

              prompt.textContent =
                'FIND THE FLASHING ITEM';
            },
            1400
          );

          return;
        }

        box.classList.remove(
          'is-ready-release'
        );

        object.classList.add(
          'is-complete'
        );

        object.hidden = true;

        roundIndex += 1;

        count.textContent =
          `${roundIndex} / 5`;

        prompt.textContent =
          'PUT AWAY! ⭐';

        playLessonSuccessSound();

        if (
          roundIndex >=
          rounds.length
        ) {
          targetDisplay.hidden = true;

          prompt.hidden = true;

          success.textContent =
            'ROOM CLEAN! ⭐';

          success.classList.add(
            'is-visible',
            'is-complete'
          );

          return;
        }

        window.setTimeout(
          updateTarget,
          750
        );
      }

      object.addEventListener(
        'pointerup',
        finishObject
      );

      object.addEventListener(
        'pointercancel',
        finishObject
      );
    }
  );

  updateTarget();
}

function initializeWeek6DontDrop() {
  const area =
    document.getElementById(
      'week6LongHoldArea'
    );

  const object =
    document.getElementById(
      'week6LongHoldObject'
    );

  const target =
    document.getElementById(
      'week6LongHoldTarget'
    );

  const prompt =
    document.getElementById(
      'week6LongHoldPrompt'
    );

  const indicator =
    document.getElementById(
      'week6LongHoldIndicator'
    );

  const count =
    document.getElementById(
      'week6LongHoldCount'
    );

  const success =
    document.getElementById(
      'week6LongHoldSuccess'
    );

  const checkpoints =
    Array.from(
      document.querySelectorAll(
        '.week6-long-checkpoint'
      )
    );

  if (
    !area ||
    !object ||
    !target ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    checkpoints.length !== 3
  ) {
    return;
  }

  const routes = [
    /*
     * Level 1 — simple zig-zag
     */
    [
      [28, 26],
      [48, 64],
      [66, 28],
    ],

    /*
     * Level 2 — wider spacing
     */
    [
      [24, 66],
      [47, 20],
      [68, 64],
    ],

    /*
     * Level 3 — scattered.
     * Keep all checkpoints away from FINISH.
     */
    [
      [62, 22],
      [25, 38],
      [52, 70],
    ],

    /*
     * Level 4 — longest, least predictable.
     * No checkpoint enters the child's area.
     */
    [
      [64, 64],
      [27, 18],
      [48, 70],
    ],
  ];

  let roundIndex = 0;
  let checkpointIndex = 0;

  let holding = false;
  let pointerId = null;

  let offsetX = 0;
  let offsetY = 0;

  function applyRoute() {
    checkpointIndex = 0;

    checkpoints.forEach(
      (checkpoint, index) => {
        const [
          x,
          y,
        ] =
          routes[roundIndex][index];

        checkpoint.style.left =
          `${x}%`;

        checkpoint.style.top =
          `${y}%`;

        checkpoint.classList.remove(
          'is-complete',
          'is-next'
        );
      }
    );

    checkpoints[0].classList.add(
      'is-next'
    );

    target.classList.remove(
      'is-ready'
    );

    object.style.left =
      '10%';

    object.style.top =
      '76%';

    object.style.transform =
      'translate(-50%, -50%)';

    prompt.textContent =
      'PRESS AND HOLD THE ICE CREAM';

    indicator.classList.remove(
      'is-visible',
      'is-let-go-warning'
    );

    stopLessonSlideSound();
  }

  function resetRound(
    message
  ) {
    holding = false;

    stopLessonSlideSound();

    object.classList.remove(
      'is-held'
    );

    checkpointIndex = 0;

    checkpoints.forEach(
      (checkpoint) => {
        checkpoint.classList.remove(
          'is-complete',
          'is-next'
        );
      }
    );

    checkpoints[0].classList.add(
      'is-next'
    );

    target.classList.remove(
      'is-ready'
    );

    object.style.left =
      '10%';

    object.style.top =
      '76%';

    object.style.transform =
      'translate(-50%, -50%)';

    prompt.textContent =
      message;
  }

  function centerInside(
    movingElement,
    targetElement
  ) {
    const movingRect =
      movingElement.getBoundingClientRect();

    const targetRect =
      targetElement.getBoundingClientRect();

    const centerX =
      movingRect.left +
      movingRect.width / 2;

    const centerY =
      movingRect.top +
      movingRect.height / 2;

    return (
      centerX >= targetRect.left &&
      centerX <= targetRect.right &&
      centerY >= targetRect.top &&
      centerY <= targetRect.bottom
    );
  }

  function checkCheckpoint() {
    if (
      checkpointIndex >=
      checkpoints.length
    ) {
      return;
    }

    const nextCheckpoint =
      checkpoints[
        checkpointIndex
      ];

    if (
      !centerInside(
        object,
        nextCheckpoint
      )
    ) {
      return;
    }

    nextCheckpoint.classList.remove(
      'is-next'
    );

    nextCheckpoint.classList.add(
      'is-complete'
    );

    checkpointIndex += 1;

    playLessonSuccessSound();

    if (
      checkpointIndex <
      checkpoints.length
    ) {
      checkpoints[
        checkpointIndex
      ].classList.add(
        'is-next'
      );

      prompt.textContent =
        `KEEP HOLDING — GO TO ${checkpointIndex + 1}`;
    } else {
      target.classList.add(
        'is-ready'
      );

      prompt.textContent =
        'KEEP HOLDING — GO TO THE FINISH';
    }
  }

  object.addEventListener(
    'pointerdown',
    (event) => {
      event.preventDefault();

      pointerId =
        event.pointerId;

      object.setPointerCapture(
        pointerId
      );

      const rect =
        object.getBoundingClientRect();

      offsetX =
        event.clientX -
        rect.left;

      offsetY =
        event.clientY -
        rect.top;

      holding = true;

      object.classList.add(
        'is-held'
      );

      indicator.textContent =
        '👈 KEEP HOLDING!';

      indicator.classList.remove(
        'is-let-go-warning'
      );

      indicator.classList.add(
        'is-visible'
      );

      prompt.textContent =
        'KEEP HOLDING — GO TO 1';

      playLessonClickSound();
    }
  );

  object.addEventListener(
    'pointermove',
    (event) => {
      if (
        !holding ||
        event.pointerId !==
          pointerId
      ) {
        return;
      }

      event.preventDefault();

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left -
        offsetX;

      const y =
        event.clientY -
        areaRect.top -
        offsetY;

      const maxX =
        areaRect.width -
        object.offsetWidth;

      const maxY =
        areaRect.height -
        object.offsetHeight;

      object.style.left =
        `${
          Math.max(
            0,
            Math.min(
              maxX,
              x
            )
          )
        }px`;

      object.style.top =
        `${
          Math.max(
            0,
            Math.min(
              maxY,
              y
            )
          )
        }px`;

      object.style.transform =
        'none';

      startLessonSlideSound();

      checkCheckpoint();

      if (
        checkpointIndex >=
        checkpoints.length &&
        centerInside(
          object,
          target
        )
      ) {
        prompt.textContent =
          'NOW RELEASE!';
      }
    }
  );

  function finishObject(
    event
  ) {
    if (
      !holding ||
      event.pointerId !==
        pointerId
    ) {
      return;
    }

    holding = false;

    stopLessonSlideSound();

    object.classList.remove(
      'is-held'
    );

    indicator.classList.remove(
      'is-visible'
    );

    const finishedRoute =
      checkpointIndex >=
      checkpoints.length &&
      centerInside(
        object,
        target
      );

    if (!finishedRoute) {
      playLessonLetGoSound();

      resetRound(
        'PRESS AND HOLD AGAIN'
      );

      indicator.textContent =
        "✋ DON'T LET GO!";

      indicator.classList.add(
        'is-visible',
        'is-let-go-warning'
      );

      window.setTimeout(
        () => {
          indicator.classList.remove(
            'is-visible',
            'is-let-go-warning'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';
        },
        1400
      );

      return;
    }

    roundIndex += 1;

    count.textContent =
      `${roundIndex} / 4`;

    prompt.textContent =
      'GREAT HOLD! ⭐';

    playLessonSuccessSound();

    if (
      roundIndex >=
      routes.length
    ) {
      object.hidden = true;
      target.hidden = true;

      checkpoints.forEach(
        (checkpoint) => {
          checkpoint.hidden = true;
        }
      );

      prompt.hidden = true;

      success.textContent =
        'AMAZING HOLD! ⭐';

      success.classList.add(
        'is-visible',
        'is-complete'
      );

      return;
    }

    window.setTimeout(
      applyRoute,
      850
    );
  }

  object.addEventListener(
    'pointerup',
    finishObject
  );

  object.addEventListener(
    'pointercancel',
    finishObject
  );

  count.textContent =
    '0 / 4';

  applyRoute();
}

function initializeWeek6Puzzle() {
  const area =
    document.getElementById(
      'week6PuzzleArea'
    );

  const prompt =
    document.getElementById(
      'week6PuzzlePrompt'
    );

  const indicator =
    document.getElementById(
      'week6PuzzleHoldIndicator'
    );

  const count =
    document.getElementById(
      'week6PuzzleCount'
    );

  const success =
    document.getElementById(
      'week6PuzzleSuccess'
    );

  const pieces =
    Array.from(
      document.querySelectorAll(
        '.week6-puzzle-piece'
      )
    );

  const slots =
    Array.from(
      document.querySelectorAll(
        '.week6-puzzle-slot'
      )
    );

  if (
    !area ||
    !prompt ||
    !indicator ||
    !count ||
    !success ||
    pieces.length !== 9 ||
    slots.length !== 9
  ) {
    return;
  }

  let completed = 0;

  pieces.forEach(
    (piece) => {
      const pieceNumber =
        piece.dataset.piece;

      const slot =
        slots.find(
          (item) =>
            item.dataset.slot ===
            pieceNumber
        );

      if (!slot) {
        return;
      }

      const startingLeft =
        getComputedStyle(piece).left;

      const startingTop =
        getComputedStyle(piece).top;

      const startingTransform =
        getComputedStyle(piece).transform;

      const startingWidth =
        piece.offsetWidth;

      const startingHeight =
        piece.offsetHeight;

      let holding = false;
      let pointerId = null;

      let offsetX = 0;
      let offsetY = 0;

      function getSlotOverlap(testSlot) {
        const pieceRect =
          piece.getBoundingClientRect();

        const slotRect =
          testSlot.getBoundingClientRect();

        const overlapLeft =
          Math.max(
            pieceRect.left,
            slotRect.left
          );

        const overlapTop =
          Math.max(
            pieceRect.top,
            slotRect.top
          );

        const overlapRight =
          Math.min(
            pieceRect.right,
            slotRect.right
          );

        const overlapBottom =
          Math.min(
            pieceRect.bottom,
            slotRect.bottom
          );

        const overlapWidth =
          Math.max(
            0,
            overlapRight - overlapLeft
          );

        const overlapHeight =
          Math.max(
            0,
            overlapBottom - overlapTop
          );

        return (
          overlapWidth *
          overlapHeight
        );
      }

      function getSlotUnderPiece() {
        let bestSlot = null;
        let bestOverlap = 0;

        slots.forEach(
          (testSlot) => {
            const overlap =
              getSlotOverlap(
                testSlot
              );

            if (
              overlap >
              bestOverlap
            ) {
              bestOverlap =
                overlap;

              bestSlot =
                testSlot;
            }
          }
        );

        const pieceArea =
          piece.offsetWidth *
          piece.offsetHeight;

        if (
          bestOverlap <
          pieceArea * 0.18
        ) {
          return null;
        }

        return bestSlot;
      }

      function resetPiece() {
        holding = false;

        stopLessonSlideSound();

        piece.classList.remove(
          'is-held'
        );

        slots.forEach(
          (testSlot) => {
            testSlot.classList.remove(
              'is-ready-release'
            );
          }
        );

        piece.style.position =
          'relative';

        piece.style.left =
          startingLeft;

        piece.style.top =
          startingTop;

        piece.style.width =
          `${startingWidth}px`;

        piece.style.height =
          `${startingHeight}px`;

        piece.style.transform =
          startingTransform;
      }

      piece.addEventListener(
        'pointerdown',
        (event) => {
          if (
            piece.classList.contains(
              'is-complete'
            )
          ) {
            return;
          }

          event.preventDefault();

          pointerId =
            event.pointerId;

          const pieceRect =
            piece.getBoundingClientRect();

          const areaRect =
            area.getBoundingClientRect();

          offsetX =
            event.clientX -
            pieceRect.left;

          offsetY =
            event.clientY -
            pieceRect.top;

          /*
           * Move the piece into absolute
           * positioning so it can leave
           * the 3x3 loose-piece grid.
           */
          piece.style.position =
            'absolute';

          piece.style.width =
            `${pieceRect.width}px`;

          piece.style.height =
            `${pieceRect.height}px`;

          piece.style.left =
            `${
              pieceRect.left -
              areaRect.left
            }px`;

          piece.style.top =
            `${
              pieceRect.top -
              areaRect.top
            }px`;

          piece.style.transform =
            'none';

          area.appendChild(piece);

          piece.setPointerCapture(
            pointerId
          );

          holding = true;

          piece.classList.add(
            'is-held'
          );

          indicator.textContent =
            '👈 KEEP HOLDING!';

          indicator.classList.remove(
            'is-let-go-warning'
          );

          indicator.classList.add(
            'is-visible'
          );

          prompt.textContent =
            'KEEP HOLDING — FIND ITS SPOT';

          playLessonClickSound();
        }
      );

      piece.addEventListener(
        'pointermove',
        (event) => {
          if (
            !holding ||
            event.pointerId !==
              pointerId
          ) {
            return;
          }

          event.preventDefault();

          const areaRect =
            area.getBoundingClientRect();

          const x =
            event.clientX -
            areaRect.left -
            offsetX;

          const y =
            event.clientY -
            areaRect.top -
            offsetY;

          const maxX =
            areaRect.width -
            piece.offsetWidth;

          const maxY =
            areaRect.height -
            piece.offsetHeight;

          piece.style.left =
            `${
              Math.max(
                0,
                Math.min(
                  maxX,
                  x
                )
              )
            }px`;

          piece.style.top =
            `${
              Math.max(
                0,
                Math.min(
                  maxY,
                  y
                )
              )
            }px`;

          startLessonSlideSound();

          const releasedSlot =
            getSlotUnderPiece();

          slots.forEach(
            (testSlot) => {
              testSlot.classList.remove(
                'is-ready-release'
              );
            }
          );

          if (releasedSlot) {
            releasedSlot.classList.add(
              'is-ready-release'
            );

            prompt.textContent =
              releasedSlot === slot
                ? 'NOW RELEASE!'
                : 'WRONG SPOT — KEEP HOLDING';
          } else {
            prompt.textContent =
              'KEEP HOLDING — FIND ITS SPOT';
          }
        }
      );

      function finishPiece(event) {
        if (
          !holding ||
          event.pointerId !==
            pointerId
        ) {
          return;
        }

        holding = false;

        stopLessonSlideSound();

        piece.classList.remove(
          'is-held'
        );

        indicator.classList.remove(
          'is-visible'
        );

        const releasedSlot =
          getSlotUnderPiece();

        slots.forEach(
          (testSlot) => {
            testSlot.classList.remove(
              'is-ready-release'
            );
          }
        );

        /*
         * Released in open space:
         * early release.
         */
        if (!releasedSlot) {
          playLessonLetGoSound();

          resetPiece();

          indicator.textContent =
            "✋ DON'T LET GO!";

          indicator.classList.add(
            'is-visible',
            'is-let-go-warning'
          );

          prompt.textContent =
            'PRESS AND HOLD AGAIN';

          window.setTimeout(
            () => {
              indicator.classList.remove(
                'is-visible',
                'is-let-go-warning'
              );

              indicator.textContent =
                '👈 KEEP HOLDING!';

              prompt.textContent =
                'PRESS AND HOLD A PIECE';
            },
            1400
          );

          return;
        }

        /*
         * Released over a real slot,
         * but not the matching slot.
         */
        if (releasedSlot !== slot) {
          playLessonWrongSound();

          resetPiece();

          indicator.textContent =
            '❌ WRONG SPOT!';

          indicator.classList.add(
            'is-visible',
            'is-let-go-warning'
          );

          prompt.textContent =
            'TRY A DIFFERENT SPOT';

          window.setTimeout(
            () => {
              indicator.classList.remove(
                'is-visible',
                'is-let-go-warning'
              );

              indicator.textContent =
                '👈 KEEP HOLDING!';

              prompt.textContent =
                'PRESS AND HOLD A PIECE';
            },
            1400
          );

          return;
        }

        /*
         * Correct slot:
         * fill the slot with the correct
         * section of nemo.png.
         */
        slot.style.backgroundImage =
          'url("images/nemo.png")';

        slot.style.backgroundSize =
          '300% 300%';

        const positions = [
          '0% 0%',
          '50% 0%',
          '100% 0%',
          '0% 50%',
          '50% 50%',
          '100% 50%',
          '0% 100%',
          '50% 100%',
          '100% 100%',
        ];

        slot.style.backgroundPosition =
          positions[
            Number(pieceNumber)
          ];

        slot.style.backgroundRepeat =
          'no-repeat';

        slot.classList.add(
          'is-complete'
        );

        piece.classList.add(
          'is-complete'
        );

        piece.hidden = true;

        completed += 1;

        count.textContent =
          `${completed} / 9`;

        prompt.textContent =
          'GREAT HOLD! ⭐';

        playLessonSuccessSound();

        if (completed >= 9) {
          prompt.hidden = true;

          success.textContent =
            'PICTURE COMPLETE! ⭐';

          success.classList.add(
            'is-visible',
            'is-complete'
          );

          return;
        }

        window.setTimeout(
          () => {
            prompt.textContent =
              'PRESS AND HOLD ANOTHER PIECE';
          },
          700
        );
      }

      piece.addEventListener(
        'pointerup',
        finishPiece
      );

      piece.addEventListener(
        'pointercancel',
        finishPiece
      );
    }
  );

  count.textContent =
    '0 / 9';
}

function initializeWeek6Final() {
  const area =
    document.getElementById(
      'week6FinalArea'
    );

  const star =
    document.getElementById(
      'week6FinalObject'
    );

  const target =
    document.getElementById(
      'week6FinalTarget'
    );

  const prompt =
    document.getElementById(
      'week6FinalPrompt'
    );

  const count =
    document.getElementById(
      'week6FinalCount'
    );

  const success =
    document.getElementById(
      'week6FinalSuccess'
    );

  const checkpoints =
    Array.from(
      document.querySelectorAll(
        '.week6-final-checkpoint'
      )
    );

  const obstacles =
    Array.from(
      document.querySelectorAll(
        '.week6-final-obstacle'
      )
    );

  if (
    !area ||
    !star ||
    !target ||
    !prompt ||
    !count ||
    !success ||
    checkpoints.length !== 3 ||
    obstacles.length !== 2
  ) {
    return;
  }

  const levels = [
    /*
     * Level 1:
     * stationary obstacles from the start
     */
    {
      checkpoints: [
        [26, 24],
        [49, 66],
        [69, 26],
      ],

      obstacles: [
        [38, 45],
        [61, 48],
      ],

      movingObstacles: 0,
    },

    /*
     * Level 2:
     * harder stationary layout
     */
    {
      checkpoints: [
        [23, 66],
        [48, 20],
        [70, 64],
      ],

      obstacles: [
        [36, 31],
        [60, 51],
      ],

      movingObstacles: 0,
    },

    /*
     * Level 3:
     * scattered checkpoints +
     * one moving obstacle
     */
    {
      checkpoints: [
        [63, 20],
        [24, 37],
        [52, 70],
      ],

      obstacles: [
        [42, 55],
        [67, 39],
      ],

      movingObstacles: 1,
    },

    /*
     * Level 4:
     * scattered route +
     * both obstacles moving
     */
    {
      checkpoints: [
        [65, 66],
        [25, 18],
        [49, 71],
      ],

      obstacles: [
        [40, 42],
        [68, 24],
      ],

      movingObstacles: 2,
    },
  ];

  let levelIndex = 0;
  let completedLevels = 0;
  let checkpointIndex = 0;

  let holding = false;
  let pointerId = null;

  let offsetX = 0;
  let offsetY = 0;

  const movingObstacleX = [40, 68];
  const movingObstacleDirection = [1, -1];

  let animationFrame = null;
  let lastAnimationTime = 0;
  let levelActive = false;

  function currentLevel() {
    return levels[levelIndex];
  }

  function positionLevel() {
    const level =
      currentLevel();

    /*
     * The new level officially begins now.
     * Moving obstacles may resume.
     */
    levelActive = true;
    lastAnimationTime = 0;

    checkpointIndex = 0;

    checkpoints.forEach(
      (checkpoint, index) => {
        const [
          x,
          y,
        ] =
          level.checkpoints[index];

        checkpoint.style.left =
          `${x}%`;

        checkpoint.style.top =
          `${y}%`;

        checkpoint.classList.remove(
          'is-next',
          'is-complete'
        );

        checkpoint.hidden = false;
      }
    );

    checkpoints[0].classList.add(
      'is-next'
    );

    obstacles.forEach(
      (obstacle, index) => {
        const position =
          level.obstacles[index];

        if (!position) {
          obstacle.hidden = true;
          return;
        }

        obstacle.hidden = false;

        obstacle.style.left =
          `${position[0]}%`;

        obstacle.style.top =
          `${position[1]}%`;
      }
    );

    obstacles.forEach(
      (obstacle, index) => {
        const position =
          level.obstacles[index];

        if (!position) {
          return;
        }

        movingObstacleX[index] =
          position[0];

        movingObstacleDirection[index] =
          index === 0 ? 1 : -1;
      }
    );

    target.classList.remove(
      'is-ready'
    );

    star.style.left =
      '10%';

    star.style.top =
      '76%';

    star.style.transform =
      'translate(-50%, -50%)';

    star.classList.remove(
      'is-held'
    );

    prompt.textContent =
      `LEVEL ${levelIndex + 1} — PRESS AND HOLD THE STAR`;

    stopLessonSlideSound();
  }

  function resetLevel(
    message
  ) {
    holding = false;

    stopLessonSlideSound();

    star.classList.remove(
      'is-held'
    );

    checkpointIndex = 0;

    checkpoints.forEach(
      (checkpoint) => {
        checkpoint.classList.remove(
          'is-next',
          'is-complete'
        );
      }
    );

    checkpoints[0].classList.add(
      'is-next'
    );

    target.classList.remove(
      'is-ready'
    );

    star.style.left =
      '10%';

    star.style.top =
      '76%';

    star.style.transform =
      'translate(-50%, -50%)';

    prompt.textContent =
      message;
  }

  function centerInside(
    movingElement,
    targetElement
  ) {
    const movingRect =
      movingElement.getBoundingClientRect();

    const targetRect =
      targetElement.getBoundingClientRect();

    const centerX =
      movingRect.left +
      movingRect.width / 2;

    const centerY =
      movingRect.top +
      movingRect.height / 2;

    return (
      centerX >= targetRect.left &&
      centerX <= targetRect.right &&
      centerY >= targetRect.top &&
      centerY <= targetRect.bottom
    );
  }

  function starHitsObstacle() {
    const starRect =
      star.getBoundingClientRect();

    return obstacles.some(
      (obstacle) => {
        if (obstacle.hidden) {
          return false;
        }

        const rect =
          obstacle.getBoundingClientRect();

        /*
         * Slight forgiveness around the
         * visual edge of each obstacle.
         */
        return !(
          starRect.right <
            rect.left + 14 ||
          starRect.left >
            rect.right - 14 ||
          starRect.bottom <
            rect.top + 14 ||
          starRect.top >
            rect.bottom - 14
        );
      }
    );
  }

  function checkCheckpoint() {
    if (
      checkpointIndex >=
      checkpoints.length
    ) {
      return;
    }

    const checkpoint =
      checkpoints[
        checkpointIndex
      ];

    if (
      !centerInside(
        star,
        checkpoint
      )
    ) {
      return;
    }

    checkpoint.classList.remove(
      'is-next'
    );

    checkpoint.classList.add(
      'is-complete'
    );

    checkpointIndex += 1;

    playLessonSuccessSound();

    if (
      checkpointIndex <
      checkpoints.length
    ) {
      checkpoints[
        checkpointIndex
      ].classList.add(
        'is-next'
      );

      prompt.textContent =
        `KEEP HOLDING — GO TO ${checkpointIndex + 1}`;
    } else {
      target.classList.add(
        'is-ready'
      );

      prompt.textContent =
        'KEEP HOLDING — REACH THE TROPHY';
    }
  }

  function animateFinalObstacle(
    timestamp
  ) {
    if (
      !document.body.contains(area)
    ) {
      return;
    }

    /*
     * Keep the animation loop alive during
     * the success pause, but freeze obstacles
     * until positionLevel() starts the next level.
     */
    if (!levelActive) {
      lastAnimationTime = 0;

      animationFrame =
        window.requestAnimationFrame(
          animateFinalObstacle
        );

      return;
    }

    const level =
      currentLevel();

    if (!lastAnimationTime) {
      lastAnimationTime =
        timestamp;
    }

    const delta =
      Math.min(
        40,
        timestamp -
          lastAnimationTime
      );

    lastAnimationTime =
      timestamp;

    obstacles.forEach(
      (obstacle, index) => {
        if (
          index >=
            level.movingObstacles ||
          obstacle.hidden
        ) {
          return;
        }

        movingObstacleX[index] +=
          movingObstacleDirection[index] *
          (index === 0 ? 0.010 : 0.013) *
          delta;

        const minX =
          index === 0 ? 34 : 57;

        const maxX =
          index === 0 ? 57 : 76;

        if (
          movingObstacleX[index] >=
          maxX
        ) {
          movingObstacleX[index] =
            maxX;

          movingObstacleDirection[index] =
            -1;
        }

        if (
          movingObstacleX[index] <=
          minX
        ) {
          movingObstacleX[index] =
            minX;

          movingObstacleDirection[index] =
            1;
        }

        obstacle.style.left =
          `${movingObstacleX[index]}%`;
      }
    );

    animationFrame =
      window.requestAnimationFrame(
        animateFinalObstacle
      );
  }

  star.addEventListener(
    'pointerdown',
    (event) => {
      event.preventDefault();

      pointerId =
        event.pointerId;

      star.setPointerCapture(
        pointerId
      );

      const rect =
        star.getBoundingClientRect();

      offsetX =
        event.clientX -
        rect.left;

      offsetY =
        event.clientY -
        rect.top;

      holding = true;

      star.classList.add(
        'is-held'
      );

      prompt.textContent =
        '👈 KEEP HOLDING!';

      playLessonClickSound();
    }
  );

  star.addEventListener(
    'pointermove',
    (event) => {
      if (
        !holding ||
        event.pointerId !==
          pointerId
      ) {
        return;
      }

      event.preventDefault();

      const areaRect =
        area.getBoundingClientRect();

      const x =
        event.clientX -
        areaRect.left -
        offsetX;

      const y =
        event.clientY -
        areaRect.top -
        offsetY;

      const maxX =
        areaRect.width -
        star.offsetWidth;

      const maxY =
        areaRect.height -
        star.offsetHeight;

      star.style.left =
        `${
          Math.max(
            0,
            Math.min(
              maxX,
              x
            )
          )
        }px`;

      star.style.top =
        `${
          Math.max(
            0,
            Math.min(
              maxY,
              y
            )
          )
        }px`;

      star.style.transform =
        'none';

      startLessonSlideSound();

      if (starHitsObstacle()) {
        playLessonWrongSound();

        resetLevel(
          'WATCH OUT — TRY AGAIN!'
        );

        prompt.textContent =
          '🚧 AVOID THE OBSTACLES!';

        window.setTimeout(
          () => {
            if (holding) {
              prompt.textContent =
                '👈 KEEP HOLDING!';
            }
          },
          1200
        );

        return;
      }

      checkCheckpoint();

      if (
        checkpointIndex >=
          checkpoints.length &&
        centerInside(
          star,
          target
        )
      ) {
        prompt.textContent =
          'NOW RELEASE!';
      }
    }
  );

  function finishFinalDrag(
    event
  ) {
    if (
      !holding ||
      event.pointerId !==
        pointerId
    ) {
      return;
    }

    holding = false;

    stopLessonSlideSound();

    star.classList.remove(
      'is-held'
    );

    const finished =
      checkpointIndex >=
        checkpoints.length &&
      centerInside(
        star,
        target
      );

    if (!finished) {
      playLessonLetGoSound();

      resetLevel(
        'PRESS AND HOLD AGAIN'
      );

      prompt.textContent =
        "✋ DON'T LET GO!";

      window.setTimeout(
        () => {
          prompt.textContent =
            `LEVEL ${levelIndex + 1} — PRESS AND HOLD THE STAR`;
        },
        1400
      );

      return;
    }

    /*
     * Freeze this level exactly where it ended.
     * The next level must not begin moving until
     * positionLevel() runs after the success pause.
     */
    levelActive = false;

    completedLevels += 1;

    count.textContent =
      `${completedLevels} / 4`;

    levelIndex += 1;

    count.textContent =
      `${completedLevels} / 4`;

    prompt.textContent =
      'LEVEL COMPLETE! ⭐';

    playLessonSuccessSound();

    if (
      levelIndex >=
      levels.length
    ) {
      if (animationFrame) {
        window.cancelAnimationFrame(
          animationFrame
        );
      }

      star.hidden = true;
      target.hidden = true;

      checkpoints.forEach(
        (checkpoint) => {
          checkpoint.hidden = true;
        }
      );

      obstacles.forEach(
        (obstacle) => {
          obstacle.hidden = true;
        }
      );

      prompt.hidden = true;

      success.textContent =
        'DRAGGING CHAMPION! 🏆⭐';

      success.classList.add(
        'is-visible',
        'is-complete'
      );

      return;
    }

    window.setTimeout(
      positionLevel,
      850
    );
  }

  star.addEventListener(
    'pointerup',
    finishFinalDrag
  );

  star.addEventListener(
    'pointercancel',
    finishFinalDrag
  );

  count.textContent =
    '0 / 4';

  positionLevel();

  animationFrame =
    window.requestAnimationFrame(
      animateFinalObstacle
    );
}

/* ----------------------------------------
   Block touchscreen input
   This app teaches trackpad skills.
----------------------------------------- */

function blockLessonTouchscreen(event) {
  /*
   * Pointer Events identify direct
   * touchscreen contact as "touch".
   *
   * Mouse/trackpad input remains allowed.
   */
  if (event.pointerType !== 'touch') {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
}

document.addEventListener(
  'pointerdown',
  blockLessonTouchscreen,
  true
);

document.addEventListener(
  'pointermove',
  blockLessonTouchscreen,
  true
);

document.addEventListener(
  'pointerup',
  blockLessonTouchscreen,
  true
);

document.addEventListener(
  'pointercancel',
  blockLessonTouchscreen,
  true
);

/*
 * Also block browser-native touch gestures
 * such as touch scrolling and pinch gestures.
 */
document.addEventListener(
  'touchstart',
  (event) => {
    event.preventDefault();
  },
  {
    passive: false,
    capture: true,
  }
);

document.addEventListener(
  'touchmove',
  (event) => {
    event.preventDefault();
  },
  {
    passive: false,
    capture: true,
  }
);

document.addEventListener(
  'touchend',
  (event) => {
    event.preventDefault();
  },
  {
    passive: false,
    capture: true,
  }
);
