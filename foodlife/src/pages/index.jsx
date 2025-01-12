import React, { Suspense } from "react";
import { List, Page, Icon, useNavigate, Box } from "zmp-ui";
import { getUserID, setNavigationBarColor, showToast } from "zmp-sdk";
import bannerImage from '../assets/images/index-banner.webp';
import bannerIndex from '../assets/images/banner.png';
import { IconNotification, IconSearch } from "../components/icon";


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
        <Box className='banner-index'>
          <div className="banner-index-icon">
            <IconNotification />
            <IconSearch />
          </div>
          {/* <div className="banner-index-content">
            <div className="banner-title">Welcome to ZMP-UI</div>
            <div className="banner-subtitle">A React UI library for ZMP</div>
          </div> */}
          <img src={bannerIndex} alt="banner" className="img-fluid" />
        </Box>
        <div className=" bg-blue-500 text-white p-4 flex items-center justify-center">
  {/* Nội dung của Box */}tesst class taiwind
  <p>ss</p>
</div>

      </Suspense>

    </Page>
  );
};

export default HomePage;
