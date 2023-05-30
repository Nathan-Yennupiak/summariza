

// import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 p-3 border-b-2 border-solid border-purple-200'>

        {/* <img src={logo} alt='sumz_logo' className='w-28 object-contain' /> */}
        <h1 className="py-1.5 px-5 text-purple-900 font-bold text-2xl transition-all hover:bg-white hover:text-black">Summariza</h1>

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