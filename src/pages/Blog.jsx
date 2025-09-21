import SectionTitle from '../components/SectionTitle';

export default function Blog() {
  return (
    <main className="container mx-auto p-4">
      <SectionTitle
        title="Blog Page"
        subtitle="Read our latest blog posts"
        alignment="center"
        showLine={true}
      />
    </main>
  );
}
