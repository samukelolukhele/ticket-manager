import { useQuery } from "@tanstack/react-query";
import useFetch from "./useFetch";
import { CategoryModel, StatusModel, TicketModel } from "@/types/models";

const useData = () => {
  const query = useFetch();

  const fetchTickets = async () => query<TicketModel[]>("/api/ticket", "GET");
  const fetchStatuses = async () => query<StatusModel[]>("/api/status", "GET");
  const fetchCategories = async () =>
    query<CategoryModel[]>("/api/category", "GET");

  const tickets = useQuery({
    queryKey: ["get-all-user-tickets"],
    queryFn: async () => fetchTickets(),
  });

  const statuses = useQuery({
    queryKey: ["get-all-statuses"],
    queryFn: () => fetchStatuses(),
  });

  const categories = useQuery({
    queryKey: ["get-all-user-categories"],
    queryFn: async () => fetchCategories,
  });

  return {
    statuses,
    tickets,
    categories,
  };
};

export default useData;
