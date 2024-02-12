
import React from 'react';
import { faker } from '@faker-js/faker';
import './BlogFake.css';

function BlogFake() {
  // Generate fake blog posts
  const blogPosts = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    date: faker.date.recent().toLocaleDateString(),
  }));

  return (
    <div className="blog-container">
      <h2 className="blog-title">Blog</h2>
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-md-6">
            <div className="blog-post">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-date">{post.date}</p>
              <p className="post-content">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogFake;

