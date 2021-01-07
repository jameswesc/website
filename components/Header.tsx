import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { HamburgerMenuIcon } from '@modulz/radix-icons'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="py-4 px-2 sm:px-4 flex items-center justify-between">
            <Link href="/">
                <a
                    className="font-standard font-black text-xl"
                    aria-label="Home"
                >
                    jwsc
                </a>
            </Link>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger className="bg-pink-100 p-3  focus:bg-pink-200 hover:bg-pink-200 focus:outline-none">
                    <AccessibleIcon.Root label="Menu">
                        <HamburgerMenuIcon />
                    </AccessibleIcon.Root>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content className="py-2 grid gap-2">
                    <DropdownMenu.Label className="font-standard text-xs text-pink-600">
                        Active
                    </DropdownMenu.Label>

                    <DropdownMenu.Item
                        as="a"
                        href="https://www.notion.so/jameswesc/Digital-Garden-8abe1bf736c14f26a002c3678d33dd7c"
                        target="__blank"
                        className="p-2 bg-pink-100 hover:bg-pink-200 focus:bg-pink-200 outline-none font-brand underline"
                    >
                        🌺 Digital Garden
                    </DropdownMenu.Item>

                    {/* <DropdownMenu.Separator className="h-px bg-pink-500" /> */}

                    <DropdownMenu.Label className="font-standard text-xs text-pink-400">
                        Coming Soon
                    </DropdownMenu.Label>

                    <DropdownMenu.Item
                        as="a"
                        href="/"
                        className="p-2 bg-pink-100  outline-none font-brand cursor-not-allowed underline "
                    >
                        <span className="opacity-50"> 🚧 About</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        as="a"
                        href="/"
                        className="p-2 bg-pink-100  outline-none font-brand cursor-not-allowed underline "
                    >
                        <span className="opacity-50"> 🚧 Work</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        as="a"
                        href="/"
                        className="p-2 bg-pink-100  outline-none font-brand cursor-not-allowed underline "
                    >
                        <span className="opacity-50"> 🚧 Experiments</span>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                        as="a"
                        href="/"
                        className="p-2 bg-pink-100  outline-none font-brand cursor-not-allowed underline "
                    >
                        <span className="opacity-50"> 🚧 Contact</span>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </div>
    )
}
