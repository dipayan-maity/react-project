import SectionTitle from '../components/SectionTitle';

export default function About() {
  return (
    <main className="container mx-auto p-4">
      <SectionTitle
        title="About Page"
        subtitle="Learn more about us"
        alignment="center"
        showLine={true}
      />
    </main>
  );
}
