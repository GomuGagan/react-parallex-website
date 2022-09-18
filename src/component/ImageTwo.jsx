import { Parallax } from "react-parallax"
import Img2 from "../img/2.jpg"
export const ImageTwo = () => {
    return(
        <Parallax className="image" bgImage={Img2} strength={800}>
<div className="content">
    <span className="img-text">Trip to Space</span>
</div>
        </Parallax>
    )

}