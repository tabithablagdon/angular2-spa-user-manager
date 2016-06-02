export interface UserInterface{
  name: string;
  email: string;
  phone?: number;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    state?: string;
    zipcode?: number;
  };
}
