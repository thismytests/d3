// Техническая часть:
// 1. Есть два класса: Company и Human
// 2. Создать объекты: hr (Company), klaus (Human), maria (Human)

// Логическая часть:
// 1. Устроить Клауса на работу к HR
// 2. Поженить Марию и Клауса
// 3. Мария меняет телефон

// Задача: когда супруг(а) работника меняет телефон, HR должен вывести “{Работник}: {новый телефон}”

class Company {
  employees = [];

  recruit(person) {
    person.currentCompany = this
    this.employees.push(person);
  }

  updateStaffPersonaInfo(person) {
    // todo ... ask about this
    // const info = `${person.name}: ${person.phoneNumber}`
    const result = this.getPersonSpouse(person);
    const info = `${result.name}: ${result.phoneNumber}`
    console.log(info);
  }

  getPersonSpouse(person) {
    return this.employees.find(item => item.name === person.name).secondHalf
  }
}

class Human {
  name = null;
  secondHalf = null;
  phoneNumber = null;
  currentCompany = null;

  constructor(name) {
    this.name = name;
  }

  marry(secondHalf) {
    this.secondHalf = secondHalf;
    this.updatesInFamily();
  }

  buyPhone(phoneNumber) {
    this.phoneNumber = phoneNumber
    this.updatesInFamily()
  }


  updatesInFamily() {
    if (this.secondHalf && this.secondHalf.currentCompany) {
      this.secondHalf.currentCompany.updateStaffPersonaInfo(this.secondHalf)
    }
  }
}

const hr = new Company();
const klaus = new Human('Klaus', false);
const maria = new Human('Maria', false);


// // 1. Устроить Клауса на работу к HR
hr.recruit(klaus);


// 2. Поженить Марию и Клауса
klaus.marry(maria);
// ????
// klaus.updatesInFamily(klaus);
maria.marry(klaus);


maria.buyPhone("123")
// 3. Мария меняет телефон
maria.buyPhone("321")
maria.buyPhone("1000")
