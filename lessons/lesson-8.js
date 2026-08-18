window.trackpadLesson = {
  title: 'Lesson 8: Trackpad Master Challenge',
  eyebrow: 'Week 8 • Final Challenge',

  steps: [
    {
      title: 'Super-Fast Everything Review',

      teacherPrompt:
        'Quickly review all of the trackpad skills students have learned: moving the pointer, clicking, waiting before clicking, pressing and holding, dragging, releasing on a target, and using Bunny Ears to scroll up and down.',

      activityHtml: `
        <div class="week8-review-step">

          <div class="week8-master-badge">
            FINAL WEEK
          </div>

          <h2>Look What You Can Do!</h2>

          <p class="lesson-kid-prompt">
            You know ALL of these trackpad skills!
          </p>

          <div class="week8-review-grid">

            <div class="week8-review-card">
              <div class="week8-review-number">1</div>
              <div class="week8-review-icon">☝️</div>
              <strong>MOVE</strong>
              <span>Slide your finger</span>
            </div>

            <div class="week8-review-card">
              <div class="week8-review-number">2</div>
              <div class="week8-review-icon">🎯</div>
              <strong>CLICK</strong>
              <span>Point and click</span>
            </div>

            <div class="week8-review-card">
              <div class="week8-review-number">3</div>
              <div class="week8-review-icon">⏳</div>
              <strong>WAIT</strong>
              <span>Wait for the right time</span>
            </div>

            <div class="week8-review-card">
              <div class="week8-review-number">4</div>
              <div class="week8-review-icon">✋</div>
              <strong>HOLD</strong>
              <span>Press and keep holding</span>
            </div>

            <div class="week8-review-card">
              <div class="week8-review-number">5</div>
              <div class="week8-review-icon">📦</div>
              <strong>DRAG</strong>
              <span>Hold and move it</span>
            </div>

            <div class="week8-review-card">
              <div class="week8-review-number">6</div>
              <div class="week8-review-icon">⭐</div>
              <strong>RELEASE</strong>
              <span>Let go on the target</span>
            </div>

            <div class="week8-review-card week8-review-bunny">
              <div class="week8-review-number">7</div>

              <img
                src="images/bunnyears.png"
                alt="Bunny Ears scrolling hand"
                draggable="false"
              />

              <strong>BUNNY EARS</strong>
              <span>Scroll up and down</span>
            </div>

          </div>

          <div class="week8-review-ready">
            🏆 READY FOR THE FINAL CHALLENGE?
          </div>

        </div>
      `,
    },

    {
      title: 'Scrolling Accuracy Challenge',

      teacherPrompt:
        'Students practice precise Bunny Ears control. They must scroll the target picture into the highlighted STOP ZONE and then click it. Each level requires more scrolling and more accurate stopping.',

      activityHtml: `
        <div class="week8-accuracy-step">

          <div class="week8-master-badge">
            SCROLLING ACCURACY
          </div>

          <h2>Stop in the Zone!</h2>

          <p class="lesson-kid-prompt">
            Scroll • Slow down • Stop • Click
          </p>

          <div class="week8-accuracy-topbar">

            <div
              id="week8AccuracyLevel"
              class="week8-accuracy-level"
            >
              LEVEL 1 OF 3
            </div>

            <div
              id="week8AccuracyTarget"
              class="week8-accuracy-target"
            ></div>

          </div>

          <div
            id="week8AccuracyStatus"
            class="week8-accuracy-status"
          >
            🐰 SCROLL TO THE GREEN ZONE
          </div>

          <div
            id="week8AccuracyWindow"
            class="week8-accuracy-window"
            tabindex="0"
            aria-label="Scrolling accuracy challenge"
          >

            <div
              class="week8-stop-zone"
              aria-hidden="true"
            >
              <span>STOP ZONE</span>
            </div>

            <div
              id="week8AccuracyContent"
              class="week8-accuracy-content"
            ></div>

            <div
              id="week8AccuracyComplete"
              class="week8-accuracy-complete"
              hidden
            >
              <div>🎯 ⭐ 🐰 ⭐ 🎯</div>

              <strong>YOU DID IT!</strong>

              <span>
                GREAT SCROLLING CONTROL!
              </span>
            </div>

          </div>

        </div>
      `,

      activityType: 'week8ScrollAccuracy',
    },

    {
      title: 'Elevator Adventure',

      teacherPrompt:
        'Students use Bunny Ears to travel up and down through a tall building. Each level starts near the middle. Students look at the large picture clue, scroll to the matching floor, and click ENTER on the correct room.',

      activityHtml: `
        <div class="week8-elevator-step">

          <div class="week8-master-badge">
            ELEVATOR ADVENTURE
          </div>

          <h2>Ride the Bunny Ears Elevator!</h2>

          <p class="lesson-kid-prompt">
            Look at the room • Scroll • Find the floor • Enter
          </p>

          <div class="week8-elevator-topbar">

            <div
              id="week8ElevatorLevel"
              class="week8-elevator-level"
            >
              LEVEL 1 OF 4
            </div>

            <div
              id="week8ElevatorTarget"
              class="week8-elevator-target"
            ></div>

          </div>

          <div
            id="week8ElevatorStatus"
            class="week8-elevator-status"
          >
            🛗 FIND THE ROOM
          </div>

          <div
            id="week8ElevatorWindow"
            class="week8-elevator-window"
            tabindex="0"
            aria-label="Bunny Ears elevator challenge"
          >
            <div
              id="week8ElevatorBuilding"
              class="week8-elevator-building"
            ></div>

            <div
              id="week8ElevatorComplete"
              class="week8-elevator-complete"
              hidden
            >
              <div class="week8-elevator-complete-icons">
                🛗 🐰 ⭐ 🎉 ⭐
              </div>

              <strong>YOU DID IT!</strong>

              <span>
                ELEVATOR MASTER!
              </span>
            </div>

          </div>

        </div>
      `,

      activityType: 'week8ScrollDirection',
    },

    {
      title: 'Scrolling Scavenger Hunt',

      teacherPrompt:
        'Students search one continuous world for pictures in order. The world does not reset after each find. Students must remember where they have been and scroll back and forth with Bunny Ears to collect every target.',

      activityHtml: `
        <div class="week8-hunt-step">

          <div class="week8-master-badge">
            SCAVENGER HUNT
          </div>

          <h2>Find Them in Order!</h2>

          <p class="lesson-kid-prompt">
            Find • Click • Keep going
          </p>

          <div class="week8-hunt-topbar">

            <div
              id="week8HuntLevel"
              class="week8-hunt-level"
            >
              LEVEL 1 OF 3
            </div>

            <div
              id="week8HuntTargets"
              class="week8-hunt-targets"
              aria-label="Pictures to find in order"
            ></div>

          </div>

          <div
            id="week8HuntStatus"
            class="week8-hunt-status"
          >
            🐰 FIND THE FIRST PICTURE
          </div>

          <div
            id="week8HuntWindow"
            class="week8-hunt-window"
            tabindex="0"
            aria-label="Scrolling scavenger hunt"
          >
            <div
              id="week8HuntWorld"
              class="week8-hunt-world"
            ></div>

            <div
              id="week8HuntComplete"
              class="week8-hunt-complete"
              hidden
            >
              <div>🐰 🔎 ⭐ 🎉 ⭐</div>

              <strong>YOU DID IT!</strong>

              <span>
                SCAVENGER HUNT COMPLETE!
              </span>
            </div>
          </div>

        </div>
      `,

      activityType: 'week8ScrollHunt',
    },

    {
      title: 'Pointer Challenge',

      teacherPrompt:
        'Students return to pointer movement and clicking. Each round shows one large picture target in a new location. Students move the pointer to the target and click it. Targets become smaller and more spread out as the rounds progress.',

      activityHtml: `
        <div class="week8-pointer-step">

          <div class="week8-master-badge">
            POINTER CHALLENGE
          </div>

          <h2>Move and Click!</h2>

          <p class="lesson-kid-prompt">
            Move • Find • Click
          </p>

          <div class="week8-pointer-topbar">

            <div
              id="week8PointerRound"
              class="week8-pointer-round"
            >
              ROUND 1 OF 4
            </div>

            <div
              id="week8PointerTarget"
              class="week8-pointer-target"
            ></div>

          </div>

          <div
            id="week8PointerStatus"
            class="week8-pointer-status"
          >
            FIND THE PICTURE
          </div>

          <div
            id="week8PointerArea"
            class="week8-pointer-area"
          >
            <button
              id="week8PointerObject"
              class="week8-pointer-object"
              type="button"
              aria-label="Pointer target"
            ></button>

            <div
              id="week8PointerComplete"
              class="week8-pointer-complete"
              hidden
            >
              <div>🎯 ⭐ 🎉 ⭐ 🎯</div>

              <strong>YOU DID IT!</strong>

              <span>
                POINTER MASTER!
              </span>
            </div>
          </div>

        </div>
      `,

      activityType: 'week8PointerChallenge',
    },

    {
      title: 'Drag Delivery Challenge',

      teacherPrompt:
        'Students use the full drag routine: press and hold the package, move it across the play area, and release only when it is over the truck. Each round becomes harder with smaller targets and obstacles.',

      activityHtml: `
        <div class="week8-drag-step">

          <div class="week8-master-badge">
            DRAG CHALLENGE
          </div>

          <h2>Deliver the Package!</h2>

          <p class="lesson-kid-prompt">
            Press • Hold • Move • Release
          </p>

          <div class="week8-drag-topbar">

            <div
              id="week8DragRound"
              class="week8-drag-round"
            >
              ROUND 1 OF 4
            </div>

            <div
              id="week8DragStatus"
              class="week8-drag-status"
            >
              GET THE BOX TO THE TRUCK
            </div>

          </div>

          <div
            id="week8DragArea"
            class="week8-drag-area"
          >
            <div
              id="week8DragObstacles"
              class="week8-drag-obstacles"
              aria-hidden="true"
            ></div>

            <button
              id="week8DragPackage"
              class="week8-drag-package"
              type="button"
              aria-label="Package to drag"
            >
              📦
            </button>

            <div
              id="week8DragTruck"
              class="week8-drag-truck"
              aria-label="Truck drop target"
            >
              <span class="week8-drag-truck-icon">
                🚚
              </span>
            </div>

            <div
              id="week8DragComplete"
              class="week8-drag-complete"
              hidden
            >
              <div>📦 ⭐ 🚚 ⭐ 📦</div>

              <strong>YOU DID IT!</strong>

              <span>
                DRAGGING MASTER!
              </span>
            </div>
          </div>

        </div>
      `,

      activityType: 'week8DragChallenge',
    },

    {
      title: 'Trackpad Mission',

      teacherPrompt:
        'Students combine skills in one continuous mission. They click to begin, drag a key to unlock the gate, use Bunny Ears to scroll through the world, and click the hidden treasure to finish.',

      activityHtml: `
        <div class="week8-mission-step">

          <div class="week8-master-badge">
            MIXED SKILLS MISSION
          </div>

          <h2>Complete the Trackpad Mission!</h2>

          <div
            id="week8MissionProgress"
            class="week8-mission-progress"
          >
            <span class="is-current">⭐</span>
            <span>🔑</span>
            <span>↕️</span>
            <span>💎</span>
            <span>📦</span>
            <span>🏆</span>
          </div>

          <div
            id="week8MissionStatus"
            class="week8-mission-status"
          >
            CLICK THE STAR ⭐
          </div>

          <div
            id="week8MissionArea"
            class="week8-mission-area"
          >

            <section
              id="week8MissionStart"
              class="week8-mission-stage"
            >
              <div class="week8-mission-big-icon">
                🚦
              </div>

              <button
                id="week8MissionStartButton"
                class="week8-mission-start-button"
                type="button"
              >
                ⭐
              </button>
            </section>

            <section
              id="week8MissionKeyStage"
              class="week8-mission-stage"
              hidden
            >
              <button
                id="week8MissionKey"
                class="week8-mission-key"
                type="button"
                aria-label="Key to drag"
              >
                🔑
              </button>

              <div
                id="week8MissionLock"
                class="week8-mission-lock"
              >
                🔒
              </div>
            </section>

            <section
              id="week8MissionScrollStage"
              class="week8-mission-stage"
              hidden
            >
              <div
                id="week8MissionScrollWindow"
                class="week8-mission-scroll-window"
                tabindex="0"
              >
                <div class="week8-mission-world">

                  <div class="week8-mission-world-section">
                    ☁️ ☀️ ☁️
                  </div>

                  <div class="week8-mission-world-section">
                    🌲 🌳 🌲
                  </div>

                  <div class="week8-mission-world-section">
                    🏠 🌻 🏡
                  </div>

                  <div class="week8-mission-world-section">
                    🌊 🐠 🌊
                  </div>

                  <div class="week8-mission-world-section">
                    🪨 🦇 🪨
                  </div>

                  <div class="week8-mission-world-section week8-mission-treasure-section">
                    <button
                      id="week8MissionTreasure"
                      class="week8-mission-treasure"
                      type="button"
                      aria-label="Treasure"
                    >
                      💎
                    </button>
                  </div>

                </div>
              </div>
            </section>

            <section
              id="week8MissionTreasureDragStage"
              class="week8-mission-stage"
              hidden
            >
              <button
                id="week8MissionTreasureBox"
                class="week8-mission-treasure-box"
                type="button"
                aria-label="Treasure box to drag"
              >
                📦
              </button>

              <div
                id="week8MissionChest"
                class="week8-mission-chest"
              >
                🧰
              </div>
            </section>

            <section
              id="week8MissionTrophyStage"
              class="week8-mission-stage"
              hidden
            >
              <div
                id="week8MissionTrophyScroll"
                class="week8-mission-trophy-scroll"
                tabindex="0"
              >
                <div class="week8-mission-trophy-world">

                  <div>🌲 🌳 🌲</div>
                  <div>🏠 🌻 🏡</div>
                  <div>🌊 🐠 🌊</div>
                  <div>🪨 🦇 🪨</div>

                  <div class="week8-mission-trophy-finish">
                    <button
                      id="week8MissionTrophy"
                      class="week8-mission-trophy"
                      type="button"
                      aria-label="Trophy"
                    >
                      🏆
                    </button>
                  </div>

                </div>
              </div>
            </section>

            <div
              id="week8MissionComplete"
              class="week8-mission-complete"
              hidden
            >
              <div>🎯 🔑 🐰 💎</div>

              <strong>MISSION COMPLETE!</strong>

              <span>
                ALL YOUR SKILLS WORK TOGETHER!
              </span>
            </div>

          </div>

        </div>
      `,

      activityType: 'week8MixedMission',
    },

    {
      title: 'Trackpad Master Finale',

      teacherPrompt:
        'Final graduation challenge. Students complete a click test, a drag test, and a Bunny Ears scrolling test. Finishing all three earns the Trackpad Master celebration.',

      activityHtml: `
        <div class="week8-finale-step">

          <div class="week8-master-badge">
            FINAL CHALLENGE
          </div>

          <h2>Trackpad Master Finale!</h2>

          <div
            id="week8FinaleProgress"
            class="week8-finale-progress"
          >
            <span class="is-current">🎯</span>
            <span>📦</span>
            <span>↕️</span>
            <span>🏆</span>
          </div>

          <div
            id="week8FinaleStatus"
            class="week8-finale-status"
          >
            CLICK THE TARGET
          </div>

          <div
            id="week8FinaleArea"
            class="week8-finale-area"
          >

            <section
              id="week8FinaleClickStage"
              class="week8-finale-stage"
            >
              <button
                id="week8FinaleClickTarget"
                class="week8-finale-click-target"
                type="button"
                aria-label="Click target"
              >
                ⭐
              </button>
            </section>

            <section
              id="week8FinaleDragStage"
              class="week8-finale-stage"
              hidden
            >
              <button
                id="week8FinalePackage"
                class="week8-finale-package"
                type="button"
                aria-label="Package to drag"
              >
                📦
              </button>

              <div
                id="week8FinaleDropZone"
                class="week8-finale-drop-zone"
              >
                🎯
              </div>
            </section>

            <section
              id="week8FinaleScrollStage"
              class="week8-finale-stage"
              hidden
            >
              <div
                id="week8FinaleScrollWindow"
                class="week8-finale-scroll-window"
                tabindex="0"
              >
                <div class="week8-finale-world">

                  <div>☁️ ☀️ ☁️</div>
                  <div>🌲 🌳 🌲</div>
                  <div>🏠 🌻 🏡</div>
                  <div>🌊 🐠 🌊</div>

                  <div class="week8-finale-trophy-zone">
                    <button
                      id="week8FinaleTrophy"
                      class="week8-finale-trophy"
                      type="button"
                      aria-label="Final trophy"
                    >
                      🏆
                    </button>
                  </div>

                </div>
              </div>
            </section>

            <div
              id="week8FinaleComplete"
              class="week8-finale-complete"
              hidden
            >
              <div class="week8-finale-crown">
                🏆
              </div>

              <strong>TRACKPAD MASTER!</strong>

              <span>
                YOU COMPLETED THE WHOLE COURSE!
              </span>

              <div class="week8-finale-stars">
                ⭐ ⭐ ⭐ ⭐ ⭐
              </div>
            </div>

          </div>

        </div>
      `,

      activityType: 'week8MasterFinale',
    }
  ],
};
