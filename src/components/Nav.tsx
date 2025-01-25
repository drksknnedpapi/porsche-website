import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { mainNavItems, models } from "../assets/components";

function Menu({ isOpen, toggleSidebar }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div className="flex  ">
      <aside
        className={`fixed top-0 z-100  left-0 h-full w-[50%] bg-gray-800 text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 50 }}
      >
        {/* Sidebar Content */}
        <div className="px-[5.4rem] ">
          <div className="px=[200px]">
            <ul className="mt-[4.5rem]">
              {mainNavItems.map((item, index) => (
                <li key={item.title} className="border-b border-gray-100">
                  <button
                    className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 hover:text-black  focus:outline-none transition-all duration-[300ms] ease-in-out"
                    onClick={() => item.items && toggleSubMenu(index)}
                  >
                    <span>{item.title}</span>
                    {item.items && (
                      <ChevronRight
                        className={`w-5 h-5 transition-transform ${
                          openSubmenu === index ? "rotate-90" : ""
                        }`}
                      />
                    )}
                  </button>
                  {item.items && openSubmenu === index && (
                    <ul className="bg-gray-50">
                      {item.items.map((model) => (
                        <li key={model.name} className="p-6">
                          <h3 className="text-lg font-medium">{model.name}</h3>
                          <div className="mt-2 flex gap-2">
                            {model.variants.map((variant) => (
                              <span
                                key={variant}
                                className="text-xs text-gray-600"
                              >
                                {variant}
                              </span>
                            ))}
                          </div>
                          {/* Placeholder for model image */}
                          <div className="mt-4 aspect-[16/9] w-full bg-gray-200" />
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none"
                  onClick={toggleSidebar}
                >
                  <span>Close</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Set initial state
    setIsSmallScreen(window.innerWidth <= 650);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute z-50 w-screen">
      {/* Sidebar Component */}
      <Menu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <header
        className="h-[4.5625rem] w-full top-0 left-0 right-0 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-md"
        style={{ zIndex: 10 }}
      >
        <nav
          className="text-black relative flex p-6 gap-10 justify-between w-[90%] ml-[auto] mr-[auto]"
          style={{
            alignItems: "center",
          }}
        >
          {/* Menu Button */}
          <div>
            <button
              onClick={toggleSidebar}
              className="w-[100px] flex h-[fit-content]"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="40%"
                height="fit-content"
              >
                <path d="M18 16v1H6v-1zm0-5v1H6v-1zm0-5v1H6V6z" />
              </svg>{" "}
              <span>Menu</span>
            </button>
          </div>

          {/* Logo - Switch based on screen width */}

          <>
            {isSmallScreen ? (
              <div>
                <a href="/" target="_self" aria-label="Porsche.com">
                  <picture>
                    <source
                      srcSet="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.0d0cc89@1x.webp 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.2245c45@2x.webp 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.19b4292@3x.webp 3x"
                      type="image/webp"
                    />
                    <source
                      srcSet="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.d76137c@1x.png 1x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png 2x,https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.18d6f02@3x.png 3x"
                      type="image/png"
                    />
                    <img
                      src="https://cdn.ui.porsche.com/porsche-design-system/crest/porsche-crest.8a292fb@2x.png"
                      width="30"
                      height="40"
                      alt="Porsche"
                    />
                  </picture>
                </a>
              </div>
            ) : (
              <div className="w-auto max-w-[300px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 4500 300"
                  className="w-full h-auto max-w-[300px]"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <title>Porsche</title>
                  <path d="M502 221c48.1 0 74-25.9 74-74V74c0-48.1-25.9-74-74-74H0v300h68v-79h434zm6-143v65c0 7.8-4.2 12-12 12H68V66h428c7.8 0 12 4.2 12 12zm228 222c-48.1 0-74-25.9-74-74V74c0-48.1 25.9-74 74-74h417c48.1 0 74 25.9 74 74v152c0 48.1-25.9 74-74 74H736zm411-66c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12H742c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h405zm675-36c39.844 16.757 67.853 56.1 68 102h-68c0-54-25-79-79-79h-361v79h-68V0h502c48.1 0 74 25.9 74 74v50.14c0 46.06-23.75 71.76-68 73.86zm-12-43c7.8 0 12-4.2 12-12V78c0-7.8-4.2-12-12-12h-428v89h428zm162-81c0-48.1 25.9-74 74-74h492v56h-486c-7.8 0-12 4.2-12 12v42c0 7.8 4.2 12 12 12h422c48.1 0 74 25.9 74 74v30c0 48.1-25.9 74-74 74h-492v-56h486c7.8 0 12-4.2 12-12v-42c0-7.8-4.2-12-12-12h-422c-48.1 0-74-25.9-74-74V74zm661 0c0-48.1 25.9-74 74-74h480v66h-474c-7.8 0-12 4.2-12 12v144c0 7.8 4.2 12 12 12h474v66h-480c-48.1 0-74-25.9-74-74V74zM3817 0v300h-68V183h-407v117h-68V0h68v117h407V0h68zm156 56v66h527v56h-527v66h527v56h-595V0h595v56h-527z"></path>
                </svg>
              </div>
            )}
          </>

          {/* Placeholder for User Icon */}
          <div>
            <li style={{ listStyleType: "none" }} title="User">
              <button type="button">
                <a href="/">
                  <img
                    src="https://cdn.ui.porsche.com/porsche-design-system/icons/user.c18dabe.svg"
                    width="30"
                    height="30"
                    loading="lazy"
                    alt=""
                  />
                </a>
              </button>
            </li>
          </div>
        </nav>
      </header>
    </div>
  );
}
