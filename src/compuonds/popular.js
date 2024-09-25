import two from "../images/web.jpg"
import three from "../images/bootcamp.avif"
import four from "../images/React.avif"
import five from "../images/js.avif"
import six from "../images/computer.avif"
import seven from "../images/css.avif"
import eight from "../images/html.avif"
import nine from "../images/mongo db.avif"

function Popular(){
    return(
        // <!--popular session-->
    <div className="popular">
        <h1>Most popular </h1>
        <p>Pick the best</p>
        <div className="popular__container">
        <div className="couse-card">
                    <img src={two} alt="img"></img>
                    <h4>The complete 2024 Webvelopment Bootcamp</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>₹3,099</p>
                </div>
    
                <div className="couse-card">
                    <img src={three} alt="img"></img>
                    <h4>The complete Bootcamp</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.6 ⭐⭐⭐⭐</p>
                    <p>₹3,000</p>
                </div>
    
                <div className="couse-card">
                    <img src={four} alt="img"></img>
                    <h4>Master React</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>₹3,499</p>
                </div>
    
                <div className="couse-card">
                    <img src={five} alt="img"></img>
                    <h4>Java Script</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.2 ⭐⭐⭐⭐</p>
                    <p>₹3,699</p>
                </div>
                <div className="couse-card">
                    <img src={six} alt="img"></img>
                    <h4>The complete 2024 Webvelopment Bootcamp</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.7 ⭐⭐⭐⭐</p>
                    <p>₹3,099</p>
                </div>
    
                <div className="couse-card">
                    <img src={seven} alt="img"></img>
                    <h4>The complete Bootcamp</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.6 ⭐⭐⭐⭐</p>
                    <p>₹3,000</p>
                </div>
    
                <div className="couse-card">
                    <img src={eight} alt="img"></img>
                    <h4>Master React</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.4 ⭐⭐⭐⭐</p>
                    <p>₹3,499</p>
                </div>
    
                <div className="couse-card">
                    <img src={nine} alt="img"></img>
                    <h4>Java Script</h4>
                    <p>Dr.Angela Yu, Developer and Lead</p>
                    <p>4.2 ⭐⭐⭐⭐</p>
                    <p>₹3,699</p>
                </div>
        </div>
    </div>
    )
}
export default Popular