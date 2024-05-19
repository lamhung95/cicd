type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json())
 
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
