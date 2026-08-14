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
  [1, 2, 3].includes(
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
