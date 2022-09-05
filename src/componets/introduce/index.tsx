import { Award } from "iconsax-react";
import { Image } from "@mantine/core";
import imgchien from "../../assets/chien.jpg";
import "./style.css";

const Introduce = () => {
  return (
    <div className="lg:flex bg-ct2-neutral-02 text-ct-texts-origin lg:justify-between justify-center lg:p-10 p-10">
      <div className="sm:px-12 lg:w-1/2 flex-col justify-between">
        <div className=" lg:text-4xl text-2xl flex ">
          <p>
            <span className="font-Lobster font-bold text-ct-neutral-black">
              "
            </span>{" "}
            <span className="font-Playfair solution">
              I don’t write bug-free software, I write software works correctly
              despite bugs
            </span>
          </p>
        </div>
        <div className="flex flex-wrap justify-between font-Playfair lg:mt-[200px] sm:pt-10 pt-4 text-lg">
          <div className="flex items-center mr-2 my-2">
            <span className="mr-2">
              <Award color="#FF8A65" />
            </span>{" "}
            <div>Webflow websites</div>
          </div>
          <div className="flex items-center mr-2 my-2">
            <span className="mr-2">
              <Award color="#FF8A65" />
            </span>{" "}
            <div>Web Development</div>
          </div>
          <div className="flex items-center mr-2 my-2">
            <span className="mr-2">
              <Award color="#FF8A65" />
            </span>{" "}
            <div>Easy to manage</div>
          </div>
        </div>
      </div>
      <div className="px-20 p-10 mt-10 lg:w-1/2 sm:block hidden">
        <div className="flex justify-center">
          <div className=" relative rotate-6 border-2 border-ct-texts-origin rounded-[30px] w-[300px] h-[400px]">
            <div>
              <div className="imgchien absolute top-[-30px] lg:left-20 border-2 border-ct-texts-origin rounded-[30px] w-[300px] h-auto">
                <Image radius={30} src={imgchien} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
