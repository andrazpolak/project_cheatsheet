import Card from "react-bootstrap/Card";
import { FlexboxGrid } from "rsuite";
import { getAllKnowledgeCard } from "../lib/get-knowledge-card";

function KnowledgeCard(props) {
  const { title, content } = props;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default function Python(props) {
  const { items } = props;
  console.log(items);
  return (
    <>
      <FlexboxGrid>
        {items.map((item) => (
          <FlexboxGrid.Item>
            <KnowledgeCard {...item} />
          </FlexboxGrid.Item>
        ))}
      </FlexboxGrid>
    </>
  );
}

export async function getStaticProps() {
  const knowledgeCards = getAllKnowledgeCard();
  return {
    props: {
      items: knowledgeCards,
    },
  };
}
