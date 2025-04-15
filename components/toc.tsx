"use client";

import { useEffect, useMemo, useState } from "react";
import cn from "@/utils/cn";

function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}

interface TocItem {
  title: string;
  url: string;
  items?: TocItem[];
}

interface TableOfContentsProps {
  toc: TocItem[];
}

export default function TableOfContents({ toc }: TableOfContentsProps) {
  const mounted = useMounted();
  const [activeHeading, setActiveHeading] = useState("");

  useEffect(() => {
    if (!mounted) return;

    const headings = Array.from(
      document.querySelectorAll("h2[id], h3[id], h4[id]")
    );

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting && id) {
          setActiveHeading(id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "0px 0px -80% 0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  const renderItems = useMemo(() => {
    const renderTocItems = (items: TocItem[], level = 0) => {
      return (
        <ul
          className={cn(
            level > 0 &&
              "ml-1 border-l border-gray-200 dark:border-gray-700 pl-4"
          )}
        >
          {items.map((item) => (
            <li key={item.url} className="mt-2">
              <a
                href={item.url}
                className={cn(
                  "inline-block text-sm no-underline transition-colors hover:text-gray-900 dark:hover:text-gray-100",
                  activeHeading === item.url.slice(1)
                    ? "font-medium text-gray-600 dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-400"
                )}
              >
                {item.title}
              </a>
              {item.items &&
                item.items.length > 0 &&
                renderTocItems(item.items, level + 1)}
            </li>
          ))}
        </ul>
      );
    };

    return renderTocItems(toc);
  }, [toc, activeHeading]);

  return <div className="space-y-3">{renderItems}</div>;
}
