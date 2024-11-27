import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headerVariants = cva("bg-white/10 p-4", {
  variants: {
    variant: {
      default: "bg-white/10",
      darken: "bg-indigo-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof headerVariants> & { title?: string }
>(({ className, variant, title = "React Next.js Tester", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(headerVariants({ variant }), className)}
    {...props}
  >
    <div className="container">
      <h2 className="text-2xl font-semibold tracking-tighter">{title}</h2>
    </div>
  </div>
));
Header.displayName = "Header";

export { Header };
