// Quiz data
const quizData = {
  "statements": [
    {
      "id": 1,
      "statement": "Heating extra virgin olive oil for Indian tadka (tempering) at high heat is completely safe as olive oil is healthy.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Extra virgin olive oil is excellent for health and can be safely used for low to medium heat cooking (below 180°C). It contains beneficial phenolic compounds and antioxidants.",
        "whenWrong": "WRONG when used for high-heat tadka. Extra virgin olive oil has a smoke point of 160-190°C, and Indian tadka often requires temperatures above 200°C. At high temperatures, it breaks down, loses beneficial compounds, and can form harmful substances. The phenolic compounds that provide health benefits start degrading above 250°F (121°C).",
        "scientificBacking": "Research shows that when EVOO is heated beyond its smoke point, it loses antioxidant properties and can form acrolein, a harmful compound. Studies indicate structural changes occur in olive oil when heated above 180°C.",
        "recommendation": "Use EVOO for low-heat cooking, salad dressings, and finishing dishes. For Indian tadka, use refined olive oil, coconut oil, or ghee which have higher smoke points (200-250°C)."
      }
    },
    {
      "id": 2,
      "statement": "Reusing cooking oil 2-3 times for deep frying Indian snacks like samosas and pakoras is economical and safe.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Oil reuse might seem economical, and high-quality oils can technically withstand some reheating if done properly with temperature control.",
        "whenWrong": "WRONG from a health perspective. The Indian Council of Medical Research (ICMR) specifically warns against reusing cooking oil. When oils undergo multiple heating cycles, they form harmful compounds including polycyclic aromatic hydrocarbons (PAHs), aldehydes, and acrylamide - all recognized carcinogens.",
        "scientificBacking": "Scientific studies show that repeated heating causes oxidation of polyunsaturated fatty acids (PUFA), leading to DNA damage and increased cancer risk. Research indicates that even 2-3 reuses significantly increase toxic compound formation.",
        "recommendation": "Use fresh oil for each deep frying session. When oil shows darkening, foaming, or develops a rancid smell, discard immediately. Consider air frying or baking as healthier alternatives for traditional fried snacks."
      }
    },
    {
      "id": 3,
      "statement": "Cooking acidic Indian dishes like tomato-based curries and tamarind dal in aluminum cookware enhances the metallic taste and is harmless.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Aluminum cookware is lightweight, conducts heat well, and is affordable for Indian cooking.",
        "whenWrong": "WRONG for acidic foods. Research shows that cooking acidic ingredients (tomatoes, tamarind, lemon) in aluminum causes significant metal leaching into food. Studies found aluminum leaching increases with lower pH, higher temperature, longer cooking time, and presence of salt and organic acids - all common in Indian cuisine.",
        "scientificBacking": "Scientific studies using foods with pH 3-4 (typical of tomato-based Indian dishes) showed aluminum leaching levels that exceeded safety recommendations. The protective Al2O3 film dissolves in acidic conditions, releasing aluminum ions that can accumulate in the body.",
        "recommendation": "Use stainless steel, ceramic, or glass cookware for acidic Indian dishes. Reserve aluminum cookware for non-acidic preparations like plain rice or rotis. Hard anodized aluminum is safer as it has a protective coating."
      }
    },
    {
      "id": 4,
      "statement": "Air frying Indian snacks like potato chips and mathri is healthy as it takes less oil and fat.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Air frying uses less oil and can reduce overall fat content in fried foods.",
        "whenWrong": "WRONG regarding acrylamide formation. Recent research shows air-fried potatoes actually contained higher acrylamide levels (12.19 μg/kg) compared to deep frying (8.94 μg/kg). The circulating hot air in air fryers can cause more intense browning and higher acrylamide formation in starchy foods.",
        "scientificBacking": "Scientific studies measuring acrylamide formation in different cooking methods found that air frying of starchy foods like potatoes produced the highest levels of this probable carcinogen, particularly when foods develop dark brown color.",
        "recommendation": "Use air fryers in moderation. Pre-soak starchy vegetables to reduce acrylamide formation. Cook to golden yellow rather than dark brown. For frequent snacking, consider steamed or boiled alternatives."
      }
    },
    {
      "id": 5,
      "statement": "Traditional clay pot cooking for Indian dishes is just nostalgic and offers no real health benefits over modern cookware.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Modern cookware offers convenience, faster cooking, and easy maintenance for busy lifestyles.",
        "whenWrong": "WRONG! Scientific studies show clay pot cooking offers multiple health benefits: 1) Retains up to 30% more nutrients compared to metal cookware, 2) Natural alkalinity neutralizes food acidity, improving digestibility, 3) Adds beneficial minerals like calcium, phosphorus, iron, and magnesium to food, 4) Zero toxic chemical leaching unlike non-stick coatings.",
        "scientificBacking": "Research comparing nutrient retention shows clay pots preserve vitamins and minerals better due to gentle, even heat distribution. The porous nature allows gradual moisture evaporation, concentrating flavors while maintaining nutritional integrity.",
        "recommendation": "Incorporate clay pot cooking for dal, rice, and slow-cooked curries. Season new clay pots properly. Use for dishes that benefit from slow cooking and enhanced flavors."
      }
    },
    {
      "id": 6,
      "statement": "Microwaving Indian food destroys nutrients and is unhealthy compared to traditional cooking methods.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Traditional cooking methods like steaming and gentle heating can preserve certain nutrients effectively.",
        "whenWrong": "WRONG! Scientific research shows microwaving actually retains 90-95% of nutrients, often outperforming traditional boiling and extended cooking. Microwaves use lower heat than conventional cooking and shorter cooking times, which helps preserve heat-sensitive vitamins like Vitamin C and B-complex.",
        "scientificBacking": "Studies comparing nutrient retention across cooking methods found microwaving superior for preserving water-soluble vitamins. The electromagnetic waves heat food from inside out, reducing cooking time and nutrient degradation.",
        "recommendation": "Microwave in glass or ceramic containers only. Heat food in short intervals, stirring between heating. Avoid plastic containers. For oil-rich Indian dishes, consider stovetop reheating for better heat distribution."
      }
    },
    {
      "id": 7,
      "statement": "Adding spices to very hot oil during tadka (tempering) at smoking point extracts maximum flavor and aroma.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Hot oil does effectively extract essential oils and aromatic compounds from whole spices, which is the principle behind tadka.",
        "whenWrong": "WRONG at smoking point! When oil reaches smoking point, it's breaking down and forming harmful compounds. Adding spices to smoking oil burns them instantly, creating bitter flavors and destroying beneficial compounds. The optimal tadka temperature is just before smoking point.",
        "scientificBacking": "Scientific analysis of tadka shows that optimal flavor extraction occurs at 180-200°C. Beyond smoking point (varies by oil type), both oil and spices undergo thermal degradation, forming acrolein and other harmful compounds while losing aromatic properties.",
        "recommendation": "Heat oil until shimmering but not smoking. Test with one cumin seed - it should sizzle immediately but not burn. Add whole spices first, then aromatics like ginger-garlic, and finally spice powders after reducing heat."
      }
    },
    {
      "id": 8,
      "statement": "Non-stick cookware is completely safe for all types of Indian cooking including high-heat preparations.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Non-stick cookware is convenient for low to medium heat cooking and requires less oil.",
        "whenWrong": "WRONG for high-heat Indian cooking! ICMR warns that non-stick coatings (PTFE/Teflon) break down above 260°C, releasing toxic fumes. Even normal use with utensils creates microplastic particles. Indian cooking often requires high heat for proper tadka and searing.",
        "scientificBacking": "Research using Raman spectroscopy shows that cooking with utensils on non-stick surfaces releases microplastics and nanoplastics (MNPLs) into food. At temperatures above 500°F, PTFE decomposes, potentially causing polymer fume fever.",
        "recommendation": "Use non-stick only for low-heat preparations like pancakes or gentle sautéing. For Indian cooking requiring high heat, use stainless steel, cast iron, or carbon steel cookware. Never preheat empty non-stick pans."
      }
    },
    {
      "id": 9,
      "statement": "Traditional biomass cooking (wood/dung) gives better flavor to Indian food and is healthier than LPG cooking.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Biomass cooking can impart a distinctive smoky flavor that some prefer in traditional preparations.",
        "whenWrong": "WRONG regarding health! Research from IIT Mandi shows biomass cooking causes severe indoor air pollution, leading to COPD, respiratory infections, and increased lung cancer risk. Over 50% of rural populations still use these fuels, disproportionately affecting women and children.",
        "scientificBacking": "Scientific studies document that incomplete combustion of biomass releases carbon monoxide, particulate matter, and carcinogenic compounds. Indoor air pollution from biomass fuels is linked to cardiovascular diseases and premature death.",
        "recommendation": "Transition to cleaner cooking technologies like LPG or electric stoves. Improve kitchen ventilation if biomass use is unavoidable. For occasional smoky flavor, use approved smoking woods for short durations rather than daily cooking fuel."
      }
    },
    {
      "id": 10,
      "statement": "Ghee is unhealthy and should be replaced with refined vegetable oils for modern Indian cooking.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Moderation in fat consumption is important for overall health, and some refined oils have high smoke points suitable for cooking.",
        "whenWrong": "WRONG! Scientific research shows ghee has several health advantages over refined oils: 1) Contains beneficial short-chain fatty acids like butyrate for gut health, 2) High smoke point (250°C) stable for Indian cooking, 3) Contains fat-soluble vitamins A, D, E, K, 4) Refined oils undergo chemical processing with hexane and have inflammatory omega-6 fatty acids.",
        "scientificBacking": "Studies indicate that traditional ghee (especially A2 ghee) supports hormonal health and has anti-inflammatory properties. Research shows refined oils' high omega-6 content contributes to inflammation, obesity, and insulin resistance.",
        "recommendation": "Use pure, traditional ghee in moderation for Indian cooking. Choose A2 ghee when possible. Avoid highly processed refined oils. Balance with other healthy fats like mustard oil and coconut oil."
      }
    },
    {
      "id": 11,
      "statement": "Pressure cooking Indian dal and vegetables destroys most nutrients.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Traditional slow cooking can preserve some nutrients through gentle heat application.",
        "whenWrong": "WRONG! Scientific research shows pressure cooking retains 90-95% of nutrients, actually outperforming many traditional methods. The sealed environment prevents nutrient loss through evaporation, and shorter cooking times preserve heat-sensitive vitamins.",
        "scientificBacking": "Studies from the 1990s and recent research confirm pressure cooking's superior nutrient retention compared to boiling, steaming, and extended cooking methods. The high-pressure, lower-heat environment preserves more vitamins and minerals.",
        "recommendation": "Use pressure cooking for dal, legumes, and tough vegetables. Avoid overcooking - use minimum cooking time. Quick-release pressure to prevent overcooking. Add delicate vegetables in the final minutes."
      }
    },
    {
      "id": 12,
      "statement": "Roasting papads and rotis directly over open flame is the traditional way and completely safe.",
      "correctAnswer": "wrong",
      "explanation": {
        "whenRight": "Direct flame roasting is indeed a traditional method that many prefer for texture and convenience.",
        "whenWrong": "WRONG from a health perspective! Scientific studies show flame-roasting papads and flatbreads introduces polycyclic aromatic hydrocarbons (PAHs) and acrylamide formation. Direct contact with flame creates the same carcinogenic compounds as grilling meats.",
        "scientificBacking": "Research indicates that flame-roasted papads contain measurable levels of acrylamide, a recognized carcinogen and neurotoxin. PAH formation occurs when organic matter directly contacts flame, similar to charred meats.",
        "recommendation": "Use a tawa (griddle) or dry pan for roasting papads and rotis. For occasional crispy texture, use brief flame exposure. Consider oven-roasting as a safer alternative that still provides good results."
      }
    }
  ]
};

