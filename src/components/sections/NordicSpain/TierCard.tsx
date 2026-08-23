import { cn } from "@/lib/utils";
import { Card } from "@/ui";
import { bodyText, subHeading } from "./styles";

export interface TierCardProps {
  /** e.g. "Free", "€249", "From €2,500" */
  price: string;
  name: string;
  body: string;
  /** Optional italic qualifier under the body. */
  note?: string;
  /** Id for the heading, so the surrounding list item can be labelled. */
  headingId: string;
}

/**
 * One service tier.
 *
 * Price and name sit inside the same <h3> so assistive technology announces
 * them together ("€249, Compliance Report") rather than leaving a bare number
 * floating next to the heading. They are still two visual lines.
 */
const TierCard = ({ price, name, body, note, headingId }: TierCardProps) => (
  <Card>
    <h3 id={headingId} className="mb-3">
      <span className="block font-prompt text-2xl font-bold text-aqua-400">
        {price}
      </span>
      {/* Explicit separator: without it the accessible name runs the two
          together as "FreeCompliance Scan" in some screen readers. */}
      <span className="sr-only">&#8212; </span>
      <span className={cn(subHeading, "block")}>{name}</span>
    </h3>

    <p className={cn(bodyText, "text-base")}>{body}</p>

    {note ? (
      <p className={cn(bodyText, "mt-3 text-base italic text-foreground/90")}>
        {note}
      </p>
    ) : null}
  </Card>
);

export default TierCard;
