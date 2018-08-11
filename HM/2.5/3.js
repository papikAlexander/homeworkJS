'use strict'

/*
Задача № 3. Рассылка писем.
Перед началом работы добавьте в редактор следующий код:


function sendMail(email) {
  console.log(`Письмо отправлено на адрес ${email}`);
}
Наш отдел маркетинга рассылает письма с информацией об акциях всем клиентам, которые подписаны на рассылку. У таких клиентов свойство isSubscribed равно true.

Описание функции
Создать функцию getSubscribedEmails, которая принимает список клиентов, получает электронные адреса подписанных пользователей и возвращает их массив. Принимает аргументы:

list — список клиентов, аналогичный массиву clients, массив
Функция должна вернуть массив электронных адресов подписанных клиентов либо пустой массив.

Пример использования функции

getSubscribedEmails(clients).forEach(sendMail);
Если функция getSubscribedEmails реализована верно, то получим такой вывод:


Письмо отправлено на адрес bender.rodriges@rambler.un
Письмо отправлено на адрес zoidberg-md@list.un
Процесс реализации
Создайте функцию getSubscribedEmails.
Получите оптимальным и логичным способом все электронные адреса клиентов, у которых isSubscribed равно true.
Верните полученный массив электронных адресов.
*/

const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [ 11700, 1980, 450, 5500 ]
  }, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [ 440, 226, 7650, 2990, 70 ]
  }, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',
    isSubscribed: true,
    orders: [ 720 ]
  }];

function sendMail(email) {
    console.log(`Письмо отправлено на адрес ${email}`);
}

function getSubscribedEmails(list){
    return list.reduce((arr, el) => {
        if (el.isSubscribed){
            arr.push(el.email);
        }
        return arr;
    }, []);
}

getSubscribedEmails(clients).forEach(sendMail);