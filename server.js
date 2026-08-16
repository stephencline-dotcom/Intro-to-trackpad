const express = require('express');
const path = require('path');

const app = express();

const PORT =
  process.env.PORT || 8000;

app.use(express.json());

app.use(
  express.static(__dirname)
);

let lessonState = {
  syncEnabled: false,
  freezeEnabled: false,
  unlockVersion: 0,
  practiceReleased: false,
  lesson: 1,
  step: 0,
  updatedAt: Date.now(),
};

app.get(
  '/api/lesson-state',
  (req, res) => {
    res.json(lessonState);
  }
);

app.post(
  '/api/lesson-state',
  (req, res) => {
    const {
      syncEnabled,
      freezeEnabled,
      unlockVersion,
      practiceReleased,
      lesson,
      step,
    } = req.body || {};

    if (
      typeof syncEnabled ===
      'boolean'
    ) {
      lessonState.syncEnabled =
        syncEnabled;
    }

    if (
      typeof freezeEnabled ===
      'boolean'
    ) {
      lessonState.freezeEnabled =
        freezeEnabled;
    }

    if (
      Number.isInteger(
        unlockVersion
      )
    ) {
      lessonState.unlockVersion =
        Math.max(
          0,
          unlockVersion
        );
    }

    if (
      typeof practiceReleased ===
      'boolean'
    ) {
      lessonState.practiceReleased =
        practiceReleased;
    }

    if (
      Number.isInteger(lesson)
    ) {
      lessonState.lesson =
        Math.max(1, lesson);
    }

    if (
      Number.isInteger(step)
    ) {
      lessonState.step =
        Math.max(0, step);
    }

    lessonState.updatedAt =
      Date.now();

    res.json(lessonState);
  }
);

app.listen(
  PORT,
  '0.0.0.0',
  () => {
    console.log(
      `Intro to Trackpad running on port ${PORT}`
    );
  }
);
