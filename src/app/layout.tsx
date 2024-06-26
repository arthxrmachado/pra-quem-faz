import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <main className="bg-[#161616]">{children}</main>
    </>
  );
};

export default Layout;