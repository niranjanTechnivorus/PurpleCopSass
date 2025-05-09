import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Link, router } from "@inertiajs/react";
import Loader from "../../Components/Common/Loader";
import {
  EVIDENCE_STATUS_CLASS_MAP,
  EVIDENCE_STATUS_TEXT_MAP,
} from "../../Components/constants/statusConstant";
import { Button, Dropdown, Modal } from "react-bootstrap";

const SearchTable = ({ routeTo, tableData }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [evidenceToDelete, setEvidenceToDelete] = useState("");

  const handleDeleteClick = (evidence: any) => {
    setModalTitle("Are You Sure");
    setModalMessage(`Evidence "${evidence.name}" will be deleted !!`);
    setEvidenceToDelete(evidence);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteClient = () => {
    router.delete(route("evidence.destroy", evidenceToDelete));
    setShowModal(false);
  };
  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: (info: any) => (
          <span className="fw-semibold">{info.row.index + 1}</span>
        ),
        accessorKey: "id",
        enableColumnFilter: false,
      },

      {
        header: "Evidence Name",

        accessorKey: "name",
        enableColumnFilter: false,
      },
      // {
      //   header: "Controls",
      //   cell: (info: any) =>
      //     info.row.original.control_codes.map((code: any) => (
      //       <Link
      //         href={route("controlcode.show", code.id)}
      //         className="m-1 bg-primary-subtle text-primary  px-2 py-1 rounded"
      //         key={code.id}
      //       >
      //         {code.code}
      //       </Link>
      //     )),

      //   accessorKey: "control_codes",
      //   enableColumnFilter: false,
      // },
      {
        header: "Actions",
        id: "actions",
        cell: (info: any) => (
          <Dropdown>
            <Dropdown.Toggle
              href="#"
              className="btn btn-soft-primary btn-sm dropdown arrow-none"
              as="button"
            >
              <i className="ri-more-fill align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-end">
              <Dropdown.Item className="dropdown-item edit-item-btn">
                <Link href={route("evidence.edit", info.row.original.id)}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  EDIT
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                className="dropdown-item remove-item-btn text-danger"
                onClick={() => handleDeleteClick(info.row.original)}
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-danger"></i>{" "}
                DELETE
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={tableData.data || []}
        isGlobalFilter={true}
        customPageSize={10}
        divClass="table-responsive table-card mb-3"
        tableClass=" align-middle table-nowrap"
        theadClass="table-light"
        SearchPlaceholder="Search..."
      />
      {/* Vertically Centered */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header className="modal-title" />

        <Modal.Body className="text-center p-5">
          <i className=" ri-close-circle-fill display-5 text-danger"></i>
          <div className="mt-4">
            <h4 className="mb-3">{modalTitle}</h4>
            <p className="text-muted mb-4"> {modalMessage}</p>
            <div className="hstack gap-2 justify-content-center">
              <Button variant="light" onClick={handleCloseModal}>
                Close
              </Button>

              <Button variant="danger" onClick={(e) => deleteClient()}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export { SearchTable };
