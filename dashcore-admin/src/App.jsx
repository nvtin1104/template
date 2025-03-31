import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Dashboard = lazy(() => import("./pages/dashboard/crm"));

const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));
const ForgotPass = lazy(() => import("./pages/auth/forgot-password"));
const LockScreen = lazy(() => import("./pages/auth/lock-screen"));
const Error = lazy(() => import("./pages/404"));
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";

const PricingPage = lazy(() => import("./pages/utility/pricing"));
const ComingSoonPage = lazy(() => import("./pages/utility/coming-soon"));
const UnderConstructionPage = lazy(() =>
  import("./pages/utility/under-construction")
);
const FaqPage = lazy(() => import("./pages/utility/faq"));
const Profile = lazy(() => import("./pages/utility/profile"));
const ChangelogPage = lazy(() => import("./pages/changelog"));
const ChatPage = lazy(() => import("./pages/app/chat"));
const ProjectPostPage = lazy(() => import("./pages/app/projects"));
const ProjectDetailsPage = lazy(() =>
  import("./pages/app/projects/project-details")
);

import Loading from "@/components/Loading";
function App() {
  return (
    <main className="App  relative">
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/lock-screen" element={<LockScreen />} />
        </Route>
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="workbots" element={<ProjectPostPage />} />
          <Route path={"workbots/:id"} element={<ProjectDetailsPage />} />
          <Route path="package" element={<PricingPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="changelog" element={<ChangelogPage />} />
          <Route path="*" element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          } />
        </Route>
        <Route
          path="/404"
          element={
            <Suspense fallback={<Loading />}>
              <Error />
            </Suspense>
          }
        />
        <Route
          path="/coming-soon"
          element={
            <Suspense fallback={<Loading />}>
              <ComingSoonPage />
            </Suspense>
          }
        />
        <Route
          path="/under-construction"
          element={
            <Suspense fallback={<Loading />}>
              <UnderConstructionPage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
