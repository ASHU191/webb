'use client';
import { FC, useState } from 'react';

import SidebarMenu from '@/components/SidebarMenu';
import { AnimatePresence } from 'framer-motion';

interface Props {}

const Index: FC<Props> = () => {
  const [isActive, setIsActive] = useState(false);
  const closeSidebar = () => setIsActive(false);

  return (
    <div>
      <div className="fixed left-0 z-[4001] p-[2vw]">
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className="flex h-[4.5vw] w-[4.5vw] cursor-pointer items-center justify-center rounded-full bg-stone-400"
        >
          <div className={`burger ${isActive && 'burgerActive'}`}></div>
        </button>
      </div>
      <AnimatePresence mode="wait">{isActive && <SidebarMenu close={closeSidebar} />}</AnimatePresence>
    </div>
  );
};
export default Index;
