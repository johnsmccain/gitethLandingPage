import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import CustomBtn from '../Common/CustomBtn';
import githubIcon from "../../assets/icons/githubIcon.png";

export default function Navigation() {
  const [activediv, setActivediv] = useState('Home'); // Initial active div

  return (
    <Navbar className="fixed w-full z-50 bg-opacity-90 dark:bg-opacity-5 backdrop-blur-sm py-6 px-5 m-0">
      <Navbar.Brand href="/">
        <img src="/EthOpenSource.svg" alt="logo" className='w-48 md:w-44' />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">

        
          <div className="relative">
            <CustomBtn icon={githubIcon} text={`coming soon`} colored="yes" style="hidden md:flex"  />
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
            onClick={() => setActivediv('Home')}
            className={`${activediv === 'Home' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
        <div
          className={`${activediv === 'Projects' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => setActivediv('Projects')}
            className={`${activediv === 'Projects' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
        <div
          className={`${activediv === 'Learn' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => setActivediv('Learn')}
            className={`${activediv === 'Learn' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
        <div
          className={`${activediv === 'Contributors' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => setActivediv('Contributors')}
            className={`${activediv === 'Contributors' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
        <div
          className={`${activediv === 'Applications' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => setActivediv('Applications')}
            className={`${activediv === 'Applications' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
        <div
          className={`${activediv === 'Rewards' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => setActivediv('Rewards')}
            className={`${activediv === 'Rewards' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
        <div
          className={`${activediv === 'Community' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <div
            onClick={() => setActivediv('Community')}
            className={`${activediv === 'Community' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            coming soon
          </div>
        </div>
      </Navbar.Collapse>

    </Navbar>
  );
}
