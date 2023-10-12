import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

interface MainNavProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const MainNav: FC<MainNavProps> = ({ className, ...props }) => {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/customers"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/settings"
        className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
};

export default MainNav;
