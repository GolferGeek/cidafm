'use client'

import { useState } from 'react'

interface Section {
  id: string
  title: string
}

const sections: Section[] = [
  { id: 'installation', title: 'Installation' },
  { id: 'create-your-own', title: 'Create Your Own' },
  { id: 'core-concepts', title: 'Core Concepts' },
  { id: 'usage-rules', title: 'Usage Rules' },
  { id: 'default-state', title: 'Default State' }
]

export function DocsNav() {
  const [activeSection, setActiveSection] = useState('installation')

  return (
    <nav className="w-64 pr-8 pt-8">
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                setActiveSection(section.id)
                const element = document.getElementById(section.id)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={`w-full text-left px-4 py-2 rounded-md text-sm ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
} 