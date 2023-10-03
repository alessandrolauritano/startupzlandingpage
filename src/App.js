import './App.scss';
import Nav from "./sections/navbar"
import Hero1 from './sections/hero1';
import Hero2 from './sections/hero2'
import Features from "./sections/features"
import Works from "./sections/works"
import Getintouch from './sections/getintouch';
import Footer from './sections/footer';
import Herostart from './sections/herostart';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const featuresData1 = {
     title : "Who we are",
     description: (
      <>
        We create products that have innovation and technology at their core.
        <br />
        We value working with talented people that understand the possibilities of today.
      </>
    ),    
    imgname: "./imgs/questionmark.png",
    features:[
    { number: "01", text: "We develop innovative products, systems, and services" },
    { number: "02", text: "Next we build teams to scale them into companies" },
    { number: "03", text: "Each startup solving one problem at a time" },
  ]
  };
  const featuresData2 = {
    title : "Our core values",
    imgname: "./imgs/lightbulb.png",
    features:[
   { number: "01. Innovation", text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models." },
   { number: "02. People", text: "Talent is what enable us to create great companies." },
 ]
 };

  return (
      <div className="App">
      <Nav/>
      <Herostart/>
      <Features columnClass="row-cols-sm-1 row-cols-md-1 row-cols-lg-3" featuresData={featuresData1} />
      <Hero1 showChatAssistant="yes" title="We love solving problems!"/>
      <Features columnClass="row-cols-sm-1 row-cols-md-1 row-cols-lg-2" featuresData={featuresData2}/>
      <Works/>
      <Hero1 title={<>
        Startups create a world that actually is better.<br></br>Any problem that can be solved, will be solved <br></br>by a startup, and that is a huge opportunity.
        </>}>
        </Hero1>  
      <Hero2/>
      <Getintouch/>
      <Footer/>
      </div>  
  );
}

export default App;
