import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  
  Square3Stack3DIcon,
  SunIcon,
  TagIcon,
	UserGroupIcon,
  AcademicCapIcon
} from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { productServiceItems, targetAudienceItems, trainingModuleItems } from "../../data";
 
const navListMenuItems = [
  {
    title: "Produits & Services",
    description: "Pour votre Réussite strategique",
    icon: Square3Stack3DIcon,
  },
 
  {
    title: "Nos Formations à la Carte",
    description: "Pour vos Equipes",
    icon: AcademicCapIcon,
  },
  {
    title: "Produits & Services",
    description: "Pour votre Réussite strategique",
    icon: Square3Stack3DIcon,
  },
 
  {
    title: "Nos Formations à la Carte",
    description: "Pour vos Equipes",
    icon: AcademicCapIcon,
  },
  {
    title: "Produits & Services",
    description: "Pour votre Réussite strategique",
    icon: Square3Stack3DIcon,
  },
 
  {
    title: "Nos Formations à la Carte",
    description: "Pour vos Equipes",
    icon: AcademicCapIcon,
  },
 
  
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = productServiceItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-gray-300 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-primary text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
      <React.Fragment>
          <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
          >
              <MenuHandler>
                  <Typography as="div" variant="small" className="font-medium">
                      <ListItem
                          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                          selected={isMenuOpen || isMobileMenuOpen}
                          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                      >
                          Produits & Services
                          <ChevronDownIcon
                              strokeWidth={2.5}
                              className={`hidden h-3 w-3 transition-transform lg:block ${
                                  isMenuOpen ? "rotate-180" : ""
                              }`}
                          />
                          <ChevronDownIcon
                              strokeWidth={2.5}
                              className={`block h-3 w-3 transition-transform lg:hidden ${
                                  isMobileMenuOpen ? "rotate-180" : ""
                              }`}
                          />
                      </ListItem>
                  </Typography>
              </MenuHandler>
              <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                  <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                      {renderItems}
                  </ul>
              </MenuList>
          </Menu>
          <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
          </div>
      </React.Fragment>
  );
}
function Cible() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = targetAudienceItems.map(
    ({ icon, title, description,link }, key) => (
      <Link to={`preambule/${link}`} key={key}>
        <MenuItem className="flex items-center gap-3  rounded-lg">
          <div className="flex items-center justify-center rounded-lg bg-gray-300 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-primary text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );
 
  return (
      <React.Fragment>
          <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
          >
              <MenuHandler>
                  <Typography as="div" variant="small" className="font-medium">
                      <ListItem
                          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                          selected={isMenuOpen || isMobileMenuOpen}
                          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                      >
                          
                          <ChevronDownIcon
                              strokeWidth={2.5}
                              className={`hidden h-3 w-3 transition-transform lg:block ${
                                  isMenuOpen ? "rotate-180" : ""
                              }`}
                          />
                          <ChevronDownIcon
                              strokeWidth={2.5}
                              className={`block h-3 w-3 transition-transform lg:hidden ${
                                  isMobileMenuOpen ? "rotate-180" : ""
                              }`}
                          />
                      </ListItem>
                  </Typography>
              </MenuHandler>
              <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                  <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                      {renderItems}
                  </ul>
              </MenuList>
          </Menu>
          <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
          </div>
      </React.Fragment>
  );
}
function Formation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = trainingModuleItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg bg-gray-300 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-primary text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
      <React.Fragment>
          <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
          >
              <MenuHandler>
                  <Typography as="div" variant="small" className="font-medium">
                      <ListItem
                          className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                          selected={isMenuOpen || isMobileMenuOpen}
                          onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                      >
                          Nos formations
                          <ChevronDownIcon
                              strokeWidth={2.5}
                              className={`hidden h-3 w-3 transition-transform lg:block ${
                                  isMenuOpen ? "rotate-180" : ""
                              }`}
                          />
                          <ChevronDownIcon
                              strokeWidth={2.5}
                              className={`block h-3 w-3 transition-transform lg:hidden ${
                                  isMobileMenuOpen ? "rotate-180" : ""
                              }`}
                          />
                      </ListItem>
                  </Typography>
              </MenuHandler>
              <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                  <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                      {renderItems}
                  </ul>
              </MenuList>
          </Menu>
          <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
          </div>
      </React.Fragment>
  );
}
 
function NavList() {
  return (
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row ">
          <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-medium"
          >
              <Link to="/">
                  <ListItem className="flex items-center gap-2 py-2 pr-4">
                      Acceuil
                  </ListItem>
              </Link>
          </Typography>
          <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-medium flex items-center"
          >
              <Link className="flex" to="/preambule">
                  <ListItem className="flex items-center  gap-2 md:py-2 md:pr-2">
                      Nos cibles
                  </ListItem>
              </Link>
              <Cible />
          </Typography>
          <NavListMenu />

          {/* <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-medium"
          >
              <Link to="/">
                  <ListItem className="flex items-center gap-2 py-2 pr-4">
                      Produits & Services
                  </ListItem>
              </Link>
          </Typography> */}
          <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
        className="font-medium"
        
          >
              <Link to="/">
                 
                      <Formation />
                 
              </Link>
          </Typography>
          <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-medium"
          >
              <Link to="/">
                  <ListItem className="flex items-center gap-2 py-2 pr-4">
                      Qui sommes-nous
                  </ListItem>
              </Link>
          </Typography>
      </List>
  );
}
 
export function NavBareMenu() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
      <Navbar className="mx-auto text-primary  container  px-5 py-1 rounded-[45px]">
          <div className="flex items-center justify-between md:flex-row-reverse ">
              <div className="md:order-2">
                  <Logo />
              </div>
              <div className="hidden md:order-1 lg:block">
                  <NavList />
              </div>
              <div className="hidden order -mr-2 gap-2 lg:flex">
                  <Button className="rounded-[45px] " size="lg">
                      Prendre rendez-vous
                  </Button>
              </div>
              <IconButton
                  variant="text"
                  color="blue-gray"
                  className="lg:hidden"
                  onClick={() => setOpenNav(!openNav)}
              >
                  {openNav ? (
                      <XMarkIcon className="h-6 mb-2 w-6" strokeWidth={3} />
                  ) : (
                      <Bars3Icon className="h-6 mb-4 w-6" strokeWidth={3} />
                  )}
              </IconButton>
          </div>
          <Collapse open={openNav}>
              <NavList />
              <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                  <Button className="rounded-[45px] mb-3" size="lg" fullWidth>
                      Exprimez vos besoins
                  </Button>
              </div>
          </Collapse>
      </Navbar>
  );
}