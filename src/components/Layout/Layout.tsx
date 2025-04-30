import React, { ReactNode } from 'react'


interface LayoutProps {
  children: React.ReactNode;
}

const Layout:React.FC<LayoutProps> = ({children}:{children:ReactNode}) => {
  return (
    <div>{children}</div>
  )
}

export default Layout
