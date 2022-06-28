import React from "react";
import HeadersPage from "~/components/headers-page";

export interface MainLayoutProps {
  children: React.ReactNode;
  title?: String;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  return (
    <div className="min-h-full">
      <HeadersPage />
      {props.children}
    </div>
  );
};
