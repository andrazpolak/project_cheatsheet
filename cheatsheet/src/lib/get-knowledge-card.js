import fs from "fs";
import path from "path";
import matter from "gray-matter";

const knowledgeCardDirectory = path.join(
  process.cwd(),
  "content",
  "knowledge-cards"
);

export function getKnowledgeCardFiles() {
  return fs.readdirSync(knowledgeCardDirectory);
}

export function getKnowledgeCard(fileName) {
  //   const fileName = filePath;
  const filePath = path.join(knowledgeCardDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { metadata, content } = matter(fileContent);

  const knowledgeCard = {
    fileName,
    metadata,
    content,
  };

  return knowledgeCard;
}

export function getAllKnowledgeCard() {
  const files = getKnowledgeCardFiles();

  const cards = files.map((file) => {
    console.log("File:", file);
    return getKnowledgeCard(file);
  });

  //   const sortedCards = cards.sort((postA, postB) =>
  //     postA.date > postB.date ? -1 : 1
  //   );
  //   const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return cards;
}
