interface IMoviePageProps {
  params: {
    id: string;
  };
}

export default async function Movie({ params }: IMoviePageProps) {
  const { id } = await params;

  return (
    <main className="py-5 px-5 md:px-8 lg:px-16 xl:px-24 2xl:px-32 text-white">
      {id}
    </main>
  );
}
