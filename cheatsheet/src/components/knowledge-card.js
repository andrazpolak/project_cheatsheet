import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";
import styles from "../styles/Markdown.module.scss";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

export default function KnowledgeCard(props) {
  const { title, content } = props;

  const customRenderers = {
    // p(paragraph) {
    //   const { node } = paragraph;

    //   if (node.children[0].tagName === "img") {
    //     const image = node.children[0];

    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/posts/${post.slug}/${image.properties.src}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }

    //   return <p>{paragraph.children}</p>;
    // },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <ReactMarkdown
              className={styles.markdown}
              components={customRenderers}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
