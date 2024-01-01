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
  Tooltip,
  Link,
  Button,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faMagnifyingGlass, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  handleModalDelete,
}) {
  const [data, setData] = useState({});
  const size = "sm";
  const router = useRouter();

  useEffect(() => {
    setData(products);
  }, [products]);

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <Input
          value={search}
          type="text"
          // label="Search"
          placeholder="Type to search..."
          className="w-96"
          size={size}
          startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          color="primary"
          onClick={() => router.push("/dashboard/products/create/")}
          startContent={<FontAwesomeIcon icon={faPlus} />}
        >
          Add Product
        </Button>
      </div>
      <Table
        aria-label={ariaLabel}
        bottomContent={
          <div className="flex w-full justify-center">
            {totalPage ? (
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={totalPage}
                onChange={onChange}
              />
            ) : (
              ""
            )}
          </div>
        }
      >
        <TableHeader>
          {tableHeaders.map((item, index) => (
            <TableColumn key={index}>{item}</TableColumn>
          ))}
          <TableColumn key="Action">ACTION</TableColumn>
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
                <TableCell>
                  <div className="relative flex items-center gap-3">
                    <Tooltip content="Details Product">
                      <Link
                        href={`/dashboard/products/detail/${item.id}`}
                        className="text-lg text-default-400 cursor-pointer active:opacity-50"
                      >
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                    </Tooltip>
                    {/* <Tooltip content="Edit Product">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <FontAwesomeIcon icon={faEdit} />
                      </span>
                    </Tooltip>*/}
                    <Tooltip color="danger" content="Delete Product">
                      <span
                        className="text-lg text-danger cursor-pointer active:opacity-50"
                        onClick={() => handleModalDelete(item)}
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
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
