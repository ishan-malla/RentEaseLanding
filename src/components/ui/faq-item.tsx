interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}
