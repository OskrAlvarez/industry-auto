import { createClient } from "../client";

const supabase = createClient();

export interface Product {
  id?: number;
  make: string;
  model: string;
  price: number;
  year: number;
  image_urls: string[];
  description: string;
  user_id?: string;
  drivetrain?: string | null;
  engine?: string | null;
  fuel?: string | null;
  odometer?: number | null;
  transmission?: string | null;
  VNI?: string | null;
  version?: string | null;
}

function handleError(error: any) {
  console.error("Error: " + error.message);
  return null;
}

export async function getProducts() {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return handleError(error);
    }

    return products;
  } catch (error) {
    return handleError(error);
  }
}

export async function getProduct(id: number) {
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id);

    if (error) {
      return handleError(error);
    }

    return product;
  } catch (error) {
    return handleError(error);
  }
}

export async function insertProduct(product: Product) {
  try {
    const { data, error } = await supabase
      .from("products")
      .insert(product)
      .select();

    if (error) {
      return handleError(error);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function deleteProduct(id: number | string) {
  try {
    const { data, error } = await supabase
      .from("products")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      return handleError(error);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function updateProduct(
  id: number | string,
  product: Partial<Product>
) {
  try {
    const { data, error } = await supabase
      .from("products")
      .update(product)
      .eq("id", id)
      .select();

    if (error) {
      return handleError(error);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

export async function getProductsByLimit(limit: number) {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .limit(limit);
    if (error) {
      return handleError(error);
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}

interface Filters {
  make: string;
  model: string;
  minPrice?: number;
  maxPrice?: number;
}

export async function getProductsByFilters({
  make,
  model,
  minPrice,
  maxPrice,
}: Filters) {
  try {
    const query = supabase.from("products").select("*").eq("make", make);

    if (model !== "") {
      query.eq("model", model);
    }

    if (minPrice !== undefined) {
      query.gte("price", minPrice);
    }

    if (maxPrice !== undefined) {
      query.lte("price", maxPrice);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return handleError(error);
    }
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return handleError(error);
  }
}
