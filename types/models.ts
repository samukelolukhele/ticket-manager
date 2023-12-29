export interface CategoryModel {
  id: number;
  title: string;
  description: string;
  userId: number;
  tickets?: TicketModel[];
}

export interface StatusModel {
  id: number;
  title: string;
  tickets?: TicketModel[];
}

export interface TicketModel {
  id: number;
  title: string;
  description: string;
  priority: number;
  progress: number;
  status?: StatusModel;
  statusId: number;
  category?: CategoryModel;
  categoryId: number;
}
