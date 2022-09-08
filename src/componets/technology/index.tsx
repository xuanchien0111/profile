import { Button, Card, Group, Image, Modal, Table, Text } from "@mantine/core";
import { ArrowCircleRight } from "iconsax-react";
import { useState } from "react";

const data = [
  {
    index: 1,
    title: "FRONTEND",
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721264.png",
    devops: [
      {
        name: "REACTJS",
        icon: "https://khanh.website/wp-content/uploads/2020/01/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png",
      },
      {
        name: "NEXTJS",
        icon: "https://ijs.gallerycdn.vsassets.io/extensions/ijs/reactnextjssnippets/1.6.0/1604011628777/Microsoft.VisualStudio.Services.Icons.Default",
      },
      {
        name: "REDUX/REDUX-TOOLKIT",
        icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",
      },
      {
        name: "TAILWINDCSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png",
      },
      {
        name: "ANT DESIGN",
        icon: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
      },
      {
        name: "MANTINE UI",
        icon: "https://seeklogo.com/images/M/mantine-logo-235E19C978-seeklogo.com.png",
      },
    ],
  },
  {
    index: 2,
    title: "BACKEND",
    img: "https://cdn-icons-png.flaticon.com/512/3668/3668474.png",
    devops: [
      {
        name: "NODEJS",
        icon: "https://play-lh.googleusercontent.com/lNy35u_4HIHu4Wqj0WIENtN0HmeZuEx4V8UwdMw0wxcRKvYbskmPEII05HWxK5nI0g",
      },
      {
        name: "EXPRESSJS",
        icon: "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
      },
      {
        name: "MOGODB",
        icon: "https://media.slid.es/uploads/380594/images/2539258/mongodb-logo.png",
      },
    ],
  },
  {
    index: 3,
    title: "LANGUAGR",
    img: "https://cdn2.iconfinder.com/data/icons/electronic-line-3/64/global_Earth_language_international_interface_icon0A-512.png",
    devops: [
      {
        name: "JAVASCRIPTJS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
      },
      {
        name: "TYPESCRIPTJS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
      },
    ],
  },
  {
    index: 4,
    title: "ORTHER",
    img: "https://cdn-icons-png.flaticon.com/512/125/125780.png",
    devops: [
      {
        name: "VITE",
        icon: "/vite.svg",
      },
      {
        name: "NPM-NPX",
        icon: "https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png",
      },
      {
        name: "YARN",
        icon: "https://p1.hiclipart.com/preview/798/531/796/react-logo-npm-javascript-package-manager-nodejs-github-installation-yarn-png-clipart.jpg",
      },
    ],
  },
];

const Technology = () => {
  return (
    <div className="max-w-[1200px] m-auto pb-6 px-4">
      <div className="text-center">
        <h1 className="sm:my-5 my-4 sm:py-2 lg:w-1/2 md:w-1/2 md:text-3xl font-Pacifico text-ct-texts-origin lg:text-5xl text-2xl m-auto ">
          Dedication and effort
        </h1>
        <p className="font-Playfair lg:text-xl md:text-lg text-sm">
          These are the products I made from the company
        </p>
      </div>
      <div className="py-6">
        <CardMy />
      </div>
    </div>
  );
};

export const CardMy = () => {
  const [opened, setOpened] = useState(false);
  const [detail, setDetail] = useState<any>();
  const chien = (id: number) => {
    if (id) {
      const dataDetail = data.find((item: any) => item.index === id);
      setDetail(dataDetail);
      setOpened(true);
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((item: any) => {
        return (
          <div
            className="w-[250px] h-[360px] sm:m-4 mt-6"
            onClick={() => {
              chien(item.index);
            }}
          >
            <Card
              shadow="sm"
              p="lg"
              radius="md"
              withBorder
              className="hover:bg-slate-400 hover:text-ct-primary-100"
            >
              <div className="h-[60px] text-4xl">
                <Text weight={500}>{item.title}</Text>
              </div>
              <div>
                <Image
                  classNames={{
                    image: "object-cover opacity-80 hover:opacity-100",
                  }}
                  height={220}
                  src={item.img}
                  alt="Norway"
                />
              </div>

              <div className=" font-Playfair buttonm flex items-center justify-start">
                <ArrowCircleRight size="32" variant="Bold" />
              </div>
            </Card>
          </div>
        );
      })}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{ close: "", modal: "bg-inherit shadow-inherit" }}
        size="100%"
      >
        <div className="p-4 mt-6 text-center text-ct-primary-100 ">
          <h1 className="text-5xl mt-[-20px] font-mono">{detail?.title}</h1>
          <h2 className="flex justify-center mt-5">
            <div>
              <Image
                classNames={{
                  image: "object-cover opacity-80 hover:opacity-100",
                }}
                height={100}
                width={100}
                src={detail?.img}
                alt="Norway"
              />
            </div>
          </h2>
          <div className="flex flex-wrap justify-center ">
            {detail?.devops.map((item: any) => {
              return (
                <div className="m-6 w-[180px] border-t hover:bg-slate-100 hover:text-ct-texts-origin pb-4">
                  <div className="h-[60px]">
                    <h1 className="text-2xl">{item?.name}</h1>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      classNames={{
                        image: "object-cover opacity-80 hover:opacity-100",
                      }}
                      height={100}
                      width={100}
                      src={item?.icon}
                      alt="Norway"
                      radius={100}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Technology;
