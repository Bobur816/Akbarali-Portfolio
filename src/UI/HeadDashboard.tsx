import { useTypewriter, Cursor } from "react-simple-typewriter";
import Status from "./Status";
import { CiLocationOn } from "react-icons/ci";
import CopyEmailButton from "./CopyEmailButton";

function HeadDashboard() {
  const [text] = useTypewriter({
    words: ["Website", "Mobile", "Product"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 40,
  });
  return (
    <div className="dashboard-head">
      <Status />
      <h1>
        Hey, I'm Akbarali👏
        <br /> I design <span>{text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
      <span className="location-point">
        <CiLocationOn />
        <span>Tashkent, Uzbekistan</span>
      </span>
      <p className="text_md text_gray">
        Akbarali is an experienced UX/UI designer based in Uzbekistan known for creating intuitive and engaging user
        experiences.
      </p>
      <CopyEmailButton />
    </div>
  );
}

export default HeadDashboard;
