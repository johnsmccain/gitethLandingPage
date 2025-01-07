import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import CustomBtn from '../Common/CustomBtn';
import githubIcon from "../../assets/icons/githubIcon.png";
import { Modal } from '../Modal';

export default function Navigation() {
  const [activediv, setActivediv] = useState('Home'); // Initial active div
  const [isOpen, setIsOpen] = useState(false); // Initial active div
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);


  return (<div className="">

    <Navbar className="fixed w-full z-50 bg-opacity-90 dark:bg-opacity-5 backdrop-blur-sm py-6 px-5 m-0">
      <Navbar.Brand href="/">
        <img src="/EthOpenSource.svg" alt="logo" className='w-48 md:w-44' />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">


        <div className="relative">
          <CustomBtn icon={githubIcon} text={`Connect with github`} colored="yes" style="hidden md:flex" />
        </div>

        {/* <DarkThemeToggle /> */}
        <Navbar.Toggle className='w-8 h-8 flex items-center justify-center ' />
      </div>



      <Navbar.Collapse className='border-[#293056] md:border rounded-full p-2'>
        <div
          className={`${activediv === 'Home' ? 'border-[#293056] border rounded-full p-2 ' : 'p-2'
            }`}
        >
          <div
            // active={activediv === 'Home'}
            onClick={() => {setActivediv('Home'); onOpen()}}
            className={`${activediv === 'Home' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Home
          </div>
        </div>
        <div
          className={`${activediv === 'Projects' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => {setActivediv('Projects'); onOpen()}}
            className={`${activediv === 'Projects' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Projects
          </div>
        </div>
        <div
          className={`${activediv === 'Learn' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => {setActivediv('Learn'); onOpen()}}
            className={`${activediv === 'Learn' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Learn
          </div>
        </div>
        <div
          className={`${activediv === 'Contributors' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => {setActivediv('Contributors'); onOpen()}}
            className={`${activediv === 'Contributors' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Contributors
          </div>
        </div>
        <div
          className={`${activediv === 'Applications' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => {setActivediv('Applications'); onOpen()}}
            className={`${activediv === 'Applications' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Applications
          </div>
        </div>
        <div
          className={`${activediv === 'Rewards' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => {setActivediv('Rewards'); onOpen()}}
            className={`${activediv === 'Rewards' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Rewards
          </div>
        </div>
        <div
          className={`${activediv === 'Community' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => {setActivediv('Community'); onOpen()}}
            className={`${activediv === 'Community' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Community
          </div>
        </div>
      </Navbar.Collapse>

    </Navbar>
    <Modal isOpen={isOpen} onClose={onClose} >
      <div className="text-black text-xl">Coming soon!</div>
    </Modal>
  </div>
  );
}
