import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  initial?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  animate?: {
    opacity?: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  transition?: {
    duration?: number;
    delay?: number;
    type?: string;
  };
}

// Create a generic motion component that can be used for any HTML element
const createMotionComponent = (Element: keyof React.JSX.IntrinsicElements) => {
  return ({ 
    children, 
    className, 
    initial, 
    animate, 
    transition, 
    ...props 
  }: MotionProps) => {
    const [mounted, setMounted] = React.useState(false);
    
    React.useEffect(() => {
      setMounted(true);
    }, []);

    // Define the styles for animation
    const style: React.CSSProperties = {
      opacity: mounted ? animate?.opacity : initial?.opacity,
      transform: `
        translateY(${mounted ? animate?.y || 0 : initial?.y || 0}px)
        translateX(${mounted ? animate?.x || 0 : initial?.x || 0}px)
        scale(${mounted ? animate?.scale || 1 : initial?.scale || 1})
      `,
      transition: `all ${transition?.duration || 0.3}s ${transition?.type || 'ease'} ${transition?.delay || 0}s`,
    };

    const ElementComponent = Element as any;

    return (
      <ElementComponent 
        className={cn(className, "transition-all")} 
        style={style}
        {...props}
      >
        {children}
      </ElementComponent>
    );
  };
};

// Generate motion components for all HTML elements we need
export const motion = {
  div: createMotionComponent('div'),
  p: createMotionComponent('p'),
  span: createMotionComponent('span'),
  h1: createMotionComponent('h1'),
  h2: createMotionComponent('h2'),
  h3: createMotionComponent('h3'),
  h4: createMotionComponent('h4'),
  h5: createMotionComponent('h5'),
  h6: createMotionComponent('h6'),
  ul: createMotionComponent('ul'),
  ol: createMotionComponent('ol'),
  li: createMotionComponent('li'),
  table: createMotionComponent('table'),
  tr: createMotionComponent('tr'),
  td: createMotionComponent('td'),
  th: createMotionComponent('th'),
  thead: createMotionComponent('thead'),
  tbody: createMotionComponent('tbody'),
  button: createMotionComponent('button'),
  a: createMotionComponent('a'),
  section: createMotionComponent('section'),
  article: createMotionComponent('article'),
  header: createMotionComponent('header'),
  footer: createMotionComponent('footer'),
  main: createMotionComponent('main'),
  nav: createMotionComponent('nav'),
  aside: createMotionComponent('aside'),
  form: createMotionComponent('form'),
  input: createMotionComponent('input'),
  label: createMotionComponent('label'),
  select: createMotionComponent('select'),
  option: createMotionComponent('option'),
  textarea: createMotionComponent('textarea')
};
