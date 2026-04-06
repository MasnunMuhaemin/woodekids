import React from "react";
import { Link } from "@inertiajs/react";

export default function Breadcrumbs({ items, className = "" }) {
  return (
    <nav className={`flex items-center gap-2 text-[10px] md:text-xs font-sans font-black text-gray-400 uppercase tracking-[0.2em] ${className}`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link 
              href={item.href} 
              className="hover:text-primary transition-colors shrink-0"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 truncate">{item.label}</span>
          )}
          
          {index < items.length - 1 && (
            <span className="text-gray-300 font-normal">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
