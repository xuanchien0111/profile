import { Button, Card, Group, Image, Modal, Table, Text } from "@mantine/core";
import { useState } from "react";
import "./style.css";

const data = [
  {
    index: 1,
    img: "http://shopeeplus.com//upload/images/boi-thuong-lazada.jpg",
    title: "LAZADA",
    time: "(1/2/2022-2/4/2022)",
    demo: "https://k20-lazada.up.railway.app/",
    describe:
      "E-commerce trading floor, providing products in many different categories such as furniture, ..",
    teamsize: "2 (2 backend, 2 front-end)",
    position: "FullStack Developer",
    responsibilities:
      "Code UI/UX,code API, organization Data, fix bug, pair API with backend, optimize performance",
    technologies: "Reactjs, Nodejs",
  },
  {
    index: 2,
    img: "https://epz24x4zq6r.exactdn.com/wp-content/uploads/2020/12/Lazada.jpg?strip=all&lossy=1&ssl=1",
    title: "ADMIN - LAZADA",
    time: "(3/3/2022-30/3/2022)",
    describe:
      "Add, edit, delete products, users, check orders",
    teamsize: "1 (1 Full stack)",
    position: "FullStack Developer",
    responsibilities:
      "Code UI/UX,fix bug, pair API with backend, SEO, optimize performance",
    technologies: "Nodejs",
  },
  {
    index: 3,
    img: "https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo",
    title: "TODO",
    time: "(1/3/2022-7/3/2022)",
    demo: "https://shimmering-paprenjak-287af5.netlify.app/",
    describe:
      "Add, edit, delete, assign each task",
    teamsize: "1 (1 front-end)",
    position: "FrontEnd Developer",
    responsibilities: "Code UI/UX, code API",
    technologies: "Reactjs, Ant Design",
  },
  {
    index: 4,
    img: "https://cdn.tgdd.vn/hoi-dap/1356493/instagram-la-gi-instagram-co-diem-gi-khac-biet-so-voi-1-800x533.jpg",
    title: "INSTAGRAM",
    time: "(2/1/2022-30/1/2022)",
    demo: "https://mevn-instagram.netlify.app/login",
    describe:
      "Social network, post photos, status, connect people",
    teamsize: "11 (6 backend, 1 front-end)",
    position: "FullStack Developer",
    responsibilities: "Code UI/UX, code API, organization Data, fix bug",
    technologies: "Nodejs",
  },
];

const ProductMy = () => {
  return (
    <div className="max-w-[1200px] m-auto sm:pb-6 px-4">
      <div className="text-center">
        <h1 className="sm:my-5 my-4 sm:py-2 lg:w-1/2 md:w-1/2 md:text-3xl font-Pacifico text-ct-texts-origin lg:text-5xl text-2xl m-auto ">
          Curious and self-taught
        </h1>
        <p className="font-Playfair lg:text-xl md:text-lg text-sm">
          I am always curious about new technologies and products I am curious
          and make them
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
          <div className="w-[250px] h-[360px] sm:m-4 ">
            <Card
              shadow="sm"
              p="lg"
              radius="md"
              withBorder
              classNames={{
                root: "bg-ct-texts-origin",
              }}
            >
              <Card.Section>
                <a href={item.demo} target="_blank">
                  <Image
                    classNames={{
                      image: "object-cover opacity-80 hover:opacity-100",
                    }}
                    height={120}
                    src={item.img}
                    alt="Norway"
                  />
                </a>
              </Card.Section>

              <Group position="apart" mt="md" mb="xs" className="h-[50px]">
                <Text weight={500}>{item.title}</Text>
              </Group>

              <Text size="sm" color="dimmed" className="h-[80px]">
                {item.describe}
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => {
                  chien(item.index);
                }}
                className="text-ct-texts-origin font-Playfair buttonmy bg-ct2-neutral-02 flex items-center justify-center"
              >
                See more
              </Button>
            </Card>
          </div>
        );
      })}
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{ close: "hidden" ,modal:'p-2'}}
        size="sm:100%"
      >
        <div className="sm:p-4">
          <h1 className="text-2xl mt-[-20px] font-mono">{detail?.title}</h1>
          <h3>{detail?.time}</h3>
          <Table className="ml-[-6px] my-10">
            <tbody>
              <tr className="border-b bg-slate-100">
                <td className="w-1/4 font-bold">Project Name</td>
                <td>{detail?.title}</td>
              </tr>
              <tr className="border-b ">
                <td className="w-1/4 font-bold">Time</td>
                <td>{detail?.time}</td>
              </tr>
              <tr className="border-b bg-slate-100">
                <td className="w-1/4 font-bold">Description</td>
                <td>{detail?.describe}</td>
              </tr>
              <tr className="border-b ">
                <td className="w-1/4 font-bold">Team size</td>
                <td>{detail?.teamsize}</td>
              </tr>
              <tr className="border-b ">
                <td className="w-1/4 font-bold">Demo</td>
                <td className="text-ct-primary-300">
                  <a href={detail?.demo} target="_blank">
                    {detail?.demo}
                  </a>
                </td>
              </tr>
              <tr className="border-b bg-slate-100">
                <td className="w-1/4 font-bold">My position</td>
                <td>{detail?.position}</td>
              </tr>
              <tr className="border-b ">
                <td className="w-1/4 font-bold">My responsibilities</td>
                <td>{detail?.responsibilities}</td>
              </tr>

              <tr className="border-b bg-slate-100">
                <td className="w-1/4 font-bold">Technologies</td>
                <td>{detail?.technologies}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Modal>
    </div>
  );
};

export default ProductMy;
