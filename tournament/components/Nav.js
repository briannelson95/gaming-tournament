import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { IoMenu, IoClose, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoChevronDown, IoChevronUp } from 'react-icons/io5'
import styles from '../styles/Navbar.module.css'
import { useState, Fragment } from 'react'

const navigation = [
    {name: 'About', href: '/about'},
    {name: 'Tournament', href: '/tournament'},
    {name: 'Contact', href: '/contact'},
];

const subMenu = [
    {name: 'Rules', href: '/rules'},
    {name: 'Teams', href: '/teams'},
    {name: 'Schedule', href: '/schedule'},
]

const socials = [
    {icon: IoLogoFacebook, href: '/'},
    {icon: IoLogoTwitter, href: '/'},
    {icon: IoLogoInstagram, href: '/'},
]

const Navbar = () => {
    const router = useRouter();
    const [isShowing, setIsShowing] = useState(false)

    return (
        <Disclosure as='nav' className={styles.nav} >
            {({open}) => (
                <>
                    <div className={styles.hamburger}>
                        <h1 onClick={() => router.push(`/`)}>Name/Logo</h1>
                        {/* Mobile Menu Button */}
                        <Disclosure.Button className={styles.button}>
                            {open ? (
                                <IoClose size={30} />
                            ) : 
                                <IoMenu size={30} />
                            }
                        </Disclosure.Button>
                    </div>
                    <div className={styles.navList}>
                        <h1>Name/Logo</h1>
                        <div className={styles.navItem} onClick={navigation[0].href}>
                            {navigation[0].name}
                        </div>
                        <Disclosure as='subNav' className={styles.subNav}>
                            {({open}) => (
                                <>
                                    <Disclosure.Button className={styles.button}>
                                        {open ? (
                                            <div className={styles.navItem}>{navigation[1].name} <IoChevronUp size={15} className={styles.navItemIcon} /></div>
                                        ) : (
                                            <div className={styles.navItem}>{navigation[1].name} <IoChevronDown size={15} /></div>
                                        )}
                                    </Disclosure.Button>
                                    <Disclosure.Panel className={styles.megaMenu} style={{position: 'absolute'}}>
                                        <div className={styles.megaMenuItems}>
                                            <div>{subMenu[0].name}</div>
                                            <div>{subMenu[1].name}</div>
                                            <div>{subMenu[2].name}</div>
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                        <div className={styles.navItem} onClick={navigation[2].href}>
                            {navigation[2].name}
                        </div>
                        <div className={`${styles.navItem} ${styles.social}`}>
                            <IoLogoFacebook size={30} />
                        </div>
                        <div className={`${styles.navItem} ${styles.social}`}>
                            <IoLogoTwitter size={30} />
                        </div>
                        <div className={`${styles.navItem} ${styles.social}`}>
                            <IoLogoInstagram size={30} />
                        </div>
                    </div>
                    <Disclosure.Panel>
                        {navigation.map((item, index) => (
                            <div className={styles.mobileItem} key={index} onClick={() => router.push(`${item.href}`)}>{item.name}</div>
                        ))}
                        <div className={`${styles.n} ${styles.social}`}>
                            <IoLogoFacebook size={30} />
                        </div>
                        <div className={`${styles.n} ${styles.social}`}>
                            <IoLogoTwitter size={30} />
                        </div>
                        <div className={`${styles.n} ${styles.social}`}>
                            <IoLogoInstagram size={30} />
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default Navbar