'use client'

import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronDown } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
  avatar: string
  username: string
}

const generateBlogPosts = (count: number): BlogPost[] => 
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(3),
    date: faker.date.recent().toLocaleDateString(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
  }))

export default function BlogFake() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(generateBlogPosts(6))
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set())

  const toggleExpand = (id: number) => {
    setExpandedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const loadMorePosts = () => {
    setBlogPosts(prev => [...prev, ...generateBlogPosts(3)])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={post.avatar} alt={`${post.username}'s avatar`} />
                  <AvatarFallback>{post.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-800">{post.username}</p>
                  <p className="text-sm text-gray-600">{post.date}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-bold mb-2 text-green-700">{post.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {expandedPosts.has(post.id) ? post.content : `${post.content.slice(0, 150)}...`}
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                variant="ghost" 
                onClick={() => toggleExpand(post.id)}
                aria-expanded={expandedPosts.has(post.id)}
                aria-controls={`post-content-${post.id}`}
              >
                {expandedPosts.has(post.id) ? 'Read less' : 'Read more'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button onClick={loadMorePosts} className="bg-green-700 text-white hover:bg-green-800">
          Load More Posts <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}