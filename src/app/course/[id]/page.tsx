interface PageParams {
  id: string;
}

interface PageProps {
  params: PageParams;
}

export default function page(props: PageProps) {
  const id = props.params.id;

  return <div>{id}</div>;
}
