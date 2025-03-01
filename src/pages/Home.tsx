import { Button } from "../components/ui/Button";
import ArrowIcon from "../icons/ArrowIcon";

const Home = () => {
  return (
    <div className="w-full px-24 flex flex-col gap-12 items-center">
      <div className="flex flex-col items-center ">
        <h1 className="text-6xl font-bold font-mono text-white">Let's Free Your Brain,</h1>
        <h1 className="text-5xl font-bold font-mono text-purple-300">and Keep things here</h1>
      </div>
      <div className="opacity-80">
        <p className="text-white text-xl">
        Never lose track of important links, codes, documents, or videos again—store, organize, and find them easily, all in one place.
        </p>
      </div>
      <div className="">
        {/* <Button size="md" variant="primary" text="Get started" onClick={()=>{}}/> */}
        <Button size="md" variant="home" text="Get started" onClick={()=>{}} endIcon={<ArrowIcon/>}/>
      </div>
    </div>
  );
};

export default Home;
