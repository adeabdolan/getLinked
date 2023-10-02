import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navbar/Navbar'
import vector from '../images/Vector 4.svg'
import chain from '../images/chain-9365116-7621444.png'
import explosion from '../images/1f4a5.png'
import bigChain from '../images/chain-big.png'
import bigExplosion from '../images/1f4a5-big.png'
import hackathonGuy from '../images/Hackathon guy.png'
import theBigIdea from '../images/The big idea.png'
import bigTheBigIdea from '../images/The big idea-big.png'
import arrow from '../images/arrow.png'
import woman from '../images/7450159 1.png'
import bigWoman from '../images/7450159 1-big.png'
import maleFemale from '../images/8046554 1.png'
import bigMaleFemale from '../images/8046554 1-big.png'
import casual from '../images/cwok_casual_21 1.png'
import bigCasual from '../images/cwok_casual_21 1-big.png'
import trophy from '../images/9486889 1.png'
import bigTrophy from '../images/9486889 -big1.png'
import medals from '../images/Rewards.png'
import bigMedals from '../images/Rewards-big.png'
import sponsors from '../images/Partner and sponsors section.png' 
import bigSponsors from '../images/Partner and sponsors section-big.png' 
import mark from '../images/mark.png'
import boy from '../images/08 1.png'
import bigBoy from '../images/08 1-big.png'
import instagram from '../images/mdi_instagram.png'
import linkedin from '../images/ri_linkedin-fill.png'
import facebook from '../images/facebook.png'
import x from '../images/x.png'
import call from '../images/call.png'
import location from '../images/location.png'
import glassesMan from '../images/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import shinyBall from '../images/shiny-ball.png'
import bigVector from '../images/Vector 4.png'
import creative from '../images/Creative 1.png'
import smallCreative from '../images/Creative 1-small.png'
import whiteStar from '../images/white-star.png'
import grayStar from '../images/gray-star-big.png'
import puStar from '../images/star pu.png'
import qmarkOne from '../images/qmark-1-s.png'
import qmarkTwo from '../images/qmark-2-s.png'
import qmarkThree from '../images/qmark-3-s.png'
import bigQmarkOne from '../images/qmark-1.png'
import bigQmarkTwo from '../images/qmark-2.png'
import bigQmarkThree from '../images/qmark-3.png'
import ellipse from '../images/Ellipse 2.png'

