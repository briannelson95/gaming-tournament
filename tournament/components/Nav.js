import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import { IoMenu, IoClose } from 'react-icons/io5'

const navigation = [
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Tournament', href: '/tournament'},
    {name: 'Contact', href: '/contact'},
]

const Navbar = () => {
    const router = useRouter();

    return (
        <Disclosure as='nav' >
            {({open}) => (
                <>
                    
                </>
            )}
        </Disclosure>
    )
}