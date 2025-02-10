export interface Application {
  id: string;
  userId: string;
  amount: number;
  state: 'Open' | 'Cancelled' | 'Rejected' | 'Outstanding' | 'Repaid';
  expressDelivery: boolean;
  createdAt: string;
  updatedAt: string;
}