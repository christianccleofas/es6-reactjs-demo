//global scope
// var global = ''
export function run() {
  //local scope
  
  // var
  // var coffee; 
  // var coffee = 'Mocha Frappuccino';
  // console.log(coffee);



  //const
  // const coffee = 'Salted Caramel Frappuccino';
  // const dacoffee = 'Mocha Frappuccino';
  // coffee = 'Chestnut Praline';
  // dacoffee = 'Java Chip';
  // console.log(coffee);
  // console.log(dacoffee);



  //let
  // let coffee = 'Salted Caramel';
  // let dacoffee = 'Mocha Frappuccino';
  // coffee = 'Chestnut Praline';
  // dacoffee = 'Java Chip';
  // console.log(coffee);
  // console.log(dacoffee);

  
    
  //hoisting
  //x is hoisted
  // x = 3.66;
  // console.log(x);
  // var x;


  //useState hooks and function declarions
  // const [value, setValue] = React.useState(false);

  // export const App = () => {
  //   return <div></div>
  // }


  
  //arrow functions
  //old es
  // function sum(a, b) {
  //   return a+b;
  // }

  // const sum = (a, b) => a+b;

  // old es
  // function isPositive(a) {
  //   return a >= 0;
  // }

  // const isPositive = a => a >= 0;


  
  // old es
  // function randomNumber() {
  //   return Math.number;
  // }

  // const randomNumber = () => Math.number;
  
  // old es
  // document.addEventListener('click', () => console.log('Click'))

  //old es
  // arrow function on method properties
  // const item = {
  //   name: 'Salted Caramel',
  //   price: 3.66,
  //   display: function() {
  //     console.log(this);
  //     console.log('Item: ' + this.name + ' Amount: ' + this.price);
  //   }
  // }
  // item.display();


  
  
  //default properties
  //old es
  // const getSum = (x, y, z) => {
  //   if (y === undefined)
  //       y = 7;
  //   if (z === undefined)
  //       z = 42;
  //   return x + y + z;
  // };
  // const getSum = (x, y=7, z=42) => {
  //   return x + y + z;
  // };
  // // // f(1) === 50;
  // console.log(getSum(1));

  // const getSum = (x, ...params) => {
  //   console.log(params);
  //   console.log(x*10);
  // };
  // getSum(1, 7, 47);



  //string literals
  //old es
  // const someFunction = params =>  {
  //   return 'some string with '+params+' and some other strings';
  // }

  // const someFunction = params =>  {
  //   // return 'some string with '+params+' and some other strings';
  //   return `some string with ${params} and some other strings`;
  // }

  // console.log(someFunction('some value'));

  

  //property shorthand
  //old es
  // const length = 60;
  // const width = 20;
  // const area = {
  //   length: length,
  //   width: width,
  // }
  // const area = {
  //   length,
  //   width,
  // }
  // console.log('area', area);



  //property method: shorthand syntax
  //old es
  // var length = 60;
  // var width = 20;
  // var area = {
  //   length,
  //   width,
  //   getArea() {
  //     return this.length*this.width;
  //   }
  // }
  // console.log(`Area if Rectangle is: ${area.getArea()}`)



  //computed property names
  // const quux = isES6 => {
  //   if(isES6) {
  //     return 'new';
  //   } else {
  //     return 'old';
  //   }
  // }
  // //old es
  // var obj = {
  //   foo: "bar"
  // };  
  // obj[ "baz" + quux(false) ] = 42;
  
  // console.log(obj);

  
  
  //destructuring
  // const data = {
  //   id: 0,
  //   name: "Salted Caramel Mocha",
  //   isAvailable: true,
  //   price: 3.66,
  //   image: "8e0b1749cfad49f085e3efff636aef58",
  //   discount: 0
  // }

  // const displayNameAndPrice = ({name, price}) => {
  //   console.log(`Product name: ${name} Price: ${price}`);
  // }
  // displayNameAndPrice(data);
  












  




  



















  // console.log(makeCoffee());

  // /**
  //  * 
  //  * @returns 
  //  */

  // function makeCoffee() {
  //   // console.log('Salted Caramel Macchiato');
  //  return 'Salted Caramel Macchiato';
  // }
}
