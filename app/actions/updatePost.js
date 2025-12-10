// "use server";

// import prisma from "@/lib/prisma";
// import { revalidatePath } from "next/cache";

// export async function updatePost(id, formData) {
//   const title = formData.get("title") as string;
//   const description = formData.get("description") as string;
//   const imageUrl = formData.get("imageUrl") as string;

//   await prisma.post.update({
//     where: { id },
//     data: {
//       title,
//       description,
//       imageUrl,
//     },
//   });

//   revalidatePath("/posts");
//   return true;
// }
