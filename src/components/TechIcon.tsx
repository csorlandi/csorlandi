import { ElementType } from "react";

type TechIconProps = {
  component: ElementType;
}

export function TechIcon({ component }: TechIconProps) {
  const Component = component;

  return (
    <Component className="size-10" />
  );
}