// Application state
let currentQuestionIndex = 0;
let hasAnswered = false;

// DOM elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const statementText = document.getElementById('statement-text');
const answerButtons = document.getElementById('answer-buttons');
const rightBtn = document.getElementById('right-btn');
const wrongBtn = document.getElementById('wrong-btn');
const explanationContainer = document.getElementById('explanation-container');
const answerFeedback = document.getElementById('answer-feedback');
const whenRightText = document.getElementById('when-right-text');
const whenWrongText = document.getElementById('when-wrong-text');
const scientificText = document.getElementById('scientific-text');
const recommendationText = document.getElementById('recommendation-text');
const nextBtn = document.getElementById('next-btn');

// Initialize the application
function initApp() {
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', restartQuiz);
    rightBtn.addEventListener('click', () => handleAnswer('right'));
    wrongBtn.addEventListener('click', () => handleAnswer('wrong'));
    nextBtn.addEventListener('click', nextQuestion);
}

// Start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    hasAnswered = false;
    showScreen('quiz');
    loadQuestion();
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    hasAnswered = false;
    showScreen('quiz');
    loadQuestion();
}

// Show specific screen
function showScreen(screenName) {
    // Hide all screens
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultsScreen.classList.remove('active');
    
    // Show requested screen
    switch(screenName) {
        case 'start':
            startScreen.classList.add('active');
            break;
        case 'quiz':
            quizScreen.classList.add('active');
            break;
        case 'results':
            resultsScreen.classList.add('active');
            break;
    }
}

