import {ReactNode} from "react";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface Route {
  path: string;
  element: ReactNode;
  children?: Route[],
  title: string,
}
