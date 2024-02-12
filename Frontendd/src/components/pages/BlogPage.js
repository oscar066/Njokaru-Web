
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import BlogFake from '../Blogs/BlogFake'

function BlogPage() {
  return (
    <div className='BlogPage'>
        <Navbar />
        <BlogFake />
        <Footer />
    </div>
  )
}

export default BlogPage