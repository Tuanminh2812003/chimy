import "./Home.scss";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Flashcard from "../../Components/Flashcard";
import sections from "../../constants/data";

function Home(){
    return(
        <>
            {/* <Header/> */}
            <div className="home">      
                <div className="home__section3" style={{margin:"0px"}}>
                    <div  className="container" style={{flexDirection:"column"}}>
                        <div style = {{marginTop: "100px" , fontSize: "48px" , fontWeight: "600" , textAlign: "center"}}>
                            THÔNG TIN DI SẢN
                        </div>
                        <div className="home__section3__inner" style={{marginTop: "56px"}}>
                        <Flashcard
                            sectionData={sections.diSanVatThe}
                            title="Cổ vật"
                            color="#89231E"
                            id="diSanVatThe"
                        />
                        <Flashcard
                            sectionData={sections.diSanThienNhien}
                            title="Tác phẩm"
                            color="#1D5136"
                            id="diSanThienNhien"
                        />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;