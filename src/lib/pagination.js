import { ROW_PER_PAGE } from "@/constant/pagination";

const startPage = (page) => {
  return (page - 1) * ROW_PER_PAGE;
};

const totalPages = (totalData) => {
  return Math.ceil(Number(totalData) / ROW_PER_PAGE)
}

export { startPage, totalPages };