// Load current question
function loadQuestion() {
    const question = quizData.statements[currentQuestionIndex];
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / quizData.statements.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.statements.length}`;
    
    // Load question content
    statementText.textContent = question.statement;
    
    // Reset UI state
    hasAnswered = false;
    rightBtn.disabled = false;
    wrongBtn.disabled = false;
    explanationContainer.classList.add('hidden');
    answerButtons.style.display = 'flex';
}

// Handle answer selection
function handleAnswer(userAnswer) {
    if (hasAnswered) return;
    
    hasAnswered = true;
    const question = quizData.statements[currentQuestionIndex];
    const isCorrect = userAnswer === question.correctAnswer;
    
    // Disable buttons
    rightBtn.disabled = true;
    wrongBtn.disabled = true;
    
    // Show feedback
    showExplanation(question, isCorrect);
}

// Show explanation
function showExplanation(question, isCorrect) {
    // Set feedback message
    if (isCorrect) {
        answerFeedback.textContent = "Right!";
        answerFeedback.className = "answer-feedback correct";
    } else {
        answerFeedback.textContent = "Alright!";
        answerFeedback.className = "answer-feedback incorrect";
    }
    
    // Set explanation content
    whenRightText.textContent = question.explanation.whenRight;
    whenWrongText.textContent = question.explanation.whenWrong;
    scientificText.textContent = question.explanation.scientificBacking;
    recommendationText.textContent = question.explanation.recommendation;
    
    // Show explanation container
    explanationContainer.classList.remove('hidden');
    
    // Update next button text
    if (currentQuestionIndex === quizData.statements.length - 1) {
        nextBtn.textContent = "Finish Quiz";
    } else {
        nextBtn.textContent = "Next Question";
    }
}

// Move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizData.statements.length) {
        // Quiz completed
        showScreen('results');
    } else {
        // Load next question
        loadQuestion();
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
