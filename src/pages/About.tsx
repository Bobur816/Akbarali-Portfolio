import TableExperiance from "../UI/TableExperience/TableExperience";
import avatar from "../assets/images/avatar-big.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="info">
          <div>
            <h3 className="section__title">Akbarali Khasanov</h3>
            <p className="info-profession">UX/UI Designer</p>
          </div>
          <p className="about-paragraph">
            Hey, I'm Akbarali. I'm a designer and software tinkerer. I am currently working as a UX/UI designer at{" "}
            <a href="https://itic.uz/" target="blank">
              IT Investments Center
            </a>{" "}
            I also mentor at{" "}
            <a href="https://uacademy.uz/" target="blank">
              Uacademy
            </a>
            . And I have been freelancing at{" "}
            <a href="https://kwork.ru/user/akbaralikhasanov" target="blank">
              Kwork
            </a>{" "}
            for 4 years. During this time, I achieved great success.
          </p>
          <p className="about-paragraph">
            Before, I spent two years designing{" "}
            <a href="https://github.com/AkbaraliKhasanov" target="blank">
              native mobile apps at GitHub.
            </a>
          </p>
          <TableExperiance />
        </div>
        <img src={avatar} alt="user-img" />
      </div>
    </>
  );
}

export default About;
