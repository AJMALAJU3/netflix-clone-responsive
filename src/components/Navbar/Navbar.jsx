import React from 'react'
import logo from '../../assets/logo.png'
import { FaCaretDown } from "react-icons/fa";
import search_icon from '../../assets/search-icon.png'
import bell_icon from '../../assets/bell-icon.png'
import profile_img from '../../assets/netflix-profile-pictures.jpg'

function Navbar() {
    return (
        <div class="w-full px-[6%] py-5 flex justify-between fixed text-sm bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-transparent z-10">

            <div id='navbar-left' class="flex items-center gap-12">
                <img src={logo} alt="" class="w-[90px]" />
                <ul class="flex list-none gap-5">
                    <li class="cursor-pointer">Home</li>
                    <li class="cursor-pointer">TV Shows</li>
                    <li class="cursor-pointer">Movies</li>
                    <li class="cursor-pointer">New & Popular</li>
                    <li class="cursor-pointer">My List</li>
                    <li class="cursor-pointer">Browse by Languages</li>
                </ul>
            </div>
            <div id='navbar-right' class="flex items-center gap-5">
                <img className='h-3 w-3' src={search_icon} alt="" class="w-[20px] cursor-pointer" />
                <p>Children</p>
                <img className='h-5 w-5' src={bell_icon} alt="" />
                <div id='navbar-profile' class="flex items-center gap-2 cursor-pointer relative group">
                    <img className='h-3 w-3' src={profile_img} alt="" class="w-[30px] cursor-pointer rounded-sm" />
                    <FaCaretDown />
                    <div class="absolute top-full right-0 w-max bg-[#191919] p-5 px-5 rounded-sm underline z-10 hidden group-hover:block">
                        Sign out of netflix
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
