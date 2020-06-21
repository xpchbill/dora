import { Dict, objectKeys } from '@ALK-UI/utils';

export function sort(obj: Dict) {
  const next: Dict = {};
  objectKeys(obj)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    )
    .forEach(key => {
      next[key] = obj[key];
    });
  return next;
}
