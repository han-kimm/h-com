import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      로그인 후 레이아웃
      {children}
    </div>
  );
};

export default Layout;
