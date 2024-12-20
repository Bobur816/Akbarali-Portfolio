import "./ConfirmDelete.scss";

type ConfirmDeleteProps = {
  resourceName: string;
  onConfirm: () => void;
  disabled: boolean;
  onCloseModal?: () => void;
};

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }: ConfirmDeleteProps) {
  return (
    <div className="confirm-delete">
      <h3>Delete {resourceName}</h3>
      <p>Are you sure you want to delete this {resourceName} permanently? This action cannot be undone.</p>

      <div className="confirm-btns">
        <button className="gray-btn" disabled={disabled} onClick={onCloseModal}>
          Cancel
        </button>
        <button className="remove-btn" disabled={disabled} onClick={onConfirm}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
