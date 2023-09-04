import '../Style/aboutStyle.css'

const About = () => {
    return ( 
        <div className="body">
            <div className="left-content">
                <h1>About Me</h1>
                <p>Experienced Data Science Professional with a demonstrated history 
                    of working in the computer software industry. Skilled in Python (Programming Language), 
                    Agile Methodologies, Data Science, Python, and Machine Learning. Strong engineering
                     professional with a Bachelor of Technology focused in IT from KiiT University. 
                     Active Kaggle and other Datathon Participant.
                </p>
                <h2>Experience</h2>
                <div className="list_cont">
                    <div className="list_exp">
                        <ul>
                            <li>
                                Data Science Intern :- HighRadius Technologies
                                <div className="additional-info">Worked on developing machine learning models for financial analysis.</div>
                            </li>
                            <li>
                                Associate Software Engineer :- HighRadius Technologies
                                <div className="additional-info">Worked on developing machine learning models for financial analysis.</div>
                            </li>
                            <li>
                                AI Scientist :- DataPOEM
                                <div className="additional-info">Worked on developing machine learning models for financial analysis.</div>
                            </li>
                        </ul>
                    </div>
                    <div className="list_skill">
                        <ul>
                            <li>
                                Data Science Intern :- HighRadius Technologies
                            </li>
                            <li>
                                Associate Software Engineer :- HighRadius Technologies
                            </li>
                            <li>
                                AI Scientist :- DataPOEM
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-content">
            <h1>About Me</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    );
}
 
export default About;