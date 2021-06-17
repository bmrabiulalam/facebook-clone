import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from "@heroicons/react/outline";
import HeaderIcon from './HeaderIcon';
import { signOut, useSession } from 'next-auth/client';


function Header() {
    const [session] = useSession();

    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className='flex items-center'>
                <Image 
                    src='https://links.papareact.com/5me' 
                    height={40} 
                    width={40} 
                    layout='fixed' 
                />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-500' />
                    <input className='flex hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type='text' placeholder='Search Facebook' />
                </div>
            </div>

            {/* Center */}
            <div className='flex justify-center flex-grow'>
                <div className='flex flex-row space-x-6 md:space-x-4'>
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width='40'
                    height='40'
                    layout='fixed'
                />

                <p className='whitespace-nowrap text-semibold px-3'>{session.user.name}</p>
                <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' />
            </div>
        </div>
    )
}

export default Header