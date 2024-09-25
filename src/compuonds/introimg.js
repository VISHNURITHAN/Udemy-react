// into image
//import image
import one from "../images/intro pic.png"
function Intoimg(){
    return(

        <div className="introimage">
            <img src={one} alt="img"></img>
            <div className="introimage__desc">
                <h1 className="introimage__desc__title">Skills that drive you forward</h1>
                <p className="introimage__desc__para">Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals
                    and stay competitive.</p>
                    <button>View Plans</button>
            </div>
        </div>
    )
}
export default Intoimg