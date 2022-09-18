import { Parallax } from "react-parallax"
import Img1 from "../img/1.jpg"
export const ImageOne = () => {
    return(
        <Parallax className="image" bgImage={Img1} strength={800}>
<div className="content">
    <span className="img-text">Trip to Space</span>
</div>
        </Parallax>
    )

}