import { useToast } from '@ALK-UI/core';

export let toastEffect: any = () => {};

export const NoticeWidgets = () => {
  toastEffect = useToast();
  return null;
};

export default NoticeWidgets;
