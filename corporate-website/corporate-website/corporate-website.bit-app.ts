import { ViteReact } from '@bitdev/react.app-types.vite-react';

export default ViteReact.from({
  /**
   * name of your app.
   */
  name: 'corporate-website',

  /**
   * determine whether to use ssr mode or not.
   */
  ssr: false,

  /**
   * peer dependencies to alias from the app component dependencies.
   * ensures a single instance for the dependency across the app graph.
   */
  peers: [
    'react',
    'react-dom',
    'react-router-dom',
  ],
});