import CatalogNavigation from "@/app/_components/CatalogNavigation";
import Catalog from "@/app/_components/Catalog/Catalog";

export default function Home() {
  return (
    <section className="container max-w-[1096px] pt-12">
      <p className="text-orange">Квести в Одесі</p>
      <h2 className="text-h2 text-white mt-1">В яку гру зіграємо?</h2>
      <CatalogNavigation />
      <Catalog />
    </section>
  );
}
