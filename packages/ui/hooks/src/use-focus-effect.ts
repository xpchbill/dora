import { RefObject } from 'react';
import { hasFocusWithin, ensureFocus } from '@ALK-UI/utils';
import { useUpdateEffect } from './use-update-effect';

export type UseFocusEffectOptions = {
  shouldFocus: boolean;
  preventScroll?: boolean;
};
/**
 * React hook to focus an element conditionally
 *
 * @param ref the ref of the element to focus
 * @param options focus management options
 */
export function useFocusEffect<T extends HTMLElement>(
  ref: RefObject<T>,
  options: UseFocusEffectOptions,
) {
  const { shouldFocus, preventScroll } = options;

  useUpdateEffect(() => {
    const node = ref.current;

    if (!node || !shouldFocus) return;

    if (!hasFocusWithin(node)) {
      ensureFocus(node, { preventScroll });
    }
  }, [shouldFocus, ref, preventScroll]);
}
