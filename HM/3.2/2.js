'use strict'

/*
Задача № 2. Терминалы оплаты
Мы решили показывать на сайте информацию о состоянии терминалов оплаты, и нам нужно реализовать различные графики работы этих терминалов. Часть терминалов работает только в будние дни, часть — круглосуточно, и часть — круглосуточно, за исключением праздников.

Наш ведущий разработчик предложил использовать механизм наследования для того, чтобы функционал можно было легко расширять, и при этом проверки в коде оставались простыми и понятными.

Он уже создал базовый класс PaymentTerminal, который берет текущую дату из календаря (так удобнее для тестирования). Базовый терминал всегда недоступен. Вам нужно расширить его возможности, создав классы:

AllDayPaymentTerminal
реализовав терминал, который доступен 24/7, или круглосуточно.
AllDayExceptHolidaysPaymentTerminal
реализовав терминал, который доступен 24/7, кроме определенных дней в году, которые заданы в третьем аргументе.
WorkspacePaymentTerminal
терминал доступен только в будние дни (с понедельника по пятницу) с 8 утра до 18 вечера (в 8:00 терминал доступен, в 18:00 уже недоступен).
Описание конструкторов и экземпляров
Конструкторы
Конструкторы AllDayPaymentTerminal и WorkspacePaymentTerminal работают точно так же, как PaymentTerminal, принимают два аргумента:

title — название пункта, строка;
calendar — календарь, из которого нужно получать текущую дату — она в свойстве now, объект Calendar.
Конструктор AllDayExceptHolidaysPaymentTerminal принимает дополнительный третий аргумент:

title — название пункта, строка;
calendar — календарь, из которого нужно получать текущую дату — она в свойстве now, объект Calendar.
holidays — список праздничных дней в году, массив. Каждый день представлен объектом со свойствами date — число, и month — номер месяца, начиная с нуля;
Экземпляры
Должны переопределить в соответствии с их логикой работы метод:

checkActive
проверяет, работает ли терминал в настоящий момент. Настоящий момент берется из календаря, свойство this.calendar.now, там объект Date.
Пример использования

const holidays = [
  { date: 11, month: 3 - 1 },
  { date: 23, month: 2 - 1 }
];

const calendar = new Calendar();
const terminals = [
  new WorkspacePaymentTerminal('Терминал в офисе Убербанка', calendar),
  new AllDayPaymentTerminal('Терминал в аэропорту', calendar),
  new AllDayExceptHolidaysPaymentTerminal('Терминал в торговом центре',
    calendar, holidays)
];

function showTerminals(date) {
  if (date !== undefined) {
    calendar.setDate(date);
  }
  console.log(calendar.today);
  terminals
    .filter(terminal => terminal instanceof PaymentTerminal)
    .forEach(terminal => console.log(`${terminal.title} ${terminal.status}`));
}

showTerminals(new Date(2017, 2 - 1, 23));
showTerminals(new Date(2017, 3 - 1, 11));
showTerminals(new Date(2017, 3 - 1, 14, 18, 1));
showTerminals(new Date(2017, 3 - 1, 14, 8, 3));
Если все реализовано верно, вы получите такой вывод:


23.02.2017, 0:00:00
Терминал в офисе Убербанка недоступен
Терминал в аэропорту работает
Терминал в торговом центре недоступен
11.03.2017, 0:00:00
Терминал в офисе Убербанка недоступен
Терминал в аэропорту работает
Терминал в торговом центре недоступен
14.03.2017, 18:01:00
Терминал в офисе Убербанка недоступен
Терминал в аэропорту работает
Терминал в торговом центре работает
14.03.2017, 8:03:00
Терминал в офисе Убербанка работает
Терминал в аэропорту работает
Терминал в торговом центре работает
Процесс реализации
Реализуйте класс AllDayPaymentTerminal.
Определите метод checkActive так, чтобы терминал был доступен круглосуточно в любой день.
Реализуйте класс AllDayExceptHolidaysPaymentTerminal.
Определите метод checkActive так, чтобы терминал был недоступен в праздничные дни из аргумента holidays конструктора. Постарайтесь сделать код метода максимально понятным и простым.
Реализуйте класс WorkspacePaymentTerminal.
Определите метод checkActive так, чтобы терминал был недоступен в субботу и воскресенье, а также в любой день до 8:00 и после 18:00. Постарайтесь сделать код метода максимально понятным и простым.
Проверьте работу вашего кода на примере использования. Также протестируйте его, используя свои примеры.
*/

class Calendar {
    constructor(now = new Date()) {
      this.now = now;
    }
  
    setDate(now) {
      this.now = now;
    }
  
    get today() {
      return this.now.toLocaleString('ru-Ru');
    }
}
  
class PaymentTerminal {
    constructor(title, calendar) {
      this.title = title;
      this.calendar = calendar;
    }
  
    get status() {
      return this.isActive ? 'работает' : 'недоступен';
    }
  
    get isActive() {
      return this.checkActive();
    }
  
    checkActive() {
      return false;
    }
}

class AllDayPaymentTerminal extends PaymentTerminal {
  constructor(title, calendar){
    super(title, calendar)
  }

  checkActive(){
    return true;
  }
}

class WorkspacePaymentTerminal extends PaymentTerminal{
  constructor(title, calendar){
    super(title, calendar)
  }

  checkActive(){
    let date = this.calendar.now;
    return (date.getDay() != 0 && date.getDay() != 6 && date.getHours() < 18 && date.getHours() > 8)
  }
}

class AllDayExceptHolidaysPaymentTerminal extends PaymentTerminal{
  constructor(title, calendar, holidays){
    super(title, calendar)
    this.holidays = holidays; 
  }

  checkActive(){
    let dateNow = this.calendar.now;
    for (const day of this.holidays) {
       if (dateNow.getMonth() == day.month & dateNow.getDate() == day.date){
          return false;
       }
    }
    return true;
  }
}

const holidays = [
  { date: 11, month: 3 - 1 },
  { date: 23, month: 2 - 1 }
];


const calendar = new Calendar();
const terminals = [
  new WorkspacePaymentTerminal('Терминал в офисе Убербанка', calendar),
  new AllDayPaymentTerminal('Терминал в аэропорту', calendar),
  new AllDayExceptHolidaysPaymentTerminal('Терминал в торговом центре',
    calendar, holidays)
];

function showTerminals(date) {
  if (date !== undefined) {
    calendar.setDate(date);
  }
  console.log(calendar.today);
  terminals
    .filter(terminal => terminal instanceof PaymentTerminal)
    .forEach(terminal => console.log(`${terminal.title} ${terminal.status}`));
}

showTerminals(new Date(2017, 2 - 1, 23));
showTerminals(new Date(2017, 3 - 1, 11));
showTerminals(new Date(2017, 3 - 1, 14, 18, 1));
showTerminals(new Date(2017, 3 - 1, 14, 8, 3));
