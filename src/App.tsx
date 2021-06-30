interface AppProps {
  name: string;
}

export const App = (props: AppProps) => <h1>Hello {props.name}!</h1>;
