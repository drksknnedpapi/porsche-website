import React, { useState } from "react"
import { ChevronRight } from "lucide-react"

const models = [
  { name: "Taycan", variants: ["Electric"] },
  { name: "Panamera", variants: ["Hybrid", "Gasoline"] },
  { name: "Macan", variants: ["Electric", "Gasoline"] },
  { name: "Cayenne", variants: ["Hybrid", "Gasoline"] },
]

const mainNavItems = [
  { title: "Models", items: models },
  { title: "Vehicle Purchase" },
  { title: "Services" },
  { title: "Experience" },
  { title: "Find a Dealer" },
]

const PorscheSidebar = () => {
  const [openSubmenu, setOpenSubmenu] = useState(null)

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index)
  }

  return (
    <aside className="w-64 bg-white h-screen overflow-y-auto">
      <div className="p-6">
        {/* Logo placeholder */}
        <div className="h-6 w-32 bg-gray-200" />
      </div>
      <nav>
        <ul>
          {mainNavItems.map((item, index) => (
            <li key={item.title} className="border-b border-gray-100">
              <button
                className="flex items-center justify-between w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none"
                onClick={() => item.items && toggleSubmenu(index)}
              >
                <span className="font-['PorscheNext']">{item.title}</span>
                {item.items && (
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${openSubmenu === index ? "rotate-90" : ""}`}
                  />
                )}
              </button>
              {item.items && openSubmenu === index && (
                <ul className="bg-gray-50">
                  {item.items.map((model) => (
                    <li key={model.name} className="p-6">
                      <h3 className="text-lg font-medium font-['PorscheNext']">{model.name}</h3>
                      <div className="mt-2 flex gap-2">
                        {model.variants.map((variant) => (
                          <span key={variant} className="text-xs text-gray-600">
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
        </ul>
      </nav>
    </aside>
  )
}

export default PorscheSidebar

