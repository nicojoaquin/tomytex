//
// Rich Text (HOC component to style rich text from the CMS)
//

import defaults from "lodash/defaults";
import HtmlMapper from "react-html-map";
import Br from "./br";
import defaultClassNames from "./defaults";
import Li from "./li";
import Ol from "./ol";
import Ul from "./ul";

const RichText = ({ html, classNames = {} }) => {
  defaults(classNames, defaultClassNames);

  return html ? (
    <HtmlMapper html={html} decodeEntities>
      {{
        b: ({ children }) => (
          <Body className={classNames.b} strong>
            {children}
          </Body>
        ),
        br: Br,
        em: ({ children }) => (
          <Body className={classNames.em} italic>
            {children}
          </Body>
        ),
        li: ({ children }) => <Li className={classNames.li}>{children}</Li>,

        ol: ({ children }) => <Ol className={classNames.ol}>{children}</Ol>,
        p: ({ children }) => <Body className={classNames.p}>{children}</Body>,
        strong: ({ children }) => (
          <Body className={classNames.strong} strong>
            {children}
          </Body>
        ),
        ul: ({ children }) => <Ul className={classNames.ul}>{children}</Ul>,
      }}
    </HtmlMapper>
  ) : null;
};

export default RichText;
