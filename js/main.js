import ScoreController from './ScoreController.js';
import Soal from './Soal.js';

'use strict';


window.addEventListener('load', function(){

    //-- QUESTIONS --
    //-- Feel free to edit this json 
    //-- property answer is the correct index of the options. Index always start from 0

    const questions = [
            {
                question: 'Yang berfungsi untuk memperindah tampilan adalah ...',
                options: [
                        'HTML',
                        'CSS',
                        'Javascript',
                        'PHP',
                        'Python'
                    ],
                answer: 1,
                score: 25
            },
            {
                question: 'Presiden Indonesia saat ini adalah ...',
                options: [
                        'Sukarno',
                        'Suharto',
                        'Habibie',
                        'SBY',
                        'Jokowi'
                    ],
                answer: 4,
                score: 25
            },
            {
                question: 'Ibu kota Peru adalah ...',
                options: [
                        'Dua',
                        'Tiga',
                        'Empat',
                        'Lima',
                        'Enam'
                    ],
                answer: 3,
                score: 25
            },
            {
                question: 'Juara piala dunia 2022 adalah ...',
                options: [
                        'Argentina',
                        'Brazil',
                        'Perancis',
                        'Jerman',
                        'Portugal'
                    ],
                answer: 0,
                score: 25
            }
        ];

    //-- END OF QUESTIONS

    const containerScore = document.getElementById('containerScore');
    const containerTitle = document.getElementById('containerTitle');
    const containerQuestion = document.getElementById('containerQuestion');
    const containerOptions = document.getElementById('containerOptions');
    const containerResult = document.getElementById('containerResult');

    const btnCheck = document.getElementById('btnCheck');
    const btnNext = document.getElementById('btnNext');
    const btnDialogOk = document.getElementById('btnDialogOk');
    const dialogResult = document.getElementById('dialogResult');

    const scoreController = new ScoreController(containerScore);
    scoreController.render();

    const items = [];

    questions.forEach(item => {
        items.push(new Soal(containerQuestion, containerOptions, item)); 
    });
    btnNext.style.display = 'none';

    let questionIndex = 0;

    containerTitle.innerHTML = 'Question ' + (questionIndex + 1) + '/' + items.length;
    items[questionIndex].renderQuestion();
    items[questionIndex].renderOptions();

    btnDialogOk.addEventListener('click', function(){        
        dialogResult.style.display = 'none';    
    });

    btnCheck.addEventListener('click', function(){
        let jawaban = document.querySelector('input[name="options"]:checked');

        if(jawaban != null){
            document.querySelectorAll('input[name="options"]').forEach(item => item.disabled = true);

            const result = items[questionIndex].checkAnswer(jawaban.value);
            containerResult.innerHTML = result.html;

            scoreController.add(result.score);
            scoreController.render();

            dialogResult.style.display = 'block';

            btnCheck.style.display = 'none';

            if(questionIndex < items.length - 1){
                btnNext.style.display = 'block';
            }
        }else{
            alert('Choose an answer first.');
        }
    });    
    
    btnNext.addEventListener('click', function(){
        
        questionIndex++;
        containerTitle.innerHTML = 'Question ' + (questionIndex + 1) + '/' + items.length;
        items[questionIndex].renderQuestion();
        items[questionIndex].renderOptions();
        btnCheck.style.display = 'block';
        btnNext.style.display = 'none';
    
    });
});