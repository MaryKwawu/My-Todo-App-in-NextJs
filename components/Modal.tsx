interface Modalprops{
    modalOpen: boolean
    setModalOpen: (open : boolean) => boolean | void;
    children: React.ReactNode
}

const Modal: React.FC<Modalprops> = ({modalOpen, setModalOpen, children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`} role="dialog">
    <div className="modal-box relative">
        <label  
        onClick={() => setModalOpen(false) }
        className="btn btn-sm btn-circle absolute right-2 top-2">Close!
        </label>
        {children}
    </div>
  </div>
  )
}

export default Modal