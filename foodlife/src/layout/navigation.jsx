import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { BottomNavigation, Page } from "zmp-ui";

const NavigationMenu = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const { title } = props;
  return (
      <div className="navigation-menu">
        <Icon icon="tabler:home" width="24" height="24" />
      </div>
  );
};

export default NavigationMenu;
