import React from 'react';
import { faker } from '@faker-js/faker';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  avatar: string;
  username: string;
}

const BlogFake: React.FC = () => {
  // Generate fake blog posts with avatars and usernames
  const blogPosts: BlogPost[] = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    date: faker.date.recent().toLocaleDateString(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <img src={post.avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="font-semibold text-gray-800">{post.username}</p>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-green-700">{post.title}</h3>
              <p className="text-gray-700 leading-relaxed">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogFake;
