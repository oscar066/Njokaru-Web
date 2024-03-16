
import React from 'react'
import Footer1 from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import BlogFake from '../Blogs/BlogFake'

function BlogPage() {
  return (
    <div className='BlogPage'>
        <Navbar />
        <BlogFake />
        <Footer1 />
    </div>
  )
}

export default BlogPage