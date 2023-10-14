import cover1 from "../../assets/images/cover1.jpg";
import cover2 from "../../assets/images/cover2.jpg";
import cover3 from "../../assets/images/cover3.jpg";
import youtube from "../../assets/images/youtube.png";

export default function LeftSideBar() {
  return (
    <aside
      className="grid gap-10 overflow-y-auto overflow-x-hidden scroll-bar text-start
    text-white h-[700px] p-4 bg-zinc-800/50 rounded-lg">
      <div className="grid bg-black p-4 rounded-lg max-w-[900px] cursor-pointer relative">
        <img
          className="w-fit h-32 mx-auto rounded-lg"
          src={cover1}
          alt="icon"
        />
        <img src={youtube} className="w-8 absolute left-5 top-5" alt="icon" />
        <div className="py-5">
          <h2 className="text-lg font-medium">Why I KEEP buying NFTs</h2>
          <p className="text-sm text-zinc-300">
            In this video I talk about why people keep spending millions on new
            NFTs despite the media claiming that the market is dead and
            worthless.
          </p>
        </div>
      </div>
      <div className="grid bg-black p-4 rounded-lg max-w-[500px] cursor-pointer relative">
        <img className="w-fit h-32 mx-auto rounded-lg" src={cover2} alt="" />
        <img src={youtube} className="w-8 absolute left-5 top-5" alt="icon" />
        <div className="py-5">
          <h2 className="text-lg font-medium">Why I KEEP buying NFTs</h2>
          <p className="text-sm text-zinc-300">
            In this video I talk about why people keep spending millions on new
            NFTs despite the media claiming that the market is dead and
            worthless.
          </p>
        </div>
      </div>
      <div className="grid bg-black p-4 rounded-lg max-w-[500px] relative cursor-pointer">
        <img className="w-fit h-32 mx-auto rounded-lg" src={cover3} alt="" />
        <img src={youtube} className="w-8 absolute left-5 top-5" alt="icon" />
        <div className="py-5">
          <h2 className="text-lg font-medium">Why I KEEP buying NFTs</h2>
          <p className="text-sm text-zinc-300">
            In this video I talk about why people keep spending millions on new
            NFTs despite the media claiming that the market is dead and
            worthless.
          </p>
        </div>
      </div>
      <div className="grid bg-black p-4 rounded-lg max-w-[500px] relative cursor-pointer">
        <img className="w-fit h-32 mx-auto rounded-lg" src={cover1} alt="" />
        <img src={youtube} className="w-8 absolute left-5 top-5" alt="icon" />
        <div className="py-5">
          <h2 className="text-lg font-medium">Why I KEEP buying NFTs</h2>
          <p className="text-sm text-zinc-300">
            In this video I talk about why people keep spending millions on new
            NFTs despite the media claiming that the market is dead and
            worthless.
          </p>
        </div>
      </div>
      <div className="grid bg-black p-4 rounded-lg max-w-[500px] relative cursor-pointer">
        <img className="w-fit h-32 mx-auto rounded-lg" src={cover2} alt="" />
        <img src={youtube} className="w-8 absolute left-5 top-5" alt="icon" />
        <div className="py-5">
          <h2 className="text-lg font-medium">Why I KEEP buying NFTs</h2>
          <p className="text-sm text-zinc-300">
            In this video I talk about why people keep spending millions on new
            NFTs despite the media claiming that the market is dead and
            worthless.
          </p>
        </div>
      </div>
      <div className="grid bg-black p-4 rounded-lg max-w-[500px] relative cursor-pointer">
        <img className="w-fit h-32 mx-auto rounded-lg" src={cover3} alt="" />
        <img src={youtube} className="w-8 absolute left-5 top-5" alt="icon" />
        <div className="py-5">
          <h2 className="text-lg font-medium">Why I KEEP buying NFTs</h2>
          <p className="text-sm text-zinc-300">
            In this video I talk about why people keep spending millions on new
            NFTs despite the media claiming that the market is dead and
            worthless.
          </p>
        </div>
      </div>
    </aside>
  );
}
