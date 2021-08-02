import Navbar from "../Navbar/Navbar"

const Layout = ({children}) => {
    return (
        <div className="layout_container">
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout