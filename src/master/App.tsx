export interface AppProps {
  //
}

export interface App {
  id: string;
  name: string;
  description: string;
  component: (props: AppProps) => JSX.Element
}