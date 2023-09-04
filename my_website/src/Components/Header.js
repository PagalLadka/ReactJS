import '../Style/headerStyle.css'

const Header = () => {
    return ( 
        <div className="head">
            <div className="left">
                <h1>Anurag Mukherjee</h1>
            </div>
            <div className="links">
                {/* <a href = "">Home</a> */}
                <a href = "">About</a>
                <a href = "">Contact</a>
                <a href = "">Project</a>
            </div>
        </div>
     );
}
 
export default Header;