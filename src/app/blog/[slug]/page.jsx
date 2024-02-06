import UserComponent from "@/components/UserComponent";
import Image from "next/image";
const Singlepage = () => {
  return (
    <div className="flex  aspect-video gap-10 h-[calc(100vmin-100px)] mt-2 w-full ">
      <div className="w-full flex-1 max-md:hidden  relative">
        <Image src="/music.jpg" fill alt="No-image" />
      </div>
      <div className="flex-1">
        <h1 className="text-5xl my-3">Title</h1>
        <UserComponent />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, dicta
          necessitatibus eaque tempore nesciunt ipsam, consequatur unde nulla ea
          qui possimus voluptas illum nemo, nostrum modi quaerat suscipit!
          Cumque excepturi doloribus facilis rem enim odit hic perferendis
          maiores at quasi obcaecati dolore ab vero sunt animi, nihil quidem
          tenetur blanditiis inventore placeat deserunt? Consectetur facere illo
          similique nam earum, ipsum odit. Architecto ipsum excepturi quae nisi
          laborum voluptatum delectus corrupti distinctio eligendi commodi,
          iusto corporis, tenetur ad ab. Necessitatibus sequi veritatis earum
          tenetur, provident debitis adipisci Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatum ab est saepe voluptatibus
          dignissimos laborum in corrupti eius dolorum ratione consequuntur
          quas, nihil debitis hic adipisci repellendus, minima aperiam,
          explicabo inventore odio! Quia, eaque. Nobis expedita, facere minus
          iste vitae eligendi vel atque dignissimos inventore fuga perspiciatis,
          nulla quis, repellendus minima voluptatibus aut soluta excepturi?
          Assumenda, laboriosam. Sequi repellendus quos, sapiente dicta ipsam
          nostrum exercitationem explicabo quod omnis tenetur deleniti ipsum ut
          temporibus aspernatur alias aliquam est dolor adipisci, obcaecati
          optio sit facilis fuga, natus neque? Voluptatum adipisci tempore
          veniam autem atque quo id nobis? Atque molestiae sunt sequi
          aliquid!laborum asperiores accusantium accusamus natus odit nobis
          numquam repudiandae amet facilis! Autem, quam accusantium!
        </p>
      </div>
    </div>
  );
};

export default Singlepage;
