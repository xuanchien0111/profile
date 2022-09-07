import { Button, Card, Group, Image, Modal, Table, Text } from "@mantine/core";
import { useState } from "react";
import "./style.css";

const data = [
  {
    index: 1,
    img: "https://st.quantrimang.com/photos/image/2017/02/24/phat-minh-moi-1.jpg",
    title: "HOCMAI-KHAOTHI",
    time: "(1/7/2022-now)",
    describe: "Manage accounts, courses, questions, assignments, contests",
    teamsize: "4 (2 backend, 2 front-end)",
    position: "Fontend Developer",
    responsibilities:
      "Code UI/UX,fix bug, pair API with backend, optimize performance",
    technologies: "Reactjs, TailwindCSS, TypeScript, MantineUI, Redux-Toolkit",
  },
  {
    index: 2,
    img: "https://genk.mediacdn.vn/zoom/600_315/2017/c41bciiuyaadpwm-1488368912874.jpg",
    title: "I CAN CONTECT - HOC MAI",
    time: "(7/7/2022-9/8/2022)",
    describe:
      "Sell ​​online courses with college exam preparation programs, online for high school, middle school, and high school students.",
    teamsize: "4 (1 backend, 3 front-end)",
    position: "Fontend Developer",
    responsibilities:
      "Code UI/UX,fix bug, pair API with backend, SEO, optimize performance",
    technologies: "Nextjs, TailwindCSS, MantineUI, SEO",
  },
  {
    index: 3,
    img: "http://itplus-academy.edu.vn/upload/67a01e5248558e1b99b6291f244afc35/files/AI-Tech.jpg",
    title: "SSG Internal management system",
    time: "(3/4/2022-1/7/2022)",
    describe:
      "Business administration, check work progress, meeting schedule, timekeeping",
    teamsize: "11 (6 backend, 5 front-end)",
    position: "Fulltack Developer",
    responsibilities:
      "Code UI/UX, code API, fix bug, optimize performance",
    technologies: "Reactjs, Nodejs, Netjs, TailwindCSS, Ant Design",
  },
];

const ProductCompany = () => {
  return (
    <div className="max-w-[1200px] m-auto sm:py-10 px-4">
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
          <div className="w-[250px] h-[360px] sm:m-4">
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  classNames={{
                    image: "object-cover",
                  }}
                  height={120}
                  src={item.img}
                  alt="Norway"
                />
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
        classNames={{ close: "hidden" }}
        size="70%"
      >
        <div className="p-4">
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

export default ProductCompany;
