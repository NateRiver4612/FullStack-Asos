import React from "react";

const Footer = ({ footers }) => {
  return (
    <div
      className={`w-full bottom-0  bg-gray-200 hidden md:grid px-[7%] py-[2%] md:grid-cols-3 lg:grid-cols-4`}
    >
      {footers.map((footer) => {
        const { children, content } = footer;
        return (
          <div
            key={footer.id + content.title}
            className="border-b-[1px] lg:border-none border-gray-300 pb-5"
          >
            <span className="uppercase font-bold text-[14px] text-gray-500 tracking-widest">
              {content.title}
            </span>
            <ul className="pt-2">
              {children.map((item) => (
                <li
                  key={item.key + item.content.title}
                  className="text-gray-500 py-1 text-[13px]"
                >
                  {item.content.title}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <div className="text-sm pt-5 lg:pt-0">
        <span className="uppercase font-bold text-gray-500 tracking-widest uppercase">
          shopping from
        </span>
      </div>
    </div>
  );
};

export default Footer;
