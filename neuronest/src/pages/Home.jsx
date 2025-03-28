import React, { useState, useEffect, useRef } from 'react';
import homepg from './homepg.png';
import { TypeAnimation } from 'react-type-animation';
import scndhome from './scndhome.png';
import thirdhome from './thirdhome.png';
import card1home from './card1home.png';
import card2home from './card2home.png';
import card3home from './card3home.png';
import card4home from './card4home.png';
import card5home from './card5home.png';
import ftballhome from './ftballhome.png';
import { Link } from 'react-router-dom';

const AnimatedhdthreeText = ({ animate }) => {
  //if (!animate) return null; // Render nothing until animation is triggered

  return (
    <TypeAnimation ninte git open akiye
      sequence={[
        'Track Progress', // First line
        1000, // Pause for 1 second
        'Track Progress\nCelebrate growth', // Append the second line
        1000, // Pause for 1 second
        //'Therapists design personalized learning plans that cater to each\nchild’s unique needs, guiding their growth based on individual\nstrengths and challenges.', // Append the third line
      //  1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0} // No repetition, play once
      cursor={false} // Disable the cursor
    />
  );
};

const AnimatedhdoneText = ({ animate }) => {
  if (!animate) return null; // Render nothing until animation is triggered

  return (
    <TypeAnimation
      sequence={[
        'Customized learning', // First line
        1000, // Pause for 1 second
        'Customized learning\nplan', // Append the second line
        1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0} // No repetition, play once
      cursor={false} // Disable the cursor
    />
  );
};

const AnimatedhdtwoText = ({ animate }) => {
  if (!animate) return null; // Render nothing until animation is triggered

  return (
    <TypeAnimation
      sequence={[
        'Interactive learning', // First line
        1000, // Pause for 1 second
        'Interactive learning\nat home', // Append the second line
        1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0} // No repetition, play once
      cursor={false} // Disable the cursor
    />
  );
};

const AnimateddownText = ({ animate }) => {
  if (!animate) return null; // Render nothing until animation is triggered

  return (
    <TypeAnimation
      sequence={[
        'Therapists design personalized learning plans that cater to each', // First line
        1000, // Pause for 1 second
        'Therapists design personalized learning plans that cater to each\nchild’s unique needs, guiding their growth based on individual', // Append the second line
        1000, // Pause for 1 second
        'Therapists design personalized learning plans that cater to each\nchild’s unique needs, guiding their growth based on individual\nstrengths and challenges.', // Append the third line
        1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0} // No repetition, play once
      cursor={false} // Disable the cursor
    />
  );
};

const AnimateddownscndText = ({ animate }) => {
  if (!animate) return null;

  return (
    <TypeAnimation
      sequence={[
        'Therapists lead home-based digital sessions to develop essential', // First line
        1000, // Pause for 1 second
        'Therapists lead home-based digital sessions to develop essential\nskills, while parents receive easy-to-follow training videos for', // Append the second line
        1000, // Pause for 1 second
        'Therapists lead home-based digital sessions to develop essential\nwhile parents receive easy-to-follow training videos for\nsmooth support progress.', // Append the third line
        1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0}
      cursor={false}
    />
  );
};

const AnimateddownthirdText = ({ animate }) => {
  if (!animate) return null;

  return (
    <TypeAnimation
      sequence={[
        'Detailed reports keep therapists and parents informed, refining', // First line
        1000, // Pause for 1 second
        'Detailed reports keep therapists and parents informed, refining\nthe learning plan to fit the child’s evolving needs.', // Append the second line
        1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0}
      cursor={false}
    />
  );
};

const AnimateddownfourthText = ({ animate }) => {
  if (!animate) return null;

  return (
    <TypeAnimation
      sequence={[
        'Transforming screen', // First line
        1000, // Pause for 1 second
        'Transforming screen\nTime to Growth Time', // Append the second line
        1000, // Pause for 1 second
      ]}
      wrapper="div"
      speed={100} // Typing speed
      style={{
        fontSize: '1em',
        lineHeight: '1.5',
        textAlign: 'left',
        display: 'inline-block',
        whiteSpace: 'pre-line',
      }}
      repeat={0}
      cursor={false}
    />
  );
};

export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [startScndAnimation, setStartScndAnimation] = useState(false);
  const [startThirdAnimation, setStartThirdAnimation] = useState(false);
  const [startFourthAnimation, setStartFourthAnimation] = useState(false);

  const animatedSectionRef = useRef(null);
  const animatedSectionScndRef = useRef(null);
  const animatedSectionThirdRef = useRef(null);
  const animatedSectionFourthRef = useRef(null);

  // Intersection Observer to trigger animations when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.5 }
    );
    if (animatedSectionRef.current) observer.observe(animatedSectionRef.current);

    return () => {
      if (animatedSectionRef.current) observer.unobserve(animatedSectionRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartScndAnimation(true);
        }
      },
      { threshold: 0.5 }
    );
    if (animatedSectionScndRef.current) observer.observe(animatedSectionScndRef.current);

    return () => {
      if (animatedSectionScndRef.current) observer.unobserve(animatedSectionScndRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartThirdAnimation(true);
        }
      },
      { threshold: 0.5 }
    );
    if (animatedSectionThirdRef.current) observer.observe(animatedSectionThirdRef.current);

    return () => {
      if (animatedSectionThirdRef.current) observer.unobserve(animatedSectionThirdRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartFourthAnimation(true);
        }
      },
      { threshold: 0.3 }
    );
    if (animatedSectionFourthRef.current) observer.observe(animatedSectionFourthRef.current);

    return () => {
      if (animatedSectionFourthRef.current) observer.unobserve(animatedSectionFourthRef.current);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Top Section */}
      <div>
        <video
          src="https://cognitivebotics.com/wp-content/uploads/2024/09/home-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%' }}
        >
          Your browser does not support the video tag.
        </video>

        {/* Animated Lines */}
        <div className="text-center flex flex-col items-center -mt-[520px] text-white font-mono text-2xl">
          <TypeAnimation
            sequence={[
              'Empowers therapists to extend care,', // First line
              1000, // Pause for 1 second
              'Empowers therapists to extend care,\nbeyond the center, into homes.', // Append the second line
              1000, // Pause after the second line
            ]}
            wrapper="div"
            speed={60}
            style={{
              fontSize: '2em',
              lineHeight: '1.5',
              textAlign: 'center',
              display: 'inline-block',
              whiteSpace: 'pre-line',
            }}
            repeat={0}
            cursor={false}
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-auto mt-[520px]">
        <p className="text-center text-blue-900 font-sans text-xl">
          NeuroNest empowers therapists to support children with neurodiverse conditions like 𝗔𝘂𝘁𝗶𝘀𝗺, 𝗔𝗗𝗛𝗗,<br /> 𝗗𝗼𝘄𝗻 𝗦𝘆𝗻𝗱𝗿𝗼𝗺𝗲, or for those who learn differently. Helping them learn and grow confidently at their <br /> own pace.
        </p>
      </div>

      {/* First Content Section */}
      <div className="flex flex-col items-center mt-40" ref={animatedSectionRef}>
        <img className="w-1/4 h-auto mr-[600px]" src={homepg} alt="Family" />
        <div className="text-slate-600 text-center mt-10">
          {/*<h2 className="font-sans text-5xl mr-[-500px] mt-[-250px]">Customized Learning</h2>
          <h2 className="font-sans text-5xl mr-[-150px]">Plan</h2>*/}

          <h2 className='font-sans text-slate-700 text-5xl mr-[-500px] mt-[-250px]'>
            <AnimatedhdoneText animate={startAnimation}/>
          </h2>

          <p className="font-sans text-lg mt-4 mr-[-580px] max-w-2xl mx-auto">
            <AnimateddownText animate={startAnimation} />
          </p>
        </div>
      </div>

      {/* Second Content Section */}
      <div className="flex flex-col items-center mt-40" ref={animatedSectionScndRef}>
        <img className="w-1/4 h-auto mr-[600px]" src={scndhome} alt="Family" />
        <div className="text-slate-600 text-center mt-10">
          {/*<h2 className="font-sans text-5xl mr-[-500px] mt-[-250px]">Interactive Learning,</h2>
          <h2 className="font-sans text-5xl mr-[-240px]">at home</h2>*/}
          <h2 className='font-sans text-slate-700 text-5xl mr-[-500px] mt-[-250px]'>
            <AnimatedhdtwoText animate={startAnimation}/> 
          </h2>

          <p className="font-sans text-lg mt-4 mr-[-600px] max-w-2xl mx-auto">
            <AnimateddownscndText animate={startScndAnimation} />
          </p>
        </div>
      </div>

      {/* Third Content Section */}
      <div className="flex flex-col items-center mt-40" ref={animatedSectionThirdRef}>
        <img className="w-1/4 h-auto mr-[600px]" src={thirdhome} alt="Family" />
        <div className="text-slate-600 text-center mt-10">
          {/*<h2 className="font-sans text-5xl mr-[-440px] mt-[-250px]">Track Progress,</h2>
          <h2 className="font-sans text-5xl mr-[-500px]">celebrate growth</h2>*/}

          <h2 className='font-sans text-5xl text-slate-700 mr-[-440px] mt-[-250px]'>
            <AnimatedhdthreeText animate={startAnimation} />
          </h2>

          <p className="font-sans text-lg mt-4 mr-[-600px] max-w-2xl mx-auto">
            <AnimateddownthirdText animate={startThirdAnimation} />
          </p>
        </div>
      </div>

            <div className='mt-44'>
              <h1 className='flex justify-center text-slate-800 text-5xl font-sans'>Skills Empowering every child's journey</h1>
            </div>

            <div className='flex justify-start gap-9 mb-[-100px] ml-8 mt-16 mr-8'>
                <div className="max-w-sm bg-blue-300 border border-gray-200 rounded-xl h-96 w-72 shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg w-full h-44" src={card1home} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Attending Skill</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Enhances a child's ability to focus and maintain attention on tasks or instructions
                    </p>
                  </div>
                </div>

                <div className="max-w-sm bg-blue-300 border border-gray-200 rounded-xl h-96 w-72 shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg w-full h-44" src={card2home} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Imitation Skill</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Helps children learn by observing and mimicking others' actions or behaviors
                    </p>
                  </div>
                </div>

                <div className="max-w-sm bg-blue-300 border border-gray-200 rounded-xl h-96 w-72 shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg w-full h-44" src={card3home} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Receptive Skill</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Strengthens the child's ability to understand and process spoken language and instructions
                    </p>
                  </div>
                </div>

                <div className="max-w-sm bg-blue-300 border border-gray-200 rounded-xl h-96 w-72 shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg w-full h-44" src={card4home} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Expressive Skill</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Enhances a child's ability to focus and maintain attention on tasks or instructions
                    </p>
                  </div>
                </div>

                <div className="max-w-sm bg-blue-300 border border-gray-200 rounded-xl h-96 w-72 shadow dark:bg-gray-800 dark:border-gray-700">
                  <img className="rounded-t-lg w-full h-44" src={card5home} alt="" />
                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Visual Skill</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Improves how children interpret and understand visual information from their environment
                    </p>
                  </div>
                </div>
            </div>

      {/* Footer */}
      <footer className='bg-emerald-950 w-full h-[1000px] pb-0 mt-[-230px]'>
    <div className='mt-96 flex justify-center'>
          <img className='flex justify-end  h-[396px] mr-[-700px] mt-24' src={ftballhome} alt="football" />
    </div>

    <div ref={animatedSectionFourthRef}>
        <h2 className='font-sans text-white text-5xl ml-[170px] mt-[-350px]'>
          <AnimateddownfourthText animate={startAnimation}/>
        </h2>
    </div>  
    
    <p className='text-white text-lg mt-10 ml-[170px]'>
    We understand your concerns about screen time. That’s why our platform <br />turns passive watching into active learning while fostering two way <br /> communication. Designed with the latest research, our interactive and <br /> educational content ensures your child’s screen time is both meaningful and <br /> beneficial.
    </p>
    <div className='w-full h-300px bg-emerald-950'>
            <Link to='/journey'>
                  <button className='bg-white w-48 h-8 mt-10 ml-[170px] text-emerald-950 hover:opacity-50 rounded-3xl'>Start your journey</button>
            </Link>
            
            <h1 className='text-white ml-40 mt-[250px] text-5xl font-sans'>NeuRonEst</h1>
            <Link to='/'>
                <span className='text-white text-lg ml-[800px] mt-[-300px]'>Home</span>
            </Link>
            <Link to='/about'>
                <span className='text-white text-lg ml-[90px] mt-[200px]'>About</span>
            </Link>
            <Link to='/profile'>
                <span className='text-white text-lg ml-[60px] mt-[-100px]'>Profile</span>
            </Link>
            <Link to='/log-up'>
                <span className='text-white text-lg ml-[60px] mt-[-300px]'>Parent Signup</span>
            </Link>
            <Link to='/sign-up'>
                <span className='text-white text-lg ml-[60px] mt-[300px]'>Therapist Signup</span>
            </Link>
    </div>
    
    <p className='text-white mt-[10px] font-sans text-lg ml-[150px] text-left'>AI powered support for neurodiverse <br />children</p>
   


</footer>
          

    </div>
  );
}