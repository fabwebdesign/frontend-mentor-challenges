import React from "react";

interface MainLayoutProps {
  className?: string;
  children: React.ReactElement;
}

export const MainLayout = ({ className, children }: MainLayoutProps) => {
  return (
    <>
      <main id="main" className={className}>
        {children}
      </main>
    </>
  );
};
