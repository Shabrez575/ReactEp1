/*
const heading = document.createElement('h1');
heading.innerHTML = 'Hello World From JS!';
const root = document.getElementById('root');
root.appendChild(heading);
*/

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent1);

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(parent1);