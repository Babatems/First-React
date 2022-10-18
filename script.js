// function MainContent () {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

const navBar = (
    <nav>
        <h1>Elementro</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navBar, document.getElementById("root") 
)