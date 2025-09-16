import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps } from 'tailwind-variants';
import { cn } from '@/app/lib/utils';
import { Plus } from '../icons/Plus';
import { accentButtonVariant, buttonVariants, tabButtonVariant } from './buttonVariants';
import { ArrowRight } from '../icons/ArrowRight';
import { Close } from '../icons';
import { IconProps } from '../icons/Icon';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonPlus = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className }).base())}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <span className="z-20">{children}</span>
        <span className={cn(buttonVariants({ variant, disabled }).icon())}>
          <Plus />
        </span>
      </Comp>
    );
  }
);
ButtonPlus.displayName = 'ButtonPlus';

const ButtonArrow = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className }).base())}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <span className="z-20">{children}</span>
        <span className={cn(buttonVariants({ variant, disabled }).icon())}>
          <ArrowRight />
        </span>
      </Comp>
    );
  }
);
ButtonArrow.displayName = 'ButtonArrow';

const ButtonClose = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className }).base())}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <span className="z-20">{children}</span>
        <span className={cn(buttonVariants({ variant, disabled }).icon())}>
          <Close />
        </span>
      </Comp>
    );
  }
);
ButtonClose.displayName = 'ButtonClose';

const IconButtonArrow = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className, buttonType: 'iconOnly' }).base())}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <ArrowRight className="z-20" />
      </Comp>
    );
  }
);
IconButtonArrow.displayName = 'IconButtonArrow';

const IconButtonClose = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, disabled, className, buttonType: 'iconOnly' }).base())}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <Close className="z-20" />
      </Comp>
    );
  }
);
IconButtonClose.displayName = 'IconButtonClose';

const IconButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { icon: (props: IconProps) => React.JSX.Element }
>(({ icon, className, variant, size, disabled, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button';
  const Icon = icon;
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, disabled, className, buttonType: 'iconOnly' }).base())}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      <Icon className="z-20" />
    </Comp>
  );
});
IconButton.displayName = 'IconButton';

const AccentButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(accentButtonVariant({ className }))} ref={ref} disabled={disabled} {...props} />
    );
  }
);
AccentButton.displayName = 'AccentButton';

const TabButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(tabButtonVariant({ className }))} ref={ref} disabled={disabled} {...props} />;
  }
);
TabButton.displayName = 'TabButton';

export { ButtonPlus, ButtonArrow, IconButton, AccentButton, buttonVariants, TabButton, ButtonClose };
