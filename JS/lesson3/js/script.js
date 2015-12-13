'use strict';

var app = { // Объект с методами создания DOM-элементов
    createElement: function (params) {
        var element = document.createElement(params.tagName); // 

        if (params.inputType) {   // Если приходит атрибут, то он присваивается созданному тегу
            element.setAttribute('type', params.inputType);
        }

        if (params.className) {     // Если приходит название класса, то оно присваивается созданному тегу
            element.className = params.className;
        }

        if (params.content) { // Если приходит содержание, то оно вставляется в HTML
            element.innerHTML = params.content;
        }

        if (params.parentElement) { // Если приходит название тега, то созданный тег вставляется вконце него
            params.parentElement.appendChild(element);
        }

        return element;
    },

    generateQuestions: function (questionsAmount, answersAmount) { //Функция для генерации вопросов и ответов

        for (var i = 0; i < questionsAmount; i++) {  // На каждый сгенерированный вопрос

            this.createElement({
                tagName: 'h2',
                content: 'Вопрос №' + (i + 1),
                parentElement: form
            });

            for (var j = 0; j < answersAmount; j++) { // Генерится 'j' вариантов ответов

                var label = this.createElement({

                    tagName: 'label',
                    content: 'Вариант ответа №' + (j + 1),
                    parentElement: form
                });

                var checkbox = this.createElement({
                    tagName: 'input',
                    inputType: 'checkbox'
                });

                label.insertAdjacentElement('afterBegin', checkbox);
            }
        };
    }
}


var body = document.querySelector('body');



app.createElement({ // Функция генерит заголовок
    tagName: 'h1',
    content: 'Тест по программированию',
    parentElement: body
});

var form = app.createElement({  // Функция генерит тег form и заносится в переменную form
    tagName: 'form',
    parentElement: body
});

app.generateQuestions(3, 3); // Функция генерит 3 вопроса и 3 ответа к каждому вопросу

app.createElement({ // Функция генерит кнопарь "Проверить мои результаты"
    tagName: 'input',
    inputType: 'submit',
    content: 'Проверить мои результаты',
    parentElement: form
});