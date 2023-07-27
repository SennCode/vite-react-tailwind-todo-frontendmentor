import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
  return (
    <div className="bg-[url('src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          {" "}
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon fill="#444" className="fill-red-400"/>
          </button>
        </div>

        <form className="px-4 flex gap-4 bg-white rounded overflow-hidden py-4 items-center mt-8">
          <span className="rounded-full border-2 inline-block h-5 w-5"></span>
          <input
            type="text"
            placeholder="Create a new todo..."
            className="w-full text-gray-400 outline-none"
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white [&>article]:px-4 [&>article]:py-4 rounded-md">
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-gray-500 grow">
              Complete online JavaScript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-gray-500 grow">
              Complete online JavaScript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b border-b-gray-400">
            <button className="rounded-full border-2 inline-block h-5 w-5"></button>
            <p className="text-gray-500 grow">
              Complete online JavaScript course
            </p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <section className="py-4 px-4 flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">Clear complete</button>
          </section>
        </div>
      </main>
      <section className="container px-4 mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Complete</button>
        </div>
      </section>
      <p className="text-center">Drag and Drop</p>
    </div>
  );
};

export default App;
