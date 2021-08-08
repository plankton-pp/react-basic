import "./NavBar.css";
export default function NavBarComponent(){
    const navStyle = {height:'100%'}
    return(
        <>
        <ul id="navbar" style={navStyle}>
            <li><h1>Weather Forcast</h1></li>
        </ul>
        </>
    );
}