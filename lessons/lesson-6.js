window.trackpadLesson = {
  title: 'Lesson 6: Dragging Challenge',
  eyebrow: 'Week 6 • Review Week',

  steps: [
    {
      title: 'Super-Fast Two-Hand Review',

      teacherPrompt:
        'Quickly review the two-hand drag routine: LEFT presses and holds, RIGHT moves, and LEFT releases only when the object reaches its destination.',

      activityHtml: `
        <div class="week6-review-step">
          <div class="quick-review-badge">
            DRAGGING REVIEW
          </div>

          <h2>Show What You Remember!</h2>

          <div
            id="week6ReviewRow"
            class="week6-review-row"
          >
            <div class="week6-review-card">
              <span>👈</span>
              <strong>PRESS</strong>
            </div>

            <div class="week6-review-card">
              <span>✋</span>
              <strong>HOLD</strong>
            </div>

            <div class="week6-review-card">
              <span>☝️</span>
              <strong>MOVE</strong>
            </div>

            <div class="week6-review-card">
              <span>✨</span>
              <strong>RELEASE</strong>
            </div>
          </div>

          <div
            id="week6ReviewReady"
            class="week6-review-ready"
          >
            ⭐ READY TO DRAG! ⭐
          </div>
        </div>
      `,

      activityType: 'week6Review',
    },

    {
      title: 'Feed the Animals!',

      teacherPrompt:
        'Students drag each animal to the food it eats. The matching should be easy so the focus stays on dragging: PRESS AND HOLD with the LEFT pointer finger, keep holding while the RIGHT pointer finger moves, and RELEASE only over the correct food.',

      activityHtml: `
        <div class="week6-animal-step">
          <div class="week5-big-badge">
            DRAGGING REVIEW
          </div>

          <h2>Feed the Animals!</h2>

          <p class="lesson-kid-prompt">
            LEFT holds • RIGHT moves • Find their food!
          </p>

          <div
            id="week6AnimalArea"
            class="week4-activity-area week6-animal-area"
          >
            <div
              id="week6AnimalPrompt"
              class="week5-hold-prompt"
            >
              PRESS AND HOLD AN ANIMAL
            </div>

            <div
              class="week6-animal-object"
              data-animal="dog"
            >
              🐶
            </div>

            <div
              class="week6-animal-object"
              data-animal="bunny"
            >
              🐰
            </div>

            <div
              class="week6-animal-object"
              data-animal="mouse"
            >
              🐭
            </div>

            <div
              class="week6-animal-object"
              data-animal="squirrel"
            >
              🐿️
            </div>

            <div
              class="week6-animal-object"
              data-animal="bear"
            >
              🐻
            </div>

            <div
              class="week6-animal-home"
              data-home="dog"
            >
              <span>🦴</span>
            </div>

            <div
              class="week6-animal-home"
              data-home="bunny"
            >
              <span>🥕</span>
            </div>

            <div
              class="week6-animal-home"
              data-home="mouse"
            >
              <span>🧀</span>
            </div>

            <div
              class="week6-animal-home"
              data-home="squirrel"
            >
              <span>🌰</span>
            </div>

            <div
              class="week6-animal-home"
              data-home="bear"
            >
              <span>🍯</span>
            </div>

            <div
              id="week6AnimalHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week6AnimalCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week6AnimalSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6Animals',
    },

    {
      title: 'Obstacle Drag',

      teacherPrompt:
        'Students PRESS AND HOLD the car with the LEFT pointer finger, then use the RIGHT pointer finger to steer around the obstacles. Keep holding until the car reaches the finish. Complete five obstacle courses.',

      activityHtml: `
        <div class="week6-obstacle-step">
          <div class="week5-big-badge">
            CONTROL CHALLENGE
          </div>

          <h2>Obstacle Drag!</h2>

          <p class="lesson-kid-prompt">
            Hold the car • Go around the obstacles • Don't let go!
          </p>

          <div
            id="week6ObstaclePrompt"
            class="week6-obstacle-prompt"
          >
            PRESS + HOLD → STEER → RELEASE AT 🏁
          </div>

          <div
            id="week6ObstacleArea"
            class="week4-activity-area week6-obstacle-area"
          >
            <div class="week6-obstacle-start">
              START
            </div>

            <div
              id="week6ObstacleObject"
              class="week6-obstacle-object"
            >
              🚗
            </div>

            <div class="week6-obstacle obstacle-a">
              🌳
            </div>

            <div class="week6-obstacle obstacle-b">
              🪨
            </div>

            <div class="week6-obstacle obstacle-c">
              🌳
            </div>

            <div
              id="week6ObstacleTarget"
              class="week6-obstacle-target"
            >
              🏁
            </div>

            <div
              id="week6ObstacleHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week6ObstacleCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week6ObstacleSuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6Obstacle',
    },

    {
      title: 'Moving Delivery',

      teacherPrompt:
        'Students PRESS AND HOLD the package with the LEFT pointer finger. While continuing to hold, use the RIGHT pointer finger to move the package to the slowly moving truck. Release only when the package reaches the truck. Complete five deliveries.',

      activityHtml: `
        <div class="week6-delivery-step">
          <div class="week5-big-badge">
            MOVING TARGET
          </div>

          <h2>Moving Delivery!</h2>

          <p class="lesson-kid-prompt">
            Hold the package • Catch the truck • Then release!
          </p>

          <div
            id="week6DeliveryPrompt"
            class="week6-delivery-prompt"
          >
            PRESS AND HOLD THE PACKAGE
          </div>

          <div
            id="week6DeliveryArea"
            class="week4-activity-area week6-delivery-area"
          >
            <div
              id="week6DeliveryObject"
              class="week6-delivery-object"
            >
              📦
            </div>

            <div
              id="week6DeliveryTarget"
              class="week6-delivery-target"
            >
              🚚
            </div>

            <div
              id="week6DeliveryHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week6DeliveryCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week6DeliverySuccess"
              class="week3-success-banner"
            >
              GREAT JOB! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6MovingDelivery',
    },

    {
      title: 'Clean Up the Room',

      teacherPrompt:
        'Students clean up one requested object at a time. The storage box shows the object to find. Students PRESS AND HOLD that matching object with the LEFT pointer finger, move it with the RIGHT pointer finger, and RELEASE only inside the box. Complete all five objects.',

      activityHtml: `
        <div class="week6-clean-step">
          <div class="week5-big-badge">
            CLEAN-UP CHALLENGE
          </div>

          <h2>Clean Up the Room!</h2>

          <p class="lesson-kid-prompt">
            Find the flashing item • Hold it • Put it in the box!
          </p>

          <div
            id="week6CleanPrompt"
            class="week6-clean-prompt"
          >
            FIND THE FLASHING ITEM
          </div>

          <div
            id="week6CleanArea"
            class="week4-activity-area week6-clean-area"
          >
            <div class="week6-clean-floor"></div>

            <div
              class="week6-clean-object clean-book"
              data-clean="book"
            >
              📕
            </div>

            <div
              class="week6-clean-object clean-pencil"
              data-clean="pencil"
            >
              ✏️
            </div>

            <div
              class="week6-clean-object clean-toy"
              data-clean="toy"
            >
              🧸
            </div>

            <div
              class="week6-clean-object clean-paper"
              data-clean="paper"
            >
              📄
            </div>

            <div
              class="week6-clean-object clean-ball"
              data-clean="ball"
            >
              ⚽
            </div>

            <div
              id="week6CleanBox"
              class="week6-clean-box"
            >
              <div class="week6-clean-box-label">
                PUT IT HERE
              </div>

              <div
                id="week6CleanTarget"
                class="week6-clean-box-target"
              >
                🧸
              </div>
            </div>

            <div
              id="week6CleanHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week6CleanCount"
              class="week3-practice-count"
            >
              0 / 5
            </div>

            <div
              id="week6CleanSuccess"
              class="week3-success-banner"
            >
              ROOM CLEAN! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6CleanRoom',
    },

    {
      title: "Don't Drop It",

      teacherPrompt:
        'Students practice maintaining the LEFT-hand hold for a longer drag. PRESS AND HOLD the ice cream with the LEFT pointer finger. Keep holding while the RIGHT pointer finger carries it through each checkpoint in order. Do not release until it reaches the child.',

      activityHtml: `
        <div class="week6-long-hold-step">
          <div class="week5-big-badge">
            LONG HOLD CHALLENGE
          </div>

          <h2>Don't Drop It!</h2>

          <p class="lesson-kid-prompt">
            Keep holding all the way to the end!
          </p>

          <div
            id="week6LongHoldPrompt"
            class="week6-delivery-prompt"
          >
            PRESS AND HOLD THE ICE CREAM
          </div>

          <div
            id="week6LongHoldArea"
            class="week4-activity-area week6-long-hold-area"
          >
            <div class="week6-long-hold-start">
              START
            </div>

            <div
              id="week6LongHoldObject"
              class="week6-long-hold-object"
            >
              🍦
            </div>

            <div
              class="week6-long-checkpoint checkpoint-one"
              data-checkpoint="0"
            >
              1
            </div>

            <div
              class="week6-long-checkpoint checkpoint-two"
              data-checkpoint="1"
            >
              2
            </div>

            <div
              class="week6-long-checkpoint checkpoint-three"
              data-checkpoint="2"
            >
              3
            </div>

            <div
              id="week6LongHoldTarget"
              class="week6-long-hold-target"
            >
              🧒
            </div>

            <div
              id="week6LongHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week6LongHoldCount"
              class="week3-practice-count"
            >
              0 / 4
            </div>

            <div
              id="week6LongHoldSuccess"
              class="week3-success-banner"
            >
              AMAZING HOLD! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6DontDrop',
    },

    {
      title: 'Picture Puzzle Challenge',

      teacherPrompt:
        'Students complete a harder 9-piece picture puzzle. PRESS AND HOLD each piece with the LEFT pointer finger, move with the RIGHT pointer finger, and RELEASE only over the correct puzzle space.',

      activityHtml: `
        <div class="week6-puzzle-step">
          <div class="week5-big-badge">
            PUZZLE CHALLENGE
          </div>

          <h2>Build the Picture!</h2>

          <p class="lesson-kid-prompt">
            Hold each piece • Find its spot • Release!
          </p>

          <div
            id="week6PuzzlePrompt"
            class="week6-clean-prompt"
          >
            PRESS AND HOLD A PIECE
          </div>

          <div
            id="week6PuzzleArea"
            class="week4-activity-area week6-puzzle-area"
          >
            <div class="week6-puzzle-pieces">

              <div class="week6-puzzle-piece" data-piece="0"></div>
              <div class="week6-puzzle-piece" data-piece="1"></div>
              <div class="week6-puzzle-piece" data-piece="2"></div>

              <div class="week6-puzzle-piece" data-piece="3"></div>
              <div class="week6-puzzle-piece" data-piece="4"></div>
              <div class="week6-puzzle-piece" data-piece="5"></div>

              <div class="week6-puzzle-piece" data-piece="6"></div>
              <div class="week6-puzzle-piece" data-piece="7"></div>
              <div class="week6-puzzle-piece" data-piece="8"></div>

            </div>

            <div class="week6-puzzle-board">

              <div class="week6-puzzle-slot" data-slot="0"></div>
              <div class="week6-puzzle-slot" data-slot="1"></div>
              <div class="week6-puzzle-slot" data-slot="2"></div>

              <div class="week6-puzzle-slot" data-slot="3"></div>
              <div class="week6-puzzle-slot" data-slot="4"></div>
              <div class="week6-puzzle-slot" data-slot="5"></div>

              <div class="week6-puzzle-slot" data-slot="6"></div>
              <div class="week6-puzzle-slot" data-slot="7"></div>
              <div class="week6-puzzle-slot" data-slot="8"></div>

            </div>

            <div
              id="week6PuzzleHoldIndicator"
              class="week5-hold-indicator"
            >
              👈 KEEP HOLDING!
            </div>

            <div
              id="week6PuzzleCount"
              class="week3-practice-count"
            >
              0 / 9
            </div>

            <div
              id="week6PuzzleSuccess"
              class="week3-success-banner"
            >
              PICTURE COMPLETE! ⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6Puzzle',
    },

    {
      title: 'Final Drag Adventure',

      teacherPrompt:
        'Students complete four final drag levels. PRESS AND HOLD the star with the LEFT pointer finger. Keep holding while the RIGHT pointer finger guides it through each numbered checkpoint in order, around obstacles, and finally to the trophy. Do not let go until the finish.',

      activityHtml: `
        <div class="week6-final-step">
          <div class="week5-big-badge">
            FINAL CHALLENGE
          </div>

          <h2>Final Drag Adventure!</h2>

          <p class="lesson-kid-prompt">
            Hold • Follow the numbers • Avoid obstacles • Reach the trophy!
          </p>

          <div
            id="week6FinalPrompt"
            class="week6-delivery-prompt"
          >
            PRESS AND HOLD THE STAR
          </div>

          <div
            id="week6FinalArea"
            class="week4-activity-area week6-final-area"
          >
            <div class="week6-final-start">
              START
            </div>

            <div
              id="week6FinalObject"
              class="week6-final-object"
            >
              ⭐
            </div>

            <div
              class="week6-final-checkpoint checkpoint-one"
              data-final-checkpoint="0"
            >
              1
            </div>

            <div
              class="week6-final-checkpoint checkpoint-two"
              data-final-checkpoint="1"
            >
              2
            </div>

            <div
              class="week6-final-checkpoint checkpoint-three"
              data-final-checkpoint="2"
            >
              3
            </div>

            <div
              class="week6-final-obstacle final-obstacle-one"
            >
              🌳
            </div>

            <div
              class="week6-final-obstacle final-obstacle-two"
            >
              🪨
            </div>

            <div
              id="week6FinalTarget"
              class="week6-final-target"
            >
              🏆
            </div>

            <div
              id="week6FinalCount"
              class="week3-practice-count"
            >
              0 / 4
            </div>

            <div
              id="week6FinalSuccess"
              class="week3-success-banner"
            >
              DRAGGING CHAMPION! 🏆⭐
            </div>
          </div>
        </div>
      `,

      activityType: 'week6Final',
    },
  ],
};
