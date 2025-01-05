interface IAboutSectionsProps {
  title: string;
  paragraphs: string[];
}

export default function AboutSections({
  title,
  paragraphs,
}: IAboutSectionsProps) {
  return (
    <section className="my-8 px-4">
      <h3 className="text-xl font-bold text-center mb-4">{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </section>
  );
}
