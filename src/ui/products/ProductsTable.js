import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  Input,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function ProductTable({
  ariaLabel = "Default Table",
  tableHeaders,
  products,
  page,
  totalPage,
  onChange,
  search,
  setSearchValue,
  handleKeyDown,
}) {
  const [data, setData] = useState({});
  const size = "sm";

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <>
      <div className="mb-3" style={{ maxWidth: "300px" }}>
        <Input
          value={search}
          type="text"
          // label="Search"
          placeholder="Type to search..."
          size={size}
          startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Table
        aria-label={ariaLabel}
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={totalPage}
              onChange={onChange}
            />
          </div>
        }
      >
        <TableHeader>
          {tableHeaders.map((item, index) => (
            <TableColumn key={index}>{item}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={<Spinner label="Loading..." />}>
          {data.products?.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.brand}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.stock}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="mt-3">
        <span className="text-default-400 text-small">Total {data.total ? data.total : 0} products</span>
      </div>
    </>
  );
}

export default ProductTable;
