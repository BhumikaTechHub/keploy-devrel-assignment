"use client";

import type { MouseEvent } from "react";

const sections = [
  "What Keploy is doing",
  "Local setup",
  "Prepare the sample",
  "Record API traffic",
  "What Keploy captured",
  "Replay the tests",
  "Troubleshooting",
  "What I learned",
  "Complete workflow",
];

function scrollToSection(
  event: MouseEvent<HTMLAnchorElement>,
  title: string
) {
  event.preventDefault();

  const headings = Array.from(document.querySelectorAll("h2"));

  const target = headings.find(
    (heading) => heading.textContent?.trim() === title
  );

  if (target) {
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">ON THIS PAGE</div>

      <nav>
        {sections.map((section) => (
          <a
            key={section}
            href="#"
            onClick={(event) => scrollToSection(event, section)}
          >
            {section}
          </a>
        ))}
      </nav>
    </aside>
  );
}
