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
          <strong className={classNames.b}>{children}</strong>
        ),
        br: Br,
        em: ({ children }) => <em className={classNames.em}>{children}</em>,
        i: ({ children }) => <i className={classNames.i}>{children}</i>,
        li: ({ children }) => <Li className={classNames.li}>{children}</Li>,

        ol: ({ children }) => <Ol className={classNames.ol}>{children}</Ol>,
        p: ({ children }) => <p className={classNames.p}>{children}</p>,
        strong: ({ children }) => (
          <strong className={classNames.strong}>{children}</strong>
        ),
        ul: ({ children }) => <Ul className={classNames.ul}>{children}</Ul>,
      }}
    </HtmlMapper>
  ) : null;
};

export default RichText;
