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

    {
      title: 'Watch the Screen Move',

      teacherPrompt:
        'Students now connect the Bunny Ears motion to what happens on screen. Have students place two fingers together on the trackpad and scroll inside the practice window until they find the star.',

      activityHtml: `
        <div class="week7-scroll-intro-step">

          <div class="week7-bunny-badge">
            BUNNY EARS SCROLL
          </div>

          <h2>Make the Screen Move!</h2>

          <p class="lesson-kid-prompt">
            Use Bunny Ears • Scroll until you find the ⭐
          </p>

          <div
            id="week7ScrollStatus"
            class="week7-scroll-status"
          >
            FIND THE STAR
          </div>

          <div
            id="week7ScrollWindow"
            class="week7-scroll-window"
            tabindex="0"
            aria-label="Scrolling practice window"
          >
            <div class="week7-scroll-content">

              <div class="week7-scroll-item">
                <span>☀️</span>
                <strong>SUN</strong>
              </div>

              <div class="week7-scroll-item">
                <span>☁️</span>
                <strong>CLOUD</strong>
              </div>

              <div class="week7-scroll-item">
                <span>🌳</span>
                <strong>TREE</strong>
              </div>

              <div class="week7-scroll-item">
                <span>🏠</span>
                <strong>HOUSE</strong>
              </div>

              <div class="week7-scroll-item">
                <span>🌷</span>
                <strong>FLOWERS</strong>
              </div>

              <div
                id="week7ScrollStar"
                class="week7-scroll-item week7-scroll-target"
              >
                <span>⭐</span>
                <strong>YOU FOUND IT!</strong>
              </div>

            </div>
          </div>

          <div class="week7-scroll-hint">
            🐰 TWO FINGERS TOGETHER • SLIDE TO SCROLL
          </div>

        </div>
      `,

      activityType: 'week7ScrollIntro',
    },

    {
      title: 'Scroll Down Challenge',

      teacherPrompt:
        'Students practice controlled downward scrolling. Each round gives them a target to find below the starting position. Students use Bunny Ears to scroll down, stop when they find the target, and click the correct card.',

      activityHtml: `
        <div class="week7-down-step">

          <div class="week7-bunny-badge">
            SCROLLING CHALLENGE
          </div>

          <h2>Scroll Down and Find It!</h2>

          <p class="lesson-kid-prompt">
            Bunny Ears down the page • Stop • Find • Click
          </p>

          <div class="week7-down-topbar">

            <div
              id="week7DownRound"
              class="week7-down-round"
            >
              ROUND 1 OF 3
            </div>

            <div
              id="week7DownTarget"
              class="week7-down-target"
            >
              FIND: 🦁 LION
            </div>

          </div>

          <div
            id="week7DownStatus"
            class="week7-down-status"
          >
            SCROLL DOWN ↓
          </div>

          <div
            id="week7DownWindow"
            class="week7-down-window"
            tabindex="0"
            aria-label="Scroll down challenge"
          >
            <div
              id="week7DownContent"
              class="week7-down-content"
            ></div>

            <div
              id="week7DownComplete"
              class="week7-down-complete"
              hidden
            >
              <div class="week7-down-complete-stars">
                ⭐ 🎉 ⭐
              </div>

              <strong>YOU DID IT!</strong>

              <span>
                BUNNY EARS SCROLLING MASTER!
              </span>
            </div>
          </div>

          <div class="week7-down-hint">
            🐰 TWO FINGERS • SCROLL • STOP • CLICK
          </div>

        </div>
      `,

      activityType: 'week7ScrollDown',
    },

    {
      title: 'Scroll Up Challenge',

      teacherPrompt:
        'Students practice controlled upward scrolling. Each round begins near the bottom of the practice window. Students use Bunny Ears to scroll up, stop when they find the picture target, and click it.',

      activityHtml: `
        <div class="week7-up-step">

          <div class="week7-bunny-badge">
            SCROLLING CHALLENGE
          </div>

          <h2>Scroll Up and Find It!</h2>

          <p class="lesson-kid-prompt">
            Bunny Ears up the page • Stop • Find • Click
          </p>

          <div class="week7-up-topbar">

            <div
              id="week7UpRound"
              class="week7-up-round"
            >
              ROUND 1 OF 3
            </div>

            <div
              id="week7UpTarget"
              class="week7-up-target"
            ></div>

          </div>

          <div
            id="week7UpStatus"
            class="week7-up-status"
          >
            SCROLL UP ↑
          </div>

          <div
            id="week7UpWindow"
            class="week7-up-window"
            tabindex="0"
            aria-label="Scroll up challenge"
          >
            <div
              id="week7UpContent"
              class="week7-up-content"
            ></div>

            <div
              id="week7UpComplete"
              class="week7-up-complete"
              hidden
            >
              <div class="week7-up-complete-stars">
                ⭐ 🎉 ⭐
              </div>

              <strong>YOU DID IT!</strong>

              <span>
                BUNNY EARS SCROLLING MASTER!
              </span>
            </div>

          </div>

          <div class="week7-up-hint">
            🐰 TWO FINGERS • SCROLL UP • STOP • CLICK
          </div>

        </div>
      `,

      activityType: 'week7ScrollUp',
    },

    {
      title: 'Bunny Ears Search',

      teacherPrompt:
        'Students now choose the scrolling direction themselves. Each round shows a picture target, but students are not told whether it is above or below. They must use Bunny Ears to search, stop, and click the matching picture.',

      activityHtml: `
        <div class="week7-search-step">

          <div class="week7-bunny-badge">
            BUNNY EARS SEARCH
          </div>

          <h2>Which Way Should You Scroll?</h2>

          <p class="lesson-kid-prompt">
            Look • Think • Scroll • Find • Click
          </p>

          <div class="week7-search-topbar">

            <div
              id="week7SearchRound"
              class="week7-search-round"
            >
              ROUND 1 OF 4
            </div>

            <div
              id="week7SearchTarget"
              class="week7-search-target"
            ></div>

          </div>

          <div
            id="week7SearchStatus"
            class="week7-search-status"
          >
            🐰 FIND IT!
          </div>

          <div
            id="week7SearchWindow"
            class="week7-search-window"
            tabindex="0"
            aria-label="Bunny Ears scrolling search"
          >
            <div
              id="week7SearchContent"
              class="week7-search-content"
            ></div>

            <div
              id="week7SearchComplete"
              class="week7-search-complete"
              hidden
            >
              <div class="week7-search-complete-stars">
                🐰 ⭐ 🎉 ⭐ 🐰
              </div>

              <strong>YOU DID IT!</strong>

              <span>
                BUNNY EARS SEARCH MASTER!
              </span>
            </div>

          </div>

          <div class="week7-search-hint">
            🐰 YOU CHOOSE THE DIRECTION!
          </div>

        </div>
      `,

      activityType: 'week7ScrollSearch',
    },

    {
      title: 'Bunny Ears Adventure',

      teacherPrompt:
        'Final scrolling adventure. Students begin in the middle of a tall world and must decide whether to scroll up or down to find the picture target. Each level gets longer and adds more visual distractions.',

      activityHtml: `
        <div class="week7-adventure-step">

          <div class="week7-bunny-badge">
            FINAL ADVENTURE
          </div>

          <h2>Bunny Ears Treasure Hunt!</h2>

          <p class="lesson-kid-prompt">
            Look • Choose a way • Scroll • Find • Click
          </p>

          <div class="week7-adventure-topbar">

            <div
              id="week7AdventureLevel"
              class="week7-adventure-level"
            >
              LEVEL 1 OF 4
            </div>

            <div
              id="week7AdventureTarget"
              class="week7-adventure-target"
            ></div>

          </div>

          <div
            id="week7AdventureStatus"
            class="week7-adventure-status"
          >
            🐰 FIND IT!
          </div>

          <div
            id="week7AdventureWindow"
            class="week7-adventure-window"
            tabindex="0"
            aria-label="Bunny Ears treasure hunt"
          >

            <div
              id="week7AdventureWorld"
              class="week7-adventure-world"
            ></div>

            <div
              id="week7AdventureComplete"
              class="week7-adventure-complete"
              hidden
            >
              <div class="week7-adventure-complete-icons">
                🐰 ⭐ 💰 ⭐ 🐰
              </div>

              <strong>YOU DID IT!</strong>

              <span>
                BUNNY EARS MASTER!
              </span>
            </div>

          </div>

        </div>
      `,

      activityType: 'week7ScrollAdventure',
    }
  ],
};
