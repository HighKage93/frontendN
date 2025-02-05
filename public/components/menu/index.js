import { useRouter } from "next/router"; // Use Next.js router
import { useEffect, useState } from "react";
import MenuItemNew from "./MenuItem";
import { AlignCenter, Code, Monitor, User } from "react-feather";

export const menuConfig = [
  { key: "profile", route: "/profile", toolTip: "Home", icon: <AlignCenter /> },
  { key: "about", route: "/profile/about", toolTip: "About", icon: <User /> },
  { key: "skills", route: "/profile/skills", toolTip: "Skills", icon: <Code /> },
  { key: "blogs", route: "/profile/blogs", toolTip: "Blogs", icon: <Monitor /> },
  { key: "contact", route: "/profile/contact", toolTip: "Contact Info", icon: null },
];

const Menu = () => {
  const router = useRouter(); // Use useRouter hook
  const [selected, setSelected] = useState("");

  // Set selected based on current route
  useEffect(() => {
    if (typeof window !== "undefined") { // Check if window is available
      console.log(router.pathname, " asdf ", window.location.pathname);
      const currentMenu = menuConfig.find((item) => item.route === window.location.pathname);
      if (currentMenu) {
        setSelected(currentMenu.key);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);   // Re-run when pathname changes

  // Handle menu item click
  const handleMenuClick = (key, route) => {
    setSelected(key);
    router.push(route); // Navigate using Next.js router
  };

  return (
    <div
      className="mx-5 my-5"
      style={{
        borderRadius: "40px",
        border: "2px solid white",
        backgroundColor: "GrayText",
        width: "80px",
      }}
    >
      {menuConfig.map((elem) => (
        <MenuItemNew
          key={elem.key}
          data={elem}
          selected={selected}
          onClick={() => handleMenuClick(elem.key, elem.route)}
        />
      ))}
    </div>
  );
};

export default Menu;
