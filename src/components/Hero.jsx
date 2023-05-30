

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3 '>

        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
        <h1 className="text-xl font-bold">Summariza</h1>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/Nathan-Yennupiak/Summariza", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>
      <hr className="border-solid border-b-4 border-sky-500"></hr>

      <h1 className='head_text'>
        Summarize Blog Posts/Articles with <br className='max-md:hidden' />
        <span className='purple_gradient '>SUMMARIZA</span>
      </h1>
      <h2 className='desc'>
      Simplify your reading with Summariza, an article summarizer that creates concise summaries from lengthy articles.      </h2>
    </header>
  );
};

export default Hero;