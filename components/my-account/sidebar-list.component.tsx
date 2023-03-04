import React from "react";
import ListItem from "./list-item.component";

const SidebarList = ({ section, icons, handleSelect, selectedItem }) => {
  return (
    <ul className="flex flex-col bg-white text-gray-700  capitalize">
      {section.map((key, index) => {
        const icon = icons.get(key);

        return (
          <ListItem
            key={key + index}
            handleSelect={() => {
              handleSelect(key);
            }}
            selectedItem={selectedItem}
            icon={icon}
            label={key}
          ></ListItem>
        );
      })}
    </ul>
  );
};

export default SidebarList;
