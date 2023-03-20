import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // useEffect(() => {
    //     if (dark == true) {
    //         setdark(false)
    //     } else {
    //         setdark(true)
    //     }
    // }, [])

    return (
        <div className="container bg-black">
            <div className="header">
                
            </div>
        </div>
    )
}

export default Home;
