window.trackpadLesson = {
  title: 'Lesson 2: Cursor Adventure',
  eyebrow: 'Week 2 • Teacher-Led Lesson',

  steps: [
    {
      title: 'Super-Fast Review',

      teacherPrompt:
        'Do a quick three-part review. Ask students to point to their trackpad, hold up their right pointer finger, and make one slow slide to move the cursor. Keep this brief.',

      activityHtml: `
        <div class="week2-review-step">
          <div class="quick-review-badge">
            QUICK REVIEW
          </div>

          <h2>Show What You Remember!</h2>

          <div class="week2-review-grid">
            <div class="week2-review-card">
              <div class="week2-review-number">1</div>

              <div
                class="chromebook-mini"
                aria-label="Keyboard and trackpad"
              >
                <div class="chromebook-mini-keyboard">

                  <div class="mini-key-row mini-key-row-top">
                    <span>1</span><span>2</span><span>3</span><span>4</span>
                    <span>5</span><span>6</span><span>7</span><span>8</span>
                    <span>9</span><span>0</span>
                  </div>

                  <div class="mini-key-row">
                    <span>Q</span><span>W</span><span>E</span><span>R</span>
                    <span>T</span><span>Y</span><span>U</span><span>I</span>
                    <span>O</span><span>P</span>
                  </div>

                  <div class="mini-key-row mini-key-row-middle">
                    <span>A</span><span>S</span><span>D</span><span>F</span>
                    <span>G</span><span>H</span><span>J</span><span>K</span>
                    <span>L</span>
                  </div>

                  <div class="mini-key-row mini-key-row-bottom">
                    <span>Z</span><span>X</span><span>C</span><span>V</span>
                    <span>B</span><span>N</span><span>M</span>
                  </div>

                  <div class="mini-bottom-row">
                    <span class="mini-wide-key"></span>
                    <span class="mini-space-key"></span>
                    <span class="mini-wide-key"></span>
                  </div>

                </div>

                <div class="chromebook-mini-trackpad"></div>
              </div>

              <p>Find your trackpad.</p>
            </div>

            <div class="week2-review-card">
              <div class="week2-review-number">2</div>

              <div class="week2-review-icon">
                ☝️
              </div>

              <p>Show your pointer finger.</p>
            </div>

            <div class="week2-review-card">
              <div class="week2-review-number">3</div>

              <div class="week2-review-icon">
                ↔️
              </div>

              <p>Slide and move the arrow.</p>
            </div>
          </div>

          <div class="lesson-find-challenge">
            ⭐ Ready for a new adventure?
          </div>
        </div>
      `,
    },

    {
      title: 'Follow the Leader',

      teacherPrompt:
        'A glowing dot moves around the screen. Students use their pointer finger to move their real cursor and try to follow it. Encourage smooth movement instead of speed.',

      activityHtml: `
        <div class="week2-follow-step">
          <h2>Follow the Leader!</h2>

          <p class="lesson-kid-prompt">
            Keep your arrow close to the glowing dot.
          </p>

          <div
            id="followLeaderArea"
            class="follow-leader-area"
          >
            <div
              id="followLeaderDot"
              class="follow-leader-dot"
            ></div>

            <div class="follow-leader-trail">
              Follow me!
            </div>

            <div
              id="followLeaderSuccess"
              class="follow-leader-success"
              aria-live="polite"
            >
              GREAT JOB! ⭐
            </div>
          </div>

          <div class="follow-leader-progress-wrap">
            <div class="follow-leader-progress-label">
              Follow for 10 seconds
            </div>

            <div class="follow-leader-progress-track">
              <div
                id="followLeaderProgressFill"
                class="follow-leader-progress-fill"
              ></div>
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ Smooth and slow.
          </div>
        </div>
      `,

      activityType: 'followLeader',
    },

    {
      title: 'Catch the Butterfly',

      teacherPrompt:
        'The butterfly moves to different places around the screen. Students slide their cursor onto it. Each successful catch earns a sparkle. Complete five catches.',

      activityHtml: `
        <div class="week2-butterfly-step">
          <h2>Catch the Butterfly!</h2>

          <p class="lesson-kid-prompt">
            Move your arrow onto the butterfly.
          </p>

          <div
            id="butterflyPracticeArea"
            class="butterfly-practice-area"
          >
            <div
              id="movingButterfly"
              class="moving-butterfly"
            >
              🦋
            </div>

            <div
              id="butterflySuccess"
              class="butterfly-success"
            >
              Got it!
            </div>

            <div
              id="butterflyCount"
              class="butterfly-count"
            >
              0 / 5
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ No clicking — just slide!
          </div>
        </div>
      `,

      activityType: 'butterflyPractice',
    },

    {
      title: 'Winding Road',

      teacherPrompt:
        'Students begin at START and guide their cursor through the longer winding road to FINISH. Encourage them to stay near the dashed center line.',

      activityHtml: `
        <div class="lesson-path-step">
          <h2>Winding Road</h2>

          <p class="lesson-kid-prompt">
            Follow the road from START to FINISH.
          </p>

          <div
            id="pathPracticeArea"
            class="path-practice-area"
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
                class="practice-path-outline week2-path-outline"
                d="M 75 300
                   C 145 330, 205 300, 215 245
                   C 225 190, 145 175, 180 125
                   C 220 70, 305 95, 315 155
                   C 325 225, 405 265, 450 220
                   C 500 170, 435 105, 500 75
                   C 565 45, 610 105, 585 155
                   C 555 220, 635 245, 685 80"
              />

              <path
                class="practice-path-road week2-path-road"
                d="M 75 300
                   C 145 330, 205 300, 215 245
                   C 225 190, 145 175, 180 125
                   C 220 70, 305 95, 315 155
                   C 325 225, 405 265, 450 220
                   C 500 170, 435 105, 500 75
                   C 565 45, 610 105, 585 155
                   C 555 220, 635 245, 685 80"
              />

              <path
                class="practice-path-center"
                d="M 75 300
                   C 145 330, 205 300, 215 245
                   C 225 190, 145 175, 180 125
                   C 220 70, 305 95, 315 155
                   C 325 225, 405 265, 450 220
                   C 500 170, 435 105, 500 75
                   C 565 45, 610 105, 585 155
                   C 555 220, 635 245, 685 80"
              />
            </svg>

            <div
              id="pathFinish"
              class="path-finish week2-path-finish"
            >
              FINISH ⭐
            </div>

            <div
              id="pathSuccess"
              class="path-success"
            >
              You made it!
            </div>
          </div>
        </div>
      `,

      activityType: 'pathPractice',
    },

    {
      title: 'Connect the Dots',

      teacherPrompt:
        'Students move their cursor to the numbered dots in order. The active dot pulses. No clicking is needed. This practices large movements in several directions.',

      activityHtml: `
        <div class="week2-dots-step">
          <h2>Connect the Dots!</h2>

          <p class="lesson-kid-prompt">
            Go to 1, then 2, then 3, then 4, then 5.
          </p>

          <div
            id="dotPracticeArea"
            class="dot-practice-area"
          >
            <div class="practice-dot dot-one" data-dot="1">1</div>
            <div class="practice-dot dot-two" data-dot="2">2</div>
            <div class="practice-dot dot-three" data-dot="3">3</div>
            <div class="practice-dot dot-four" data-dot="4">4</div>
            <div class="practice-dot dot-five" data-dot="5">5</div>

            <svg
              id="dotLineLayer"
              class="dot-line-layer"
              aria-hidden="true"
            ></svg>

            <div
              id="dotSuccess"
              class="dot-success"
            >
              Great job!
            </div>
          </div>
        </div>
      `,

      activityType: 'dotPractice',
    },

    {
      title: 'Cursor Search',

      teacherPrompt:
        'Students explore a larger scene instead of a picture grid. Read the prompt aloud and have them move the cursor onto the requested object. Complete five objects.',

      activityHtml: `
        <div class="week2-search-step">
          <h2>Cursor Search!</h2>

          <div
            id="sceneSearchPrompt"
            class="picture-target-prompt"
          >
            Find the rocket 🚀
          </div>

          <div
            id="sceneSearchArea"
            class="scene-search-area"
          >
            <div
              class="scene-search-object search-cloud"
              data-search="cloud"
              data-label="Cloud ☁️"
            >
              ☁️
            </div>

            <div
              class="scene-search-object search-rocket"
              data-search="rocket"
              data-label="Rocket 🚀"
            >
              🚀
            </div>

            <div
              class="scene-search-object search-tree"
              data-search="tree"
              data-label="Tree 🌳"
            >
              🌳
            </div>

            <div
              class="scene-search-object search-dog"
              data-search="dog"
              data-label="Dog 🐶"
            >
              🐶
            </div>

            <div
              class="scene-search-object search-ball"
              data-search="ball"
              data-label="Ball ⚽"
            >
              ⚽
            </div>

            <div
              class="scene-search-object search-fish"
              data-search="fish"
              data-label="Fish 🐠"
            >
              🐠
            </div>

            <div
              id="sceneSearchSuccess"
              class="scene-search-success"
            >
              Found it!
            </div>

            <div
              id="sceneSearchCount"
              class="picture-practice-count"
            >
              0 / 5
            </div>
          </div>

          <div class="star-step-reminder">
            ☝️ Explore the whole screen.
          </div>
        </div>
      `,

      activityType: 'sceneSearch',
    },

    {
      title: 'Hidden Picture Challenge',

      teacherPrompt:
        'Students finish by sliding all around the trackpad to uncover the hidden picture. Encourage them to reveal almost the entire image.',

      activityHtml: `
        <div class="lesson-reveal-step">
          <h2>Hidden Picture Challenge</h2>

          <p class="lesson-kid-prompt">
            Slide all around to reveal the picture!
          </p>

          <div
            id="revealPracticeArea"
            class="reveal-practice-area"
          >
            <div class="hidden-picture-scene">
              <img
                class="hidden-picture-image"
                src="images/sponge.png"
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
