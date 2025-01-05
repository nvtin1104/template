import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { getUserID, setNavigationBarColor, showToast } from "zmp-sdk";
import bannerImage from '../assets/images/index-banner.webp';


const HomePage = () => {
  const navigate = useNavigate();
  setNavigationBarColor({
    color: null,
    success: (res) => {
      // xử lý khi gọi api thành công
    },
    fail: (error) => {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  });
  return (
    <Page >
      <Suspense>
    <img src={bannerImage} alt="logo" className="img-fluid"/>
      </Suspense>
      <div className="page section-container">
        <List>
          <List.Item
            onClick={() => navigate("/about")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>About</div>
          </List.Item>
          <List.Item
            onClick={() => navigate("/user")}
            suffix={<Icon icon="zi-arrow-right" />}
          >
            <div>User</div>
          </List.Item>
        </List>
      </div>
    </Page>
  );
};

export default HomePage;
