
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const fullText = "Hey, I'm Vinayak ✨\nA Software Developer.";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 100); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
    <div className="mt-28 max-w-4xl min-w-fit grid grid-cols-1 gap-6 transform-gpu">
        <div className="flex flex-col md:flex-row md:items-center gap-10 ">
            <img
            src="profile1.png"
            alt="3D Avatar"
            className="w-28 rounded-full border border-white/20 shadow-xl hover:scale-105 transition"
            />
            <pre className=" font-sans text-3xl md:text-5xl lg:text-6xl font-bold whitespace-pre-line  text-blue-400">{text}</pre>
        </div>
      <p className="text-xl max-w-2xl p-2">
        A <b>frontend developer</b> with solid foundations in <b>design</b>.<br/> 
        Passionate about crafting seamless user experiences at the intersection of creativity and functionality.
      </p>
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row lg:items-center justify-between max-w-[550px] ">
        <div className="flex gap-2 lg:gap-4 px-2">
          <a
            href="#contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border h-10 px-4 py-2 shadow-xl text-sm font-medium hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border h-10 px-4 py-2 shadow-xl text-sm font-medium hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-5 w-5"
            >
              <path d="M2 7v10" />
              <path d="M6 5v14" />
              <rect width="12" height="18" x="10" y="3" rx="2" />
            </svg>
            View Projects
          </a>
        </div>
        <div data-orientation="vertical" role="none" class="shrink-0 w-[1.5px] bg-white h-4 hidden lg:block"></div>
        <div class="flex items-center pb-10 sm:pb-0 px-5 gap-14 md:gap-8 text-xl">
            <a href="https://github.com/vinayak-madivalar" target="_blank" rel="noopener noreferrer" aria-label="Github">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/vinayak-madivalar/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg>
            </a>
            </div>
        </div>
    </div>
      
    </section>
  );
}

 

