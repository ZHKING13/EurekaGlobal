import React, { useState } from "react";
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
    AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
    productServiceItems,
    targetAudienceItems,
    trainingModuleItems,
} from "../../data";

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

function NavListMenu({ handleLocationChange }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = productServiceItems.map(
        ({ icon, title, description, link }, key) => (
            <Link
                onClick={() => handleLocationChange()}
                to={`produits-services/${link}`}
                key={key}
            >
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
            </Link>
        )
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
                    <Typography
                        as="div"
                        variant="small"
                        className="font-medium"
                    >
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
function Cible({ handleLocationChange }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = targetAudienceItems.map(
        ({ icon, title, description, link }, key) => (
            <Link
                onClick={() => handleLocationChange()}
                to={`preambule/${link}`}
                key={key}
            >
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
        )
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
                    <Typography
                        as="div"
                        variant="small"
                        className="font-medium"
                    >
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
function Formation({ handleLocationChange }) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = trainingModuleItems.map(
        ({ icon, title, description, id }, key) => (
            <Link
                onClick={() => handleLocationChange()}
                to={`/formations/${id}`}
                key={key}
            >
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
            </Link>
        )
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
                    <Typography
                        as="div"
                        variant="small"
                        className="font-medium"
                    >
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

function NavList({ selectedItem, setSelectedItem, handleLocationChange }) {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row ">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <Link onClick={() => setSelectedItem("/")} to="/">
                    <ListItem
                        className={`flex items-center gap-2 py-2 pr-4 ${
                            selectedItem === "/" ? "text-secondary" : ""
                        }`}
                    >
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
                <Link
                    onClick={() => setSelectedItem("/preambule")}
                    className="flex"
                    to="/preambule"
                >
                    <ListItem
                        className={`flex items-center gap-2 md:py-2 md:pr-2 ${
                            selectedItem === "/preambule"
                                ? "text-secondary"
                                : ""
                        }`}
                    >
                        Nos cibles
                    </ListItem>
                </Link>
                <Cible handleLocationChange={handleLocationChange} />
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium flex items-center"
            >
                <Link
                    onClick={() => setSelectedItem("/produits-services")}
                    className="flex"
                    to="/produits-services"
                >
                    <ListItem
                        className={`flex items-center gap-2 md:py-2 md:pr-2 ${
                            selectedItem === "/produits-services"
                                ? "text-secondary"
                                : ""
                        }`}
                    >
                        Produits & Services
                    </ListItem>
                </Link>
                <NavListMenu handleLocationChange={handleLocationChange} />
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium flex items-center"
            >
                <Link
                    onClick={() => setSelectedItem("/formations")}
                    className="flex"
                    to="/formations"
                >
                    <ListItem
                        className={`flex items-center gap-2 md:py-2 md:pr-2 ${
                            selectedItem === "/formations"
                                ? "text-secondary"
                                : ""
                        }`}
                    >
                        Nos formations
                    </ListItem>
                </Link>
                <Formation handleLocationChange={handleLocationChange} />
            </Typography>

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
                <Link onClick={() => setSelectedItem("/about")} to="/about">
                    <ListItem
                        className={`flex items-center gap-2 md:py-2 md:pr-2 ${
                            selectedItem === "/about" ? "text-secondary" : ""
                        }`}
                    >
                        Qui sommes-nous
                    </ListItem>
                </Link>
            </Typography>
        </List>
    );
}

export function NavBareMenu() {
    const [openNav, setOpenNav] = React.useState(false);
    const [selectedItem, setSelectedItem] = useState("/");
    const [path, setPath] = useState("/");
    const paths = window.location.pathname;
    const splitLocation = paths.split("/");
    const location = splitLocation[1];
    const setCurentLocation = (location) => {
        console.log("location: " + location);
        setSelectedItem("/" + location);
    };
    const handleLocationChange = () => {
        const paths = window.location.pathname;
        const splitLocation = paths.split("/");
        const location = splitLocation[1];
        console.log("location: " + location);
        setSelectedItem(location);
    };
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    React.useEffect(() => {
        setCurentLocation(location);
    }, [selectedItem]);

    return (
        <Navbar className="mx-auto text-primary  container  px-2 py-1 rounded-[45px]">
            <div className="flex items-center justify-between md:flex-row-reverse ">
                <div className="md:order-2">
                    <Logo />
                </div>
                <div className="hidden md:order-1 lg:block">
                    <NavList
                        handleLocationChange={handleLocationChange}
                        selectedItem={selectedItem}
                        setSelectedItem={setSelectedItem}
                    />
                </div>
                <Link
                    onClick={() => setSelectedItem("/contacte")}
                    to={"/contact"}
                    className="hidden order mr-1 gap-2 lg:flex"
                >
                    <Button className="rounded-[45px] " size="lg">
                        Contactez-nous maintenant
                    </Button>
                </Link>
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
                <NavList
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
                <Link
                    to={"/contact"}
                    className="flex w-full flex-nowrap items-center gap-2 lg:hidden"
                >
                    <Button className="rounded-[45px] mb-3" size="lg" fullWidth>
                        Contactez-nous maintenant
                    </Button>
                </Link>
            </Collapse>
        </Navbar>
    );
}
