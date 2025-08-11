// 10 quadratic questions, each with step-by-step logic and explanations
const questions = [
  {
    title: "X² - 4x - 12 = 0",
    steps: [
      {
        equation: "X² - 4x - 12 = 0",
        options: [
          "X² - (6-2)x - 12 = 0", // correct
          "X² - 4x × 3x - 12 = 0",
          "X² - (6-2)x + 12 = 0",
          "X² + (6-2)x - 12 = 0"
        ],
        correctIndex: 0,
        explanation: "To factor the quadratic, we look for two numbers that multiply to -12 and add to -4. Those numbers are -6 and 2, so we rewrite -4x as -6x + 2x."
      },
      {
        equation: "X² - (6-2)x - 12 = 0",
        options: [
          "(X - 6)(X + 2) = 0",
          "X² + 8x - 12 = 0",
          "X² - 6x + 2x - 12 = 0", // correct
          "(X - 4)(X - 3) = 0"
        ],
        correctIndex: 2,
        explanation: "Expand (6-2)x and apply the leading minus to get -6x + 2x. This splits the middle term so we can factor by grouping."
      },
      {
        equation: "X² - 6x + 2x - 12 = 0",
        options: [
          "(X - 6)(X + 2) = 0", // correct
          "X² + 8x - 12 = 0",
          "X² - 8x - 12 = 0",
          "(X - 3)(X - 4) = 0"
        ],
        correctIndex: 0,
        explanation: "Now factor by grouping: (X² - 6x) + (2x - 12) = X(X-6) + 2(X-6) = (X-6)(X+2)."
      },
      {
        equation: "(X - 6)(X + 2) = 0",
        options: [
          "X = 6 or X = -2", // correct
          "X = -6 or X = 2",
          "No solution",
          "X² = 12"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X-6=0 or X+2=0, so X=6 or X=-2."
      }
    ]
  },
  {
    title: "X² + 5x + 6 = 0",
    steps: [
      {
        equation: "X² + 5x + 6 = 0",
        options: [
          "X² + (2+3)x + 6 = 0", // correct
          "X² + 6x + 6 = 0",
          "X² + (2-3)x + 6 = 0",
          "X² + 5x - 6 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to 6 and add to 5: 2 and 3. Rewrite 5x as 2x + 3x."
      },
      {
        equation: "X² + (2+3)x + 6 = 0",
        options: [
          "X² + 2x + 3x + 6 = 0", // correct
          "X² + 5x + 6 = 0",
          "X² + 6x + 6 = 0",
          "X² + 2x - 3x + 6 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (2+3)x to get 2x + 3x."
      },
      {
        equation: "X² + 2x + 3x + 6 = 0",
        options: [
          "(X + 2)(X + 3) = 0", // correct
          "X² + 5x + 6 = 0",
          "X² + 6x + 6 = 0",
          "(X - 2)(X - 3) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² + 2x) + (3x + 6) = X(X+2) + 3(X+2) = (X+2)(X+3)."
      },
      {
        equation: "(X + 2)(X + 3) = 0",
        options: [
          "X = -2 or X = -3", // correct
          "X = 2 or X = 3",
          "No solution",
          "X² = -6"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X+2=0 or X+3=0, so X=-2 or X=-3."
      }
    ]
  },
  {
    title: "X² - x - 20 = 0",
    steps: [
      {
        equation: "X² - x - 20 = 0",
        options: [
          "X² - (5-4)x - 20 = 0", // correct
          "X² - 5x - 4x - 20 = 0",
          "X² - (5+4)x - 20 = 0",
          "X² + (5-4)x - 20 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to -20 and add to -1: -5 and 4. Rewrite -x as -5x + 4x."
      },
      {
        equation: "X² - (5-4)x - 20 = 0",
        options: [
          "X² - 5x + 4x - 20 = 0", // correct
          "X² - x - 20 = 0",
          "X² - 9x - 20 = 0",
          "X² + 5x + 4x - 20 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (5-4)x with the leading minus: -(5-4)x = -5x + 4x."
      },
      {
        equation: "X² - 5x + 4x - 20 = 0",
        options: [
          "(X - 5)(X + 4) = 0", // correct
          "X² - x - 20 = 0",
          "X² - 9x - 20 = 0",
          "(X + 5)(X - 4) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² - 5x) + (4x - 20) = X(X-5) + 4(X-5) = (X-5)(X+4)."
      },
      {
        equation: "(X - 5)(X + 4) = 0",
        options: [
          "X = 5 or X = -4", // correct
          "X = -5 or X = 4",
          "No solution",
          "X² = 20"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X-5=0 or X+4=0, so X=5 or X=-4."
      }
    ]
  },
  {
    title: "X² + 7x + 10 = 0",
    steps: [
      {
        equation: "X² + 7x + 10 = 0",
        options: [
          "X² + (5+2)x + 10 = 0", // correct
          "X² + 10x + 7 = 0",
          "X² + (5-2)x + 10 = 0",
          "X² + 7x - 10 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to 10 and add to 7: 5 and 2. Rewrite 7x as 5x + 2x."
      },
      {
        equation: "X² + (5+2)x + 10 = 0",
        options: [
          "X² + 5x + 2x + 10 = 0", // correct
          "X² + 7x + 10 = 0",
          "X² + 10x + 7 = 0",
          "X² + 5x - 2x + 10 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (5+2)x to get 5x + 2x."
      },
      {
        equation: "X² + 5x + 2x + 10 = 0",
        options: [
          "(X + 5)(X + 2) = 0", // correct
          "X² + 7x + 10 = 0",
          "X² + 10x + 7 = 0",
          "(X - 5)(X - 2) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² + 5x) + (2x + 10) = X(X+5) + 2(X+5) = (X+5)(X+2)."
      },
      {
        equation: "(X + 5)(X + 2) = 0",
        options: [
          "X = -5 or X = -2", // correct
          "X = 5 or X = 2",
          "No solution",
          "X² = -10"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X+5=0 or X+2=0, so X=-5 or X=-2."
      }
    ]
  },
  {
    title: "X² - 3x - 28 = 0",
    steps: [
      {
        equation: "X² - 3x - 28 = 0",
        options: [
          "X² - (7-4)x - 28 = 0", // correct
          "X² - 7x - 4x - 28 = 0",
          "X² - (7+4)x - 28 = 0",
          "X² + (7-4)x - 28 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to -28 and add to -3: -7 and 4. Rewrite -3x as -7x + 4x."
      },
      {
        equation: "X² - (7-4)x - 28 = 0",
        options: [
          "X² - 7x + 4x - 28 = 0", // correct
          "X² - 3x - 28 = 0",
          "X² - 11x - 28 = 0",
          "X² + 7x + 4x - 28 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand with the leading minus: -(7-4)x = -7x + 4x."
      },
      {
        equation: "X² - 7x + 4x - 28 = 0",
        options: [
          "(X - 7)(X + 4) = 0", // correct
          "X² - 3x - 28 = 0",
          "X² - 11x - 28 = 0",
          "(X + 7)(X - 4) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² - 7x) + (4x - 28) = X(X-7) + 4(X-7) = (X-7)(X+4)."
      },
      {
        equation: "(X - 7)(X + 4) = 0",
        options: [
          "X = 7 or X = -4", // correct
          "X = -7 or X = 4",
          "No solution",
          "X² = 28"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X-7=0 or X+4=0, so X=7 or X=-4."
      }
    ]
  },
  {
    title: "X² + 8x + 15 = 0",
    steps: [
      {
        equation: "X² + 8x + 15 = 0",
        options: [
          "X² + (5+3)x + 15 = 0", // correct
          "X² + 15x + 8 = 0",
          "X² + (5-3)x + 15 = 0",
          "X² + 8x - 15 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to 15 and add to 8: 5 and 3. Rewrite 8x as 5x + 3x."
      },
      {
        equation: "X² + (5+3)x + 15 = 0",
        options: [
          "X² + 5x + 3x + 15 = 0", // correct
          "X² + 8x + 15 = 0",
          "X² + 15x + 8 = 0",
          "X² + 5x - 3x + 15 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (5+3)x to get 5x + 3x."
      },
      {
        equation: "X² + 5x + 3x + 15 = 0",
        options: [
          "(X + 5)(X + 3) = 0", // correct
          "X² + 8x + 15 = 0",
          "X² + 15x + 8 = 0",
          "(X - 5)(X - 3) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² + 5x) + (3x + 15) = X(X+5) + 3(X+5) = (X+5)(X+3)."
      },
      {
        equation: "(X + 5)(X + 3) = 0",
        options: [
          "X = -5 or X = -3", // correct
          "X = 5 or X = 3",
          "No solution",
          "X² = -15"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X+5=0 or X+3=0, so X=-5 or X=-3."
      }
    ]
  },
  {
    title: "X² - 2x - 15 = 0",
    steps: [
      {
        equation: "X² - 2x - 15 = 0",
        options: [
          "X² - (5-3)x - 15 = 0", // correct
          "X² - 5x - 3x - 15 = 0",
          "X² - (5+3)x - 15 = 0",
          "X² + (5-3)x - 15 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to -15 and add to -2: -5 and 3. Rewrite -2x as -5x + 3x."
      },
      {
        equation: "X² - (5-3)x - 15 = 0",
        options: [
          "X² - 5x + 3x - 15 = 0", // correct
          "X² - 2x - 15 = 0",
          "X² - 8x - 15 = 0",
          "X² + 5x + 3x - 15 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand with the leading minus: -(5-3)x = -5x + 3x."
      },
      {
        equation: "X² - 5x + 3x - 15 = 0",
        options: [
          "(X - 5)(X + 3) = 0", // correct
          "X² - 2x - 15 = 0",
          "X² - 8x - 15 = 0",
          "(X + 5)(X - 3) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² - 5x) + (3x - 15) = X(X-5) + 3(X-5) = (X-5)(X+3)."
      },
      {
        equation: "(X - 5)(X + 3) = 0",
        options: [
          "X = 5 or X = -3", // correct
          "X = -5 or X = 3",
          "No solution",
          "X² = 15"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X-5=0 or X+3=0, so X=5 or X=-3."
      }
    ]
  },
  {
    title: "X² + 6x + 9 = 0",
    steps: [
      {
        equation: "X² + 6x + 9 = 0",
        options: [
          "X² + (3+3)x + 9 = 0", // correct
          "X² + 9x + 6 = 0",
          "X² + (3-3)x + 9 = 0",
          "X² + 6x - 9 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to 9 and add to 6: 3 and 3. Rewrite 6x as 3x + 3x."
      },
      {
        equation: "X² + (3+3)x + 9 = 0",
        options: [
          "X² + 3x + 3x + 9 = 0", // correct
          "X² + 6x + 9 = 0",
          "X² + 9x + 6 = 0",
          "X² + 3x - 3x + 9 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (3+3)x to get 3x + 3x."
      },
      {
        equation: "X² + 3x + 3x + 9 = 0",
        options: [
          "(X + 3)(X + 3) = 0", // correct
          "X² + 6x + 9 = 0",
          "X² + 9x + 6 = 0",
          "(X - 3)(X - 3) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² + 3x) + (3x + 9) = X(X+3) + 3(X+3) = (X+3)(X+3)."
      },
      {
        equation: "(X + 3)(X + 3) = 0",
        options: [
          "X = -3", // correct
          "X = 3",
          "No solution",
          "X² = -9"
        ],
        correctIndex: 0,
        explanation: "Set the factor to zero: X+3=0, so X=-3 (double root)."
      }
    ]
  },
  {
    title: "X² - 7x + 12 = 0",
    steps: [
      {
        equation: "X² - 7x + 12 = 0",
        options: [
          "X² - (3+4)x + 12 = 0", // correct
          "X² - 12x + 7 = 0",
          "X² - (3-4)x + 12 = 0",
          "X² - 7x - 12 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to 12 and add to -7: -3 and -4. Rewrite -7x as -3x - 4x."
      },
      {
        equation: "X² - (3+4)x + 12 = 0",
        options: [
          "X² - 3x - 4x + 12 = 0", // correct
          "X² - 7x + 12 = 0",
          "X² - 12x + 7 = 0",
          "X² - 3x + 4x + 12 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (3+4)x to get -3x - 4x."
      },
      {
        equation: "X² - 3x - 4x + 12 = 0",
        options: [
          "(X - 3)(X - 4) = 0", // correct
          "X² - 7x + 12 = 0",
          "X² - 12x + 7 = 0",
          "(X + 3)(X + 4) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² - 3x) + (-4x + 12) = X(X-3) -4(X-3) = (X-3)(X-4)."
      },
      {
        equation: "(X - 3)(X - 4) = 0",
        options: [
          "X = 3 or X = 4", // correct
          "X = -3 or X = -4",
          "No solution",
          "X² = 12"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X-3=0 or X-4=0, so X=3 or X=4."
      }
    ]
  },
  {
    title: "X² + 4x + 3 = 0",
    steps: [
      {
        equation: "X² + 4x + 3 = 0",
        options: [
          "X² + (1+3)x + 3 = 0", // correct
          "X² + 3x + 4 = 0",
          "X² + (1-3)x + 3 = 0",
          "X² + 4x - 3 = 0"
        ],
        correctIndex: 0,
        explanation: "Find two numbers that multiply to 3 and add to 4: 1 and 3. Rewrite 4x as 1x + 3x."
      },
      {
        equation: "X² + (1+3)x + 3 = 0",
        options: [
          "X² + 1x + 3x + 3 = 0", // correct
          "X² + 4x + 3 = 0",
          "X² + 3x + 4 = 0",
          "X² + 1x - 3x + 3 = 0"
        ],
        correctIndex: 0,
        explanation: "Expand (1+3)x to get 1x + 3x."
      },
      {
        equation: "X² + 1x + 3x + 3 = 0",
        options: [
          "(X + 1)(X + 3) = 0", // correct
          "X² + 4x + 3 = 0",
          "X² + 3x + 4 = 0",
          "(X - 1)(X - 3) = 0"
        ],
        correctIndex: 0,
        explanation: "Factor by grouping: (X² + 1x) + (3x + 3) = X(X+1) + 3(X+1) = (X+1)(X+3)."
      },
      {
        equation: "(X + 1)(X + 3) = 0",
        options: [
          "X = -1 or X = -3", // correct
          "X = 1 or X = 3",
          "No solution",
          "X² = -3"
        ],
        correctIndex: 0,
        explanation: "Set each factor to zero: X+1=0 or X+3=0, so X=-1 or X=-3."
      }
    ]
  }
];

let selectedQuestion = null;
let currentStep = 0;
let shuffledCorrectIndex = 0;

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function activateScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(s => s.classList.remove('is-active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('is-active');
}

function showQuestionSelect() {
    activateScreen('questionSelectScreen');
    const list = document.getElementById("questionList");
    list.innerHTML = "";
    questions.forEach((q, idx) => {
        const btn = document.createElement("button");
        btn.className = "step-btn";
        btn.textContent = q.title;
        btn.onclick = () => startGame(idx);
        list.appendChild(btn);
    });
}

function startGame(qIdx) {
    selectedQuestion = questions[qIdx];
    currentStep = 0;
    activateScreen('gameScreen');
    loadStep();
}

function loadStep() {
    const step = selectedQuestion.steps[currentStep];
    // retrigger fade-in on content each step
    const optionsContainer = document.querySelector('.steps.options');
    if (optionsContainer) {
      optionsContainer.classList.remove('fade-in');
      // force reflow
      void optionsContainer.offsetWidth;
      optionsContainer.classList.add('fade-in');
    }
    // Ensure buttons are present/visible/enabled
    const order = shuffleArray([0,1,2,3]);
    shuffledCorrectIndex = order.indexOf(step.correctIndex);
    for (let index = 0; index < 4; index++) {
      const btn = document.getElementById(`btn${index+1}`);
      if (!btn) continue;
      btn.style.visibility = '';
      btn.disabled = false;
      btn.classList.remove('red');
      btn.textContent = step.options[ order[index] ];
      // bind index after shuffle
      btn.onclick = () => checkAnswer(index);
    }
    const eq = document.getElementById("equation");
    eq.textContent = step.equation;
    eq.classList.remove('equation-anim');
    void eq.offsetWidth;
    eq.classList.add('equation-anim');
    document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedIndex) {
    const step = selectedQuestion.steps[currentStep];
    const feedback = document.getElementById("feedback");
    // Remove red from all buttons first
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`btn${i}`).classList.remove("red");
    }
    if (selectedIndex === shuffledCorrectIndex) {
        feedback.textContent = "✅ Correct!";
        feedback.style.color = "green";
        setTimeout(() => {
            currentStep++;
            if (currentStep < selectedQuestion.steps.length) {
                loadStep();
            } else {
                const eqEl = document.getElementById("equation");
                eqEl.textContent = "🎉 You solved it!";
                // Hide options gracefully to preserve DOM for the next round
                const optionsWrap = document.querySelector('.options');
                if (optionsWrap) {
                  const btns = optionsWrap.querySelectorAll('button.step-btn');
                  btns.forEach(b => { b.disabled = true; b.style.visibility = 'hidden'; });
                }
                // Always show summary after completion
                setTimeout(() => { showSummaryModal(); }, 600);
            }
        }, 800);
    } else {
        feedback.textContent = "❌ Wrong! See explanation.";
        feedback.style.color = "red";
        document.getElementById(`btn${selectedIndex+1}`).classList.add("red");
        showExplanationModal(step, selectedIndex);
    }
}

// Modal logic
function showExplanationModal(step, selectedIndex) {
    const modal = document.getElementById("explanationModal");
    const explanationText = document.getElementById("explanationText");
    const correctOptionArea = document.getElementById("correctOptionArea");
    const tryAgainBtn = document.getElementById("tryAgainBtn");
    // Show explanation
    explanationText.innerHTML = `<b>Why?</b> <br>${step.explanation}`;
    // Show correct option
    let correctHtml = '<div style="margin:10px 0;">';
    step.options.forEach((opt, idx) => {
        if(idx === step.correctIndex) {
            correctHtml += `<div style='margin:6px 0; padding:8px 0; border-radius:18px; background:#c6e6b3; color:#2d5c1a; font-weight:bold;'>✔️ ${opt}</div>`;
        } else if(idx === selectedIndex) {
            correctHtml += `<div style='margin:6px 0; padding:8px 0; border-radius:18px; background:#f98b82; color:#fff;'>❌ ${opt}</div>`;
        } else {
            correctHtml += `<div style='margin:6px 0; padding:8px 0; border-radius:18px; background:#eee;'>${opt}</div>`;
        }
    });
    correctHtml += '</div>';
    correctOptionArea.innerHTML = correctHtml;
    // Show try again button
    tryAgainBtn.style.display = "inline-block";
    tryAgainBtn.onclick = function() {
        modal.style.display = "none";
    };
    modal.style.display = "block";
}

// Modal close logic
// Also handles summary modal

document.addEventListener("DOMContentLoaded", function() {
    // Explanation modal
    const modal = document.getElementById("explanationModal");
    document.getElementById("closeModal").onclick = function() {
        modal.style.display = "none";
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
    // Summary modal
    const summaryModal = document.getElementById("summaryModal");
    document.getElementById("closeSummary").onclick = function() {
        summaryModal.style.display = "none";
        showQuestionSelect();
    };
    document.getElementById("closeSummaryBtn").onclick = function() {
        summaryModal.style.display = "none";
        showQuestionSelect();
    };
    window.addEventListener("click", function(event) {
        if (event.target === summaryModal) {
            summaryModal.style.display = "none";
            showQuestionSelect();
        }
    });
    // ESC to close any open modal
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const openExplanation = document.getElementById('explanationModal');
        const openSummary = document.getElementById('summaryModal');
        if (openExplanation && openExplanation.style.display === 'block') {
          openExplanation.style.display = 'none';
        }
        if (openSummary && openSummary.style.display === 'block') {
          openSummary.style.display = 'none';
          showQuestionSelect();
        }
      }
    });
});

function showSummaryModal() {
    const modal = document.getElementById("summaryModal");
    const summaryText = document.getElementById("summaryText");
    let html = `<h3 style='color:#4a6c3b;'>${selectedQuestion.title}</h3><ol style='text-align:left;'>`;
    selectedQuestion.steps.forEach((step, idx) => {
        html += `<li style='margin-bottom:12px;'><b>${step.equation}</b><br><span style='color:#708c5a;'>${step.explanation}</span></li>`;
    });
    html += "</ol><button class='cta-btn' id='backToMenuBtn'>Back to Menu</button>";
    summaryText.innerHTML = html;
    modal.style.display = "block";
    setTimeout(() => {
      const backBtn = document.getElementById('backToMenuBtn');
      if (backBtn) {
        backBtn.onclick = () => {
          modal.style.display = "none";
          showQuestionSelect();
        };
        backBtn.focus();
      }
    }, 100);
}

window.onload = showQuestionSelect;