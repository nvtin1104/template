import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { useNavigate } from "zmp-ui";
import { useLocation } from 'react-router-dom';

const NavigationMenu = () => {
  const [iconSize, setIconSize] = useState(32);
  const { pathname } = useLocation();
  console.log(pathname);
  const navigate = useNavigate();
  return (
    <div className="navigation-container">
      <div className="navigation-main">
        <div className="navigation-icon" onClick={() => navigate("/")}>
          {
            pathname === "/" ? <Icon icon="mdi:home" className="active" width={iconSize} height={iconSize} /> : <Icon icon="mdi:home-outline" width={iconSize} height={iconSize} />
          }
        </div>
        <div className="navigation-icon " onClick={() => navigate("/game")}>
          {
            pathname === "/game" ? <Icon icon="mdi:gamepad-variant"  className="active"  width={iconSize} height={iconSize} /> : <Icon icon="mdi:gamepad-variant-outline" width={iconSize} height={iconSize} />
          }

        </div>
        <div className="navigation-center navigation-icon">
          <div className="navigation-center-container">
            <div className="navigation-center-bg">
              <div className="navigation-center-icon " onClick={() => navigate("/cart")}>
                <Icon icon="mingcute:shopping-cart-2-line" width={iconSize} height={iconSize} />
              </div>
            </div>
          </div>
        </div>
        <div className="navigation-icon" onClick={() => navigate("/notification")}>
          {
            pathname === "/notification" ? <Icon icon="mdi:bell" className="active" width={iconSize} height={iconSize} /> : <Icon icon="mdi:bell-outline" width={iconSize} height={iconSize} />
          }
        </div>
        <div className="navigation-icon" onClick={() => navigate("/account")}>
          {
            pathname === "/account" ? <Icon icon="mdi:account-circle" className="active" width={iconSize} height={iconSize} /> : <Icon icon="mdi:account-circle-outline" width={iconSize} height={iconSize} />
          }
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
