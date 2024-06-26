let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Bernes-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was ist die Hauptstadt von Frankreich?",
        "answer_1": "Paris",
        "answer_2": "Madrid",
        "answer_3": "Berlin",
        "answer_4": "Rom",
        "right_answer": 1
    },
    {
        "question": "Welches Element hat das chemische Symbol 'O'?",
        "answer_1": "Gold",
        "answer_2": "Osmium",
        "answer_3": "Zink",
        "answer_4": "Oxygen",
        "right_answer": 4
    },
    {
        "question": "Wie viele Kontinente gibt es auf der Erde?",
        "answer_1": "7",
        "answer_2": "6",
        "answer_3": "5",
        "answer_4": "8",
        "right_answer": 1
    },
    {
        "question": "Welches ist das größte Tier der Welt?",
        "answer_1": "Elefant",
        "answer_2": "Blauwal",
        "answer_3": "Giraffe",
        "answer_4": "Nashorn",
        "right_answer": 2
    },
    {
        "question": "Welche Programmiersprache wird häufig für Webentwicklung verwendet?",
        "answer_1": "Python",
        "answer_2": "JavaScript",
        "answer_3": "C++",
        "answer_4": "Java",
        "right_answer": 2
    },
    {
        "question": "Welcher Planet ist der größte im Sonnensystem?",
        "answer_1": "Mars",
        "answer_2": "Venus",
        "answer_3": "Jupiter",
        "answer_4": "Saturn",
        "right_answer": 3
    }
];

let current_question = 0;
let points = 0;

function init() {
    document.getElementById('question-container').style = '';
    document.getElementById('start-screen').style = 'display: none';
    showQuestions();
}

function showQuestions() {
    let question = questions[current_question];
    let percent = Math.round(((current_question + 1) / questions.length) * 100);

    if (current_question == questions.length - 1) {
        lastQuestion();
    }
    document.getElementById('next-btn').disabled = true;
    resetAnswers();

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

    document.getElementById('current_question_number').innerHTML = current_question + 1;
    document.getElementById('total_question_number').innerHTML = questions.length;
    document.getElementById('pg-bar').innerHTML = `${percent} %`;
    document.getElementById('pg-bar').style = `width: ${percent}%`;

}



function checkAnswer(selected_answer) {
    let question = questions[current_question];
    let correct_answer = `answer_${question['right_answer']}`

    if (selected_answer == correct_answer) {
        document.getElementById(selected_answer).parentNode.classList.add('bg-success-subtle');
        document.getElementById(selected_answer).previousElementSibling.classList.add('bg-success');
        points++;
    }
    else {
        document.getElementById(correct_answer).parentNode.classList.add('bg-success-subtle');
        document.getElementById(correct_answer).previousElementSibling.classList.add('bg-success');
        document.getElementById(selected_answer).parentNode.classList.add('bg-danger-subtle');
        document.getElementById(selected_answer).previousElementSibling.classList.add('bg-danger');
    }
    disableAnswers();
    current_question++
    document.getElementById('next-btn').disabled = false;
    document.getElementById('final-btn').disabled = false;
}


function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success-subtle')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success-subtle')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success-subtle')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success-subtle')

    document.getElementById('answer_1').parentNode.classList.remove('bg-danger-subtle')
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger-subtle')
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger-subtle')
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger-subtle')

    document.getElementById('answer_1').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_2').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_3').previousElementSibling.classList.remove('bg-danger');
    document.getElementById('answer_4').previousElementSibling.classList.remove('bg-danger');

    document.getElementById('answer_1').previousElementSibling.classList.remove('bg-success');
    document.getElementById('answer_2').previousElementSibling.classList.remove('bg-success');
    document.getElementById('answer_3').previousElementSibling.classList.remove('bg-success');
    document.getElementById('answer_4').previousElementSibling.classList.remove('bg-success');

    document.getElementById('answer_1').parentNode.style.pointerEvents = 'auto';
    document.getElementById('answer_2').parentNode.style.pointerEvents = 'auto';
    document.getElementById('answer_3').parentNode.style.pointerEvents = 'auto';
    document.getElementById('answer_4').parentNode.style.pointerEvents = 'auto';
}

function lastQuestion() {
    document.getElementById('final-btn').disabled = true;
    document.getElementById('next-btn').style = 'display: none';
    document.getElementById('final-btn').style = '';
}

function showResultScreen() {
    document.getElementById('question-container').style = 'display: none;';
    document.getElementById('result-screen').style = '';
    document.getElementById('score').innerHTML = points; 
    document.getElementById('max-score').innerHTML = questions.length; 
    document.getElementById('trophy').style = ''; 
}

function disableAnswers() {
    document.getElementById('answer_1').parentNode.style.pointerEvents = 'none';
    document.getElementById('answer_2').parentNode.style.pointerEvents = 'none';
    document.getElementById('answer_3').parentNode.style.pointerEvents = 'none';
    document.getElementById('answer_4').parentNode.style.pointerEvents = 'none';
}

function restartGame() {
    current_question = 0;
    points = 0; 
    document.getElementById('start-screen').style = '';
    document.getElementById('result-screen').style = 'display: none';
    document.getElementById('trophy').style = 'display: none'; 
    document.getElementById('final-btn').disabled = false;
    document.getElementById('next-btn').style = '';
    document.getElementById('final-btn').style = 'display: none !important';
}
function notImplemented() {
    alert('Dieses Feature ist aktuell nicht verfügbar.')
}