// Questions bank
let quiz = [
    {
        question: "What does HTML stand for?",
        option: [
            "Hyper Tag Markup Language",
            "Hyper Text Markup Language",
            "Hyperlinks Text Mark Language",
            "Hyperlinking Text Marking Language",
        ],
        answer: 2,
    },
    {
        question: "What does CSS stand for?",
        option: [
            "Computing Style Sheet",
            "Creative Style System",
            "Cascading Style Sheet",
            "Creative Styling Sheet",
        ],
        answer: 3,
    },
    {
        question: "Where should a CSS file be referenced in a HTML file?",
        option: [
            "Before any HTML code",
            "After all HTML code",
            "Inside the head section",
            "Inside the body section",
        ],
        answer: 3,
    },
    {
        question:
            "What is the correct format for aligning written content to the center of the page in CSS?",
        option: [
            "Text-align:center;",
            "Font-align:center;",
            "Text:align-center;",
            "Font:align-center;",
        ],
        answer: 1,
    },
    {
        question:
            "What is the correct format for changing the background colour of a div in CSS?",
        option: [
            "Bg-color:red;",
            "bg:red;",
            "Background-colour:red;",
            "Background-color:red;",
        ],
        answer: 4,
    },
    {
        question: "Choose the correct HTML tag for the largest heading",
        option: ["<heading>", "<h6>", "<head>", "<h1>"],
        answer: 4,
    },
    {
        question: "Which is the correct CSS syntax?",
        option: [
            "Body {color: black}",
            "{body;color:black}",
            "{body:color=black(body}",
            "body:color=black",
        ],
        answer: 1,
    },
    {
        question:
            "In CSS, what is the correct option to select all the tags on a page?",
        option: ["<p> { }", ".p { }", "#p { }", "* { }"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text italic?",
        option: ["Italic", "II", "IT", "I"],
        answer: 4,
    },
    {
        question: "Select the correct HTML tag to make a text bold.",
        option: ["bo", "bb", "b", "bold"],
        answer: 3,
    },
];

// initialize variables
let index = 0;
let attemp = 0;
let wrong = 0;
let right = 0;
let score = 0;
let totalTime = 200;

// first script
$(function () {

    let min = 0;
    let sec = 0;
    let counter = 0;

    let timer = setInterval(function () {
        counter++;
        min = Math.floor((totalTime - counter) / 60);
        sec = totalTime - min * 60 - counter;

        $('.timeBox span').text(min + ' : ' + sec);

        if (counter == totalTime) {
            clearInterval(timer);
            timeOut();
            return;
        }
    }, 1000);

    printQuestion(index);
});

function printQuestion(x) {
    // console.log(quiz[0]);

    $('.questionBox').text(quiz[x].question);

    $('.optionBox span').eq(0).text(quiz[x].option[0]);
    $('.optionBox span').eq(1).text(quiz[x].option[1]);
    $('.optionBox span').eq(2).text(quiz[x].option[2]);
    $('.optionBox span').eq(3).text(quiz[x].option[3]);
}

function checkAnswer(option) {
    attemp++;

    let optionCLicked = $(option).data('opt');

    if (optionCLicked == quiz[index].answer) {
        $(option).addClass('right');
        right++;
        score += 10;
    } else {
        $(option).addClass('wrong');
        wrong++;
    }

    $('.scoreBox span').text(score);

    $('.optionBox span').attr('onclick', '');
}

// Get event when click Next button
function next() {
    index++;
    if (index == quiz.length) {
        showResult();
        return;
    }
    $('.optionBox span').removeClass();
    $('.optionBox span').attr('onclick', 'checkAnswer(this)');
    printQuestion(index);
}

function showResult() {

    if (index < quiz.length) {
        if (confirm("You've not finished yet! Get your final result anyway ?")) {
            $('#questionScreen').hide();
            $('#resultScreen').show();

            $('.total').text(quiz.length);
            $('.attemp').text(attemp);
            $('.correct').text(right);
            $('.wrong').text(wrong);
            return;
        }
    } else {
        alert("You've finished the test! Press OK to get your result !");
        $('#questionScreen').hide();
        $('#resultScreen').show();

        $('.total').text(quiz.length);
        $('.attemp').text(attemp);
        $('.correct').text(right);
        $('.wrong').text(wrong);
        return;
    }
}

// Get result when time out
function timeOut() {
    alert("Time out! Press OK to get your result!");
    $('#questionScreen').hide();
    $('#resultScreen').show();

    $('.total').text(quiz.length);
    $('.attemp').text(attemp);
    $('.correct').text(right);
    $('.wrong').text(wrong);
}