
import './App.css'

function App() {

//1.
let age: number = 50;
console.log(age);
let imia: string = 'Max';
console.log(imia);
let toggle: boolean = true;
console.log(toggle);
let empty: null = null;
console.log(empty);
let notInitialize: undefined = undefined;
console.log(notInitialize);
let callback = (a: number) => { return 100 + a };
console.log(callback(10));


// 2
let anything: any = -20;
anything = 'Text';
anything = {};
console.log(anything);


// 3) Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some:unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
  str = some;
  console.log(str);
}

// 5) Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number] = ['Max', 21];
console.log(person);



// 6) Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Status{
  loading = 'LOADING',
  ready = 'READY',
}
console.log(Status);


// 7) Зробіть змінну, яка може приймати або рядок, або число.
let zminna: string | number;
zminna = 'Text';
console.log(zminna);
zminna = 100;
console.log(zminna);


// 8) Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let zminna2: 'enable' | 'disable';
zminna2 = 'enable';
console.log(zminna2);
zminna2 = 'disable';
console.log(zminna2);


// 9) Вкажіть типи для наступних функцій
function showMessage (message: string): void {
 console.log(message);
}

console.log(showMessage);

function calc(num1: number, num2: number): number {
 return num1 + num2;
}

console.log(calc)

function customError(): void {
    throw new Error('Error');
}

console.log(customError);




// 10) Створіть свій тип даних на основі наявних даних.

type Page = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

const page1: Page = {
 title: 'The awesome page',
 likes: 100,
 accounts: ['Max', 'Anton', 'Nikita'],
 status: 'open',
 details: {
   createAt: new Date('2021-01-01'),
   updateAt: new Date('2021-05-01'),
 }
}

console.log(page1);

const page2: Page  = {
 title: 'Python or Js',
 likes: 5,
 accounts: ['Alex'],
 status: 'close',
}

console.log(page2);









  return (
    <>
      
    </>
  )
}

export default App
