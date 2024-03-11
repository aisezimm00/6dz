// Дз 6. Создайте класс User. У вас должны быть поля name и age.
//  Значение они должны получить через constructor. 
//  Добавьте метод print который в консоли покажет сообщение в следующем формате: имя - ${name}; возраст ${age}

// Доп задание: Создайте класс  Student который наследуется от вашего User.
//  Добавьте поля username и password.
//   Далее password должен быть приватным и новые поля тоже получают значение через constructor. 
//   А метод print теперь показывает сообщение только с проверкой пароли.

class User{
  constructor(name,age){
    this.name = name
    this.age = age
  }
  print(){
    console.log(`имя - ${name}; возраст ${age}`);
  }
}

class Student extends User{
  #password
  constructor(name,age,password,username){
    super(name,age)
    this.username = username
    this.#password = password

  }
  print(){
    if (password === this.#password) {
    console.log(`имя - ${this.name}; возраст - ${this.age}; username - ${this.username}`);
    } else {
    console.log('Неверный пароль');
    }
  }
}