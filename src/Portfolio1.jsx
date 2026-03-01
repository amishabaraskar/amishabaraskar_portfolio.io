import React from "react";
const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "REST APIs",
  "Vite",
  "Tailwind CSS",
  "Figma"
];

const projects = [
  {
    name: "Startup Pitcher",
    description: "Create, refine, and present startup pitches with AI and analytics.",
    image: "./Startup-pitcher-app.png",
    repo: "https://github.com/amishabaraskar/startup-pitcher"
  },
  {
    name: "Accountable Todo App",
    description: "Stay productive and accountable with this collaborative todo list.",
    image: "./todo_app.png",
    repo: "https://github.com/amishabaraskar/accountable-todoapp"
  },
  {
    name: "Next Meetup App",
    description: "Organize, promote, and manage your next community meetup.",
    image: "./Meetup-App.png",
    repo: "https://github.com/amishabaraskar/next-meetup-app"
  }
];

export default function Portfolio() {
  return (
    <div className="font-sans tracking-wide lg:flex h-screen bg-[#0B1D51] overflow-x-hidden hide-scrollbar">
      {/* Header */}
            <header className="  lg:h-screen  ml-10 flex items-center   gap-10  text-white py-12    shadow-lg">
<div >
        <h1 className="lg:text-6xl text-xl font-extrabold  my-7">Amisha B.</h1>
        <p className="lg:text-lg text-sm opacity-90 mb-5">Web Developer</p>
        <nav>
        <ul  className=" text-slate-400 text-sm my-10 space-y-5 list-disc ml-5">
<li><a className="hover:text-white tracking-wide" href="#About">About</a></li>
<li><a className="hover:text-white tracking-wide" href="#Experience">Experience</a></li>
<li><a className="hover:text-white tracking-wide" href="#Projects">Projects</a></li>

        </ul>
        </nav>
        <ul className="flex  gap-3 mt-5">

<li><a href="https://github.com/amishabaraskar/" target="_blank"><svg className="hover:stroke-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg></a></li>
<li><a href="https://www.linkedin.com/in/amisha-baraskar-82938b180/" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:stroke-white lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a></li>
</ul>

     </div>
                 {/* <img  className='rounded-xl shadow-2xl border-black border-r-4 border-b-8' width={200} src={'/Profile_avatar.png'}/> */}

      </header>
      {/* Skills Section */}
      <div className="flex-1  overflow-y-auto">
              <section id="About" className="text-slate-500 font-medium lg:max-w-3xl mx-auto mt-8  rounded-2xl shadow-2xl py-8 px-4 md:px-10 ">
<p >
  I’m a passionate Frontend Developer with 4 years of experience building modern, user-friendly web applications using the MERN stack. I specialize in <span className="text-white">React.js, JavaScript, TypeScript, HTML, and CSS, </span>with a strong focus on performance, clean code, and responsive design. Over the years, I’ve contributed to <span className="text-white">real-time telecom applications and product dashboards </span>  that require attention to detail and UI excellence.
</p>
<br/>

<p>
  My strength lies in transforming complex ideas into simple, intuitive interfaces. I love working at the intersection of design and development, where I can bring life to UI with smooth animations, thoughtful layouts, and accessibility in mind. Lately, I’ve been <span className="text-white">exploring the integration of GenAI and AWS into full-stack apps</span>, aiming to build scalable, intelligent, and engaging user experiences.
</p>
<br/>
<p>
  Beyond coding, I enjoy designing clean interfaces, learning emerging tech trends, and collaborating with like-minded creators. I believe in continuous learning, and I'm always excited to take on challenges that push my creativity and technical boundaries. Whether I’m improving an app or riding my scooter through Mumbai’s lanes, I bring curiosity and energy into everything I do.
</p>

      </section>

      <section id="Experience" className="max-w-3xl  flex  gap-3 mx-auto mt-10 rounded-2xl shadow-2xl py-8 px-4 md:px-10 ">
<div className="text-slate-600 w-28 flex-none pt-1 font-medium text-xs ">
  2021 -- PRESENT
</div>
<div className="flex-grow"><span className="text-white font-semibold lg:text-lg text-md">Frontend Developer . TCS</span>
      <div className="text-slate-500 font-medium" >
        <p>
          Over the past 4 years at TCS, I’ve worked extensively in the Telecom BSS (Business Support Systems) domain, contributing to enterprise-scale applications such as Matrixx, VMS, and MBAS. My role spanned both application support and frontend development, giving me a holistic understanding of system functionality, customer impact, and real-time performance requirements.
        </p>
        <br/>
        <p>
          Matrixx is a cloud-native digital monetization platform used by telecom operators to enable real-time rating, balance management, and charging. I’ve worked on resolving critical business-impacting issues, collaborating with cross-functional teams to ensure uptime, and automating configurations and health checks using internal tools. I also cleared the Matrixx certification to deepen my expertise in the platform’s architecture and APIs.
        </p>
        <br/>
        <p>
          In VMS and MBAS, I handled frontend feature development and maintenance of internal dashboards that manage SIM activation, prepaid/postpaid provisioning, and voucher life cycles. I built dynamic UI components using ReactJS and JavaScript, applied custom CSS for responsive layouts, and integrated REST APIs for real-time data handling. These tools were essential for operations teams, and my contributions significantly improved their usability, speed, and stability.
        </p>
      </div>

</div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="max-w-3xl mx-auto mt-12 px-4">
        <div className="flex-col mx-auto">
          {projects.map(proj => (
            <div
              key={proj.name}
              className="h-40 flex rounded-2xl my-10 shadow-lg hover:scale-105 transition-transform duration-200 overflow-hidden "
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="lg:text-xl  font-semibold text-white mb-2">{proj.name}</h3>
                <p className="hidden text-slate-600 font-medium mb-4 flex-1  lg:block  ">{proj.description}</p>
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-violet-600 font-bold hover:underline"
                >
                  View on GitHub &rarr;
                </a>
              </div>
                            <img
                src={proj.image}
                alt={proj.name}
                className=" w-56"
              />

            </div>
          ))}
        </div>
      </section>
            <footer className="text-center text-violet-600 py-10 opacity-70">
        &copy; {new Date().getFullYear()} Amisha Baraskar &mdash; Portfolio
      </footer>

</div>
      {/* Footer */}
    </div>
  );
}