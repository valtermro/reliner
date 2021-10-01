import MasterPanel from './master/Panel';
import { useSelector } from './store';

export default function App() {
  const { loading, apps } = useSelector(state => state.app);

  if (loading) {
    // TODO
    return <div>Loading...</div>;
  }

  return (
    <MasterPanel apps={apps} />
  );
}
