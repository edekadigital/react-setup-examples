import './App.scss';

interface AppProps {
  name: string;
}

export const App = (props: AppProps) => (
  <h1 className="app">Hello {props.name}!</h1>
);
