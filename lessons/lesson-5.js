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
      title: 'Two-Hand Picture Challenge',

      teacherPrompt:
        'Students use the right hand to move to the requested picture and the left hand to click it once. Complete five randomized pictures.',

      activityHtml: `
        <div class="week5-picture-step">
          <h2>Find It and Click It!</h2>

          <div
            id="week5PicturePrompt"
            class="picture-target-prompt"
          >
            Find the picture!
          </div>

          <div
            id="week5PictureArea"
            class="picture-practice-area"
          >
            <button class="week5-picture-choice" data-picture="bee" data-label="Bee 🐝">🐝</button>
            <button class="week5-picture-choice" data-picture="icecream" data-label="Ice Cream 🍦">🍦</button>
            <button class="week5-picture-choice" data-picture="dino" data-label="Dinosaur 🦖">🦖</button>
            <button class="week5-picture-choice" data-picture="rainbow" data-label="Rainbow 🌈">🌈</button>
            <button class="week5-picture-choice" data-picture="bus" data-label="Bus 🚌">🚌</button>
            <button class="week5-picture-choice" data-picture="duck" data-label="Duck 🦆">🦆</button>

            <div
              id="week5PictureCount"
              class="picture-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week5PictureSuccess"
              class="picture-practice-success"
            >
              Great job!
            </div>
          </div>
        </div>
      `,

      activityType: 'week5PicturePractice',
    },

    {
      title: 'Hold + Move',

      teacherPrompt:
        'Introduce the next two-hand job. The LEFT pointer finger presses and HOLDS the trackpad down. While it stays held, the RIGHT pointer finger slides. Explain that this lets us move things on the screen.',

      activityHtml: `
        <div class="week5-hold-step">
          <div class="week5-big-badge">
            NEW SKILL
          </div>

          <h2>Hold + Move</h2>

          <div class="week5-hold-sequence">
            <div>
              <span>👈</span>
              <strong>LEFT HOLDS</strong>
            </div>

            <div class="click-sequence-arrow">
              +
            </div>

            <div>
              <span>☝️</span>
              <strong>RIGHT MOVES</strong>
            </div>

            <div class="click-sequence-arrow">
              =
            </div>

            <div>
              <span>📦➡️</span>
              <strong>OBJECT MOVES!</strong>
            </div>
          </div>

          <div class="week5-hold-reminder">
            Keep the LEFT finger held down while the RIGHT finger slides.
          </div>
        </div>
      `,
    },

    {
      title: 'Your First Drag',

      teacherPrompt:
        'Students practice their first two-hand drag. Move to the large apple with the right hand. Hold the click with the left pointer finger. Keep holding while the right finger slides the apple into the large basket. Release when it is inside.',

      activityHtml: `
        <div class="week5-drag-step">
          <h2>Your First Drag!</h2>

          <p class="lesson-kid-prompt">
            LEFT holds • RIGHT moves
          </p>

          <div
            id="week5DragArea"
            class="week4-activity-area"
          >
            <div
              id="week5DragObject"
              class="week5-drag-object"
            >
              🍎
            </div>

            <div
              id="week5DragTarget"
              class="week5-drag-target"
            >
              🧺
            </div>

            <div
              id="week5DragSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week5FirstDrag',
    },
  ],
};
