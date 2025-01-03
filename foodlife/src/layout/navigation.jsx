import React, { useState } from "react";
import { BottomNavigation, Icon, Page } from "zmp-ui";

const NavigationMenu = (props) => {
  const [activeTab, setActiveTab] = useState("chat");
  const { title } = props;
  return (
      <BottomNavigation
        fixed
        activeKey={activeTab}
        onChange={(key) => setActiveTab(key)}
        className="bottom-navigation"
      >
        <BottomNavigation.Item
          key="chat"
          label="Tin Nhắn"
          icon={<Icon icon="zi-chat" />}
          activeIcon={<Icon icon="zi-chat-solid" />}
        />
        <BottomNavigation.Item
        linkTo="/form"
          label="Danh bạ"
          key="contact"
          icon={<Icon icon="zi-call" />}
          activeIcon={<Icon icon="zi-call-solid" />}
        />
        <BottomNavigation.Item
          label="Home"
          key="discovery"
          icon={<Icon icon="zi-home" />}
          activeIcon={<Icon icon="zi-home-solid" />}
        />
        <BottomNavigation.Item
          key="timeline"
          label="Nhật ký"
          icon={<Icon icon="zi-clock-1" />}
          activeIcon={<Icon icon="zi-clock-1-solid" />}
        />
        <BottomNavigation.Item
          key="me"
          label="Cá nhân"
          icon={<Icon icon="zi-user" />}
          activeIcon={<Icon icon="zi-user-solid" />}
        />
      </BottomNavigation>
  );
};

export default NavigationMenu;
