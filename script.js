// USING DOM MANIPULATION WE TRY TO APPEND THE ELEMENTS TO THE DOM 
/*
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World From JS!';
const root = document.getElementById('root');
root.appendChild(heading);
*/

// USING REACTDOM WE ARE TRYING TO APPEND THE ELEMENTS TO THE DOM
/*
<div id="parent">
  <div id="child">
    <h1>Hi I am shabrez</h1>
  </div>
</div>
*/ 
/*
const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, React.createElement('h1', {}, 'Hi I am React Shabrez')));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

// USING REACTDOM WE ARE TRYING TO APPEND THE ELEMENTS TO THE DOM WHERE WE HAVE TWO HEADING ELEMENT AT THE SAME LEVEL HERE WE ARE USING ARRAY OF HEADING ELEMENTS.

/*
<div id="parent">
  <div id="child">
    <h1>Hi I am shabrez</h1>
    <h2>Hi I am 2nd React</h2>
  </div>
</div>
*/
/*
const parent1 = React.createElement('div', { id: 'parent1' }, React.createElement('div', { id: 'child1' }, [React.createElement('h2', {}, 'Hi am React 1'), React.createElement('h3', {}, 'Hi I am React 2')]));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent1);
*/


// USING REACTDOM WE ARE TRYING TO APPEND THE ELEMENTS TO THE DOM WHERE WE HAVE TWO DIV ELEMENT AT THE SAME LEVEL HERE BOTH CHILD WE ARE PUTTING INSIDE ARRAY.

/*
<div id="parent">
  <div id="child1">
    <h1>Hi I am shabrez</h1>
    <h2>Hi I am 2nd React</h2>
  </div>
  <div id="child2">
    <h1>Hi I am shabrez</h1>
    <h2>Hi I am 2nd React</h2>
  </div>
</div>
*/
const parent1 = React.createElement('div', { id: 'parent1' }, [React.createElement('div', { id: 'child3' }, [React.createElement('h2', {}, 'Hi am React 1'), React.createElement('h3', {}, 'Hi I am React 2')]),
React.createElement('div', { id: 'child4' }, [React.createElement('h2', {}, 'Hi am React 1'), React.createElement('h3', {}, 'Hi I am React 2')])
]);

// React.createElement (OBJECT) IS USED BY ReactDOM.createRoot  - it is used to create the root element.
const root = ReactDOM.createRoot(document.getElementById('root'));
// IT WILL HELP US TO PUT OBJECT ON OUR PAGE
root.render(parent1);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(parent1);