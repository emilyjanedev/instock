import "./InventoryTableRow.scss";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function InventoryTableRow({ inventoryInfo, handleClick }) {
  const { warehouse_name, item_name, category, status, quantity, id } =
    inventoryInfo;

  return (
    <article className={`inventory-table-row`}>
      <div className="inventory-table-row__detail-container">
        <h3 className={`inventory-table-row__label`}>INVENTORY ITEM</h3>
        <div className="inventory-table-row__warehouse-container">
          <Link
            to={`/inventory/${id}`}
            className="inventory-table-row__detail inventory-table-row__detail--link"
          >
            {item_name}
          </Link>
          <img
            src={chevron}
            alt="chevron"
            className="inventory-table-row__icon--small"
          />
        </div>
      </div>
      <div className="inventory-table-row__detail-container">
        <h3 className={`inventory-table-row__label`}>STATUS</h3>
        <p
          className={`inventory-table-row__detail ${
            status === "In Stock"
              ? "inventory-table-row__detail--in-stock"
              : "inventory-table-row__detail--out-of-stock"
          }`}
        >
          {status && status.toUpperCase()}
        </p>
      </div>

      <div className="inventory-table-row__detail-container">
        <h3 className={`inventory-table-row__label`}>CATEGORY</h3>
        <p className={`inventory-table-row__detail`}>{category}</p>
      </div>

      <div className="inventory-table-row__detail-container">
        <h3 className={`inventory-table-row__label`}>QTY</h3>
        <p className={`inventory-table-row__detail`}>{quantity}</p>
      </div>

      <div className="inventory-table-row__detail-container">
        <h3 className={`inventory-table-row__label`}>WAREHOUSE</h3>
        <p className={`inventory-table-row__detail`}>{warehouse_name}</p>
      </div>

      <div className="inventory-table-row__icon-container">
        <img
          src={deleteIcon}
          alt="delete button"
          className="inventory-table-row__icon"
          onClick={() => handleClick(id)}
        />
        <Link
          to={`/inventory/${id}/edit`}
          className="inventory-table-row__icon-link"
        >
          <img
            src={editIcon}
            alt="edit button"
            className="inventory-table-row__icon"
          />
        </Link>
      </div>
    </article>
  );
}

export default InventoryTableRow;

InventoryTableRow.propTypes = {
  inventoryInfo: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};
