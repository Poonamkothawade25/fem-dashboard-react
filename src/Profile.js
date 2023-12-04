export default function Profile() {
    return (
        <div className="profile-main-container">

            <div className="profile-container">
               <img src="images/image-jeremy.png" alt="Profile-pic" className="profile-pic"/>
               <div>
                <p>Report for</p>
                <h4 className="name">Jeremy Robson</h4> 
               </div>
                
            </div>

            <nav className="nav-container">
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </nav>
            
            
        </div>
    )
}