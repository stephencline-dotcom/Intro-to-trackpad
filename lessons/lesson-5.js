window.trackpadLesson = {
  title: 'Lesson 5: Two Hands, Two Jobs',
  eyebrow: 'Week 5 • Two-Hand Trackpad Skills',

  steps: [
    {
      title: 'Quick Review',

      teacherPrompt:
        'Quickly review: slide to move, stop on the target, click once, and wait. Tell students that today they will learn a special way to make these skills even easier.',

      activityHtml: `
        <div class="week5-review-step">
          <div class="quick-review-badge">
            QUICK REVIEW
          </div>

          <h2>You Already Know This!</h2>

          <div
            id="week5ReviewRow"
            class="week5-review-row"
          >
            <div class="week5-review-card">
              <span>☝️</span>
              <strong>MOVE</strong>
            </div>

            <div class="week5-review-card">
              <span>🎯</span>
              <strong>STOP</strong>
            </div>

            <div class="week5-review-card">
              <span>👇</span>
              <strong>CLICK ONCE</strong>
            </div>

            <div class="week5-review-card">
              <span>✋</span>
              <strong>WAIT</strong>
            </div>
          </div>

          <div
            id="week5ReviewReady"
            class="week5-review-ready"
          >
            ⭐ READY FOR TWO HANDS! ⭐
          </div>
        </div>
      `,

      activityType: 'week5Review',
    },

    {
      title: 'Meet Your Two-Hand Team',

      teacherPrompt:
        'Introduce the new routine clearly: TWO HANDS, TWO JOBS. The RIGHT hand moves the arrow. The LEFT hand does the clicking. Have students hold up each hand as you name its job.',

      activityHtml: `
        <div class="week5-two-hands-step">
          <div class="week5-big-badge">
            TWO HANDS • TWO JOBS
          </div>

          <h2>Your Hands Are a Team!</h2>

          <div class="week5-hand-jobs">
            <div class="week5-hand-job">
              <div class="week5-hand-label">
                RIGHT HAND
              </div>

              <div class="week5-hand-icon week5-hand-image-wrap">
                <img
                  class="week5-hand-image"
                  src="images/backrighthand.png"
                  alt="Right pointer hand"
                  draggable="false"
                />
              </div>

              <div class="week5-job-word">
                MOVE
              </div>

              <p>
                Slide to move the arrow.
              </p>
            </div>

            <div class="week5-team-plus">
              +
            </div>

            <div class="week5-hand-job">
              <div class="week5-hand-label">
                LEFT HAND
              </div>

              <div class="week5-hand-icon week5-hand-image-wrap">
                <img
                  class="week5-hand-image"
                  src="images/backlefthand.png"
                  alt="Left pointer hand"
                  draggable="false"
                />
              </div>

              <div class="week5-job-word">
                CLICK
              </div>

              <p>
                Stays ready to click.
              </p>
            </div>
          </div>
        </div>
      `,
    },

    {
      title: 'Get Your Hands Ready',

      teacherPrompt:
        'Have students copy the hand position. The right pointer finger rests in the middle of the trackpad where it has room to slide. The left pointer finger stays near the lower-left clicking area. Do not click yet.',

      activityHtml: `
        <div class="week5-position-step">
          <h2>Get Your Hands Ready</h2>

          <p class="lesson-kid-prompt">
            Put each hand in its special spot.
          </p>

          <div class="week5-position-demo">
            <div class="week5-position-trackpad">

              <div class="week5-position-label week5-position-label-right">
                RIGHT HAND<br>
                <strong>MOVE</strong>
              </div>

              <div class="week5-position-label week5-position-label-left">
                LEFT HAND<br>
                <strong>CLICK</strong>
              </div>

              <div class="week5-right-zone"></div>

              <img
                class="week5-position-right-hand"
                src="images/backrighthand.png"
                alt="Right hand for moving"
                draggable="false"
              />

              <img
                class="week5-position-left-hand"
                src="images/backlefthand.png"
                alt="Left hand for clicking"
                draggable="false"
              />

            </div>
          </div>

          <div class="week5-position-reminder">
            Right moves • Left clicks
          </div>
        </div>
      `,
    },

    {
      title: 'Right Moves, Left Clicks',

      teacherPrompt:
        'Demonstrate the two jobs working together. The right finger slides and moves the cursor. When the cursor reaches the target, the right hand stops. Then the left finger clicks one time and waits.',

      activityHtml: `
        <div class="week5-team-demo-step">
          <h2>Watch the Team Work!</h2>

          <p class="lesson-kid-prompt">
            RIGHT moves → LEFT clicks
          </p>

          <div
            id="week5TeamDemo"
            class="week5-team-demo"
          >
            <div class="week5-team-screen">
              <div class="week5-team-target">
                ⭐
              </div>

              <div
                id="week5TeamCursor"
                class="week5-team-cursor"
              ></div>
            </div>

            <div class="motion-equals">
              =
            </div>

            <div class="week5-demo-pad">
              <div
                id="week5DemoRight"
                class="week5-demo-right"
              >
                ☝️
              </div>

              <div
                id="week5DemoLeft"
                class="week5-demo-left"
              >
                👈
              </div>

              <div
                id="week5LeftPressHold"
                class="week5-left-press-hold"
                aria-hidden="true"
              ></div>
            </div>
          </div>

          <div
            id="week5TeamWords"
            class="week5-team-words"
          >
            RIGHT HAND — MOVE
          </div>
        </div>
      `,

      activityType: 'week5TeamDemo',
    },

    {
      title: 'Hold and Move Practice',

      teacherPrompt:
        'This activity teaches the most important Week 5 habit. Students place the cursor on the star, PRESS AND HOLD with the LEFT pointer finger, keep that finger held down, and use the RIGHT pointer finger to move the star into the glowing target. Do not release until the star reaches the target.',

      activityHtml: `
        <div class="week5-target-step">
          <div class="week5-big-badge">
            LEFT HOLDS • RIGHT MOVES
          </div>

          <h2>Hold and Move!</h2>

          <p class="lesson-kid-prompt">
            Keep your LEFT finger down while your RIGHT finger moves.
          </p>

          <div
            id="week5TargetArea"
            class="week4-activity-area week5-hold-practice-area"
          >
            <div
              id="week5HoldPrompt"
              class="week5-hold-prompt"
            >
              1. PRESS AND HOLD THE STAR
            </div>

            <div
              id="week5DropTarget"
              class="week5-hold-target"
            >
              <span>⭐</span>
              <strong>MOVE HERE</strong>
            </div>

            <div
              id="week5DragStar"
              class="week5-hold-star"
            >
              ⭐
            </div>

            <div
              id="week5HoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week5TargetCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week5TargetSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week5TargetPractice',
    },

    {
      title: 'Hold Through the Path',

      teacherPrompt:
        'Students practice keeping the LEFT pointer finger pressed down for a longer drag. Press and HOLD the star with the LEFT finger. Keep holding while the RIGHT pointer finger guides the star through the path. Do not let go until the star reaches FINISH.',

      activityHtml: `
        <div class="week5-path-step">
          <div class="week5-big-badge">
            KEEP HOLDING!
          </div>

          <h2>Hold Through the Path</h2>

          <p class="lesson-kid-prompt">
            LEFT holds • RIGHT moves • Don't let go!
          </p>

          <div
            id="week5HoldPathArea"
            class="week4-activity-area week5-hold-path-area"
          >
            <svg
              class="week5-hold-path-road"
              viewBox="0 0 760 390"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                class="week5-hold-path-outline"
                d="M 75 315
                   C 145 315, 145 210, 225 215
                   S 300 325, 380 275
                   S 405 120, 490 130
                   S 575 235, 675 85"
              />

              <path
                class="week5-hold-path-main"
                d="M 75 315
                   C 145 315, 145 210, 225 215
                   S 300 325, 380 275
                   S 405 120, 490 130
                   S 575 235, 675 85"
              />

              <path
                class="week5-hold-path-center"
                d="M 75 315
                   C 145 315, 145 210, 225 215
                   S 300 325, 380 275
                   S 405 120, 490 130
                   S 575 235, 675 85"
              />
            </svg>

            <div class="week5-path-start">
              START
            </div>

            <div
              id="week5PathFinish"
              class="week5-path-finish"
            >
              FINISH ⭐
            </div>

            <div
              id="week5PathStar"
              class="week5-path-star"
            >
              ⭐
            </div>

            <div
              id="week5PathPrompt"
              class="week5-hold-prompt"
            >
              PRESS AND HOLD THE STAR
            </div>

            <div
              id="week5PathHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week5PathSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week5HoldPath',
    },

    {
      title: 'Drag and Sort',

      teacherPrompt:
        'Students practice the full two-hand drag routine. PRESS AND HOLD an object with the LEFT pointer finger. Keep holding while the RIGHT pointer finger moves it to the matching destination. Release only when the object is inside the correct target.',

      activityHtml: `
        <div class="week5-sort-step">
          <div class="week5-big-badge">
            LEFT HOLDS • RIGHT MOVES
          </div>

          <h2>Drag and Sort!</h2>

          <p class="lesson-kid-prompt">
            Hold it • Move it • Match it • Release!
          </p>

          <div
            id="week5SortArea"
            class="week4-activity-area week5-sort-area"
          >
            <div
              id="week5SortPrompt"
              class="week5-hold-prompt"
            >
              PRESS AND HOLD AN OBJECT
            </div>

            <div
              class="week5-sort-object"
              data-sort="apple"
            >
              🍎
            </div>

            <div
              class="week5-sort-object"
              data-sort="trash"
            >
              🗑️
            </div>

            <div
              class="week5-sort-object"
              data-sort="banana"
            >
              🍌
            </div>

            <div
              class="week5-sort-object"
              data-sort="ball"
            >
              ⚽
            </div>

            <div
              class="week5-sort-object"
              data-sort="mail"
            >
              ✉️
            </div>

            <div
              class="week5-sort-target"
              data-sort-target="apple"
            >
              <span>🧺</span>
              <strong>APPLE</strong>
            </div>

            <div
              class="week5-sort-target"
              data-sort-target="trash"
            >
              <span>🚮</span>
              <strong>TRASH</strong>
            </div>

            <div
              class="week5-sort-target"
              data-sort-target="banana"
            >
              <span>🐵</span>
              <strong>BANANA</strong>
            </div>

            <div
              class="week5-sort-target"
              data-sort-target="ball"
            >
              <span>🥅</span>
              <strong>BALL</strong>
            </div>

            <div
              class="week5-sort-target"
              data-sort-target="mail"
            >
              <span>📬</span>
              <strong>MAIL</strong>
            </div>

            <div
              id="week5SortHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week5SortCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week5SortSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week5DragSort',
    },

    {
      title: 'Build the Picture',

      teacherPrompt:
        'Students complete a six-piece picture puzzle using the full two-hand drag routine. PRESS AND HOLD each piece with the LEFT pointer finger. Keep holding while the RIGHT pointer finger moves the piece to its matching spot. Release only when it is in the correct place.',

      activityHtml: `
        <div class="week5-puzzle-step">
          <div class="week5-big-badge">
            FINAL CHALLENGE
          </div>

          <h2>Build the Picture!</h2>

          <p class="lesson-kid-prompt">
            LEFT holds • RIGHT moves • Put all 6 pieces back!
          </p>

          <div
            id="week5PuzzleArea"
            class="week4-activity-area week5-puzzle-area"
          >
            <div
              id="week5PuzzlePrompt"
              class="week5-hold-prompt"
            >
              PRESS AND HOLD A PIECE
            </div>

            <div
              id="week5PuzzleBoard"
              class="week5-puzzle-board"
            >
              <div class="week5-puzzle-slot" data-slot="0"></div>
              <div class="week5-puzzle-slot" data-slot="1"></div>
              <div class="week5-puzzle-slot" data-slot="2"></div>
              <div class="week5-puzzle-slot" data-slot="3"></div>
              <div class="week5-puzzle-slot" data-slot="4"></div>
              <div class="week5-puzzle-slot" data-slot="5"></div>
            </div>

            <div class="week5-puzzle-piece piece-0" data-piece="0"></div>
            <div class="week5-puzzle-piece piece-1" data-piece="1"></div>
            <div class="week5-puzzle-piece piece-2" data-piece="2"></div>
            <div class="week5-puzzle-piece piece-3" data-piece="3"></div>
            <div class="week5-puzzle-piece piece-4" data-piece="4"></div>
            <div class="week5-puzzle-piece piece-5" data-piece="5"></div>

            <div
              id="week5PuzzleHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week5PuzzleCount"
              class="week3-practice-count"
            >
              0 / 6
            </div>

            <div
              id="week5PuzzleSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week5Puzzle',
    },

  ],
};
