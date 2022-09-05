import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about.png'
import VisionImage from '../../images/about1.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
   return (
      <>
         <Header tittle="About Us" image={HeaderImage}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, assumenda laborum? Exercitationem veritatis nulla ad?
         </Header>

         <section className=" about__story">
            <div className="container about__story-container">
               <div className="about__section-image">
                  <img src={StoryImage} alt="Our Story Image" />
               </div>
               <div className="about__section-content">
                  <h1>Our Story</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
                     accusantium rerum pariatur cupiditate fuga nihil quae ullam
                     aliquid exercitationem!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
                     accusantium rerum pariatur cupiditate fuga nihil quae ullam
                     aliquid exercitationem!</p>

               </div>
            </div>
         </section>
         <section className=" about__vision">
            <div className="container about__vision-container">
               <div className="about__section-content">
                  <h1>Our Vision</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
                     accusantium rerum pariatur cupiditate fuga nihil quae ullam
                     aliquid exercitationem!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
                     accusantium rerum pariatur cupiditate fuga nihil quae ullam
                     aliquid exercitationem!</p>

               </div>
               <div className="about__section-image">
                  <img src={VisionImage} alt="Our Vision Image" />
               </div>
            </div>
         </section>
         <section className=" about__mission">
            <div className="container about__mission-container">
               <div className="about__section-image">
                  <img src={MissionImage} alt="Our Mission Image" />
               </div>
               <div className="about__section-content">
                  <h1>Our Mission</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
                     accusantium rerum pariatur cupiditate fuga nihil quae ullam
                     aliquid exercitationem!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
                     accusantium rerum pariatur cupiditate fuga nihil quae ullam
                     aliquid exercitationem!</p>

               </div>
            </div>
         </section>
      </>

   )
}

export default About;