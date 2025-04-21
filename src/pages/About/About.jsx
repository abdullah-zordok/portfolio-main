import HeroImg from "@/assets/images/abdallaZordok.jpg";
import linkedin from "@/assets/images/linkedin.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Front End, Full Stack ,
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">

                <a href="https://www.linkedin.com/in/abdullah-zordok/">

                  <img
                    src={HeroImg}
                    className="rounded-[15px] shadow block"
                    alt="payments illustration"
                    width={1207}
                    height={929}

                  />
                </a>
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm Abdullah Zordok,
                Junior Front-End Developer.... <span className="font-bold text-white">with 1 year of remote experience</span> at Khulash Company and FoxMind Tech Ltd. Skilled in Angular, JavaScript, TypeScript, HTML, CSS, Bootstrap, Tailwind, and .NET Core. Experienced in building responsive web apps and working across front-end and back-end.
                Passionate about clean UI, performance, and problem-solving.
                .{" "}
                <span className="font-bold text-white">
                  and I use Angular Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    "I am a lifelong learner and innovator, passionate about expanding
                    my knowledge and contributing to the developer community through new ideas and solutions. I continuously work on improving
                    my skills and collaborate with others to push the boundaries of technology."
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Abdullah Zordok, ....
                    </cite>
                    <div className="flex items-center gap-2">
                      <a href="https://www.linkedin.com/in/abdullah-zordok/" target="true">
                        <img
                          className="h-7 w-fit"
                          src={linkedin}
                          alt=""
                          height="30"
                          width="auto"
                        /></a>


                      <span className="text-white"></span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
