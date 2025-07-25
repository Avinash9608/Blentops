import type { Product, Collaboration, JobListing, NavLink, Enquiry } from './types';

export const MOCK_STATS = [
  { title: 'Total Pages', value: '8', icon: 'FileText' },
  { title: 'Total Products', value: '12', icon: 'Package' },
  { title: 'Pending Collaborations', value: '3', icon: 'Users' },
  { title: 'Total Blogs', value: '5', icon: 'BookOpen' },
];

export const MOCK_RECENT_ACTIVITIES = [
  { page: 'Home', user: 'Admin', time: '2 hours ago', activity: 'Updated hero section' },
  { page: 'Products', user: 'Admin', time: '5 hours ago', activity: 'Added new product "Eco-Mug"' },
  { page: 'Blog', user: 'Admin', time: '1 day ago', activity: 'Published new post "Our Sustainability Journey"' },
  { page: 'Careers', user: 'Admin', time: '2 days ago', activity: 'Added new role "Marketing Manager"' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'prod1', name: 'Eco-Friendly Water Bottle', category: 'Drinkware', description: 'A stylish and sustainable water bottle.', imageUrl: 'https://placehold.co/300x200.png' },
  { id: 'prod2', name: 'Recycled Paper Notebook', category: 'Stationery', description: 'Jot down your thoughts in this eco-conscious notebook.', imageUrl: 'https://placehold.co/300x200.png' },
  { id: 'prod3', name: 'Bamboo Cutlery Set', category: 'Kitchenware', description: 'Dine sustainably with our bamboo cutlery set.', imageUrl: 'https://placehold.co/300x200.png' },
];

export const MOCK_COLLABORATIONS: Collaboration[] = [
  { id: 'collab1', name: 'Jane Doe', email: 'jane.doe@example.com', message: 'Interested in collaborating on a new marketing campaign.', status: 'Pending' },
  { id: 'collab2', name: 'John Smith', email: 'john.smith@example.com', message: 'I have a great idea for a product partnership.', status: 'Pending' },
  { id: 'collab3', name: 'Eco Influencers', email: 'contact@ecoinfluencers.com', message: 'We would love to feature your products on our channel.', status: 'Reviewed' },
];

export const MOCK_JOBS: JobListing[] = [
  { id: 'job1', title: 'Senior Frontend Developer', location: 'Remote', description: 'Join our team to build amazing user experiences.', applyLink: '#' },
  { id: 'job2', title: 'Product Designer', location: 'New York, NY', description: 'Design the future of our sustainable products.', applyLink: '#' },
];

export const MOCK_HEADER_LINKS: NavLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Products', path: '/products' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];

export const MOCK_FOOTER_LINKS: NavLink[] = [
    { label: 'Careers', path: '/careers' },
    { label: 'Investors', path: '/investors' },
    { label: 'Privacy Policy', path: '/privacy' },
];

export const MOCK_ENQUIRIES: Enquiry[] = [
  { id: 'enq1', name: 'Alice Johnson', email: 'alice.j@example.com', message: 'I have a question about the warranty on the Eco-Friendly Water Bottle. Can you provide more details?', status: 'New', receivedAt: '2024-07-29T10:30:00Z' },
  { id: 'enq2', name: 'Bob Williams', email: 'bob.w@example.com', message: 'I would like to inquire about bulk order discounts for the Recycled Paper Notebooks for my company.', status: 'New', receivedAt: '2024-07-29T09:15:00Z' },
  { id: 'enq3', name: 'Charlie Brown', email: 'charlie.b@example.com', message: 'My Bamboo Cutlery Set arrived damaged. How can I get a replacement?', status: 'Replied', receivedAt: '2024-07-28T15:00:00Z' },
  { id: 'enq4', name: 'Diana Miller', email: 'diana.m@example.com', message: 'What is the shipping time to Canada? I am interested in ordering a few items.', status: 'New', receivedAt: '2024-07-28T11:45:00Z' },
];
