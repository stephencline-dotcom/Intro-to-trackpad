window.trackpadLesson = {
  title: 'Lesson 1: Meet the Trackpad',
  eyebrow: 'Week 1 • Teacher-Led Lesson',

  steps: [
    {
      title: 'Meet the Trackpad',

      teacherPrompt:
        'Ask students to look at their Chromebook and point to the flat rectangle below the keyboard. Explain that this is the trackpad and that its job is to help us control the arrow on the screen.',

      activityHtml: `
        <div class="lesson-find-trackpad">
          <h2>Find Your Trackpad</h2>

          <p class="lesson-kid-prompt">
            Look below your keyboard.
          </p>

          <div class="chromebook-visual">

            <div
              class="chromebook-keyboard"
              aria-label="Keyboard"
            >
              <div class="keyboard-row">
                <span>Q</span>
                <span>W</span>
                <span>E</span>
                <span>R</span>
                <span>T</span>
                <span>Y</span>
                <span>U</span>
                <span>I</span>
                <span>O</span>
                <span>P</span>
              </div>

              <div class="keyboard-row keyboard-row-middle">
                <span>A</span>
                <span>S</span>
                <span>D</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>J</span>
                <span>K</span>
                <span>L</span>
              </div>

              <div class="keyboard-row keyboard-row-bottom">
                <span>Z</span>
                <span>X</span>
                <span>C</span>
                <span>V</span>
                <span>B</span>
                <span>N</span>
                <span>M</span>
              </div>

              <div class="keyboard-space-row">
                <span class="keyboard-space-key"></span>
              </div>
            </div>

            <div class="trackpad-pointer">
              <span class="trackpad-arrow">↓</span>
              <span class="trackpad-hand">👇</span>
            </div>

            <div
              class="generic-trackpad"
              aria-label="Trackpad"
            ></div>

            <p class="trackpad-word">
              TRACKPAD
            </p>
          </div>

          <div class="lesson-find-challenge">
            ⭐ Can you find this on your Chromebook?
          </div>
        </div>
      `,
    },

    {
      title: 'Meet Your Pointer Finger',

      teacherPrompt:
        'Have students hold up their right hand. Ask them to wiggle their pointer finger. Explain that this is the finger we will use to slide on the trackpad and move the arrow on the screen.',

      activityHtml: `
        <div class="lesson-pointer-finger-step">
          <h2>Meet Your Pointer Finger</h2>

          <p class="lesson-kid-prompt">
            Hold up your right hand.
          </p>

          <div class="pointer-finger-visual">
            <div class="pointer-hand-card">
              <div class="pointer-hand-emoji">
                ☝️
              </div>

              <div class="pointer-finger-arrow">
                ↑
              </div>

              <div class="pointer-finger-label">
                POINTER FINGER
              </div>
            </div>

            <div class="pointer-finger-plus">
              +
            </div>

            <div class="pointer-trackpad-card">
              <div class="finger-demo">
                <div
                  class="generic-trackpad pointer-trackpad-small"
                  aria-label="Trackpad"
                ></div>

                <div
                  class="animated-pointer-finger"
                  aria-hidden="true"
                >
                  👆
                </div>

                <div
                  class="finger-motion-path"
                  aria-hidden="true"
                >
                  ↔
                </div>
              </div>

              <div class="pointer-slide-label">
                TOUCH • SLIDE
              </div>
            </div>
          </div>

          <div class="lesson-find-challenge">
            ⭐ Wiggle your pointer finger!
          </div>
        </div>
      `,
    },
    {
      title: 'Watch the Arrow Move',

      teacherPrompt:
        'Show students that when their pointer finger slides on the trackpad, the arrow on the screen moves too. Have everyone slide slowly left and right without clicking.',

      activityHtml: `
        <div class="lesson-arrow-step">
          <h2>Watch the Arrow Move</h2>

          <p class="lesson-kid-prompt">
            Slide your finger. Watch the arrow!
          </p>

          <div class="arrow-motion-demo">

            <div class="demo-laptop">
              <div class="demo-screen">
                <div
                  class="demo-camera"
                  aria-hidden="true"
                ></div>

                <div class="demo-screen-label">
                  COMPUTER SCREEN
                </div>

                <div class="moving-cursor">
                  ➤
                </div>

                <div
                  class="demo-screen-shelf"
                  aria-hidden="true"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div
                class="demo-laptop-base"
                aria-hidden="true"
              ></div>
            </div>

            <div class="motion-equals">
              =
            </div>

            <div class="demo-trackpad-area">
              <div class="finger-demo step3-finger-demo">
                <div
                  class="generic-trackpad pointer-trackpad-small"
                  aria-label="Trackpad"
                ></div>

                <div
                  class="animated-pointer-finger step3-pointer-finger"
                  aria-hidden="true"
                >
                  👆
                </div>
              </div>

              <div class="pointer-slide-label">
                SLIDE YOUR FINGER
              </div>
            </div>

          </div>

          <div class="lesson-find-challenge">
            ⭐ Move your arrow left and right!
          </div>
        </div>
      `,
    },

    {
      title: 'Move to the Star',

      teacherPrompt:
        'Now students practice for real. Ask them to use only their right pointer finger to slide the arrow onto the star. No clicking is needed. Encourage slow, controlled movements.',

      activityHtml: `
        <div class="lesson-star-step">
          <div class="star-step-heading">
            <h2>Move to the Star!</h2>

            <p class="lesson-kid-prompt">
              Slide your finger to move the arrow.
            </p>
          </div>

          <div
            id="starPracticeArea"
            class="star-practice-area"
            aria-label="Move the star to the faded star"
          >
            <div
              id="practiceStarTarget"
              class="practice-star-target"
              aria-hidden="true"
            >
              ⭐
            </div>

            <div
              id="practiceStar"
              class="practice-star"
              role="img"
              aria-label="Movable star"
            >
              ⭐
            </div>

            <div
              id="starSuccess"
              class="star-success"
              aria-live="polite"
            >
              Great job!
            </div>

            <div
              id="starPracticeCount"
              class="star-practice-count"
            >
              0 / 5
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ Slide the star to the faded star — no clicking!
          </div>
        </div>
      `,

      activityType: 'starPractice',
    },

    {
      title: 'Follow the Path',

      teacherPrompt:
        'Have students slide their right pointer finger slowly and guide the arrow from START to FINISH. Remind them that this is about smooth movement, not speed. If they leave the path, they can simply move back onto it.',

      activityHtml: `
        <div class="lesson-path-step">
          <h2>Follow the Path</h2>

          <p class="lesson-kid-prompt">
            Move your arrow from START to FINISH.
          </p>

          <div
            id="pathPracticeArea"
            class="path-practice-area"
            aria-label="Follow the path from start to finish"
          >
            <div class="path-start">
              START
            </div>

            <svg
              class="practice-path-svg"
              viewBox="0 0 760 360"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                class="practice-path-outline"
                d="M 85 290
                   C 190 290, 205 270, 270 235
                   S 355 165, 425 185
                   S 520 230, 555 170
                   S 610 90, 680 80"
              />

              <path
                class="practice-path-road"
                d="M 85 290
                   C 190 290, 205 270, 270 235
                   S 355 165, 425 185
                   S 520 230, 555 170
                   S 610 90, 680 80"
              />

              <path
                class="practice-path-center"
                d="M 85 290
                   C 190 290, 205 270, 270 235
                   S 355 165, 425 185
                   S 520 230, 555 170
                   S 610 90, 680 80"
              />
            </svg>

            <div
              id="pathFinish"
              class="path-finish"
            >
              FINISH ⭐
            </div>

            <div
              id="pathSuccess"
              class="path-success"
              aria-live="polite"
            >
              You made it!
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ Slide slowly and smoothly.
          </div>
        </div>
      `,

      activityType: 'pathPractice',
    },

    {
      title: 'Find the Picture',

      teacherPrompt:
        'Students practice moving the cursor with more control. Read the target aloud and have them slide the cursor onto the matching picture. No clicking is needed. Complete five targets.',

      activityHtml: `
        <div class="lesson-find-picture-step">
          <h2>Find the Picture</h2>

          <p class="lesson-kid-prompt">
            Move your arrow to the picture!
          </p>

          <div
            id="pictureTargetPrompt"
            class="picture-target-prompt"
          >
            Find the Apple 🍎
          </div>

          <div
            id="picturePracticeArea"
            class="picture-practice-area"
          >
            <div class="picture-choice" data-picture="apple">
              🍎
            </div>

            <div class="picture-choice" data-picture="star">
              ⭐
            </div>

            <div class="picture-choice" data-picture="balloon">
              🎈
            </div>

            <div class="picture-choice" data-picture="sun">
              ☀️
            </div>

            <div class="picture-choice" data-picture="flower">
              🌼
            </div>

            <div class="picture-choice" data-picture="car">
              🚗
            </div>

            <div
              id="picturePracticeSuccess"
              class="picture-practice-success"
            >
              Great job!
            </div>

            <div
              id="picturePracticeCount"
              class="picture-practice-count"
            >
              0 / 5
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ Slide only — no clicking!
          </div>
        </div>
      `,

      activityType: 'picturePractice',
    },

    {
      title: 'Reveal the Picture',

      teacherPrompt:
        'For the final activity, students slide their pointer finger all around the trackpad to uncover the hidden picture. No clicking is needed. Encourage them to move across the whole area until most of the picture is revealed.',

      activityHtml: `
        <div class="lesson-reveal-step">
          <h2>Reveal the Picture!</h2>

          <p class="lesson-kid-prompt">
            Slide your arrow all around to uncover the picture.
          </p>

          <div
            id="revealPracticeArea"
            class="reveal-practice-area"
            aria-label="Move the cursor around to reveal the hidden picture"
          >
            <div class="hidden-picture-scene">
              <img
                class="hidden-picture-image"
                src="images/Bluey.png"
                alt="Hidden picture"
                draggable="false"
              />
            </div>

            <canvas
              id="revealCanvas"
              class="reveal-canvas"
              aria-hidden="true"
            ></canvas>

            <div
              id="revealProgress"
              class="reveal-progress"
            >
              Keep sliding!
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ Try to uncover the whole picture!
          </div>
        </div>
      `,

      activityType: 'revealPractice',
    },

  ],
};
