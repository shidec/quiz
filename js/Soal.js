class Soal {

    constructor(containerQuestion, containerOptions, item) {
		this.question = item.question;
        this.options = item.options;
        this.answer = item.answer;
        this.score = item.score;
	}

    renderQuestion(){        
        containerQuestion.innerHTML = this.question;
    };

    renderOptions(){
        let html = `<ol>`;

        this.options.forEach((element, index) => {
           html += `<li><input name="options" type="radio" value="${index}"> ${element}</li>`; 
        });
        html += `</ol>`;

        containerOptions.innerHTML = html;

        return html;
    };

    

    checkAnswer(answer){
        let result;
        if(answer == this.answer){
            result = {
                    html: '<img src="img/correct.png"/><div>Correct.</div>',
                    score: this.score
                };
        }else{
            result = {
                    html: '<img src="img/wrong.png"/><div>Wrong.</div>',
                    score: 0
                };
        }
        return result;
    };
}

export default Soal;