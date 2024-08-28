import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="con">
      <Helmet>
        <title>Home | Keshav Premsagar</title>
        <meta
          name="description"
          content="Welcome to Keshav Premsagar's portfolio. Explore projects, resume, and more."
        />
      </Helmet>
      <h1>
        Hey there! I’m Keshav Premsagar—a fresh Computer Science graduate 🎓
        from the University of Hull with an insatiable curiosity 🚀 for all
        things tech and a keen eye for data
        <span id="blinkingUnderscore" className="blinking-underscore">
          _
        </span>
      </h1>

      <section>
        <strong>My Journey So Far 🛤️</strong>
        <p>
          Throughout my academic career, I’ve immersed myself deeply in the
          world of data and AI. My expertise spans
          <strong>Python scripting</strong> for data manipulation and analysis,{" "}
          <strong>SQL querying 📊</strong> for database management, and <strong>Tableau</strong> for
          creating insightful data visualizations. I’ve also extensively worked
          with <strong>Excel</strong> to organize and analyze complex datasets. I have
          tackled diverse projects such as <strong>developing predictive models</strong>,
          <strong>creating interactive dashboards</strong>, and{" "}
          <strong>performing comprehensive data analysis</strong> to uncover actionable
          insights. One of my most rewarding experiences involved leveraging
          these tools to build solutions that not only provided clear insights
          but also drove impactful decision-making 💡. My journey has been a
          thrilling exploration of how data can be transformed into valuable
          knowledge, and I’m excited to continue this path of innovation and
          discovery 💻✨.
        </p>
      </section>

      <section>
        <strong>Tech Meets Teamwork 🤝</strong>
        <p>
          When I wasn’t buried in code, I was busy being an active member of the{" "}
          <strong>Computer Science Society 👥</strong>. I love collaboration, and my time
          as the <strong>Opportunities Events and Publicity Representative</strong> was
          all about enhancing the student experience, one event at a time.
          Whether it’s organizing <strong>hackathons</strong> or boosting campus
          engagement, I’ve always been passionate about bringing people together
          and making things happen.
        </p>
      </section>

      <section>
        <strong>Beyond the Code 🏀</strong>
        <p>
          But hey, life’s not all about ones and zeros! I’m an avid
          athlete—whether it's <strong>swimming laps 🏊‍♂️</strong> or
          <strong>shooting hoops 🏀</strong>, I find that sports are the perfect way to
          balance the mental rigor of coding. And when I’m not on the court or
          in the pool, you might find me <strong>experimenting in the kitchen 🍳</strong>,
          exploring new cuisines, or <strong>getting lost in a good book 📚</strong>.
        </p>
      </section>

      <section>
        <strong>What’s Next? 🚀</strong>
        <p>
          I’m eager to bring my blend of technical expertise, creativity, and
          teamwork to a forward-thinking company where I can contribute to
          innovative projects and continue growing as a professional. If you’re
          looking for someone who’s not just a techie but also a team player
          with a passion for data and a knack for problem-solving, let’s
          connect! Whether it’s collaborating on a cutting-edge project or just
          chatting about the latest tech trends, I’m all ears. You can connect
          with me on
          <a
            href="https://www.linkedin.com/in/keshav-premsagar-ab3a75251/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            {" "}
            LinkedIn
          </a>
          ,
          <a
            href="https://github.com/keshav434/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            {" "}
            GitHub
          </a>{" "}
          and I look forward to exploring potential collaborations.
        </p>
      </section>

      <footer className="foot">
        <p>
          Contact Details: premsagarkeshav@gmail.com | Phone: +44 7459 942 574
        </p>
      </footer>
    </div>
  );
};

export default Home;

