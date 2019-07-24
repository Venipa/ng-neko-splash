export interface INekoImage {
  url: string;
}

export interface NekoImageMd {
  displayName: string;
  name: string;
  description?: string;
  isNsfw: boolean;
  apiBase?: string;
  path?: string;
}
