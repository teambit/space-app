import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import { CorporateTheme } from '@corporate/design.corporate-theme';
import { CorporateWebsite } from "./corporate-website.js";

interface IRenderProps {
  path: string;
}
    
export const render = async ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <CorporateTheme>
        <CorporateWebsite />
      </CorporateTheme>
    </StaticRouter>
  );
};