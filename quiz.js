



    //Create Array with questions and solutions
    let allQuestions = [{
        question: "What year did England last win the World Cup",
        answers: [  "1994","1962","2002", "1966"],
        correctAnswer: 3
      },

      {
        question: "How many more English league titles do Manchester United than Liverpool",
        answers: ["4","2","5","1"],
        correctAnswer: 1
      },

      {
        question: "Teams to be relegated at the end of the 13/14 Premier League season",
        answers: ["Man City,West Brom,Sunderland ","Wolves,Fullham,Cardiff City","Everton,Watford,Southamton","Norwich,Fullham,Cardiff"],
        correctAnswer:3
      },
      {
        question: "Team that won the Premier League in 2012/2013 season",
        answers: ["Manchester United","Man City","Chelsea","Liverpool",],
        correctAnswer:0
      },
      {
        question: "Player of the season for the 15/16",
        answers: ["Harry Kane",
        "Riyad Mahrez",
        "Hazard",
        "Jamie Vardy"],
        correctAnswer:3
      },
      {
        question: "Which football club are known as The Cottagers?",
        answers: ["West Brom",
        "Brighton",
        "Shefield United",
        "Fullham"],
        correctAnswer:3
      },
      {
        question: "Which two Liverpool footballers topped the Premier League goalscoring charts with 31 and 21 goals respectively in the 2013-14 season?",
        answers: ["Lukaku and Mirallas ",
        "Luis Suarez and Daniel Sturridge",
        "Aguero and Dzeko",
        "Van Pesie and Rooney"],
        correctAnswer:1
      },
      {
        question: "Which German midfielder scored Brighton & Hove Albion's first goal in of the Premier League era in their 3-1 home win over West Brom in 2017?",
        answers: ["Anthony knockart",
        "Ozil",
        "Pascal Gross",
        "Glen Murray"],
        correctAnswer:2
      },
      {
        question: "Which Welsh manager won the Premier League Manager of the Season award in the 13/14 season",
        answers: ["Chris Coleman",
        "Sam Allardyce",
        "Mark Hughs",
        "Tony Pulis"],
        correctAnswer:3
      },
      {
        question: "Slaven Bilic played English football for West Ham United and which other English club?",
        answers: ["Watford",
        "Bolton",
        "Everton",
        "Manchester United"],
        correctAnswer: 2
      },
      {
        question: "Which player scored a free kick as Liverpool beat Arsenal 4-3 at the Emirates on the opening day of the 2016/2017 season?",
        answers: ["Phillipe Coutinho",
        "Ozil",
        "Adam Lallana",
        "Firmino"],
        correctAnswer:0
      },
      {
        question: "Chelsea's  2016/17 title win was confirmed with a 1-0 win away at which club?",
        answers: ["Arsenal",
        "West ham",
        "Newcastle",
        "West Brom"],
        correctAnswer:3
      },
      {
        question: "What is the nickname of West Bromwich Albion F.C.?",
        answers: ["The Owls",
        "The Baggies",
        "The Toffies",
        "The Brom"],
        correctAnswer:1
      },
      {
        question: "Which side were promoted to the Premier League for the 2016/17 when they beat Queens Park Rangers 1-0 on May 2nd 2016?",
        answers: ["Bournmouth",
        "Burnley",
        "Leeds",
        "Newcastle"],
        correctAnswer:1
      },
      {
        question: "Marcus Rashford scored his first senior Manchester United goal in a Europa League clash against which team?",
        answers: ["Celta Vigo",
        "Lyon",
        "Midtjylland",
        "Wolfsburg"],
        correctAnswer:2
      },
      {
        question: "The bet365 Stadium is the official home of which Premier League club?",
        answers: ["Newcastle",
        "Burnley",
        "Stoke City",
        "Bournmouth"],
        correctAnswer:2
      },
      {
        question: "Which Premier League striker has made senior international appearances for both Brazil and Spain?",
        answers: ["Diego Costa",
        "Oscar",
        "Morata",
        "G.Jesus"],
        correctAnswer:0
      },
      {
        question: "How many competitive goals did Cristiano Ronaldo score for Manchester United?",
        answers: ["104",
        "86",
        "118",
        "134"],
        correctAnswer:2
      },
      {
        question: "Which Southampton player scored a hat-trick in the Saints 4-2 win over Manchester City in the 15/16 season ",
        answers: ["Charlie Austin","Sadio Mane","Shane Long","Dusan Tadic"],
        correctAnswer:1
      },
      {
        question: "Who is the only non-English player in the Top Ten All-Time Premier League Goalscorer's Table? ",
        answers: ["Alan Sheerer","Thierry Henry","Aguero","Denis Bergkamp"],
        correctAnswer:1
      },



    ];

function startQuiz(){

    var i;
    var j;
    for(i=0; i<allQuestions.length; i++){
        document.getElementById("questions").innerHTML +='<form  id="question">Q'+(i+1)+': '+ allQuestions[i].question;

        for(j=0; j<allQuestions[i].answers.length; j++){
        	document.forms[i].innerHTML += '</div><div class="answer"><input name="q1" value="'+ allQuestions[i].answers[j] +'" id="q4" type="radio" />' + allQuestions[i].answers[j] + '<br/> ';
         }
     document.getElementById("questions").innerHTML +='</form ><br/><br/>';
    }

    document.getElementById("questions").innerHTML += '<button  id="mate" onclick="solveQuiz()">Solve Quiz</button>';


}

function solveQuiz(){
  var x;
  var txt = ' ';
  var i = 0;
  var correct = 0;
  for(i = 0; i < document.forms.length;i++) {
    x = document.forms[i];
    for(j = 0; j<x.length; j++){
      if(x[j].checked) {
        correctAnswer = allQuestions[i].correctAnswer;
        if(x[j].value == allQuestions[i].answers[correctAnswer]){
          correct += 1;
        }
      }
   }
 }
 document.getElementById("questions").innerHTML += 'Correct answers: '+ correct;


}
