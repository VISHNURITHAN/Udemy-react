import two from "../images/web.jpg"
import three from "../images/bootcamp.avif"
import four from "../images/React.avif"
import five from "../images/js.avif"




function Coursecard(){
    return(
        // <!--Recommended couser card-->

        <div className="recommended">
            <h1 className="recommended__title">recommended for you</h1>
            <p>Pick the best fit</p>
            <div className="recommended__container">
    
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
            </div>
        </div>
    )
}
export default Coursecard