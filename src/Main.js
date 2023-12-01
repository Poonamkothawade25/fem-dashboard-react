import Profile from "./Profile";
import Areas from "./Areas";
import jsonData from "./data.json"

export default function Main() {
    const AreasCards = jsonData.map((item) => {
        return (
            <Areas 
                bgColor={item.bgColor}
                bgImg={item.bgImg}
                title={item.title}
                current={item.timeframes.daily.current}
                previous={item.timeframes.daily.previous}
            />
        )
    })
    return (
        <div className="container">
            <main className="main-container">
                <Profile />
                {AreasCards}
            </main>
            
        </div>
    )
}