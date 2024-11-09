import Image from "next/image";
import { Question, QuestionParagraph, QuestionTitle } from "./style";

interface QuestionComponentProps {
  src: string;
  title: string;
  paragraph: string;
}

export function QuestionComponent({
  src,
  title,
  paragraph,
}: QuestionComponentProps) {
  return (
    <Question>
      <Image src={src} width={50} height={50} alt="Icone de dolar" />
      <div>
        <QuestionTitle>{title}</QuestionTitle>
        <QuestionParagraph>{paragraph}</QuestionParagraph>
      </div>
    </Question>
  );
}
