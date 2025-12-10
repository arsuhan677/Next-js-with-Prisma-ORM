import prisma from "@/lib/prisma";
import Producthome from "../producthome/page";
import DeleteButton from "@/app/components/AllDelete/DeleteButton";

export default async function ProductPage() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      <Producthome />
      <div className="container mx-auto">
      <h1 className="text-2xl font-semibold -mt-22">All Products</h1>

      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-6 sm:py-10">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="rounded-xl card bg-white border border-gray-400 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                className="w-full h-36 sm:h-56 md:h-50 object-cover"
                src={post.imageUrl}
                alt={post.title}
              />
              <div className="card-body p-4">
                <h2 className="card-title text-lg sm:text-xl line-clamp-1 md:text-2xl font-medium mb-2">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base mb-2">
                  {post.description}
                </p>
                <div className="card-actions flex items-center justify-between">
                  <button className="text-white bg-green-800 hover:bg-green-700 py-1.5 px-4 rounded-lg font-medium text-sm sm:text-base cursor-pointer">
                    Update
                  </button>
                  <DeleteButton id={post.id} />
                  {/* <button className=" bg-red-500 hover:bg-red-600 cursor-pointer text-white py-1.5 px-5 rounded-lg">
                    Delete
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
