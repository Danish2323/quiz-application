let allQuestions = {
  easy: [
    {
      question: "1. What is the basic unit of life?",
      options: ["Atom", "Cell", "Tissue", "Organ"],
      correct: 1,
      explanation: "Cells are the basic structural and functional unit of life."
    },
    {
      question: "2. Where does photosynthesis occur?",
      options: ["Mitochondria", "Nucleus", "Chloroplast", "Vacuole"],
      correct: 2,
      explanation: "Photosynthesis takes place in the chloroplasts using chlorophyll."
    },
    {
      question: "3. Which vitamin is known as ascorbic acid?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correct: 2,
      explanation: "Vitamin C is also known as ascorbic acid."
    },
    {
      question: "4. What gas do plants absorb from the air?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: 1,
      explanation: "Plants absorb CO₂ for photosynthesis."
    },
    {
      question: "5. How many chambers does the human heart have?",
      options: ["2", "3", "4", "5"],
      correct: 2,
      explanation: "The heart has 2 atria and 2 ventricles, total 4 chambers."
    },
    {
      question: "6. What pigment gives plants their green color?",
      options: ["Melanin", "Chlorophyll", "Carotene", "Xanthophyll"],
      correct: 1,
      explanation: "Chlorophyll absorbs light and gives the green color."
    },
    {
      question: "7. Which part of the plant anchors it to the ground?",
      options: ["Stem", "Flower", "Leaf", "Root"],
      correct: 3,
      explanation: "Roots provide support and absorb water from the soil."
    },
    {
      question: "8. How many legs does an insect have?",
      options: ["4", "6", "8", "10"],
      correct: 1,
      explanation: "Insects have six legs."
    },
    {
      question: "9. Which organ helps in blood purification?",
      options: ["Liver", "Heart", "Kidney", "Lung"],
      correct: 2,
      explanation: "Kidneys filter waste from blood."
    },
    {
      question: "10. What is the liquid part of blood called?",
      options: ["Platelet", "Plasma", "RBC", "WBC"],
      correct: 1,
      explanation: "Plasma is the yellowish liquid part of the blood."
    }
  ],
  medium: [
    {
      question: "1. What is the powerhouse of the cell?",
      options: ["Ribosome", "Mitochondria", "Nucleus", "Chloroplast"],
      correct: 1,
      explanation: "Mitochondria generate ATP through respiration."
    },
    {
      question: "2. DNA stands for?",
      options: ["Deoxyribonucleic Acid", "Dinucleic Acid", "Dioxin Acid", "Double Helix Acid"],
      correct: 0,
      explanation: "DNA = Deoxyribonucleic Acid."
    },
    {
      question: "3. What transports water in plants?",
      options: ["Phloem", "Xylem", "Stomata", "Veins"],
      correct: 1,
      explanation: "Xylem carries water and minerals from roots."
    },
    {
      question: "4. Enzymes are made up of?",
      options: ["Fats", "Sugars", "Proteins", "Vitamins"],
      correct: 2,
      explanation: "Enzymes are protein molecules."
    },
    {
      question: "5. Blood type AB is considered?",
      options: ["Universal donor", "Universal acceptor", "Rare", "Recessive"],
      correct: 1,
      explanation: "AB+ can receive blood from all types."
    },
    {
      question: "6. Insulin regulates?",
      options: ["Fat", "Sugar", "Protein", "Minerals"],
      correct: 1,
      explanation: "Insulin lowers blood sugar levels."
    },
    {
      question: "7. Amoeba moves using?",
      options: ["Cilia", "Pseudopodia", "Flagella", "Legs"],
      correct: 1,
      explanation: "Amoeba uses pseudopodia for movement."
    },
    {
      question: "8. Plant cells have what animal cells don’t?",
      options: ["Nucleus", "Mitochondria", "Cell wall", "Membrane"],
      correct: 2,
      explanation: "Cell wall is present only in plant cells."
    },
    {
      question: "9. Which organ produces bile?",
      options: ["Pancreas", "Stomach", "Liver", "Kidney"],
      correct: 2,
      explanation: "Liver secretes bile to aid digestion."
    },
    {
      question: "10. What is the smallest bone in human body?",
      options: ["Femur", "Stapes", "Radius", "Humerus"],
      correct: 1,
      explanation: "Stapes in the ear is the smallest bone."
    }
  ],
  hard: [
    {
      question: "1. Which part of the brain controls balance?",
      options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
      correct: 1,
      explanation: "Cerebellum manages coordination and balance."
    },
    {
      question: "2. What is plasmolysis?",
      options: ["Cell division", "Loss of water from cell", "Nucleus removal", "DNA replication"],
      correct: 1,
      explanation: "Plasmolysis is shrinking of cytoplasm due to water loss."
    },
    {
      question: "3. What is the role of hemoglobin?",
      options: ["Fight disease", "Clot blood", "Transport oxygen", "Digest food"],
      correct: 2,
      explanation: "Hemoglobin binds and carries oxygen in RBCs."
    },
    {
      question: "4. Which hormone regulates metabolism?",
      options: ["Insulin", "Thyroxine", "Estrogen", "Adrenaline"],
      correct: 1,
      explanation: "Thyroxine controls the body's metabolism rate."
    },
    {
      question: "5. What is the site of protein synthesis?",
      options: ["Nucleus", "Ribosomes", "Golgi body", "Mitochondria"],
      correct: 1,
      explanation: "Ribosomes are the protein-making machines."
    },
    {
      question: "6. Antibodies are part of which system?",
      options: ["Digestive", "Nervous", "Immune", "Endocrine"],
      correct: 2,
      explanation: "Antibodies fight pathogens in immune system."
    },
    {
      question: "7. Which process forms gametes?",
      options: ["Mitosis", "Meiosis", "Fusion", "Osmosis"],
      correct: 1,
      explanation: "Meiosis creates sex cells with half the chromosomes."
    },
    {
      question: "8. What is genetic drift?",
      options: ["Gene mutation", "Gene cloning", "Random change in gene pool", "Chromosome pairing"],
      correct: 2,
      explanation: "Genetic drift is random changes in gene frequency."
    },
    {
      question: "9. What is an allele?",
      options: ["Type of gene", "Protein", "Cell", "Hormone"],
      correct: 0,
      explanation: "Alleles are different forms of the same gene."
    },
    {
      question: "10. What is the function of Golgi apparatus?",
      options: ["ATP synthesis", "Protein packaging", "DNA replication", "Cell division"],
      correct: 1,
      explanation: "Golgi packages and processes proteins/lipids."
    }
  ]
};

