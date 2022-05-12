
let questions = [
  {
    id: 1,
    question: " Who invented C++?",
    answer: "Bjarne Stroustrup.",
    options: [
      "Dennis Ritchie",
      "Ken Thompson",
      "Brian Kernighan",
      "Bjarne Stroustrup"
    ]
  },
  {
    id: 2,
    question: "Which of the following user-defined header file extension used in c++?",
    answer:"bottom-up",
    options: [
      "right-left",
      "left-right",
      "bottom-up",
      "top-down"
    ]
  },
  {
    id: 3,
    question:"Which of the following data type is supported in C++ but not in C?",
    annswer:"bool",
    options: [
      "int",
      "bool",
      "double",
      "float"
    ]
  },
  {
    id: 4,
    question: "Which of the following user-defined header file extension used in c++?",
    answer: "h",

    options: [
      "hg",
      "cpp",
      "h",
      "hf"
    ]
  },
  {
    id: 5,
    question: "Identify the correct syntax for declaring arrays in C++?",
    answer: "int arr[10].",
    options: [
      "int arr[10]",
      "arr{10}",
      "int arr",
      "arr[10]"
    ]
  },
  {
    id: 6,
    question: " Which of the following is “address of operator?",
    answer: "&",
    options: [
      "%",
      "&",
      "*",
      "&&"
    ]
  },
  {
    id: 7,
    question: ". Identify the correct example for a pre-increment operator.?",
    answer: "++n",
    options: [
      "--n",
      "n++",
      "+n",
      "++n"
    ]
  },
  {
    id: 8,
    question: "Using which of the following data type can 19.54 be represented?",
    answer: "double.", 
    options: [
      "int",
      "float",
      "double.",
      "void"
    ]
  },
  {
    id: 9,
    question: "Identify the correct function from which the execution of C++ program starts?",
    answer: "main()",
    options: [
      "start()",
      "pow()",
      "new()",
      "main()"
    ]
  },
  {
    id: 10,
    question: "The constants in C++ are also known as?",
    answer: "literals",
    options: [
      "literals",
      "preprocessor",
      "const",
      "none"
    ]
  },
  {
    id: 11,
    question: "Which of the following is not a type of constructor?",
    answer: "Friend constructor",
    options: [
      "Copy constructor",
      "Friend constructor",
      "Default constructor",
      "Parameterized constructor"
    ]
  },
  {
    id: 12,
    question: "Which of the following is not the member of class?",
    answer: "Friend function",
    options: [
      "Static function",
      "Friend function",
      "Const function",
      "Virtual function"
    ]
  },
  {
    id: 13,
    question: "How many instances of an abstract class can be created?",
    answer: "0",
    options: [
      "1",
      "5",
      "13",
      "0"
    ]
  },
  {
    id: 14,
    question: "Which of the following cannot be friend?",
    answer: "Object",
    options: [
      "Function",
      "Class",
      "Object",
      "Operator function"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
