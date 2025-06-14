import React from 'react';

const blogs = [
  {
    id: 1,
    title: "5 Signs You Should Visit a Cardiologist",
    description: "Learn how to detect early symptoms of heart-related issues before they become serious.",
    image: "/blogs/heart-care.jpg",
    slug: "visit-a-cardiologist",
  },
  {
    id: 2,
    title: "Daily Habits for Better Skin Health",
    description: "From hydration to diet, explore expert tips to maintain glowing skin every day.",
    image: "/blogs/skin-health.jpg",
    slug: "daily-skin-health-habits",
  },
  {
    id: 3,
    title: "Understanding Child Immunization",
    description: "A helpful guide for parents to keep up with timely child vaccinations and their benefits.",
    image: "/blogs/child-immunization.jpg",
    slug: "child-immunization-guide",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-16 bg-white dark:bg-gray-900 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
        Latest Health Articles
      </h2>

      <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semi-bold text-gray-800 dark:text-white">{blog.title}</h3>
              <p className="text-sm font-regular text-gray-600 dark:text-gray-300 mt-2">{blog.description}</p>
              <a
                href={`/blog/${blog.slug}`}
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-regular"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

