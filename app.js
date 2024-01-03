//Part 1

//REACT 2 | CHECK N CHECK
// const container = document.getElementById("react-container")
// ReactDOM.render("Hello, Welcome to React",container)

// REACT 3 | IS IT A FUNCTION

// const containerRender=()=>{
//     return React.createElement('div',null,"Hey Kalvians, welcome to react learning",
//         React.createElement('div',null,"Let's rock and roll!")
//     );
// }
// const container = document.getElementById("react-container")
// ReactDOM.render(React.createElement(containerRender),container)

// REACT 4 | NOW IT'S CLASS TIME
class ReactContainer extends React.Component{
    render(){
        return React.createElement('div',null,"Hey kalvians",
            React.createElement('div',null,"Let's rock and roll with classes")
        );
    }
}
const Component = document.getElementById("react-container")
ReactDOM.render(React.createElement(ReactContainer),Component)