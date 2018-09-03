'use strict'

/*

Задача № 2. Конкурс «Угадай скидку»

Для нашей новой акции с суперскидками мы хотим реализовать простую игру «угадай число». Наш сайт будет загадывать скидку, и пользователь должен будет её угадать.

Ваша задача — реализовать генератор numberQuiz, который бы смог контролировать процесс игры. В качестве аргумента он принимает загаданное число и выдает подсказки «больше» или «меньше» до тех пор, пока пользователь не угадает это число.
Описание генератора

Создает итератор, который контролирует ход игры. Принимает один аргумент:

    number — число, которое необходимо угадать, число.

Описание итератора

Созданный итератор должен вернуть строку «Назовите число:» и ожидать последующих действий со стороны вызывающего кода.

Вызывающий код должен передавать во все последующие вызовы метода next число, которое называет пользователь. Если число совпало с загаданным, итератор должен завершиться с сообщением «Вы угадали, это 5». Иначе он должен вернуть подсказку «Меньше, чем 7!» или «Больше, чем 4!» и ожидать следующего хода.
Пример использования

В данном примере attempts — числа в том порядке, в котором их будет называть пользователь.


const attempts = [7, 4, 6, 5];
const quiz = numberQuiz(5);
let attempt, result;
do {
  result = quiz.next(attempt);
  console.log(result.value);
  attempt = attempts.shift();
} while (!result.done);

Если все реализовано верно, вы получите такой вывод:


Назовите число:
Меньше, чем 7!
Больше, чем 4!
Меньше, чем 6!
Вы угадали, это 5

Процесс реализации

    Создайте генератор numberQuiz.
    Верните сообщение «Назовите число:» c помощью yield.
    Получите значение из итератора.
    Сравните значение из итератора с тем, что было передано в генератор.
    Если числа совпадают, завершите итератор сообщением «Вы угадали, это 5».
    Если нет, верните с помощью yield подсказку.
    И так, пока пользователь не угадает число.

Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.

*/

function* numberQuiz(number){
  let res = yield 'Назовите число:'
  while(res != number){
    if(res > number){
      res = yield `Меньше, чем ${res}!`
    } else {
      res = yield `Больше, чем ${res}!`
    }
  }
  return `Вы угадали, это ${number}`
  
}

const attempts = [7, 4, 6, 5];
const quiz = numberQuiz(5);
let attempt, result;
do {
  result = quiz.next(attempt);
  console.log(result.value);
  attempt = attempts.shift();
} while (!result.done);
