import { Image } from "@mantine/core";
import { Call, Facebook, Location, Message } from "iconsax-react";
import MyMap from "../map";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer bg-ct2-neutral-02 p-10">
      <div className="flex justify-center p-10">
        <div className="bg-ct-primary-100 w-[70px] h-[70px] m-2 border rounded-full flex justify-center items-center hovericon">
          <a
            href="https://www.facebook.com/chien.xuan.357284"
            target="_blank"
            className=""
          >
            <Facebook size="32" color="#FF8A65" variant="Bold" />
          </a>
        </div>
        <div className="bg-ct-primary-100 w-[70px] h-[70px] m-2 border rounded-full flex justify-center items-center hovericon">
          <a href="mailto:xuanchien0111@gmail.com">
            <Message size="32" color="#FF8A65" variant="Bold" />
          </a>
        </div>
        <div className="bg-ct-primary-100 w-[70px] h-[70px] m-2 border rounded-full flex justify-center items-center hovericon">
          <a
            href="https://www.google.com/maps/place/3+Ng.+105+P.+Do%C3%A3n+K%E1%BA%BF+Thi%E1%BB%87n,+Mai+D%E1%BB%8Bch,+C%E1%BA%A7u+Gi%E1%BA%A5y,+H%C3%A0+N%E1%BB%99i,+Vietnam/@21.0409801,105.7757067,17z/data=!3m1!4b1!4m5!3m4!1s0x313454cbb702ad8f:0x50ebc529eab3a4ff!8m2!3d21.0409751!4d105.7778954"
            target="_blank"
          >
            <Location size="32" color="#FF8A65" variant="Bold" />
          </a>
        </div>
        <div className="bg-ct-primary-100 w-[70px] h-[70px] m-2 border rounded-full flex justify-center items-center hovericon">
          <a href="tel:+84386715182">
            <Call size="32" color="#FF8A65" variant="Bold" />
          </a>
        </div>
      </div>
      <div className="text-center p-16 sm:text-4xl text-xl text-ct-theme-orange flex flex-wrap items-center justify-center ">
        <div className="sm:border-r-2 border-cyan-700 px-4">
          <h1 className="font-medium py-4">Keep in touch</h1>
          <h3 className="py-4">0386 715 182</h3>
          <h2 className="py-4"> xuanchien0111@gmail</h2>
        </div>
        <div>
          <Image
            classNames={{
              image: "object-cover",
            }}
            width="320px"
            // height="20px"
            src="https://www.thegioimaychu.vn/blog/wp-content/uploads/2021/12/TheGioiMayChu-Blog-AI-robot-trend.jpg"
            radius={20}
            alt="Norway"
            className="mx-5"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center flex-wrap">
          <Image
            classNames={{
              image: "object-cover",
            }}
            width="20px"
            height="20px"
            src="https://seeklogo.com/images/C/copyright-symbol-logo-8BD7CD1E77-seeklogo.com.png"
            alt="Norway"
            className="mr-1"
          />
          2022 - Author: Nguyen Xuan Chien |
          <Image
            classNames={{
              image: "object-cover",
            }}
            width="25px"
            height="20px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg/230px-Flag_of_North_Vietnam_%281955%E2%80%931976%29.svg.png"
            alt="Norway"
            className="m-1"
            radius={6}
          />
          Ha Noi, Viet Nam
        </div>
      </div>
    </div>
  );
};

export default Footer;
