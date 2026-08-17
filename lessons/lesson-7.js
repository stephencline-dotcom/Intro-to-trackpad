window.trackpadLesson = {
  title: 'Lesson 7: Scrolling with Bunny Ears',
  eyebrow: 'Week 7 • Scrolling',

  steps: [
    {
      title: 'Super-Fast Skills Review',

      teacherPrompt:
        'Quickly review the trackpad skills students already know before introducing scrolling. Students should remember moving the cursor, clicking, waiting before clicking, pressing and holding, moving while holding, and releasing on a target.',

      activityHtml: `
        <div class="week7-review-step">

          <div class="quick-review-badge">
            SUPER-FAST REVIEW
          </div>

          <h2>Show What You Remember!</h2>

          <p class="lesson-kid-prompt">
            We already know a LOT about the trackpad!
          </p>

          <div class="week7-review-grid">

            <div class="week7-review-card">
              <div class="week7-review-icon">
                ☝️
              </div>

              <strong>MOVE</strong>

              <span>
                Slide your finger
              </span>
            </div>

            <div class="week7-review-card">
              <div class="week7-review-icon">
                🎯
              </div>

              <strong>CLICK</strong>

              <span>
                Point, then click
              </span>
            </div>

            <div class="week7-review-card">
              <div class="week7-review-icon">
                ✋
              </div>

              <strong>HOLD</strong>

              <span>
                Press and keep holding
              </span>
            </div>

            <div class="week7-review-card">
              <div class="week7-review-icon">
                ↔️
              </div>

              <strong>MOVE IT</strong>

              <span>
                Move while holding
              </span>
            </div>

            <div class="week7-review-card">
              <div class="week7-review-icon">
                📦
              </div>

              <strong>DRAG</strong>

              <span>
                Carry it to the target
              </span>
            </div>

            <div class="week7-review-card">
              <div class="week7-review-icon">
                ⭐
              </div>

              <strong>RELEASE</strong>

              <span>
                Let go in the right spot
              </span>
            </div>

          </div>

          <div class="week7-review-ready">
            READY FOR A BRAND-NEW SKILL? 🐰
          </div>

        </div>
      `,
    },

    {
      title: 'Meet Bunny Ears',

      teacherPrompt:
        'Introduce the scrolling hand position. Students use ONE hand and place TWO fingers together on the trackpad like bunny ears. For now, focus only on making the correct hand position.',

      activityHtml: `
        <div class="week7-bunny-intro-step">

          <div class="week7-bunny-badge">
            NEW TRACKPAD SKILL
          </div>

          <h2>Meet Bunny Ears! 🐰</h2>

          <p class="lesson-kid-prompt">
            One hand • Two fingers together
          </p>

          <div class="week7-bunny-demo">

            <div class="week7-bunny-hand-side">

              <div class="week7-bunny-label">
                MAKE BUNNY EARS
              </div>

              <img
                class="week7-bunny-hand"
                src="images/bunnyears.png"
                alt="Hand making bunny ears with two fingers"
                draggable="false"
              />

            </div>

            <div
              class="week7-bunny-arrow"
              aria-hidden="true"
            >
              ➜
            </div>

            <div class="week7-bunny-trackpad-side">

              <div class="week7-bunny-label">
                PUT THEM ON THE TRACKPAD
              </div>

              <div class="week7-bunny-trackpad">

                <div class="week7-bunny-touch-zone">

                  <div class="week7-bunny-finger-dot"></div>
                  <div class="week7-bunny-finger-dot"></div>

                </div>

              </div>

            </div>

          </div>

          <div class="week7-bunny-rule">
            🐰 TWO FINGERS • ONE HAND
          </div>

        </div>
      `,
    },

    {
      title: 'Bunny Ears Slide',

      teacherPrompt:
        'Model the scrolling motion. Students keep their Bunny Ears together on the trackpad and slide both fingers up and down together. Emphasize that the two fingers move as a team.',

      activityHtml: `
        <div class="week7-bunny-slide-step">

          <div class="week7-bunny-badge">
            BUNNY EARS MOVE
          </div>

          <h2>Slide Your Bunny Ears!</h2>

          <p class="lesson-kid-prompt">
            Keep both fingers together • Move them as a team
          </p>

          <div class="week7-slide-demo">

            <div class="week7-slide-direction week7-slide-up">
              <span class="week7-slide-arrow">↑</span>
              <strong>UP</strong>
            </div>

            <div
              id="week7BunnySlideTrackpad"
              class="week7-slide-trackpad"
            >

              <div
                id="week7BunnySlideSpots"
                class="week7-slide-spots"
                aria-hidden="true"
              >
                <div class="week7-slide-finger-spot"></div>
                <div class="week7-slide-finger-spot"></div>
              </div>

              <img
                id="week7BunnySlideHand"
                class="week7-slide-hand"
                src="images/bunnyears.png"
                alt="Bunny ears hand moving onto the trackpad and sliding up and down"
                draggable="false"
              />

            </div>

            <div class="week7-slide-direction week7-slide-down">
              <strong>DOWN</strong>
              <span class="week7-slide-arrow">↓</span>
            </div>

          </div>

          <div class="week7-slide-rule">
            🐰 TWO FINGERS MOVE TOGETHER
          </div>

        </div>
      `,

      activityType: 'week7BunnySlide',
    },
  ],
};
