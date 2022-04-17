import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import { IoMenu, IoClose, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5'
import styles from '../styles/Navbar.module.css'

const navigation = [
    {name: 'About', href: '/about'},
    {name: 'Tournament', href: '/tournament'},
    {name: 'Contact', href: '/contact'},
];

const socials = [
    {icon: IoLogoFacebook, href: '/'},
    {icon: IoLogoTwitter, href: '/'},
    {icon: IoLogoInstagram, href: '/'},
]

const Navbar = () => {
    const router = useRouter();

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
                        {navigation.map((item, index) => (
                            <div className={styles.navItem} key={index} onClick={() => router.push(`${item.href}`)}>{item.name}</div>
                        ))}
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