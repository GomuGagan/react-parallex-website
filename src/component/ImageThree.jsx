import { Parallax } from "react-parallax"
import Img3 from "../img/3.jpg"
export const ImageThree = () => {
    return(
        <Parallax className="image" bgImage={Img3} strength={800}>
<div className="content">
    <span className="img-text">Trip to Space</span>
</div>
        </Parallax>
    )

}