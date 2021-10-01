import { Box } from '@material-ui/core';
import { App } from './App';
import MasterDrawer from './Drawer';

interface PanelProps {
  apps: App[];
}

export default function Panel(props: PanelProps) {
  const { apps } = props;

  return (
    <Box display="flex">
      <MasterDrawer apps={apps} />
    </Box>
  );
}
