import chris from "../data/chris.jpg";
import "../styles/bio.css";
const MainBio = () => {
  return (
    <main>
        <section id="about-me" className="main-container">
            <aside className="main-header">   
                    <h2>
                        About Me
                    </h2>
                    
                    <img id="profile-image" src={chris} alt="smiling man with short red hair and big red beard"/>
            </aside>
            <article className="main-body">
                <p>
                    Hello! My name is Chris Kimball, I graduated from Washington State University in 2013 with a degree in Management Information Systems. I currently work for Edmentum inc. as a Support Operations Specialist. My role involves implementing and managing client integrations into the Edmentum software using technologies such as, Single Sign on (SSO), Learning Tools Interoperability (LTI), and API. 
                <br/><br/>
                    I am currently enrolled in the Full Stack Flex bootcamp through University of Washington where I am expanding my technical skills to allow me to become a fulltime software developer. Upon completion of this course in April 2022, I will have covered front end technologies such as, HTML, CSS, Javascript, back end technologies such as, Mern stack, Mongo DB, RestAPI to design functional and responsive websites. I will have gained experience with web application deployment and delivery technologies such as, Git, Github, Heroku.
                <br/><br/>
                    Outside of work I live an active lifestyle with my wife and two dogs, Rusty and Fitz. I enjoy adventuring in the Cascade mountains of Washington state, whether its climbing, hiking, kayaking, mountain biking or camping, I enjoy it all.
                </p>
            </article>
        </section>
    </main>
  );
};

export default MainBio;
