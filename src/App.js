import Navbar from "./compuonds/navbar";
import Intoimg from "./compuonds/introimg";
import Description from "./compuonds/description";
import Coursecard from "./compuonds/coursecard";
import Topics from "./compuonds/topics";
import Popular from "./compuonds/popular";
import Footer from "./compuonds/footer";
function App(){
    return(
        <div>
            <Navbar />
            <Intoimg />
            <Description />
            <Coursecard />
            <Topics />
            <Popular />
            <Footer />
        </div>
    )
}
export default App