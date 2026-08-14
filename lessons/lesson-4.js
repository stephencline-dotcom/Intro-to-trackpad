window.trackpadLesson = {
  title: 'Lesson 4: Trackpad Challenge',
  eyebrow: 'Week 4 • Review Week',

  steps: [
    {
      title: 'Super-Fast Review',

      teacherPrompt:
        'Quickly review the three skills students have learned: slide to move the arrow, stop on the target, and click once then wait.',

      activityHtml: `
        <div class="week4-review-step">
          <div class="quick-review-badge">
            REVIEW CHALLENGE
          </div>

          <h2>Show What You Know!</h2>

          <p class="lesson-kid-prompt">
            Can you remember all three?
          </p>

          <div class="week4-review-grid">
            <div class="week4-review-card">
              <div class="week4-review-number">1</div>
              <div class="week4-review-icon">☝️</div>
              <strong>SLIDE</strong>
              <span>Move the arrow</span>
            </div>

            <div class="week4-review-card">
              <div class="week4-review-number">2</div>
              <div class="week4-review-icon">🎯</div>
              <strong>STOP</strong>
              <span>Get on the target</span>
            </div>

            <div class="week4-review-card">
              <div class="week4-review-number">3</div>
              <div class="week4-review-icon">👇</div>
              <strong>CLICK ONCE</strong>
              <span>Then wait!</span>
            </div>
          </div>

          <div
            id="week4ReviewReady"
            class="week4-review-ready"
          >
            ⭐ READY FOR THE CHALLENGE! ⭐
          </div>
        </div>
      `,

      activityType: 'week4Review',
    },

    {
      title: 'Follow and Click',

      teacherPrompt:
        'Students follow the moving target with their cursor. When the target stops and lights up, they click it one time. Complete five targets.',

      activityHtml: `
        <div class="week4-follow-click-step">
          <h2>Follow and Click!</h2>

          <p class="lesson-kid-prompt">
            Follow it. Wait for it to stop. Then click!
          </p>

          <div
            id="followClickArea"
            class="week4-activity-area"
          >
            <div
              id="followClickInstruction"
              class="follow-click-instruction"
            >
              FOLLOW THE STAR
            </div>

            <button
              id="followClickTarget"
              class="follow-click-target"
              type="button"
            >
              ⭐
            </button>

            <div
              id="followClickCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="followClickSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'followClick',
    },

    {
      title: 'Moving Target Search',

      teacherPrompt:
        'Students find the requested moving object and click it once. This reviews tracking, stopping, clicking, and waiting.',

      activityHtml: `
        <div class="week4-moving-search-step">
          <h2>Moving Target Search!</h2>

          <div
            id="week4SearchPrompt"
            class="picture-target-prompt"
          >
            Find the picture!
          </div>

          <div
            id="week4SearchArea"
            class="week4-activity-area"
          >
            <button class="week4-search-object" data-search="lion" data-label="Lion 🦁">🦁</button>
            <button class="week4-search-object" data-search="plane" data-label="Plane ✈️">✈️</button>
            <button class="week4-search-object" data-search="turtle" data-label="Turtle 🐢">🐢</button>
            <button class="week4-search-object" data-search="banana" data-label="Banana 🍌">🍌</button>
            <button class="week4-search-object" data-search="robot" data-label="Robot 🤖">🤖</button>
            <button class="week4-search-object" data-search="soccer" data-label="Soccer Ball ⚽">⚽</button>

            <div
              id="week4SearchCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week4SearchSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week4MovingSearch',
    },

    {
      title: 'Checkpoint Maze',

      teacherPrompt:
        'Students follow the winding road. At each checkpoint they stop and click once before continuing. This combines controlled sliding with precise clicking.',

      activityHtml: `
        <div class="week4-maze-step">
          <h2>Checkpoint Maze!</h2>

          <p class="lesson-kid-prompt">
            Follow the road and click each checkpoint.
          </p>

          <div
            id="checkpointMazeArea"
            class="week4-activity-area checkpoint-maze-area"
          >
            <svg
              class="checkpoint-road-svg"
              viewBox="0 0 760 380"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                class="checkpoint-road-outline"
                d="M 65 310
                   C 135 310, 145 230, 210 235
                   S 290 325, 360 275
                   S 390 125, 470 130
                   S 555 235, 610 185
                   S 650 85, 700 70"
              />

              <path
                class="checkpoint-road-main"
                d="M 65 310
                   C 135 310, 145 230, 210 235
                   S 290 325, 360 275
                   S 390 125, 470 130
                   S 555 235, 610 185
                   S 650 85, 700 70"
              />

              <path
                class="checkpoint-road-center"
                d="M 65 310
                   C 135 310, 145 230, 210 235
                   S 290 325, 360 275
                   S 390 125, 470 130
                   S 555 235, 610 185
                   S 650 85, 700 70"
              />
            </svg>

            <div
              id="checkpointMazeStart"
              class="checkpoint-maze-start"
            >
              START
            </div>

            <button
              class="maze-checkpoint checkpoint-one"
              data-checkpoint="1"
              type="button"
            >
              1
            </button>

            <button
              class="maze-checkpoint checkpoint-two"
              data-checkpoint="2"
              type="button"
            >
              2
            </button>

            <button
              class="maze-checkpoint checkpoint-three"
              data-checkpoint="3"
              type="button"
            >
              3
            </button>

            <button
              class="maze-checkpoint checkpoint-four"
              data-checkpoint="4"
              type="button"
            >
              4
            </button>

            <div
              id="checkpointMazePrompt"
              class="checkpoint-maze-prompt"
            >
              Touch START
            </div>

            <div
              id="checkpointMazeSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'checkpointMaze',
    },

    {
      title: 'Sequence Challenge',

      teacherPrompt:
        'Students click the numbered targets in order from 1 through 5. Only the next correct target lights up.',

      activityHtml: `
        <div class="week4-sequence-step">
          <h2>Sequence Challenge!</h2>

          <p class="lesson-kid-prompt">
            Click 1 → 2 → 3 → 4 → 5
          </p>

          <div
            id="week4SequenceArea"
            class="week4-activity-area week4-sequence-area"
          >
            <svg
              id="week4SequenceLines"
              class="week4-sequence-lines"
              aria-hidden="true"
            ></svg>

            <button class="week4-sequence-target sequence-one" data-sequence="1">1</button>
            <button class="week4-sequence-target sequence-two" data-sequence="2">2</button>
            <button class="week4-sequence-target sequence-three" data-sequence="3">3</button>
            <button class="week4-sequence-target sequence-four" data-sequence="4">4</button>
            <button class="week4-sequence-target sequence-five" data-sequence="5">5</button>

            <div
              id="week4SequencePrompt"
              class="week4-sequence-prompt"
            >
              Click 1
            </div>

            <div
              id="week4SequenceSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week4Sequence',
    },

    {
      title: 'Wait for Green',

      teacherPrompt:
        'Students must watch the signal and wait. Red means STOP. Yellow means GET READY. Green means CLICK ONCE. Clicking too early gives a friendly WAIT FOR GREEN reminder. Complete five rounds.',

      activityHtml: `
        <div class="week4-wait-green-step">
          <h2>Wait for Green!</h2>

          <p class="lesson-kid-prompt">
            Watch carefully. Click only when it turns green!
          </p>

          <div
            id="whackTargetArea"
            class="week4-activity-area wait-green-area"
          >
            <div
              id="waitGreenWords"
              class="wait-green-words"
            >
              WAIT...
            </div>

            <button
              id="whackTarget"
              class="wait-green-button"
              type="button"
            >
              ✋
            </button>

            <div class="wait-green-key">
              <span class="wait-key-red">
                🔴 STOP
              </span>

              <span class="wait-key-yellow">
                🟡 GET READY
              </span>

              <span class="wait-key-green">
                🟢 CLICK ONCE
              </span>
            </div>

            <div
              id="whackTargetCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="whackTargetSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'whackTarget',
    },

    {
      title: 'Reveal and Choose',

      teacherPrompt:
        'Students slide around to uncover the hidden picture. Once the picture is revealed, they click the correct answer one time and wait for the computer to respond.',

      activityHtml: `
        <div class="week4-reveal-step">
          <h2>Final Challenge!</h2>

          <p class="lesson-kid-prompt">
            Reveal the picture. Then choose what you see!
          </p>

          <div
            id="week4RevealArea"
            class="reveal-practice-area"
          >
            <div class="hidden-picture-scene">
              <img
                class="hidden-picture-image"
                src="images/spidey.png"
                alt="Hidden picture"
                draggable="false"
              />
            </div>

            <canvas
              id="week4RevealCanvas"
              class="reveal-canvas"
              aria-hidden="true"
            ></canvas>

            <div
              id="week4RevealProgress"
              class="reveal-progress"
            >
              Keep sliding!
            </div>
          </div>

          <div
            id="week4RevealChoices"
            class="week4-reveal-choices"
            hidden
          >
            <button
              type="button"
              data-reveal-answer="spidey"
            >
              🕷️ Spider-Man
            </button>

            <button
              type="button"
              data-reveal-answer="dog"
            >
              🐶 Dog
            </button>

            <button
              type="button"
              data-reveal-answer="rocket"
            >
              🚀 Rocket
            </button>
          </div>

          <div
            id="week4RevealSuccess"
            class="week3-success-banner"
          >
            GREAT JOB! ⭐
          </div>
        </div>
      `,

      activityType: 'week4RevealChoose',
    },
  ],
};