let questions = [];
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let userName = "";
let userGmail = "";

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function selectDifficulty(level) {
  questions = allQuestions[level];
  startQuiz();
}

function startQuiz() {
  userName = document.getElementById("username").value;
  userGmail = document.getElementById("gmail").value;
  if (!userName || !userGmail) {
    alert("Please enter your name and Gmail.");
    return;
  }
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  showScreen("quiz-screen");
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-count").textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById("question-text").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  const explanation = document.getElementById("explanation");
  explanation.textContent = "";
  optionsDiv.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.classList.add("option");
    div.textContent = opt;
    div.onclick = () => selectOption(div, idx);
    optionsDiv.appendChild(div);
  });
  document.getElementById("next-btn").style.display = "none";
}

function selectOption(div, idx) {
  const q = questions[currentQuestion];
  const options = document.querySelectorAll(".option");
  options.forEach((el, i) => {
    el.onclick = null;
    if (i === q.correct) el.classList.add("correct");
    else if (i === idx) el.classList.add("wrong");
  });
  if (idx === q.correct) score++;
  userAnswers.push({ selected: idx, correct: q.correct });
  document.getElementById("explanation").textContent = "Explanation: " + q.explanation;
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) loadQuestion();
  else showResult();
}

function showResult() {
  document.getElementById("score").textContent = `You scored ${score}/10`;
  showScreen("result-screen");
  drawChart();
  sendToGoogleSheet();
}

function drawChart() {
  const ctx = document.getElementById("scoreChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Correct", "Wrong"],
      datasets: [{
        data: [score, 10 - score],
        backgroundColor: ["#2ecc71", "#e74c3c"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "white" }
        }
      }
    }
  });
}

function showAnalysis() {
  showScreen("analysis-screen");
  const list = document.getElementById("analysis-list");
  list.innerHTML = "";
  questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>Q${i + 1}:</strong> ${q.question}</p>
      <p>Your Answer: <span style="color:${userAnswers[i].selected === q.correct ? 'lightgreen' : 'red'}">
        ${q.options[userAnswers[i].selected] || "Not answered"}
      </span></p>
      <p>Correct Answer: ${q.options[q.correct]}</p>
      <hr/>
    `;
    list.appendChild(div);
  });
}

function restartQuiz() {
  location.reload();
}

function sendToGoogleSheet() {
  fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: userName,
      gmail: userGmail,
      score: score
    })
  });
}

