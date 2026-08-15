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
        'Introduce clicking. Explain that a click tells the computer, “I choose this.” Model the steps slowly: MOVE the arrow, STOP on the object, CLICK one time, then WAIT for the computer to respond.',

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
            Move → Stop → Click Once → Wait
          </div>
        </div>
      `,

      activityType: 'clickTeaching',
    },

    {
      title: 'Click Once and Wait',

      teacherPrompt:
        'Teach students to click one time and then wait for the computer to respond. Explain that clicking again and again does not make the computer work faster. Practice the words together: Click once. Hands off. Wait. Watch.',

      activityHtml: `
        <div class="week3-click-wait-step">
          <h2>Click Once — Then Wait!</h2>

          <p class="lesson-kid-prompt">
            Give the computer time to answer.
          </p>

          <div
            id="clickWaitTeachingDemo"
            class="click-wait-teaching-demo"
          >
            <div
              class="click-wait-teaching-card"
              data-wait-step="click"
            >
              <div class="click-wait-number">1</div>
              <div class="click-wait-icon">👇</div>
              <strong>CLICK ONCE</strong>
            </div>

            <div class="click-wait-arrow">→</div>

            <div
              class="click-wait-teaching-card"
              data-wait-step="wait"
            >
              <div class="click-wait-number">2</div>
              <div class="click-wait-icon">✋</div>
              <strong>WAIT</strong>
            </div>

            <div class="click-wait-arrow">→</div>

            <div
              class="click-wait-teaching-card"
              data-wait-step="watch"
            >
              <div class="click-wait-number">3</div>
              <div class="click-wait-icon">💻</div>
              <strong>WATCH</strong>
            </div>
          </div>

          <div class="click-wait-demo-screen">
            <button
              id="clickWaitDemoButton"
              class="click-wait-demo-button"
              type="button"
              tabindex="-1"
            >
              CLICK ME
            </button>

            <div
              id="clickWaitDemoThinking"
              class="click-wait-demo-thinking"
            >
              • • •
            </div>

            <div
              id="clickWaitDemoAnswer"
              class="click-wait-demo-answer"
            >
              ✓ READY!
            </div>
          </div>

          <div
            id="clickWaitTeachingWords"
            class="click-wait-teaching-words"
          >
            CLICK ONCE
          </div>
        </div>
      `,

      activityType: 'clickWaitTeaching',
    },

    {
      title: 'Watch the Click',

      teacherPrompt:
        'Demonstrate the whole action. The cursor moves to the button, stops, clicks once, and waits for the computer to respond. Point out that simply moving onto the button does not choose it — the click does.',

      activityHtml: `
        <div class="week3-watch-click">
          <h2>Watch the Click</h2>

          <p class="lesson-kid-prompt">
            Move → Stop → Click Once → Wait
          </p>

          <div
            id="watchClickDemo"
            class="week3-click-demo"
          >
            <div class="week3-demo-screen">
              <div class="week3-demo-screen-label">
                COMPUTER SCREEN
              </div>

              <div
                id="watchClickButton"
                class="week3-demo-button"
              >
                CHOOSE ME
              </div>

              <div
                id="watchClickCursor"
                class="week3-demo-cursor"
                aria-hidden="true"
              ></div>
            </div>

            <div class="motion-equals">
              =
            </div>

            <div class="week3-demo-trackpad">
              <div
                class="generic-trackpad week3-watch-trackpad"
              >
                <div
                  id="watchClickPress"
                  class="week3-click-press-ring"
                  aria-hidden="true"
                ></div>
              </div>

              <div
                id="watchClickFinger"
                class="week3-demo-finger"
                aria-hidden="true"
              >
                👆
              </div>
            </div>
          </div>

          <div
            id="watchClickStage"
            class="week3-watch-stage"
          >
            MOVE
          </div>
        </div>
      `,

      activityType: 'watchClick',

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
