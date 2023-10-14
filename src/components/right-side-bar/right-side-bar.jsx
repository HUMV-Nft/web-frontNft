import user1 from "../../assets/images/nft_avatar01.png";
import user2 from "../../assets/images/nft_avatar02.png";
import user3 from "../../assets/images/nft_avatar03.webp";

export default function RightSideBar() {
  return (
    <aside className="max-w-[500px] w-full grid gap-5 overflow-y-auto max-h-[600px] overflow-x-hidden scroll-bar p-4 bg-zinc-800/50 rounded-lg">
      <div className="w-full bg-zinc-800 p-4 rounded-lg text-white">
        <div className="flex gap-5">
          <img src={user1} alt="user photo" />
          <div>
            <h4 className="font-medium">Luck Crypto</h4>
            <span className="text-zinc-300">@Jon Max</span>
          </div>
        </div>
        <p className="text-sm py-5">
          Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
          augue euismod. Nulla ullam dolor sitamet consectetur
        </p>
      </div>
      <div className="w-full bg-zinc-800 p-4 rounded-lg text-white">
        <div className="flex gap-5">
          <img src={user2} alt="user photo" />
          <div>
            <h4 className="font-medium">Luck Crypto</h4>
            <span className="text-zinc-300">@Jon Max</span>
          </div>
        </div>
        <p className="text-sm py-5">
          Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
          augue euismod. Nulla ullam dolor sitamet consectetur
        </p>
      </div>
      <div className="w-full bg-zinc-800 p-4 rounded-lg text-white">
        <div className="flex gap-5">
          <img src={user3} alt="user photo" />
          <div>
            <h4 className="font-medium">Luck Crypto</h4>
            <span className="text-zinc-300">@Jon Max</span>
          </div>
        </div>
        <p className="text-sm py-5">
          Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
          augue euismod. Nulla ullam dolor sitamet consectetur
        </p>
      </div>
      <div className="w-full bg-zinc-800 p-4 rounded-lg text-white">
        <div className="flex gap-5">
          <img src={user1} alt="user photo" />
          <div>
            <h4 className="font-medium">Luck Crypto</h4>
            <span className="text-zinc-300">@Jon Max</span>
          </div>
        </div>
        <p className="text-sm py-5">
          Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
          augue euismod. Nulla ullam dolor sitamet consectetur
        </p>
      </div>
      <div className="w-full bg-zinc-800 p-4 rounded-lg text-white">
        <div className="flex gap-5">
          <img src={user2} alt="user photo" />
          <div>
            <h4 className="font-medium">Luck Crypto</h4>
            <span className="text-zinc-300">@Jon Max</span>
          </div>
        </div>
        <p className="text-sm py-5">
          Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
          augue euismod. Nulla ullam dolor sitamet consectetur
        </p>
      </div>
      <div className="w-full bg-zinc-800 p-4 rounded-lg text-white">
        <div className="flex gap-5">
          <img src={user3} alt="user photo" />
          <div>
            <h4 className="font-medium">Luck Crypto</h4>
            <span className="text-zinc-300">@Jon Max</span>
          </div>
        </div>
        <p className="text-sm py-5">
          Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
          augue euismod. Nulla ullam dolor sitamet consectetur
        </p>
      </div>
    </aside>
  );
}
