import React,{useState} from "react";

const Home=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const CollectData=()=>{
        console.warn(name,email,password);
    }

    return(
        <div>
            <h1>
            Hey there! I’m Keshav Premsagar—a fresh Computer Science graduate🎓from the University of Hull with an insatiable curiosity🚀 for all things tech and a keen eye for data<span id="blinkingUnderscore" class="blinking-underscore">_</span>
            </h1>

            <b>My Journey So Far 🛤️</b>
            <p>
            Throughout my academic career, I’ve immersed myself in a variety of technologies, from <b>Python scripting</b> and <b>SQL querying 📊</b> to 
            exploring frameworks like <b>React</b> ⚛️ and <b>Node.js </b>🌐. I’ve taken on a wide range of projects, including <b>developing predictive models</b>,
            <b>creating dynamic web applications</b>, and <b>optimizing client-server systems</b>. One of my most rewarding experiences involved working with large datasets, 
            where I combined Python's data-crunching power with the flexibility of React and Node.js to build intuitive, user-friendly solutions 💡. It’s been a thrilling journey
            of turning data into actionable insights and developing full-stack applications that truly make an impact. 💻✨</p>

            <b>Tech Meets Teamwork 🤝</b>
            <p>
            When I wasn’t buried in code, I was busy being an active member of the <b>Computer Science Society 👥 </b>. I love collaboration, and my time as the <b>Opportunities 
            Events and Publicity Representative</b> was all about enhancing the student experience, one event at a time. Whether it’s organizing <b>hackathons or boosting campus 
            engagement</b>, I’ve always been passionate about bringing people together and making things happen.
            </p>

            <b>Beyond the Code 🏀</b>
            <p>
            But hey, life’s not all about ones and zeros! I’m an avid athlete—whether it's <b>swimming laps 🏊‍♂️ </b> or <b>shooting hoops 🏀</b>, I find that sports are the perfect 
            way to balance the mental rigor of coding. And when I’m not on the court or in the pool, you might find me <b>experimenting in the kitchen </b>🍳, exploring new cuisines, 
            or <b>getting lost in a good book </b>📚.
            </p>
             
            <b>What’s Next? 🚀</b>
            <p>
            I’m eager to bring my blend of technical expertise, creativity, and teamwork to a forward-thinking company where I can contribute to innovative projects and continue growing as a professional. If you’re looking for someone who’s not just a techie but also a team player with a passion for data and a knack for problem-solving, let’s connect! Whether it’s collaborating on a cutting-edge project or just chatting about the latest tech trends, I’m all ears. You can connect with me on <a href="https://www.linkedin.com/in/keshav-premsagar-ab3a75251/" target="_blank">Linkedin</a>,
            <a href="https://github.com/keshav434/" target="_blank">GitHub</a> and I look forward to exploring potential collaborations.
            </p>

            <div class="foot">
            <footer>
            <p>Contact Details: premsagarkeshav@gmail.com | Phone: +44 7459 942 574</p>
            </footer>
            </div>
        </div>

        
    )
}

export default Home