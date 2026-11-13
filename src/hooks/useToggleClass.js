import { useLayoutEffect } from "react";

/**
 * Toggle a CSS class on an element that also has the ".reveal" scroll class.
 * If we put the toggled class in the JSX className, React would rewrite the whole
 * class attribute on change and wipe the ".show" class added by the scroll
 * observer (making the element invisible). Toggling through the DOM avoids that.
 */
export default function useToggleClass(ref, className, on) {
  useLayoutEffect(() => {
    if (ref.current) ref.current.classList.toggle(className, Boolean(on));
  }, [ref, className, on]);
}
