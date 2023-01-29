import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Seo from "../../components/Seo";

export default function Detail({
  params,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params }: GetServerSidePropsContext) {
  return {
    props: {
      ...params,
    },
  };
}
