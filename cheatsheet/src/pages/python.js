import { FlexboxGrid } from "rsuite";
import { getAllKnowledgeCard } from "../lib/get-knowledge-card";
import KnowledgeCard from "../components/knowledge-card";


export default function Python(props) {
  const { items } = props;
  console.log(items);
  return (
    <>
      <FlexboxGrid>
        {items.map((item) => (
          <FlexboxGrid.Item key={item.fileName}>
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
