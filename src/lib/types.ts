export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
};

export type Collaboration = {
  id: string;
  name:string;
  email: string;
  message: string;
  status: 'Pending' | 'Reviewed' | 'Archived';
};

export type JobListing = {
  id: string;
  title: string;
  location: string;
  description: string;
  applyLink: string;
};

export type NavLink = {
  label: string;
  path: string;
};
