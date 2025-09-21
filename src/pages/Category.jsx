import SectionTitle from '../components/SectionTitle';

export default function Category() {
  return (
    <main className="container mx-auto p-4">
      <SectionTitle
        title="Category Page"
        subtitle="Browse products by category"
        alignment="center"
        showLine={true}
      />
    </main>
  );
}
