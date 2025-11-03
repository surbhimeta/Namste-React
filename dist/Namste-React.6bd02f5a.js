const heading = React.createElement('h1', {
    id: 'heading'
}, 'hello world using react');
const title = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {
    id: 'child'
}, [
    React.createElement('h1', {}, 'i am h1 tag'),
    React.createElement('h2', {}, 'i am h2 tag')
]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
root.render(title);

//# sourceMappingURL=Namste-React.6bd02f5a.js.map
