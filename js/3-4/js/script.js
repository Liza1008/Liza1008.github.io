// WRAPPER - start
var wrapper = document.createElement('div');
wrapper.className = 'wrapper';
document.body.appendChild(wrapper);

var wrapper__content = document.createElement('div');
wrapper__content.className = 'wrapper__content';
wrapper.appendChild(wrapper__content);

// CONTENT - start
var main_title = document.createElement('h3');
main_title.className = 'title';
main_title.innerHTML = 'Тест по программированию'; // main title
wrapper__content.appendChild(main_title);


// QUESTIONS BLOCKS - start
for (var i = 1; i <= 3; i++) {

    //question 1
    var question_sect = document.createElement('div');
    question_sect.className = 'questionSect_checkbox';
    wrapper__content.appendChild(question_sect);

    var quest_title1 = document.createElement('p');
    quest_title1.className = 'question_title';
    quest_title1.innerHTML = i + '. Вопрос №' + i + ''; // question name
    question_sect.appendChild(quest_title1);

    for (var j = 1; j <= 3; j++) {
        // answer 1
        var checkbox1 = document.createElement('input');
        checkbox1.className = 'checkbox';
        checkbox1.setAttribute('type', 'checkbox');
        checkbox1.setAttribute('id', 'checkbox' + i + '.' + j); // checkbox

        var checkbox_lab1 = document.createElement('label');
        checkbox_lab1.className = 'label';

        var checkbox_label1 = document.createElement('span');
        checkbox_label1.className = 'checkbox_label';
        checkbox_label1.innerHTML = 'Вариант ответа №' + j; // answer

        var answer1 = document.createDocumentFragment();
        answer1.appendChild(checkbox_lab1);
        checkbox_lab1.appendChild(checkbox1);
        checkbox_lab1.appendChild(checkbox_label1);
        var question_block = document.createDocumentFragment();
        question_sect.appendChild(answer1);
        wrapper__content.appendChild(question_block);
    }
}

// QUESTIONS BLOCK - end

//Button
var button = document.createElement('button');
button.className = 'button';
button.innerHTML = 'Проверить мои результаты';
wrapper__content.appendChild(button);

//CONTENT - end

// WRAPPER - end
