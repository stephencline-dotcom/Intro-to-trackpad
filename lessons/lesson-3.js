window.trackpadLesson = {
  title: 'Lesson 3: Learning to Click',
  eyebrow: 'Week 3 • Teacher-Led Lesson',

  steps: [
    {
      title: 'Quick Sliding Review',

      teacherPrompt:
        'Quickly review the skill students already know. Ask them to show their right pointer finger, place it on the trackpad, and slide to move the cursor.',

      activityHtml: `
        <div class="week3-review-step">
          <div class="week3-review-badge">
            ⭐ YOU ALREADY KNOW THIS!
          </div>

          <h2>Quick Sliding Warm-Up</h2>

          <p class="lesson-kid-prompt">
            Slide your pointer finger and watch the arrow move.
          </p>

          <div class="week3-review-demo">

            <div class="week3-review-screen">
              <div class="week3-review-screen-label">
                SCREEN
              </div>

              <div
                class="week3-review-cursor"
                aria-hidden="true"
              ></div>

              <div class="week3-review-screen-bottom">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div class="week3-review-equals">
              =
            </div>

            <div class="week3-review-trackpad-area">
              <div class="week3-review-finger-demo">
                <div
                  class="generic-trackpad week3-review-trackpad"
                  aria-label="Trackpad"
                ></div>

                <div
                  class="week3-review-moving-finger"
                  aria-hidden="true"
                >
                  👆
                </div>
              </div>

              <div class="week3-review-slide-label">
                SLIDE
              </div>
            </div>

          </div>

          <div class="week3-review-challenge">
            ☝️ Show me one slow slide left and right!
          </div>
        </div>
      `,
    },

    {
      title: 'What Is a Click?',

      teacherPrompt:
        'Introduce clicking. Explain that a click tells the computer, “I choose this.” Model the four steps slowly: MOVE the arrow, STOP on the object, CLICK the trackpad one time, then LIFT your finger.',

      activityHtml: `
        <div class="week3-click-intro">
          <h2>What Is a Click?</h2>

          <p class="lesson-kid-prompt">
            A click tells the computer:
            <strong>I choose this!</strong>
          </p>

          <div
            id="clickTeachingSequence"
            class="click-sequence"
          >
            <div
              class="click-sequence-step"
              data-click-step="move"
            >
              <span class="click-step-number">1</span>
              <span class="click-step-icon">↔️</span>
              <strong>MOVE</strong>
            </div>

            <div class="click-sequence-arrow">→</div>

            <div
              class="click-sequence-step"
              data-click-step="stop"
            >
              <span class="click-step-number">2</span>
              <span class="click-step-icon">✋</span>
              <strong>STOP</strong>
            </div>

            <div class="click-sequence-arrow">→</div>

            <div
              class="click-sequence-step"
              data-click-step="click"
            >
              <span class="click-step-number">3</span>

              <div class="click-press-demo">
                <div class="click-demo-finger">
                  👆
                </div>

                <div class="click-demo-pad"></div>
              </div>

              <strong>CLICK</strong>
            </div>

            <div class="click-sequence-arrow">→</div>

            <div
              class="click-sequence-step"
              data-click-step="lift"
            >
              <span class="click-step-number">4</span>
              <span class="click-step-icon">☝️</span>
              <strong>LIFT</strong>
            </div>
          </div>

          <div class="week3-click-definition">
            Move → Stop → Click → Lift
          </div>
        </div>
      `,

      activityType: 'clickTeaching',
    },

    {
      title: 'Watch the Click',

      teacherPrompt:
        'Demonstrate the whole action. The finger slides, the cursor moves to the button, the finger stops, presses once, and lifts. Point out that simply moving onto the button does not choose it — the click does.',

      activityHtml: `
        <div class="week3-watch-click">
          <h2>Watch the Click</h2>

          <p class="lesson-kid-prompt">
            Move → Stop → Click → Lift
          </p>

          <div class="week3-click-demo">
            <div class="week3-demo-screen">
              <div class="week3-demo-button">
                CHOOSE ME
              </div>

              <div class="week3-demo-cursor"></div>
            </div>

            <div class="motion-equals">
              =
            </div>

            <div class="week3-demo-trackpad">
              <div class="generic-trackpad"></div>

              <div class="week3-demo-finger">
                👆
              </div>
            </div>
          </div>
        </div>
      `,
    },

    {
      title: 'Click the Big Button',

      teacherPrompt:
        'This is the first student clicking practice. Students move the cursor onto the large button, stop, and click once. Hovering alone should do nothing. Complete three large buttons.',

      activityHtml: `
        <div class="week3-big-button-step">
          <h2>Click the Big Button!</h2>

          <p class="lesson-kid-prompt">
            Move. Stop. Click one time.
          </p>

          <div
            id="bigButtonPracticeArea"
            class="big-button-practice-area"
          >
            <button
              id="bigClickButton"
              class="big-click-button"
              type="button"
            >
              CLICK ME!
            </button>

            <div
              id="bigButtonSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>

            <div
              id="bigButtonCount"
              class="week3-practice-count"
            >
              0 / 3
            </div>
          </div>
        </div>
      `,

      activityType: 'bigButtonPractice',
    },

    {
      title: 'Click the Picture',

      teacherPrompt:
        'Students must click the requested picture. Hovering does nothing. Complete five randomized pictures. Remind students to move, stop, and click once.',

      activityHtml: `
        <div class="week3-picture-step">
          <h2>Click the Picture!</h2>

          <div
            id="clickPicturePrompt"
            class="picture-target-prompt"
          >
            Click the picture!
          </div>

          <div
            id="clickPictureArea"
            class="picture-practice-area"
          >
            <button class="click-picture-choice" data-click-picture="cat" data-label="Cat 🐱">🐱</button>
            <button class="click-picture-choice" data-click-picture="cookie" data-label="Cookie 🍪">🍪</button>
            <button class="click-picture-choice" data-click-picture="frog" data-label="Frog 🐸">🐸</button>
            <button class="click-picture-choice" data-click-picture="moon" data-label="Moon 🌙">🌙</button>
            <button class="click-picture-choice" data-click-picture="train" data-label="Train 🚂">🚂</button>
            <button class="click-picture-choice" data-click-picture="heart" data-label="Heart ❤️">❤️</button>

            <div
              id="clickPictureSuccess"
              class="picture-practice-success"
            >
              Great job!
            </div>

            <div
              id="clickPictureCount"
              class="picture-practice-count"
            >
              0 / 5
            </div>
          </div>
        </div>
      `,

      activityType: 'clickPicturePractice',
    },

    {
      title: 'Pop the Bubbles',

      teacherPrompt:
        'Large bubbles move slowly around the screen. Students move the cursor to a bubble, stop, and click once to pop it. Complete five bubbles.',

      activityHtml: `
        <div class="week3-bubble-step">
          <h2>Pop the Bubbles!</h2>

          <p class="lesson-kid-prompt">
            Move → Stop → Click!
          </p>

          <div
            id="bubblePracticeArea"
            class="bubble-practice-area"
          >
            <button
              class="practice-bubble bubble-one"
              type="button"
            ></button>

            <button
              class="practice-bubble bubble-two"
              type="button"
            ></button>

            <button
              class="practice-bubble bubble-three"
              type="button"
            ></button>

            <button
              class="practice-bubble bubble-four"
              type="button"
            ></button>

            <button
              class="practice-bubble bubble-five"
              type="button"
            ></button>

            <div
              id="bubbleCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="bubbleSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'bubblePractice',
    },

    {
      title: 'Treasure Hunt',

      teacherPrompt:
        'Students finish by clicking treasure boxes to find the hidden star. Wrong boxes can open without penalty. Once the treasure is found, leave the large GREAT JOB banner visible so you can see who completed the lesson.',

      activityHtml: `
        <div class="week3-treasure-step">
          <h2>Treasure Hunt!</h2>

          <p class="lesson-kid-prompt">
            Click the boxes. Can you find the treasure?
          </p>

          <div
            id="treasurePracticeArea"
            class="treasure-practice-area"
          >
            <button class="treasure-box" type="button">🎁</button>
            <button class="treasure-box" type="button">🎁</button>
            <button class="treasure-box" type="button">🎁</button>
            <button class="treasure-box" type="button">🎁</button>
            <button class="treasure-box" type="button">🎁</button>
            <button class="treasure-box" type="button">🎁</button>

            <div
              id="treasureSuccess"
              class="week3-success-banner"
            >
              YOU FOUND THE TREASURE! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'treasurePractice',
    },
  ],
};
