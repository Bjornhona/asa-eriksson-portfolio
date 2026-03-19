import { Button } from "@/ui";
import Image from "next/image";

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  alt: string;
  caseStudyUrl: string;
  visitSiteUrl: string;
  tags: string[];
}

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <div key={item.title}>
      <Image src={item.image} alt={item.alt} width={100} height={100} />
      <h6>{item.description}</h6>
      <div>
        {item.tags.map((tag) => (
          <Button variant="tag" size="sm" key={tag}>
            {tag}
          </Button>
        ))}
      </div>
      <Button variant="glass" href={item.caseStudyUrl}>
        View case study
      </Button>
      <Button variant="glass" href={item.visitSiteUrl}>
        Visit site
      </Button>
    </div>
  );
};

export default PortfolioCard;
