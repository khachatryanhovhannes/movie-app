import { IMovie } from "@/models";

interface IHomeSectionsProps {
  title: string;
  movies: IMovie[];
  url: string;
}

export default function HomeSections({ ...props }: IHomeSectionsProps) {
  return <section></section>;
}
