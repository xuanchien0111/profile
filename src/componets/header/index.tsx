import { HambergerMenu } from "iconsax-react";
import Loading from "../../assets/icon";
import { Menu, Button } from "@mantine/core";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-ct2-neutral-02 border-gray-200 px-6 lg:px-6 h-[60px] sm:h-[80px] py-4 font-Lobster">
          <div className="flex flex-wrap items-center justify-between mx-auto ">
            <div className="relative flex items-center h-full">
              <div className="mr-[80px] hidden sm:block">
                <Loading />
              </div>
              <span className="self-center text-lg sm:text-2xl  whitespace-nowrap dark:text-white lg:mt-[10px]">
                Nguyen Xuan Chien
              </span>
            </div>
            <div className="flex sm:mt-[10px]">
              <div className=" sm:text-xl hidden lg:block">
                <div className="flex">
                  <div className="sm:mx-6 cursor-pointer hover:text-ct-theme-orange">
                    <h3>Work Experience</h3>
                  </div>
                  <div className="sm:mx-6 cursor-pointer hover:text-ct-theme-orange">
                    <h3>Project</h3>
                  </div>
                  <div className="sm:mx-6 cursor-pointer hover:text-ct-theme-orange">
                    <h3>Contact</h3>
                  </div>
                </div>
              </div>
              <div className="sm:mx-6 cursor-pointer hover:text-ct-theme-orange">
                <Menu
                  classNames={{
                    dropdown: "sm:mt-[14px]",
                    itemLabel: "font-Lobster sm:text-lg text-sm px-2 ",
                  }}
                >
                  <Menu.Target>
                    <HambergerMenu size={32} />
                  </Menu.Target>

                  <Menu.Dropdown className="font-Lobster sm:w-[250px] w-full">
                    <Menu.Item component="a" href="">
                      <h3>Work Experience</h3>
                    </Menu.Item>

                    <Menu.Item component="a" href="">
                      <h3>Project</h3>
                    </Menu.Item>
                    <Menu.Item component="a" href="">
                      <h3>Contact</h3>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
