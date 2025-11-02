"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator = <ChevronRight className="h-4 w-4" />, ...props }, ref) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cn("flex items-center text-sm text-gray-500", className)}
        {...props}
      >
        <ol className="flex items-center space-x-1">
          <li>
            <Link to="/" className="hover:text-gray-700">Home</Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize and replace hyphens

            return (
              <React.Fragment key={name}>
                {separator && <li className="mx-1">{separator}</li>}
                <li>
                  {isLast ? (
                    <span className="text-gray-700 font-medium">{displayName}</span>
                  ) : (
                    <Link to={routeTo} className="hover:text-gray-700">
                      {displayName}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export default Breadcrumb;