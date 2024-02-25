import { IconType } from "react-icons";

export type DetailsBoxType = {
  title: string;
  content: string;
  Icon: IconType;
  color?: string;
};

export type ButtonType = {
  text: string;
  onClick?: any;
  loading?: boolean;
  type?: string;
  disable?: boolean;
  outline?: boolean;
  icon?: boolean;
};

export interface ModalType {
  children: React.ReactNode;
  title?: string;
  open: boolean;
  onClose: any;
}
