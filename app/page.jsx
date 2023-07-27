import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center blue_gradient drop-shadow-2xl'>
      Cook & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center drop-shadow-2xl'> Global recipes</span>
    </h1>
    <p className='desc text-center'>
      Cookaholic is a platform for sharing your recipes with the world. We use AI-powered prompts to help you write your recipes.
    </p>

    <Feed />
  </section>
);

export default Home;
