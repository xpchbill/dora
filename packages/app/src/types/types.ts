export type Token = string;

export interface User {
  username: string;
  email: string;
}
export interface RouterProps {
  history: any;
  location: any;
  match: any;
}
