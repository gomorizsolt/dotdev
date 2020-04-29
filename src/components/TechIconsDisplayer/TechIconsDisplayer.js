import React from "react";
import { useConfig } from "../../contexts/Config";
import IconDisplayer from "../UI/Icons/IconDisplayer";

export default ({ technologies }) => {
  const { techIcons } = useConfig();

  return technologies.map(tech => {
    const icon = techIcons[tech.toLowerCase()];

    return icon ? (
      <IconDisplayer key={tech} name={icon.name} src={icon.path} />
    ) : (
      // eslint-disable-next-line no-console
      console.warn(`Missing icon for ${tech} technology.`)
    );
  });
};
