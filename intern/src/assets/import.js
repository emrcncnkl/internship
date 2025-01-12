import Banner from "./images/mainhero/banner.png";
import Banner2 from "./images/mainhero/banner2.png";
import founder from "./images/cards/Founder.png";
import shape2 from "./images/background/shape2.png";
import drink from "./images/aboutus/drink.png";
import developer from "./images/cards/Developer.png";
import designer from "./images/cards/Designer.png";
import contactform from "./images/contactform/people.png";
import shape1 from "./images/background/shape1.png";



const images = {
  shape1,
  shape2,
  Banner,
  Banner2,
  drink,
  contactform,
};

const jobs = {
  developer: {
    src: developer,
    name: "Cody Fisher",
    job: "Developer",
  },
  designer: {
    src: designer,
    name: "Brooklyn Simmons",
    job: "Designer",
  },
  founder: {
    src: founder,
    name: "Esther Howard",
    job: "Founder",
  },
};

export default images;
export { jobs };
