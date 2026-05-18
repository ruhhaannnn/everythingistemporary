let currentPaper = null;
let currentIndex = 0;
let selectedOptionIndex = null;
let userHistory = {}; 

// UI Elements
const selectionScreen = document.getElementById("selection-screen");
const quizScreen = document.getElementById("quiz-screen");
const dashboard = document.getElementById("dashboard");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submit-btn");
const feedbackContainer = document.getElementById("feedback-container");
const resultStatus = document.getElementById("result-status");
const explanationText = document.getElementById("explanation-text");
const qSelector = document.getElementById("q-selector");
const scoreVal = document.getElementById("score-val");
const paperBadge = document.getElementById("paper-badge");

// Initialize application state from LocalStorage on load
window.addEventListener("DOMContentLoaded", () => {
    const savedPaper = localStorage.getItem("fighter_paper");
    const savedIndex = localStorage.getItem("fighter_index");
    const savedHistory = localStorage.getItem("fighter_history");

    if (savedPaper && database[savedPaper]) {
        currentPaper = savedPaper;
        currentIndex = parseInt(savedIndex) || 0;
        userHistory = JSON.parse(savedHistory) || {};
        startQuizView();
    }
});

function initQuiz(paperType) {
    currentPaper = paperType;
    currentIndex = 0;
    userHistory = {};
    saveState();
    startQuizView();
}

function startQuizView() {
    selectionScreen.classList.add("hidden");
    dashboard.classList.remove("hidden");
    quizScreen.classList.remove("hidden");
    paperBadge.innerText = currentPaper === "paper1" ? "GS Paper 1" : "CSAT Paper 2";
    
    buildDropdown();
    loadQuestion();
    calculateMarks();
}

function buildDropdown() {
    qSelector.innerHTML = "";
    database[currentPaper].forEach((_, index) => {
        const opt = document.createElement("option");
        opt.value = index;
        opt.innerText = `Q ${index + 1}`;
        opt.selected = index === currentIndex;
        qSelector.appendChild(opt);
    });
}

qSelector.addEventListener("change", (e) => {
    currentIndex = parseInt(e.target.value);
    saveState();
    loadQuestion();
});

function loadQuestion() {
    selectedOptionIndex = null;
    submitBtn.disabled = true;
    feedbackContainer.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    qSelector.value = currentIndex;

    const currentQ = database[currentPaper][currentIndex];
    questionText.innerText = currentQ.question;
    optionsContainer.innerHTML = "";

    const labels = ["A", "B", "C", "D"];
    currentQ.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.className = "option-wrapper";
        if (userHistory[currentIndex] && userHistory[currentIndex].chosen === labels[index]) {
            div.classList.add("selected");
        }
        div.innerHTML = `<span class="option-label">${labels[index]}.</span> <span class="option-text">${option}</span>`;
        div.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(div);
    });

    if (userHistory[currentIndex]) {
        revealAnswer(userHistory[currentIndex].chosen);
    }
}

function selectOption(index) {
    if (userHistory[currentIndex]) return; 
    selectedOptionIndex = index;
    document.querySelectorAll(".option-wrapper").forEach((w, i) => {
        w.classList.toggle("selected", i === index);
    });
    submitBtn.disabled = false;
}

submitBtn.addEventListener("click", () => {
    const currentQ = database[currentPaper][currentIndex];
    const labels = ["A", "B", "C", "D"];
    const chosenLabel = labels[selectedOptionIndex];

    userHistory[currentIndex] = {
        chosen: chosenLabel,
        correct: chosenLabel === currentQ.answer
    };

    saveState();
    calculateMarks();
    revealAnswer(chosenLabel);
});

function revealAnswer(chosenLabel) {
    const currentQ = database[currentPaper][currentIndex];
    submitBtn.classList.add("hidden");
    feedbackContainer.classList.remove("hidden");

    if (chosenLabel === currentQ.answer) {
        resultStatus.innerText = "✓ Correct Answer!";
        resultStatus.className = "correct";
    } else {
        resultStatus.innerText = `✗ Incorrect. Correct Answer is (${currentQ.answer})`;
        resultStatus.className = "wrong";
    }
    explanationText.innerText = currentQ.explanation;
}

function calculateMarks() {
    let score = 0;
    const posValue = currentPaper === "paper1" ? 2.0 : 2.5;
    const negValue = currentPaper === "paper1" ? (2.0 / 3) : (2.5 / 3);

    Object.keys(userHistory).forEach(idx => {
        if (userHistory[idx].correct) {
            score += posValue;
        } else {
            score -= negValue;
        }
    });
    scoreVal.innerText = score.toFixed(2);
}

function saveState() {
    localStorage.setItem("fighter_paper", currentPaper);
    localStorage.setItem("fighter_index", currentIndex);
    localStorage.setItem("fighter_history", JSON.stringify(userHistory));
}

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentIndex < database[currentPaper].length - 1) {
        currentIndex++;
        saveState();
        loadQuestion();
    } else {
        alert("End of current questions batch! Request more questions.");
    }
});

document.getElementById("reset-btn").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
