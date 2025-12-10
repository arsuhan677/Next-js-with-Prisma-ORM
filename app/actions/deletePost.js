"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost(id) {
  try {
    await prisma.post.delete({
      where: { id },
    });

    revalidatePath("/products");
    return { success: true };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false };
  }
}
