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
            href="#about"
            className={navigationMenuTriggerStyle()}
        >
            About
        </NavigationMenuLink>
        
        <NavigationMenuLink 
            href="#experience"
            className={navigationMenuTriggerStyle()}
        >
            Experience
        </NavigationMenuLink>

                <NavigationMenuLink 
            href="#skills"
            className={navigationMenuTriggerStyle()}
        >
            Skills
        </NavigationMenuLink>

                <NavigationMenuLink 
            href="#projects"
            className={navigationMenuTriggerStyle()}
        >
            Projects
        </NavigationMenuLink>

                <NavigationMenuLink 
            href="#contact"
            className={navigationMenuTriggerStyle()}
        >
            Contact
        </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}