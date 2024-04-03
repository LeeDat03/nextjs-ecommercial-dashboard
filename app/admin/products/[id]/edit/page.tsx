import { PageHeader } from "@/app/admin/_components/page-header";
import { ProductForm } from "../../_components/product-form";
import db from "@/db";

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await db.product.findUnique({ where: { id } });

  return (
    <>
      <PageHeader>Edit Product</PageHeader>

      <ProductForm product={product} />
    </>
  );
}