function Homepage() {
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMInutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('September 27, 2023 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const hours = Math.floor(distance / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if(distance < 0){
                //stop timer
                clearInterval(interval.current);
            } else {
                //update timer
                setTimerHours(hours);
                setTimerMInutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000)
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval);
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if(entry.isIntersecting){
                entry.target.classList.add('show');
              }
              else{
                entry.target.classList.remove('show');
              }
            });
        });
        
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []) 

  return (
    <>
        {window.matchMedia("(max-width:1023px)").matches && <NavBar/>}
        <section className='first'>
            <div className='ignitingParent'>
                <div className='igniting--div'>
                    <h3 className='typewriter'>Igniting a Revolution in HR Innovation</h3>
                    <img src={window.matchMedia("(min-width:1024px)").matches? bigVector : vector} alt="" className='vector'/>
                </div>
            </div>
            <div className='firstDiv'>
                <div className="sectionDiv">
                    <div className='hackathon--div'>
                        <h2 className='hidden'>getlinked Tech<img src={window.matchMedia("(min-width:1024px)").matches? creative : smallCreative} alt="" className='creative'/></h2>
                        <h2 className='hidden'>Hackathon <span className='one'>1.0</span><img src={window.matchMedia("(min-width:1024px)").matches? bigChain : chain} alt="" className='chain'/><img src={window.matchMedia("(min-width:1024px)").matches? bigExplosion : explosion} alt="" className='explosion'/></h2>
                    </div>
                    <p className='hidden participate'>
                        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
                    </p>
                    <Link to="/register" className="register land">Register</Link>
                    <h2 className='countdown'>{timerHours.toString().length === 1 && "0"}{timerHours}<span className='hms'>H</span>   {timerMinutes.toString().length === 1 && "0"}{timerMinutes}<span className='hms'>M</span>   {timerSeconds.toString().length === 1 && "0"}{timerSeconds}<span className='hms'>S</span></h2>
                </div>
                <img src={hackathonGuy} alt="" className='hackathon-guy'/>
                <img src={glassesMan} alt="" className='glassesMan'/>
                <img src={shinyBall} alt="" className='shinyBall'/>
            </div>
            <img src={whiteStar} alt="" className='star whiteStar star-1'/>
            <img src={grayStar} alt="" className='star grayStar star-2'/>
            <img src={grayStar} alt="" className='star grayStar star-3'/>
        </section>
        <section className='second' id='overview'>
            <img src={window.matchMedia("(min-width:1024px)").matches? bigTheBigIdea : theBigIdea} alt="" className='hidden ill theBigIdea'/>
            <img src={arrow} alt="" className='hidden arrow'/>
            <div className="sectionDiv">
                <h3 className='hidden introduction'>Introduction to getlinked</h3>
                <h3 className='hidden tech'>tech Hackathon 1.0</h3>
                <p className='hidden ourTech'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                </p>
            </div>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={puStar} alt="" className='star puStar star-2'/>
        </section>
        <section className='third'>
            <div className="womanDiv">
                {window.matchMedia("(min-width:1024px)").matches && <img src={ellipse} alt='' className='womanEllipse hidden obj'/>}
                <img src={window.matchMedia("(min-width:1024px)").matches? bigWoman : woman} alt="" className='hidden ill woman'/>
            </div>
            <div className="sectionDiv">
                <h3 className='hidden introduction'>Rules and</h3>
                <h3 className='hidden tech'>Guidelines</h3>
                <p className='hidden ourTech'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!
                </p>
            </div>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={whiteStar} alt="" className='star whiteStar star-2'/>
        </section>
        <section className='fourth'>
            <div className="maleFemaleDiv">
                {window.matchMedia("(min-width:1024px)").matches && <img src={ellipse} alt='' className='maleFemaleEllipse hidden obj'/>}
                <img src={window.matchMedia("(min-width:1024px)").matches? bigMaleFemale : maleFemale} alt="" className='hidden ill maleFemale'/>
            </div>
            <div className="sectionDiv">
                <h3 className='hidden introduction'>Judging Criteria</h3>
                <h3 className='hidden tech'>Key attributes</h3>
                <p className='hidden ourTech'>
                    <span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.
                </p>
                <p className='hidden ourTech'>
                    <span>Functionality:</span> Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.
                </p>
                <p className='hidden ourTech'>
                    <span>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
                </p>
                <p className='hidden ourTech'>
                    <span>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.
                </p>
                <p className='hidden ourTech'>
                    <span>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <button className="register read">Read More</button>
            </div>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={grayStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
        </section>
        <section className='fifth' id='faqs'>
            <div className="sectionDiv">
                <h3 className='hidden introduction'>Frequently Ask</h3>
                <h3 className='hidden tech'>Question</h3>
                <p className="hidden ourTech">
                    We got answers to the questions that you might want to ask about getlinked Hackathon 1.0
                </p>
                <div className='questionsParent'>
                    <div className="questions">
                        {window.matchMedia("(min-width:1024px)").matches? <p className='hidden'>Can I work on a project I started before the hackathon?<span className='plus'>+</span></p> :
                        <>
                            <p className='hidden'>Can I work on a project I started before the</p>
                            <p className='hidden'>hackathon?<span className='plus'>+</span></p>
                        </>}
                    </div>
                    <div className="questions">
                        {window.matchMedia("(min-width:1024px)").matches? <p className='hidden'>What happens if I need help during the hackathon?<span className='plus'>+</span></p> :
                        <>
                            <p className='hidden'>What happens if I need help during the</p>
                            <p className='hidden'>hackathon?<span className='plus'>+</span></p>
                        </>}
                    </div>
                    <div className="questions">
                        {window.matchMedia("(min-width:1024px)").matches? <p className='hidden'>What happens if I don't have an idea for a project?<span className='plus'>+</span></p> :
                        <>
                            <p className='hidden'>What happens if I don't have an idea for</p>
                            <p className='hidden'>a project?<span className='plus'>+</span></p>
                        </>}
                    </div>
                    <div className="questions">
                        {window.matchMedia("(min-width:1024px)").matches? <p className='hidden'>Can I join a team or do I have to come which one?<span className='plus'>+</span></p> : 
                        <>
                            <p className='hidden'>Can I join a team or do I have to come</p>
                            <p className='hidden'>which one?<span className='plus'>+</span></p>
                        </>}  
                    </div>
                    <div className="questions">
                        {window.matchMedia("(min-width:1024px)").matches? <p className='hidden'>What happens after the hackathon ends<span className='plus'>+</span></p> :
                        <>
                            <p className='hidden'>What happens after the hackathon</p>
                            <p className='hidden'>ends<span className='plus'>+</span></p>
                        </>}
                    </div>
                    <div className="questions">
                        {window.matchMedia("(min-width:1024px)").matches? <p className='hidden'>Can I work on a project I started before the hackathon?<span className='plus'>+</span></p> : 
                        <>
                            <p className='hidden'>Can I work on a project I started before the</p>
                            <p className='hidden'>hackathon?<span className='plus'>+</span></p>
                        </>}
                    </div>
                </div>
            </div>
            <div className="casualDiv">
                <img src={window.matchMedia("(min-width:1024px)").matches? bigQmarkOne : qmarkOne} alt="" className='qmark qmarkOne hidden obj'/>
                <img src={window.matchMedia("(min-width:1024px)").matches? bigQmarkTwo : qmarkTwo} alt="" className='qmark qmarkTwo hidden obj'/>
                <img src={window.matchMedia("(min-width:1024px)").matches? bigQmarkThree : qmarkThree} alt="" className='qmark qmarkThree hidden obj'/>
                <img src={window.matchMedia("(min-width:1024px)").matches? bigCasual : casual} alt="" className='hidden ill casual'/>   
            </div>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={grayStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
            <img src={puStar} alt="" className='star puStar star-4'/>
            <img src={puStar} alt="" className='star puStar star-5'/>
        </section>
        <section className='sixth' id='timeline'>
            <h3 className='hidden introduction'>Timeline</h3>
            <p className="hidden ourTech">
                Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
            {window.matchMedia("(min-width:1024px)").matches? 
            <>
                <div className="numbersParent">
                    <div className='announcementsParent'>
                        <div className="announcements left">
                            <h4 className='hidden'>Hackathon Announcement</h4>
                            <p className='hidden'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>
                        <h4 className='hidden date left'>November 18, 2023</h4>
                        <div className='announcements left'>
                                <h4 className='hidden'>Teams Registration ends</h4>
                                <p className='hidden'>Interested Participants are no longer Allowed to register</p>
                        </div>
                        <h4 className='hidden date left'>November 18, 2023</h4>
                        <div className='announcements left'>
                                <h4 className='hidden'>Getlinked Hackathon 1.0 Offically Begins</h4>
                                <p className='hidden'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                        </div>
                        <h4 className='hidden date left'>November 18, 2023</h4>
                    </div>
                    <div className="numbersDiv">
                        <div className="numbersDivition">
                            <div className='lines'></div>
                            <div className='numbers'>1</div>
                        </div>
                        <div className="numbersDivition">
                            <div className='lines'></div>
                            <div className='numbers'>2</div>
                        </div>
                        <div className="numbersDivition">
                            <div className='lines'></div>
                            <div className='numbers'>3</div>
                        </div>
                        <div className="numbersDivition">
                            <div className='lines'></div>
                            <div className='numbers'>4</div>
                        </div>
                        <div className="numbersDivition">
                            <div className='lines'></div>
                            <div className='numbers'>5</div>
                        </div>
                        <div className="numbersDivition">
                            <div className='lines'></div>
                            <div className='numbers'>6</div>
                        </div>
                    </div>
                    <div className='announcementsParent'>
                        <h4 className='hidden date right'>November 18, 2023</h4>
                        <div className='announcements right'>
                            <h4 className='hidden'>Teams Registration begins</h4>
                            <p className='hidden'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div> 
                        <h4 className='hidden date right'>November 18, 2023</h4>
                        <div className='announcements right'>
                            <h4 className='hidden'>Announcement of the accepted teams and ideas</h4>
                            <p className='hidden'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                        </div>
                        <h4 className='hidden date right'>November 18, 2023</h4>
                        <div className='announcements right'>
                            <h4 className='hidden'>Demo Day</h4>
                            <p className='hidden'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                        </div>
                    </div>
                </div>
            </> :
            <>
            <div className="numbersParent">
                <div className="numbersDiv">
                    <div className="numbersDivition">
                        <div className='lines'></div>
                        <div className='numbers'>1</div>
                    </div>
                    <div className="numbersDivition">
                        <div className='lines'></div>
                        <div className='numbers'>2</div>
                    </div>
                    <div className="numbersDivition">
                        <div className='lines'></div>
                        <div className='numbers'>3</div>
                    </div>
                    <div className="numbersDivition">
                        <div className='lines'></div>
                        <div className='numbers'>4</div>
                    </div>
                    <div className="numbersDivition">
                        <div className='lines'></div>
                        <div className='numbers'>5</div>
                    </div>
                    <div className="numbersDivition">
                        <div className='lines'></div>
                        <div className='numbers'>6</div>
                    </div>
                </div>
                <div className='announcementsParent'>
                    <div className="announcementsDiv">
                        <div className='announcements'>
                            <h4 className='hidden'>Hackathon Announcement</h4>
                            <p className='hidden'>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                        </div>
                        <h4 className='hidden date'>November 18, 2023</h4>
                    </div>
                    <div className="announcementsDiv">
                        <div className='announcements'>
                            <h4 className='hidden'>Teams Registration begins</h4>
                            <p className='hidden'>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                        </div>
                        <h4 className='hidden date'>November 18, 2023</h4>
                    </div>
                    <div className="announcementsDiv">
                        <div className='announcements'>
                            <h4 className='hidden'>Teams Registration ends</h4>
                            <p className='hidden'>Interested Participants are no longer Allowed to register</p>
                        </div>
                        <h4 className='hidden date'>November 18, 2023</h4>
                    </div>
                    <div className="announcementsDiv">
                        <div className='announcements'>
                            <h4 className='hidden'>Announcement of the accepted teams and ideas</h4>
                            <p className='hidden'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                        </div>
                        <h4 className='hidden date'>November 18, 2023</h4>
                    </div>
                    <div className="announcementsDiv">
                        <div className='announcements'>
                            <h4 className='hidden'>Getlinked Hackathon 1.0 Offically Begins</h4>
                            <p className='hidden'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                        </div>
                        <h4 className='hidden date'>November 18, 2023</h4>
                    </div>
                    <div className="announcementsDiv">
                        <div className='announcements'>
                            <h4 className='hidden'>Demo Day</h4>
                            <p className='hidden'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                        </div>
                        <h4 className='hidden date'>November 18, 2023</h4>
                    </div>
                </div>
            </div>
            </>}
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={grayStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
        </section>
        <section className='seventh'>
            <div className="seventhDiv">
                <h3 className='hidden introduction'>Prizes and</h3>
                <h3 className='hidden tech'>Rewards</h3> 
                <p className="hidden ourTech">
                    Highlight of the prizes or rewards for winners and for participants.
                </p>
            </div>
            <div className="sectionDiv">
                <img src={window.matchMedia("(min-width:1024px)").matches? bigTrophy : trophy} alt="" className='hidden ill trophy'/>
                <img src={window.matchMedia("(min-width:1024px)").matches? bigMedals : medals} alt="" className='hidden ill medals'/>
            </div>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={grayStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
            <img src={whiteStar} alt="" className='star puStar star-4'/>
            <img src={whiteStar} alt="" className='star puStar star-5'/>
        </section>
        <section className='eighth'>
            <h3 className='hidden introduction'>Partners and Sponsors</h3>
            <p className="hidden ourTech">
                Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors
            </p>
            <img src={window.matchMedia("(min-width:1024px)").matches? bigSponsors : sponsors} alt="" className='hidden ill sponsors'/>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={puStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
        </section>
        <section className='ninth'>
            <div className="ninthDiv">
                <h3 className='hidden introduction'>Privacy Policy and</h3>
                <h3 className='hidden tech'>Terms</h3>
                <p className="hidden ourTech last">
                    Last updated on September 12, 2023
                </p>
                <p className="hidden ourTech below">
                    Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
                </p>
                <div className='policyDiv'>
                    <p className="hidden ourTech at">
                        At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.
                    </p>
                    <h4 className='hidden'>Licensing Policy</h4>
                    <p className='hidden ourTech here'>
                        Here are terms of our Standard License:
                    </p>
                    <div className='licenses'>
                        <img src={mark} alt="" />
                        <p className='hidden'>The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                    </div>
                    <div className='licenses'>
                        <img src={mark} alt="" />
                        <p className='hidden'>You are licensed to use the item available at any free source sites, for your project developement</p>
                    </div>
                    <div className='readTwoDiv'><button className="register readTwo">Read More</button></div>
                </div>
            </div>
            <img src={window.matchMedia("(min-width:1024px)").matches? bigBoy : boy} alt="" className='hidden ill boy' />
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={puStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
            <img src={whiteStar} alt="" className='star puStar star-4'/>
            <img src={grayStar} alt="" className='star puStar star-5'/>
            <img src={grayStar} alt="" className='star puStar star-6'/>
            <img src={puStar} alt="" className='star puStar star-7'/>
        </section>
        <footer>
            <div>
                <div className='footerFirst'>
                    <h4 className='hidden getlinked twn'><span className="get">get</span>linked</h4>
                    <p className='hidden'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with tphe aim of showcasing young and talented individuals in the field of technology</p>
                    <div className='hidden terms'><p>Terms of Use</p><div className='slash'></div><p>Privacy Policy</p></div>
                </div>
                <div className="footerSecond">
                    <h4 className='hidden useful'>Useful Links</h4>
                    <p className='hidden'>Overview</p>
                    <p className='hidden'>Timeline</p>
                    <p className='hidden'>FAQs</p>
                    <p className='hidden'>Register</p>
                    <div className='socials'><p>Follow us</p><img src={instagram} alt="" /><img src={x} alt="" /><img src={facebook} alt="" /><img src={linkedin} alt="" /></div>
                </div>
                <div className="footerThird">
                    <h4 className='hidden useful'>Contact Us</h4>
                    <div className='contacts licenses'>
                        <img src={call} alt="" className='call'/>
                        <p className='hidden'>+234 679 81819</p>
                    </div>
                    <div className='contacts'>
                        <img src={location} alt="" className='location'/>
                        <div>
                            <p className='hidden'>27,Alara Street</p>
                            <p className='hidden'>Yaba 100012</p>
                            <p className='hidden'>Lagos State</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='hidden rights'>All rights reserved. © getlinked Ltd.</p>
            <img src={puStar} alt="" className='star puStar star-1'/>
            <img src={puStar} alt="" className='star puStar star-2'/>
            <img src={whiteStar} alt="" className='star puStar star-3'/>
            <img src={whiteStar} alt="" className='star puStar star-4'/>
        </footer>
    </>
  )
}
 
export default Homepage