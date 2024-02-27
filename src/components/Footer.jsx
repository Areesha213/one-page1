import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const sections = [
  {
    title: "Categories",
    items: ["Website-Builder", "Hosting", "Data center", "Robotic_Automation"],
  },
  {
    title: "Contact",
    items: ["Contact", "Privacy Policy", "Terms of Services", "Categories", "About"],
  },
];

const Footer = () => {
  return (
    <>
     <section >
     <div className="w-full mt-24 bg-gray-900 text-gray-300 py-8 px-2">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 border-b-2 border-gray-600">
    {sections.map((section, index) => (
      <div key={index} className="py-2">
        <h6 className="font-bold uppercase">{section.title}</h6>
        <ul className="mt-2">
          {section.items.map((item, i) => (
            <li key={i} className="py-1 text-gray-500 hover:text-white">
              {item}
            </li>
          ))}
        </ul>
      </div>
    ))}
    <div className="col-span-2 md:col-span-2 flex items-center justify-center md:justify-start pt-8 md:pt-2">
      <p className="  mr-2">United States</p>
      <IoIosArrowDown className="text-gray-500" />
    </div>
  </div>
</div>
</section>

    </>
   
  );
};

export default Footer;
