import { StaticImageData } from 'next/image'

import tommyImage from '../../../../public/Assets/tommy.jpg';
import danImage from '../../../../public/Assets/dan.jpg';
import janeImage from '../../../../public/Assets/daniel.jpg';

export type Testimonial = {
  name: string
  position: string
  testimonial: string
  image: StaticImageData
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    position: 'Homeowner',
    testimonial:
      'Njokaru transformed our garden into a beautiful oasis. Their attention to detail and professionalism are unmatched!',
    image: tommyImage,
    rating: 4
  },
  {
    name: 'Jane Smith',
    position: 'Property Manager',
    testimonial:
      "We rely on Njokaru for all our landscaping needs. They always deliver top-notch service with a smile.",
    image: janeImage,
    rating: 4
  },
  {
    name: 'Michael Johnson',
    position: 'Business Owner',
    testimonial:
      "Thanks to Njokaru, our office grounds have never looked better. Highly recommended for any landscaping project!",
    image: danImage,
    rating: 3.5
  },
  {
    name: 'Emily Brown',
    position: 'Landscape Architect',
    testimonial:
      "Working with Njokaru has been a pleasure. Their team's expertise and dedication shine through in every project.",
    image: tommyImage,
    rating: 5
  },
  {
    name: 'David Wilson',
    position: 'Community Manager',
    testimonial:
      "Njokaru's services have greatly improved our community's common areas. Residents are thrilled with the results!",
    image: janeImage,
    rating: 5
  },
]

