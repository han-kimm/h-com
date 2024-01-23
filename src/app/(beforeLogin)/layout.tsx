const Layout = ({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) => {
  return (
    <div>
      로그인 전 레이아웃
      {children}
      {modal}
    </div>
  );
};

export default Layout;
