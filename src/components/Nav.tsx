import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
        <NavigationMenuLink 
            href="#about" // L'ancre commence par #
            className={navigationMenuTriggerStyle()}
        >
            About
        </NavigationMenuLink>
        
        <NavigationMenuLink 
            href="#experience" // L'ancre commence par #
            className={navigationMenuTriggerStyle()}
        >
            Experience
        </NavigationMenuLink>

                <NavigationMenuLink 
            href="#skills" // L'ancre commence par #
            className={navigationMenuTriggerStyle()}
        >
            Skills
        </NavigationMenuLink>

                <NavigationMenuLink 
            href="#projects" // L'ancre commence par #
            className={navigationMenuTriggerStyle()}
        >
            Projects
        </NavigationMenuLink>

                <NavigationMenuLink 
            href="#contact" // L'ancre commence par #
            className={navigationMenuTriggerStyle()}
        >
            Contact
        </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}